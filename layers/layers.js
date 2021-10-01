var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BUILDING_UTM_1 = new ol.format.GeoJSON();
var features_BUILDING_UTM_1 = format_BUILDING_UTM_1.readFeatures(json_BUILDING_UTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDING_UTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDING_UTM_1.addFeatures(features_BUILDING_UTM_1);
var lyr_BUILDING_UTM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUILDING_UTM_1, 
                style: style_BUILDING_UTM_1,
                interactive: true,
                title: '<img src="styles/legend/BUILDING_UTM_1.png" /> BUILDING_UTM'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BUILDING_UTM_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BUILDING_UTM_1];
lyr_BUILDING_UTM_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'الرقم': 'الرقم', 'الاست': 'الاست', 'نسبة_': 'نسبة_', 'الجمل': 'الجمل', 'ملاحظ': 'ملاحظ', 'رقم_ا': 'رقم_ا', 'المست': 'المست', 'النمو': 'النمو', 'الارت': 'الارت', });
lyr_BUILDING_UTM_1.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', 'الرقم': '', 'الاست': '', 'نسبة_': '', 'الجمل': '', 'ملاحظ': '', 'رقم_ا': '', 'المست': '', 'النمو': '', 'الارت': '', });
lyr_BUILDING_UTM_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'الرقم': 'header label', 'الاست': 'no label', 'نسبة_': 'no label', 'الجمل': 'no label', 'ملاحظ': 'no label', 'رقم_ا': 'no label', 'المست': 'no label', 'النمو': 'no label', 'الارت': 'no label', });
lyr_BUILDING_UTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});