ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2180").setExtent([-1488524.162103, -1302568.991029, 3265020.115917, 1340671.158412]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.OSM({
            attributions: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_XK_1 = new ol.format.GeoJSON();
var features_XK_1 = format_XK_1.readFeatures(json_XK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_XK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XK_1.addFeatures(features_XK_1);
var lyr_XK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XK_1, 
                style: style_XK_1,
                popuplayertitle: 'XK',
                interactive: true,
                title: '<img src="styles/legend/XK_1.png" /> XK'
            });
var format_UA_2 = new ol.format.GeoJSON();
var features_UA_2 = format_UA_2.readFeatures(json_UA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_UA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UA_2.addFeatures(features_UA_2);
var lyr_UA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UA_2, 
                style: style_UA_2,
                popuplayertitle: 'UA',
                interactive: true,
                title: '<img src="styles/legend/UA_2.png" /> UA'
            });
var format_SK_3 = new ol.format.GeoJSON();
var features_SK_3 = format_SK_3.readFeatures(json_SK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_SK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SK_3.addFeatures(features_SK_3);
var lyr_SK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SK_3, 
                style: style_SK_3,
                popuplayertitle: 'SK',
                interactive: true,
                title: '<img src="styles/legend/SK_3.png" /> SK'
            });
var format_SI_4 = new ol.format.GeoJSON();
var features_SI_4 = format_SI_4.readFeatures(json_SI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_SI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_4.addFeatures(features_SI_4);
var lyr_SI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_4, 
                style: style_SI_4,
                popuplayertitle: 'SI',
                interactive: true,
                title: '<img src="styles/legend/SI_4.png" /> SI'
            });
var format_RS_5 = new ol.format.GeoJSON();
var features_RS_5 = format_RS_5.readFeatures(json_RS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_RS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RS_5.addFeatures(features_RS_5);
var lyr_RS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RS_5, 
                style: style_RS_5,
                popuplayertitle: 'RS',
                interactive: true,
                title: '<img src="styles/legend/RS_5.png" /> RS'
            });
var format_RO_6 = new ol.format.GeoJSON();
var features_RO_6 = format_RO_6.readFeatures(json_RO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_RO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RO_6.addFeatures(features_RO_6);
var lyr_RO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RO_6, 
                style: style_RO_6,
                popuplayertitle: 'RO',
                interactive: true,
                title: '<img src="styles/legend/RO_6.png" /> RO'
            });
var format_PL_7 = new ol.format.GeoJSON();
var features_PL_7 = format_PL_7.readFeatures(json_PL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_PL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL_7.addFeatures(features_PL_7);
var lyr_PL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PL_7, 
                style: style_PL_7,
                popuplayertitle: 'PL',
                interactive: true,
                title: '<img src="styles/legend/PL_7.png" /> PL'
            });
var format_MK_8 = new ol.format.GeoJSON();
var features_MK_8 = format_MK_8.readFeatures(json_MK_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_MK_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MK_8.addFeatures(features_MK_8);
var lyr_MK_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MK_8, 
                style: style_MK_8,
                popuplayertitle: 'MK',
                interactive: true,
                title: '<img src="styles/legend/MK_8.png" /> MK'
            });
var format_ME_9 = new ol.format.GeoJSON();
var features_ME_9 = format_ME_9.readFeatures(json_ME_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_ME_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ME_9.addFeatures(features_ME_9);
var lyr_ME_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ME_9, 
                style: style_ME_9,
                popuplayertitle: 'ME',
                interactive: true,
                title: '<img src="styles/legend/ME_9.png" /> ME'
            });
var format_HU_10 = new ol.format.GeoJSON();
var features_HU_10 = format_HU_10.readFeatures(json_HU_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_HU_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HU_10.addFeatures(features_HU_10);
var lyr_HU_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HU_10, 
                style: style_HU_10,
                popuplayertitle: 'HU',
                interactive: true,
                title: '<img src="styles/legend/HU_10.png" /> HU'
            });
