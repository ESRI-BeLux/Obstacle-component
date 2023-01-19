import Geometry from '@arcgis/core/geometry/Geometry';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import Polygon from '@arcgis/core/geometry/Polygon';
import Point from '@arcgis/core/geometry/Point';
import Polyline from '@arcgis/core/geometry/Polyline';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import MapView from '@arcgis/core/views/MapView';
import SceneView from '@arcgis/core/views/SceneView';

import LineSymbol3D from '@arcgis/core/symbols/LineSymbol3D';
import LineSymbol3DLayer from '@arcgis/core/symbols/LineSymbol3DLayer';

import LineStylePattern3D from '@arcgis/core/symbols/patterns/LineStylePattern3D';
import LineStyleMarker3D from '@arcgis/core/symbols/LineStyleMarker3D';

import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';

import { mat4 } from 'gl-matrix';
import Graphic from '@arcgis/core/Graphic';
import Handles from '@arcgis/core/core/Handles';

interface ObstacleComponentObject {
    view: SceneView;
    sceneLayer: SceneLayer;
    sceneLayerView: __esri.SceneLayerView;
}

export class ObstacleComponent {
    view: SceneView;
    obstacleComponentObject: ObstacleComponentObject;
    heightInput: HTMLInputElement;
    result: HTMLElement;
    highlightSelect: Handles;

    constructor(obstacleComponentObject: ObstacleComponentObject) {
        this.obstacleComponentObject = obstacleComponentObject;
        this.view = obstacleComponentObject.view;
        this.highlightSelect = new Handles();

        this.setup();
    }

    setup() {
        // line symbol which connects the points
        const lineSymbol = new LineSymbol3D({
            symbolLayers: [
                new LineSymbol3DLayer({
                    material: {
                        color: 'dodgerblue',
                    },
                    size: 4,
                }),
            ],
        });

        let polylineSymbol = new SimpleLineSymbol({
            color: [226, 119, 40],
            width: 4,
        });

        this.view.popup.autoOpenEnabled = false;
        this.view.on('click', (event) => {
            this.view.graphics.removeAll();
            this.result.innerHTML = '';

            let opts: __esri.SceneViewHitTestOptions = {
                include: this.obstacleComponentObject.sceneLayer,
            };

            this.view.hitTest(event, opts).then((response) => {
                console.log('RESPONSE:', response);
                if (response.ground.mapPoint) {
                    console.log(
                        'x',
                        response.ground.mapPoint.x,
                        'y',
                        response.ground.mapPoint.y,
                        'z',
                        response.ground.mapPoint.z,
                        'longitude',
                        response.ground.mapPoint.longitude,
                        'latitude',
                        response.ground.mapPoint.latitude
                    );
                    var polyline = new Polyline({
                        paths: [
                            [
                                response.ground.mapPoint.longitude,
                                response.ground.mapPoint.latitude,
                                response.ground.mapPoint.z,
                            ],
                            [
                                response.ground.mapPoint.longitude,
                                response.ground.mapPoint.latitude,
                                response.ground.mapPoint.z +
                                    this.heightInput.valueAsNumber,
                            ],
                        ],
                    });

                    let lineFromGround = new Graphic({
                        geometry: polyline,
                        symbol: lineSymbol,
                    });

                    this.view.graphics.add(lineFromGround);

                    let point = new Point({
                        x: response.ground.mapPoint.longitude,
                        y: response.ground.mapPoint.latitude,
                        z:
                            response.ground.mapPoint.z +
                            this.heightInput.valueAsNumber,
                    });

                    let markerSymbol = new SimpleMarkerSymbol({
                        color: [226, 119, 40],
                        outline: new SimpleLineSymbol({
                            // autocasts as new SimpleLineSymbol()
                            color: [255, 255, 255],
                            width: 2,
                        }),
                    });

                    let pointGraphic = new Graphic({
                        geometry: point,
                        symbol: markerSymbol,
                    });

                    this.view.graphics.add(pointGraphic);

                    /* this.view.goTo(pointGraphic).catch(function (error) {
                        console.log('Error: ', error);
                    }); */

                    //graphicsLayer.add(lineFromGround);

                    /* this.view.goTo(lineFromGround).catch(function (error) {
                    console.log('Error: ', error);
                    }); */

                    if (response.results.length > 0) {
                        if (response.results[0].type === 'graphic') {
                            console.log(
                                'GEOMETRY',
                                response.results[0].graphic.geometry
                            );
                        }

                        let point2 = new Point({
                            x: response.results[0].mapPoint.longitude,
                            y: response.results[0].mapPoint.latitude,
                            z:
                                response.results[0].mapPoint.z +
                                this.heightInput.valueAsNumber,
                        });

                        let markerSymbol2 = new SimpleMarkerSymbol({
                            color: [226, 119, 40],
                            outline: new SimpleLineSymbol({
                                color: [255, 255, 255],
                                width: 2,
                            }),
                        });

                        let pointGraphic2 = new Graphic({
                            geometry: point2,
                            symbol: markerSymbol2,
                        });

                        this.view.graphics.add(pointGraphic2);

                        const test = response.results.map((result) => {
                            if (result.type === 'graphic')
                                return result.graphic;
                        });

                        const filteredArray: Graphic[] = test.filter(
                            this.notEmpty
                        );

                        if (this.highlightSelect) {
                            this.highlightSelect.remove();
                        }

                        this.highlightSelect.add(
                            this.obstacleComponentObject.sceneLayerView.highlight(
                                filteredArray
                            )
                        );

                        console.log('filteredArray', filteredArray);
                        this.intersectTest(
                            lineFromGround,
                            this.obstacleComponentObject.sceneLayer,
                            this.obstacleComponentObject.sceneLayerView
                        );
                        //this.calculatedObstacle(lineFromGround, filteredArray);
                    }
                }
            });
        });
    }
    intersectTest(
        graphic: Graphic,
        layer: SceneLayer,
        layerView: __esri.SceneLayerView
    ) {
        const query = layerView.createQuery();

        query.geometry = graphic.geometry;
        query.spatialRelationship = 'intersects';
      /*   query.returnZ = true;
        query.multipatchOption = 'xyFootprint';
        query.returnQueryGeometry = true;
        query.outFields = ['*'];
        query.outSpatialReference = graphic.geometry.spatialReference; */

        //query.outSpatialReference = CPGPOLYGON_FeatureSet.features[0].geometry.spatialReference;

        

        layerView.queryFeatures(query).then((result) => {
            console.log('Result', result);

            this.view.goTo(result.features);
        });
    }

