var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mosaic_1770_przyciete_1 = new ol.format.GeoJSON();
var features_mosaic_1770_przyciete_1 = format_mosaic_1770_przyciete_1.readFeatures(json_mosaic_1770_przyciete_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mosaic_1770_przyciete_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mosaic_1770_przyciete_1.addFeatures(features_mosaic_1770_przyciete_1);
var lyr_mosaic_1770_przyciete_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mosaic_1770_przyciete_1, 
                style: style_mosaic_1770_przyciete_1,
                interactive: true,
                title: '<img src="styles/legend/mosaic_1770_przyciete_1.png" /> mosaic_1770_przyciete'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mosaic_1770_przyciete_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mosaic_1770_przyciete_1];
lyr_mosaic_1770_przyciete_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NAME': 'NAME', });
lyr_mosaic_1770_przyciete_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'NAME': '', });
lyr_mosaic_1770_przyciete_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'NAME': 'no label', });
lyr_mosaic_1770_przyciete_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});