var format_HR_11 = new ol.format.GeoJSON();
var features_HR_11 = format_HR_11.readFeatures(json_HR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_HR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HR_11.addFeatures(features_HR_11);
var lyr_HR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HR_11, 
                style: style_HR_11,
                popuplayertitle: 'HR',
                interactive: true,
                title: '<img src="styles/legend/HR_11.png" /> HR'
            });
var format_CZ_12 = new ol.format.GeoJSON();
var features_CZ_12 = format_CZ_12.readFeatures(json_CZ_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_CZ_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CZ_12.addFeatures(features_CZ_12);
var lyr_CZ_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CZ_12, 
                style: style_CZ_12,
                popuplayertitle: 'CZ',
                interactive: true,
                title: '<img src="styles/legend/CZ_12.png" /> CZ'
            });
var format_BG_13 = new ol.format.GeoJSON();
var features_BG_13 = format_BG_13.readFeatures(json_BG_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_BG_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BG_13.addFeatures(features_BG_13);
var lyr_BG_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BG_13, 
                style: style_BG_13,
                popuplayertitle: 'BG',
                interactive: true,
                title: '<img src="styles/legend/BG_13.png" /> BG'
            });
var format_BA_14 = new ol.format.GeoJSON();
var features_BA_14 = format_BA_14.readFeatures(json_BA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_BA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA_14.addFeatures(features_BA_14);
var lyr_BA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BA_14, 
                style: style_BA_14,
                popuplayertitle: 'BA',
                interactive: true,
                title: '<img src="styles/legend/BA_14.png" /> BA'
            });
var format_AL_15 = new ol.format.GeoJSON();
var features_AL_15 = format_AL_15.readFeatures(json_AL_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_AL_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AL_15.addFeatures(features_AL_15);
var lyr_AL_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AL_15, 
                style: style_AL_15,
                popuplayertitle: 'AL',
                interactive: true,
                title: '<img src="styles/legend/AL_15.png" /> AL'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_XK_1.setVisible(true);lyr_UA_2.setVisible(true);lyr_SK_3.setVisible(true);lyr_SI_4.setVisible(true);lyr_RS_5.setVisible(true);lyr_RO_6.setVisible(true);lyr_PL_7.setVisible(true);lyr_MK_8.setVisible(true);lyr_ME_9.setVisible(true);lyr_HU_10.setVisible(true);lyr_HR_11.setVisible(true);lyr_CZ_12.setVisible(true);lyr_BG_13.setVisible(true);lyr_BA_14.setVisible(true);lyr_AL_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_XK_1,lyr_UA_2,lyr_SK_3,lyr_SI_4,lyr_RS_5,lyr_RO_6,lyr_PL_7,lyr_MK_8,lyr_ME_9,lyr_HU_10,lyr_HR_11,lyr_CZ_12,lyr_BG_13,lyr_BA_14,lyr_AL_15];
lyr_XK_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_UA_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_SK_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_SI_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_RS_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_RO_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_PL_7.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_MK_8.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_ME_9.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_HU_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_HR_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_CZ_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_BG_13.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_BA_14.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_AL_15.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'names_all': 'names_all', 'type': 'type', 'layer': 'layer', });
lyr_XK_1.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_UA_2.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_SK_3.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_SI_4.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_RS_5.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_RO_6.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_PL_7.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'names_all': '', 'type': 'TextEdit', 'layer': '', });
lyr_MK_8.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_ME_9.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_HU_10.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_HR_11.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_CZ_12.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_BG_13.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_BA_14.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_AL_15.set('fieldImages', {'fid': '', 'name': '', 'names_all': '', 'type': '', 'layer': '', });
lyr_XK_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_UA_2.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_SK_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_SI_4.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_RS_5.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_RO_6.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_PL_7.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_MK_8.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_ME_9.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_HU_10.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_HR_11.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_CZ_12.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_BG_13.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_BA_14.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_AL_15.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'names_all': 'no label', 'type': 'no label', 'layer': 'no label', });
lyr_AL_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});