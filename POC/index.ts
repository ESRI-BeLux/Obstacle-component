import './index.css';

import { MapComponent } from './src/index';

const rootContainer = document.getElementById('root');

if (rootContainer && rootContainer instanceof HTMLDivElement) {
    const mapComponent = new MapComponent({
        container: rootContainer,
    });

    mapComponent.launch();

    //mapComponent.sketchWidget.createFeature(EntsoeGeometryType.edge);

    //mapComponent.refreshLayers();

    /*  mapComponent
        .getFeatureAsync(7520, mapComponent.nodeFeatureLayer)
        .then((featureSet) => {
            console.log("featureSet", featureSet);
            if (featureSet.features[0]) {
                mapComponent.selectFeature(featureSet.features[0]);
                if (mapComponent.selectedFeature)
                    mapComponent.sketchWidget.updateFeature(
                        mapComponent.selectedFeature
                    );
            }
        }); */
}