    calculatedObstacle(graphic: Graphic, graphics: Graphic[]) {
        // Get feature

        if (graphics.length > 0) {
            const layer = this.obstacleComponentObject.sceneLayer;
            const objectIdFieldName = layer.objectIdField;

            const objectIds = graphics.map(
                (graphic) => graphic.attributes[objectIdFieldName]
            );

            console.log('layer', layer);

            const query = layer.createQuery();
            query.objectIds = objectIds;

            query.returnGeometry = true;
            query.returnZ = true;
            query.returnM = true;
            query.multipatchOption = 'xyFootprint';
            query.returnQueryGeometry = true;
            query.outFields = ['*'];
            query.outSpatialReference = graphic.geometry.spatialReference;

            console.log(layer.getFieldUsageInfo('supportsLayerQuery'));

            //query.outSpatialReference = CPGPOLYGON_FeatureSet.features[0].geometry.spatialReference;

            layer
                .queryFeatures(query)
                .then((featureSet) => {
                    if (featureSet.features.length) {
                        console.log('featureSet.features', featureSet.features);
                        console.log(
                            'featureSet.features[0].geometry',
                            featureSet.features[0].geometry
                        );
                        if (
                            featureSet.features[0].geometry instanceof Polygon
                        ) {
                            this.view.graphics.add(featureSet.features[0]);
                        }
                    }
                })
                .catch((error) => {
                    console.log('Error: ', error);
                });
        }
    }

