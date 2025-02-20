var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BP_Manzanas_1 = new ol.format.GeoJSON();
var features_BP_Manzanas_1 = format_BP_Manzanas_1.readFeatures(json_BP_Manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_Manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_Manzanas_1.addFeatures(features_BP_Manzanas_1);
var lyr_BP_Manzanas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_Manzanas_1, 
                style: style_BP_Manzanas_1,
                popuplayertitle: 'B.P_Manzanas ',
                interactive: true,
                title: '<img src="styles/legend/BP_Manzanas_1.png" /> B.P_Manzanas '
            });
var format_BP_Parcelas_2 = new ol.format.GeoJSON();
var features_BP_Parcelas_2 = format_BP_Parcelas_2.readFeatures(json_BP_Parcelas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_Parcelas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_Parcelas_2.addFeatures(features_BP_Parcelas_2);
var lyr_BP_Parcelas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_Parcelas_2, 
                style: style_BP_Parcelas_2,
                popuplayertitle: 'B.P_Parcelas ',
                interactive: true,
                title: '<img src="styles/legend/BP_Parcelas_2.png" /> B.P_Parcelas '
            });
var format_BP_ViasdeComunicacion_3 = new ol.format.GeoJSON();
var features_BP_ViasdeComunicacion_3 = format_BP_ViasdeComunicacion_3.readFeatures(json_BP_ViasdeComunicacion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_ViasdeComunicacion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_ViasdeComunicacion_3.addFeatures(features_BP_ViasdeComunicacion_3);
var lyr_BP_ViasdeComunicacion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_ViasdeComunicacion_3, 
                style: style_BP_ViasdeComunicacion_3,
                popuplayertitle: 'B.P_Vias de Comunicacion ',
                interactive: true,
                title: '<img src="styles/legend/BP_ViasdeComunicacion_3.png" /> B.P_Vias de Comunicacion '
            });
var format_BP_Limite_4 = new ol.format.GeoJSON();
var features_BP_Limite_4 = format_BP_Limite_4.readFeatures(json_BP_Limite_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_Limite_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_Limite_4.addFeatures(features_BP_Limite_4);
var lyr_BP_Limite_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_Limite_4, 
                style: style_BP_Limite_4,
                popuplayertitle: 'B.P_Limite ',
                interactive: true,
                title: '<img src="styles/legend/BP_Limite_4.png" /> B.P_Limite '
            });
var format_BP_Edificacion_5 = new ol.format.GeoJSON();
var features_BP_Edificacion_5 = format_BP_Edificacion_5.readFeatures(json_BP_Edificacion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_Edificacion_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_Edificacion_5.addFeatures(features_BP_Edificacion_5);
var lyr_BP_Edificacion_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_Edificacion_5, 
                style: style_BP_Edificacion_5,
                popuplayertitle: 'B.P_Edificacion ',
                interactive: true,
                title: '<img src="styles/legend/BP_Edificacion_5.png" /> B.P_Edificacion '
            });
var format_BP_Edificacion_Importante_6 = new ol.format.GeoJSON();
var features_BP_Edificacion_Importante_6 = format_BP_Edificacion_Importante_6.readFeatures(json_BP_Edificacion_Importante_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_Edificacion_Importante_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_Edificacion_Importante_6.addFeatures(features_BP_Edificacion_Importante_6);
var lyr_BP_Edificacion_Importante_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_Edificacion_Importante_6, 
                style: style_BP_Edificacion_Importante_6,
                popuplayertitle: 'B.P_Edificacion_Importante ',
                interactive: true,
                title: '<img src="styles/legend/BP_Edificacion_Importante_6.png" /> B.P_Edificacion_Importante '
            });
var format_BP_EspacioVerde_7 = new ol.format.GeoJSON();
var features_BP_EspacioVerde_7 = format_BP_EspacioVerde_7.readFeatures(json_BP_EspacioVerde_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_EspacioVerde_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_EspacioVerde_7.addFeatures(features_BP_EspacioVerde_7);
var lyr_BP_EspacioVerde_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_EspacioVerde_7, 
                style: style_BP_EspacioVerde_7,
                popuplayertitle: 'B.P_EspacioVerde ',
                interactive: true,
                title: '<img src="styles/legend/BP_EspacioVerde_7.png" /> B.P_EspacioVerde '
            });
var format_BP_PAF_8 = new ol.format.GeoJSON();
var features_BP_PAF_8 = format_BP_PAF_8.readFeatures(json_BP_PAF_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_PAF_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_PAF_8.addFeatures(features_BP_PAF_8);
var lyr_BP_PAF_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_PAF_8, 
                style: style_BP_PAF_8,
                popuplayertitle: 'B.P_PAF',
                interactive: true,
                title: '<img src="styles/legend/BP_PAF_8.png" /> B.P_PAF'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BP_Manzanas_1.setVisible(true);lyr_BP_Parcelas_2.setVisible(true);lyr_BP_ViasdeComunicacion_3.setVisible(true);lyr_BP_Limite_4.setVisible(true);lyr_BP_Edificacion_5.setVisible(true);lyr_BP_Edificacion_Importante_6.setVisible(true);lyr_BP_EspacioVerde_7.setVisible(true);lyr_BP_PAF_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BP_Manzanas_1,lyr_BP_Parcelas_2,lyr_BP_ViasdeComunicacion_3,lyr_BP_Limite_4,lyr_BP_Edificacion_5,lyr_BP_Edificacion_Importante_6,lyr_BP_EspacioVerde_7,lyr_BP_PAF_8];
