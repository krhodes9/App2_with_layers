require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function(Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [15.7832, 20.5085],
          scale: 25000003
 
        });

        var featureLayer = new FeatureLayer({
          url: "https://services5.arcgis.com/FMvVojoqni7sergv/arcgis/rest/services/Locust_Distribution_Areas_in_Africa/FeatureServer"
        });

        map.add(featureLayer);
   var featureLayer_2 = new FeatureLayer({
  url: "https://services5.arcgis.com/FMvVojoqni7sergv/arcgis/rest/services/Locust_Breeding_Sites_in_Africa/FeatureServer"
});

map.add(featureLayer_2);
      });
