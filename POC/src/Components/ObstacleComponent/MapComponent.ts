import Handles from '@arcgis/core/core/Handles';
import Graphic from '@arcgis/core/Graphic';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

import Expand from '@arcgis/core/widgets/Expand';
import Legend from '@arcgis/core/widgets/Legend';

import SceneLayer from '@arcgis/core/layers/SceneLayer';
import SceneView from '@arcgis/core/views/SceneView';
import WebScene from '@arcgis/core/WebScene';
import { ObstacleComponent } from './ObstacleComponent';

interface MapComponentObject {
    container: HTMLDivElement | string;
}

export class MapComponent {
    view: SceneView = new SceneView();
    mapComponentObject: MapComponentObject;
    highlightSelect: Handles;

    selectedFeature: Graphic | undefined;

    constructor(mapComponentObject: MapComponentObject) {
        this.mapComponentObject = mapComponentObject;
        this.highlightSelect = new Handles();
    }

    launch() {
        this.createMap();
        //this.addLayers();
    }

    createMap() {
        const { container } = this.mapComponentObject;

        const webScene = new WebScene({
            portalItem: {
                // autocasts as new PortalItem()
                id: '244268c2a8c34748a68bdd342e78a977', // ID of the WebScene on arcgis.com
            },
        });

        this.view = new SceneView({
            map: webScene, // The WebScene instance created above
            container: container,

            highlightOptions: {
                fillOpacity: 0,
                color: 'yellow',
            },
            popup: {
                dockEnabled: true,
                dockOptions: {
                    position: 'top-right',
                    breakpoint: false,
                },
                //autoOpenEnabled: false,
            },
        });

        // Event handler that fires each time an action is clicked.
        /* this.view.popup.on("trigger-action", (event) => {
            let feature = this.view.popup.selectedFeature;
            switch (event.action.id) {
                case "edit-action":
                    console.log("edit-action", feature);

                    break;
                default:
                    break;
            }
        }); */

        this.view.when(() => {
            /* webScene.layers.forEach((layer) => {
                //console.log(layer.title, layer);
                // if (layer instanceof SceneLayer) {
                //    layer.outFields = ['*'];
                // }
            }); */

            // Wrong
            /* const mySceneLayer = webScene.layers.find((layer) => {
                return (
                    layer instanceof SceneLayer &&
                    `${layer.url}/layers/${layer.layerId}` ===
                        'https://services.arcgis.com/1WXsSdZFzziTTcic/arcgis/rest/services/LUX_OLS_RWY06_CATII_III_4E/SceneServer/layers/0'
                );
            }); */

            // Good
            const mySceneLayer = webScene.layers.find((layer) => {
                return (
                    layer.title ===
                    'LUX OLS RWY06 CATII III 4E - LUX OLS RWY06 CATII III 4E'
                );
            });

            mySceneLayer.visible = true;

            /* const mySceneLayer = webScene.layers.find((layer) => {
                return layer.title === 'DecollageSurface';
            }); */
            console.log('mySceneLayer', mySceneLayer);

            if (mySceneLayer && mySceneLayer instanceof SceneLayer) {
                this.view.whenLayerView(mySceneLayer).then((sceneLayerView) => {
                    const obstacleComponent = new ObstacleComponent({
                        view: this.view,
                        sceneLayer: mySceneLayer,
                        sceneLayerView: sceneLayerView,
                    });

                    this.view.ui.add(
                        [
                            new Expand({
                                view: this.view,
                                content: obstacleComponent.render(),
                                expanded: true,
                            }),
                        ],
                        'top-right'
                    );
                });
            }

            // ALL LUX OLS RWY06 CATII III 4E - LUX OLS RWY06 CATII III 4E  => BAD
            // LUX OLS RWY06 CATII III 4E - LUX OLS RWY06 CATII III 4E => GOOD

            this.view.ui.add(
                [
                    new Expand({
                        view: this.view,
                        content: new Legend({ view: this.view }),
                        group: 'top-left',
                        expanded: false,
                    }),
                ],
                'top-left'
            );

            /* this.view.watch("scale", (event) => {
                if (!event) return;

                console.log("Scale", event);
            }); */
        });
    }

    zoom = (layer: FeatureLayer, ids: Array<number>) => {
        let query = layer.createQuery();
        query.objectIds = ids;
        query.returnGeometry = true;
        console.log('QUERY');
        layer.queryFeatures(query).then((response) => {
            console.log('BEFORE VIEW GOTO');
            this.view?.goTo(response.features).catch((error) => {
                if (error.name !== 'AbortError') {
                    console.error(error);
                }
            });
        });
    };

    getFeatureAsync(id: number, layer: FeatureLayer) {
        let query = layer.createQuery();
        query.objectIds = [id];
        query.returnGeometry = true;

        return this.view.whenLayerView(layer).then((layerView) => {
            return layerView.queryFeatures(query);
        });

        //layer.queryFeatures(query);
    }

    clearSelection = () => {
        this.selectedFeature = undefined;
        if (this.highlightSelect) {
            this.highlightSelect.remove();
        }
    };
}