     /* getIntersectionPoint(polygon: Polygon, point: Point, polyline: Polyline) {
        //perform intersection in 2D to see if point is inside polygon
        if (geometryEngine.intersects(polygon, point)) {
            // get a flat array of 3 non-collinear points in the polygon
            // we will use these points for the plane equation
            var planePoints = this.getNonCollinearPoints(polygon);

            //get a flat array of 2 points that define the line
            var linePoints = [].concat.apply([], polyline.paths);

            // return intersection of the plane and line
            if (planePoints) {
                return this.intersect(planePoints, linePoints);
            } else {
                console.error(
                    'Polygon ',
                    polygon,
                    "doesn't have non-collinear points."
                );
            }
        }
        return null;
    } */
/*
    getNonCollinearPoints(polygon: Polygon) {
        // set the first two non-collinear points in the polygon
        var x1 = polygon.rings[0][0],
            y1 = polygon.rings[0][1],
            z1 = polygon.rings[0][2],
            x2 = polygon.rings[1][0],
            y2 = polygon.rings[1][1],
            z2 = polygon.rings[1][2];

        // find the third non-collinear point in the polygon
        for (var i = 2; i <= polygon.rings.length; i++) {
            var x3 = polygon.rings[i][0],
                y3 = polygon.rings[i][1],
                z3 = polygon.rings[i][2];
            if (
                (x3 - x1) / (x2 - x1) !== (y3 - y1) / (y2 - y1) ||
                (x3 - x1) / (x2 - x1) !== (z3 - z1) / (z2 - z1)
            ) {
                return [x1, y1, z1, x2, y2, z2, x3, y3, z3];
            }
        }

        return null;
    }

    intersect(planePoints, linePoints) {
        // 3 points defining the plane
        var x1 = planePoints[0],
            y1 = planePoints[1],
            z1 = planePoints[2],
            x2 = planePoints[3],
            y2 = planePoints[4],
            z2 = planePoints[5],
            x3 = planePoints[6],
            y3 = planePoints[7],
            z3 = planePoints[8];

        // 2 points defining the line
        var x4 = linePoints[0],
            y4 = linePoints[1],
            z4 = linePoints[2],
            x5 = linePoints[3],
            y5 = linePoints[4],
            z5 = linePoints[5];

        // calculate intersection based on http://mathworld.wolfram.com/Line-PlaneIntersection.html

        var mat1 = mat4.fromValues(
            1,
            1,
            1,
            1,
            x1,
            x2,
            x3,
            x4,
            y1,
            y2,
            y3,
            y4,
            z1,
            z2,
            z3,
            z4
        );
        var mat2 = mat4.fromValues(
            1,
            1,
            1,
            0,
            x1,
            x2,
            x3,
            x5 - x4,
            y1,
            y2,
            y3,
            y5 - y4,
            z1,
            z2,
            z3,
            z5 - z4
        );
        var det1 = mat4.determinant(mat1);
        var det2 = mat4.determinant(mat2);

        if (det2 !== 0) {
            var t = -det1 / det2;
            var intersectionPoint = {
                x: x4 + (x5 - x4) * t,
                y: y4 + (y5 - y4) * t,
                z: z4 + (z5 - z4) * t,
            };
            return intersectionPoint;
        }

        // in case no point was found
        return null;
    } */

    notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
        return value !== null && value !== undefined;
    }

    render(): HTMLElement {
        const container = document.createElement('div');
        container.setAttribute('class', 'esri-widget');
        container.setAttribute('style', 'padding: 10px;width: 280px;');

        const title = document.createElement('h1');
        title.setAttribute('class', 'esri-widget__heading');
        title.innerHTML = 'Obstacle';

        container.append(title);

        const label = document.createElement('label');
        label.setAttribute('for', 'heightObstacle');
        label.setAttribute('class', 'esri-feature-form__label');
        label.innerHTML = 'Obstacle height';
        container.append(label);

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('name', 'heightObstacle');
        input.setAttribute('min', '1');
        input.setAttribute('class', 'esri-input');
        input.setAttribute('style', 'width: 100%;');
        input.valueAsNumber = 50;
        container.append(input);
        this.heightInput = input;

        const result = document.createElement('div');
        //result.innerHTML = 'Result:';
        container.append(result);
        this.result = result;

        return container;
    }
}
