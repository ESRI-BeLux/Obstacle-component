const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ArcGISPlugin = require("@arcgis/webpack-plugin");

module.exports = {
    mode: "development",
    //devtool: mode === "development" ? developmentDevtool : productionDevtool,
    //entry: "./src/Components/index.tsx",
    entry: "./index.ts",
    output: {
        path: path.resolve(__dirname, "lib"),
        chunkFilename: "chunks/[id].js",
        filename: "esribeluxbundle.js",
        libraryTarget: "umd",
        library: "Esribelux",
        //publicPath: "/",
        umdNamedDefine: true,
        clean: true,
    },

    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"], //This property tells Webpack what static file it should serve
        open: false, //opens the browser after server is successfully started
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only".
         * "only" is used if enable Hot Module Replacement without page
         * refresh as a fallback in case of build failures
         */
        hot: true,
        liveReload: true, //disable live reload on the browser. "hot" must be set to false for this to work
    },
    resolve: {
        extensions: [".ts", ".js", ".json", ".jsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /nodeModules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new ArcGISPlugin({
            // do not copy assets
            copyAssets: false,
            // exclude 3D modules from build
            features: {
                "3d": false,
            },
            userDefinedExcludes: [
                // layers
                "@arcgis/core/layers/AreaMeasurementLayer",
                "@arcgis/core/layers/BuildingSceneLayer",
                "@arcgis/core/layers/BingMapsLayer",
                "@arcgis/core/layers/CSVLayer",
                "@arcgis/core/layers/DirectLineMeasurementLayer",
                "@arcgis/core/layers/GeoRSSLayer",
                "@arcgis/core/layers/GroupLayer",
                "@arcgis/core/layers/ImageryLayer",
                "@arcgis/core/layers/ImageryTileLayer",
                "@arcgis/core/layers/IntegratedMeshLayer",
                "@arcgis/core/layers/KMLLayer",
                "@arcgis/core/layers/MapImageLayer",
                "@arcgis/core/layers/MapNotesLayer",
                "@arcgis/core/layers/OGCFeatureLayer",
                "@arcgis/core/layers/OpenStreetMapLayer",
                "@arcgis/core/layers/StreamLayer",
                "@arcgis/core/layers/SubtypeGroupLayer",
                "@arcgis/core/layers/WFSLayer",
                "@arcgis/core/layers/WMSLayer",
                "@arcgis/core/layers/WMTSLayer",
                "@arcgis/core/layers/WebTileLayer",

                // identity
                "@arcgis/core/identity",
                // widgets - doesn't matter if these are in the excludes
                "@arcgis/core/widgets/AreaMeasurement2D",
                "@arcgis/core/widgets/AreaMeasurement3D",
                "@arcgis/core/widgets/BasemapGallery",
                "@arcgis/core/widgets/BasemapLayerList",
                "@arcgis/core/widgets/BasemapToggle",
                "@arcgis/core/widgets/BuildingExplorer",
                "@arcgis/core/widgets/CoordinateConversion",
                "@arcgis/core/widgets/Daylight",
                "@arcgis/core/widgets/Directions",
                "@arcgis/core/widgets/DirectLineMeasurement3D",
                "@arcgis/core/widgets/DistanceMeasurement2D",
                "@arcgis/core/widgets/Editor",
                "@arcgis/core/widgets/ElevationProfile",
                "@arcgis/core/widgets/FeatureForm",
                "@arcgis/core/widgets/FeatureTemplates",
                "@arcgis/core/widgets/LayerList",
                "@arcgis/core/widgets/LineOfSight",
                "@arcgis/core/widgets/Measurement",
                "@arcgis/core/widgets/Print",
                "@arcgis/core/widgets/ShadowAccumulation",
                "@arcgis/core/widgets/Sketch",
                "@arcgis/core/widgets/Slice",
                "@arcgis/core/widgets/Swipe",
                "@arcgis/core/widgets/TableList",
                "@arcgis/core/widgets/TimeSlider",
            ],
        }),
        new HtmlWebPackPlugin({
            title: "ArcGIS API  for JavaScript",
            template: "./public/index.html",
            filename: "./index.html",
            chunksSortMode: "none",
            inlineSource: ".(css)$",
            favicon: "./public/favicon.ico",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
        }),
    ],
};
