var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_DEM_COP90_005_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_COP90_005<br />\
    <img src="styles/legend/DEM_COP90_005_1_0.png" /> -4,5143<br />\
    <img src="styles/legend/DEM_COP90_005_1_1.png" /> 437,8140<br />\
    <img src="styles/legend/DEM_COP90_005_1_2.png" /> 880,1422<br />\
    <img src="styles/legend/DEM_COP90_005_1_3.png" /> 1322,4705<br />\
    <img src="styles/legend/DEM_COP90_005_1_4.png" /> 1764,7988<br />\
    <img src="styles/legend/DEM_COP90_005_1_5.png" /> 2207,1271<br />\
    <img src="styles/legend/DEM_COP90_005_1_6.png" /> 2649,4554<br />\
    <img src="styles/legend/DEM_COP90_005_1_7.png" /> 3057,7585<br />\
    <img src="styles/legend/DEM_COP90_005_1_8.png" /> 3398,0110<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_COP90_005_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [738651.200787, 4999996.400018, 4251059.434042, 7103599.422654]
        })
    });
var format_miasta_2 = new ol.format.GeoJSON();
var features_miasta_2 = format_miasta_2.readFeatures(json_miasta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_miasta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_miasta_2.addFeatures(features_miasta_2);
var lyr_miasta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_miasta_2, 
                style: style_miasta_2,
                popuplayertitle: 'miasta',
                interactive: false,
                title: '<img src="styles/legend/miasta_2.png" /> miasta'
            });
var format_plan_3 = new ol.format.GeoJSON();
var features_plan_3 = format_plan_3.readFeatures(json_plan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plan_3.addFeatures(features_plan_3);
var lyr_plan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plan_3, 
                style: style_plan_3,
                popuplayertitle: 'plan',
                interactive: true,
                title: '<img src="styles/legend/plan_3.png" /> plan'
            });
var format_grapa_jug_4 = new ol.format.GeoJSON();
var features_grapa_jug_4 = format_grapa_jug_4.readFeatures(json_grapa_jug_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grapa_jug_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grapa_jug_4.addFeatures(features_grapa_jug_4);
var lyr_grapa_jug_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_grapa_jug_4, 
                style: style_grapa_jug_4,
                popuplayertitle: 'grapa_jug',
                interactive: true,
                title: '<img src="styles/legend/grapa_jug_4.png" /> grapa_jug'
            });
var format_kiczer_jug_5 = new ol.format.GeoJSON();
var features_kiczer_jug_5 = format_kiczer_jug_5.readFeatures(json_kiczer_jug_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kiczer_jug_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiczer_jug_5.addFeatures(features_kiczer_jug_5);
var lyr_kiczer_jug_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kiczer_jug_5, 
                style: style_kiczer_jug_5,
                popuplayertitle: 'kiczer_jug',
                interactive: true,
                title: '<img src="styles/legend/kiczer_jug_5.png" /> kiczer_jug'
            });
var format_magura_jug_6 = new ol.format.GeoJSON();
var features_magura_jug_6 = format_magura_jug_6.readFeatures(json_magura_jug_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_magura_jug_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_magura_jug_6.addFeatures(features_magura_jug_6);
var lyr_magura_jug_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_magura_jug_6, 
                style: style_magura_jug_6,
                popuplayertitle: 'magura_jug',
                interactive: true,
                title: '<img src="styles/legend/magura_jug_6.png" /> magura_jug'
            });
var format_grui_7 = new ol.format.GeoJSON();
var features_grui_7 = format_grui_7.readFeatures(json_grui_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grui_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grui_7.addFeatures(features_grui_7);
var lyr_grui_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_grui_7, 
                style: style_grui_7,
                popuplayertitle: 'grui',
                interactive: true,
                title: '<img src="styles/legend/grui_7.png" /> grui'
            });
var format_sihla_8 = new ol.format.GeoJSON();
var features_sihla_8 = format_sihla_8.readFeatures(json_sihla_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sihla_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sihla_8.addFeatures(features_sihla_8);
var lyr_sihla_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sihla_8, 
                style: style_sihla_8,
                popuplayertitle: 'sihla',
                interactive: true,
                title: '<img src="styles/legend/sihla_8.png" /> sihla'
            });