lyr_BP_Manzanas_1.set('fieldAliases', {'fid': 'fid', 'N° de Manzana ': 'N° de Manzana ', 'SECTOR ': 'SECTOR ', });
lyr_BP_Parcelas_2.set('fieldAliases', {'fid': 'fid', 'POSEEDOR ': 'POSEEDOR ', 'D.N.I': 'D.N.I', 'SUPERFICIE ': 'SUPERFICIE ', 'MANZANA ': 'MANZANA ', 'SITUACION ': 'SITUACION ', 'NOMENCLATURA': 'NOMENCLATURA', 'SERVICIOS ': 'SERVICIOS ', });
lyr_BP_ViasdeComunicacion_3.set('fieldAliases', {'fid': 'fid', 'TIPO ': 'TIPO ', 'NOMBRE ': 'NOMBRE ', 'ESTADO ': 'ESTADO ', });
lyr_BP_Limite_4.set('fieldAliases', {'fid': 'fid', 'SUPERFICIE ': 'SUPERFICIE ', });
lyr_BP_Edificacion_5.set('fieldAliases', {'fid': 'fid', 'USO': 'USO', 'ESTADO ': 'ESTADO ', 'SUPERFICIE ': 'SUPERFICIE ', });
lyr_BP_Edificacion_Importante_6.set('fieldAliases', {'fid': 'fid', 'PUBLICO ': 'PUBLICO ', 'PRIVADO ': 'PRIVADO ', 'NOMBRE ': 'NOMBRE ', });
lyr_BP_EspacioVerde_7.set('fieldAliases', {'fid': 'fid', 'NOMBRE ': 'NOMBRE ', 'SUPERFICIE ': 'SUPERFICIE ', });
lyr_BP_PAF_8.set('fieldAliases', {'fid': 'fid', 'ESTADO ': 'ESTADO ', });
lyr_BP_Manzanas_1.set('fieldImages', {'fid': 'TextEdit', 'N° de Manzana ': 'Range', 'SECTOR ': 'Range', });
lyr_BP_Parcelas_2.set('fieldImages', {'fid': 'TextEdit', 'POSEEDOR ': 'TextEdit', 'D.N.I': 'Range', 'SUPERFICIE ': 'Range', 'MANZANA ': 'Range', 'SITUACION ': 'TextEdit', 'NOMENCLATURA': 'TextEdit', 'SERVICIOS ': 'TextEdit', });
lyr_BP_ViasdeComunicacion_3.set('fieldImages', {'fid': 'TextEdit', 'TIPO ': 'TextEdit', 'NOMBRE ': 'TextEdit', 'ESTADO ': 'TextEdit', });
lyr_BP_Limite_4.set('fieldImages', {'fid': 'TextEdit', 'SUPERFICIE ': 'TextEdit', });
lyr_BP_Edificacion_5.set('fieldImages', {'fid': '', 'USO': '', 'ESTADO ': '', 'SUPERFICIE ': '', });
lyr_BP_Edificacion_Importante_6.set('fieldImages', {'fid': '', 'PUBLICO ': '', 'PRIVADO ': '', 'NOMBRE ': '', });
lyr_BP_EspacioVerde_7.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE ': 'TextEdit', 'SUPERFICIE ': 'Range', });
lyr_BP_PAF_8.set('fieldImages', {'fid': 'TextEdit', 'ESTADO ': 'TextEdit', });
lyr_BP_Manzanas_1.set('fieldLabels', {'fid': 'no label', 'N° de Manzana ': 'inline label - always visible', 'SECTOR ': 'inline label - always visible', });
lyr_BP_Parcelas_2.set('fieldLabels', {'fid': 'no label', 'POSEEDOR ': 'inline label - always visible', 'D.N.I': 'inline label - always visible', 'SUPERFICIE ': 'inline label - always visible', 'MANZANA ': 'inline label - always visible', 'SITUACION ': 'inline label - always visible', 'NOMENCLATURA': 'inline label - always visible', 'SERVICIOS ': 'inline label - always visible', });
lyr_BP_ViasdeComunicacion_3.set('fieldLabels', {'fid': 'no label', 'TIPO ': 'inline label - always visible', 'NOMBRE ': 'inline label - always visible', 'ESTADO ': 'inline label - always visible', });
lyr_BP_Limite_4.set('fieldLabels', {'fid': 'no label', 'SUPERFICIE ': 'inline label - always visible', });
lyr_BP_Edificacion_5.set('fieldLabels', {'fid': 'no label', 'USO': 'inline label - always visible', 'ESTADO ': 'inline label - always visible', 'SUPERFICIE ': 'inline label - always visible', });
lyr_BP_Edificacion_Importante_6.set('fieldLabels', {'fid': 'no label', 'PUBLICO ': 'inline label - always visible', 'PRIVADO ': 'inline label - always visible', 'NOMBRE ': 'inline label - always visible', });
lyr_BP_EspacioVerde_7.set('fieldLabels', {'fid': 'no label', 'NOMBRE ': 'inline label - always visible', 'SUPERFICIE ': 'inline label - always visible', });
lyr_BP_PAF_8.set('fieldLabels', {'fid': 'no label', 'ESTADO ': 'inline label - always visible', });
lyr_BP_PAF_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});