var format_plaj_9 = new ol.format.GeoJSON();
var features_plaj_9 = format_plaj_9.readFeatures(json_plaj_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plaj_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plaj_9.addFeatures(features_plaj_9);
var lyr_plaj_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plaj_9, 
                style: style_plaj_9,
                popuplayertitle: 'plaj',
                interactive: true,
                title: '<img src="styles/legend/plaj_9.png" /> plaj'
            });
var format_groapa_10 = new ol.format.GeoJSON();
var features_groapa_10 = format_groapa_10.readFeatures(json_groapa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_groapa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_groapa_10.addFeatures(features_groapa_10);
var lyr_groapa_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_groapa_10, 
                style: style_groapa_10,
                popuplayertitle: 'groapa',
                interactive: true,
                title: '<img src="styles/legend/groapa_10.png" /> groapa'
            });
var format_chicera_11 = new ol.format.GeoJSON();
var features_chicera_11 = format_chicera_11.readFeatures(json_chicera_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chicera_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chicera_11.addFeatures(features_chicera_11);
var lyr_chicera_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chicera_11, 
                style: style_chicera_11,
                popuplayertitle: 'chicera',
                interactive: true,
                title: '<img src="styles/legend/chicera_11.png" /> chicera'
            });
var format_magura_12 = new ol.format.GeoJSON();
var features_magura_12 = format_magura_12.readFeatures(json_magura_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_magura_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_magura_12.addFeatures(features_magura_12);
var lyr_magura_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_magura_12, 
                style: style_magura_12,
                popuplayertitle: 'magura',
                interactive: true,
                title: '<img src="styles/legend/magura_12.png" /> magura'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DEM_COP90_005_1.setVisible(false);lyr_miasta_2.setVisible(true);lyr_plan_3.setVisible(false);lyr_grapa_jug_4.setVisible(false);lyr_kiczer_jug_5.setVisible(false);lyr_magura_jug_6.setVisible(false);lyr_grui_7.setVisible(false);lyr_sihla_8.setVisible(false);lyr_plaj_9.setVisible(false);lyr_groapa_10.setVisible(false);lyr_chicera_11.setVisible(false);lyr_magura_12.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_DEM_COP90_005_1,lyr_miasta_2,lyr_plan_3,lyr_grapa_jug_4,lyr_kiczer_jug_5,lyr_magura_jug_6,lyr_grui_7,lyr_sihla_8,lyr_plaj_9,lyr_groapa_10,lyr_chicera_11,lyr_magura_12];
lyr_miasta_2.set('fieldAliases', {'fid': 'fid', 'nazwa': 'nazwa', });
lyr_plan_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_grapa_jug_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_kiczer_jug_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_magura_jug_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_grui_7.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_sihla_8.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_plaj_9.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_groapa_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_chicera_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_magura_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'layer': 'layer', });
lyr_miasta_2.set('fieldImages', {'fid': 'TextEdit', 'nazwa': 'TextEdit', });
lyr_plan_3.set('fieldImages', {'fid': '', 'name': '', 'type': '', 'layer': '', });
lyr_grapa_jug_4.set('fieldImages', {'fid': '', 'name': '', 'type': '', 'layer': '', });
lyr_kiczer_jug_5.set('fieldImages', {'fid': '', 'name': '', 'type': '', 'layer': '', });
lyr_magura_jug_6.set('fieldImages', {'fid': '', 'name': '', 'type': '', 'layer': '', });
lyr_grui_7.set('fieldImages', {'fid': '', 'name': '', 'type': '', 'layer': '', });
lyr_sihla_8.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', });
lyr_plaj_9.set('fieldImages', {'fid': '', 'name': '', 'type': '', 'layer': '', });
lyr_groapa_10.set('fieldImages', {'fid': '', 'name': '', 'type': '', 'layer': '', });
lyr_chicera_11.set('fieldImages', {'fid': '', 'name': '', 'type': '', 'layer': '', });
lyr_magura_12.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', });
lyr_miasta_2.set('fieldLabels', {'fid': 'no label', 'nazwa': 'no label', });
lyr_plan_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_grapa_jug_4.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_kiczer_jug_5.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_magura_jug_6.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_grui_7.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_sihla_8.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_plaj_9.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_groapa_10.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_chicera_11.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_magura_12.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'layer': 'hidden field', });
lyr_magura_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});