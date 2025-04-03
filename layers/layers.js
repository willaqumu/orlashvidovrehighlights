ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1372916.267776, 7474924.589793, 1426614.115635, 7502477.747793]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Frededeomrder_1 = new ol.format.GeoJSON();
var features_Frededeomrder_1 = format_Frededeomrder_1.readFeatures(json_Frededeomrder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_1.addFeatures(features_Frededeomrder_1);
var lyr_Frededeomrder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_1, 
                style: style_Frededeomrder_1,
                popuplayertitle: 'Fredede områder',
                interactive: false,
                title: '<img src="styles/legend/Frededeomrder_1.png" /> Fredede områder'
            });
var format_Lokalplanforslag_2 = new ol.format.GeoJSON();
var features_Lokalplanforslag_2 = format_Lokalplanforslag_2.readFeatures(json_Lokalplanforslag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanforslag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanforslag_2.addFeatures(features_Lokalplanforslag_2);
var lyr_Lokalplanforslag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanforslag_2, 
                style: style_Lokalplanforslag_2,
                popuplayertitle: 'Lokalplan - forslag',
                interactive: true,
                title: '<img src="styles/legend/Lokalplanforslag_2.png" /> Lokalplan - forslag'
            });
var format_Lokalplanvedtaget_3 = new ol.format.GeoJSON();
var features_Lokalplanvedtaget_3 = format_Lokalplanvedtaget_3.readFeatures(json_Lokalplanvedtaget_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanvedtaget_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanvedtaget_3.addFeatures(features_Lokalplanvedtaget_3);
var lyr_Lokalplanvedtaget_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanvedtaget_3, 
                style: style_Lokalplanvedtaget_3,
                popuplayertitle: 'Lokalplan - vedtaget',
                interactive: true,
                title: '<img src="styles/legend/Lokalplanvedtaget_3.png" /> Lokalplan - vedtaget'
            });
var format_Strandbeskyttelse_4 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_4 = format_Strandbeskyttelse_4.readFeatures(json_Strandbeskyttelse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_4.addFeatures(features_Strandbeskyttelse_4);
var lyr_Strandbeskyttelse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_4, 
                style: style_Strandbeskyttelse_4,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelse_4.png" /> Strandbeskyttelse'
            });
var format_Kulturbeskyttedeomrder_5 = new ol.format.GeoJSON();
var features_Kulturbeskyttedeomrder_5 = format_Kulturbeskyttedeomrder_5.readFeatures(json_Kulturbeskyttedeomrder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulturbeskyttedeomrder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulturbeskyttedeomrder_5.addFeatures(features_Kulturbeskyttedeomrder_5);
var lyr_Kulturbeskyttedeomrder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kulturbeskyttedeomrder_5, 
                style: style_Kulturbeskyttedeomrder_5,
                popuplayertitle: 'Kulturbeskyttede områder',
                interactive: true,
                title: '<img src="styles/legend/Kulturbeskyttedeomrder_5.png" /> Kulturbeskyttede områder'
            });
var format_kommuneplan_6 = new ol.format.GeoJSON();
var features_kommuneplan_6 = format_kommuneplan_6.readFeatures(json_kommuneplan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_6.addFeatures(features_kommuneplan_6);
var lyr_kommuneplan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_6, 
                style: style_kommuneplan_6,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_6.png" /> kommuneplan'
            });
var format_Havne_7 = new ol.format.GeoJSON();
var features_Havne_7 = format_Havne_7.readFeatures(json_Havne_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havne_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havne_7.addFeatures(features_Havne_7);
var lyr_Havne_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Havne_7, 
                style: style_Havne_7,
                popuplayertitle: 'Havne',
                interactive: true,
                title: '<img src="styles/legend/Havne_7.png" /> Havne'
            });
var format_Folkeskoler_8 = new ol.format.GeoJSON();
var features_Folkeskoler_8 = format_Folkeskoler_8.readFeatures(json_Folkeskoler_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_8.addFeatures(features_Folkeskoler_8);
var lyr_Folkeskoler_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_8, 
                style: style_Folkeskoler_8,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_8.png" /> Folkeskoler'
            });
var format_Tankstationer_9 = new ol.format.GeoJSON();
var features_Tankstationer_9 = format_Tankstationer_9.readFeatures(json_Tankstationer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tankstationer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tankstationer_9.addFeatures(features_Tankstationer_9);
var lyr_Tankstationer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tankstationer_9, 
                style: style_Tankstationer_9,
                popuplayertitle: 'Tankstationer',
                interactive: true,
                title: '<img src="styles/legend/Tankstationer_9.png" /> Tankstationer'
            });
var format_Supermarkeder_10 = new ol.format.GeoJSON();
var features_Supermarkeder_10 = format_Supermarkeder_10.readFeatures(json_Supermarkeder_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder_10.addFeatures(features_Supermarkeder_10);
var lyr_Supermarkeder_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder_10, 
                style: style_Supermarkeder_10,
                popuplayertitle: 'Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder_10.png" /> Supermarkeder'
            });
var format_Sundhed_11 = new ol.format.GeoJSON();
var features_Sundhed_11 = format_Sundhed_11.readFeatures(json_Sundhed_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sundhed_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sundhed_11.addFeatures(features_Sundhed_11);
var lyr_Sundhed_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sundhed_11, 
                style: style_Sundhed_11,
                popuplayertitle: 'Sundhed',
                interactive: true,
                title: '<img src="styles/legend/Sundhed_11.png" /> Sundhed'
            });
var format_Brnehaver_12 = new ol.format.GeoJSON();
var features_Brnehaver_12 = format_Brnehaver_12.readFeatures(json_Brnehaver_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_12.addFeatures(features_Brnehaver_12);
var lyr_Brnehaver_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_12, 
                style: style_Brnehaver_12,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_12.png" /> Børnehaver'
            });
var format_Apoteker_13 = new ol.format.GeoJSON();
var features_Apoteker_13 = format_Apoteker_13.readFeatures(json_Apoteker_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apoteker_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apoteker_13.addFeatures(features_Apoteker_13);
var lyr_Apoteker_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apoteker_13, 
                style: style_Apoteker_13,
                popuplayertitle: 'Apoteker',
                interactive: true,
                title: '<img src="styles/legend/Apoteker_13.png" /> Apoteker'
            });
var format_Togstationer_14 = new ol.format.GeoJSON();
var features_Togstationer_14 = format_Togstationer_14.readFeatures(json_Togstationer_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_14.addFeatures(features_Togstationer_14);
var lyr_Togstationer_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_14, 
                style: style_Togstationer_14,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_14.png" /> Togstationer'
            });
var format_Bager_15 = new ol.format.GeoJSON();
var features_Bager_15 = format_Bager_15.readFeatures(json_Bager_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bager_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bager_15.addFeatures(features_Bager_15);
var lyr_Bager_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bager_15, 
                style: style_Bager_15,
                popuplayertitle: 'Bager',
                interactive: true,
                title: '<img src="styles/legend/Bager_15.png" /> Bager'
            });
var format_Svmmehal_16 = new ol.format.GeoJSON();
var features_Svmmehal_16 = format_Svmmehal_16.readFeatures(json_Svmmehal_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Svmmehal_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Svmmehal_16.addFeatures(features_Svmmehal_16);
var lyr_Svmmehal_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Svmmehal_16, 
                style: style_Svmmehal_16,
                popuplayertitle: 'Svømmehal',
                interactive: true,
                title: '<img src="styles/legend/Svmmehal_16.png" /> Svømmehal'
            });
var format_Legeplads_17 = new ol.format.GeoJSON();
var features_Legeplads_17 = format_Legeplads_17.readFeatures(json_Legeplads_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_17.addFeatures(features_Legeplads_17);
var lyr_Legeplads_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_17, 
                style: style_Legeplads_17,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_17.png" /> Legeplads'
            });
var format_Ungdomsuddannelser_18 = new ol.format.GeoJSON();
var features_Ungdomsuddannelser_18 = format_Ungdomsuddannelser_18.readFeatures(json_Ungdomsuddannelser_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ungdomsuddannelser_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ungdomsuddannelser_18.addFeatures(features_Ungdomsuddannelser_18);
var lyr_Ungdomsuddannelser_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ungdomsuddannelser_18, 
                style: style_Ungdomsuddannelser_18,
                popuplayertitle: 'Ungdomsuddannelser',
                interactive: true,
                title: '<img src="styles/legend/Ungdomsuddannelser_18.png" /> Ungdomsuddannelser'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Frededeomrder_1.setVisible(true);lyr_Lokalplanforslag_2.setVisible(true);lyr_Lokalplanvedtaget_3.setVisible(true);lyr_Strandbeskyttelse_4.setVisible(true);lyr_Kulturbeskyttedeomrder_5.setVisible(true);lyr_kommuneplan_6.setVisible(true);lyr_Havne_7.setVisible(true);lyr_Folkeskoler_8.setVisible(true);lyr_Tankstationer_9.setVisible(true);lyr_Supermarkeder_10.setVisible(true);lyr_Sundhed_11.setVisible(true);lyr_Brnehaver_12.setVisible(true);lyr_Apoteker_13.setVisible(true);lyr_Togstationer_14.setVisible(true);lyr_Bager_15.setVisible(true);lyr_Svmmehal_16.setVisible(true);lyr_Legeplads_17.setVisible(true);lyr_Ungdomsuddannelser_18.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Frededeomrder_1,lyr_Lokalplanforslag_2,lyr_Lokalplanvedtaget_3,lyr_Strandbeskyttelse_4,lyr_Kulturbeskyttedeomrder_5,lyr_kommuneplan_6,lyr_Havne_7,lyr_Folkeskoler_8,lyr_Tankstationer_9,lyr_Supermarkeder_10,lyr_Sundhed_11,lyr_Brnehaver_12,lyr_Apoteker_13,lyr_Togstationer_14,lyr_Bager_15,lyr_Svmmehal_16,lyr_Legeplads_17,lyr_Ungdomsuddannelser_18];
lyr_Frededeomrder_1.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Lokalplanforslag_2.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanvedtaget_3.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Strandbeskyttelse_4.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_Kulturbeskyttedeomrder_5.set('fieldAliases', {'fid': 'fid', 'lokalitet_': 'lokalitet_', 'systemnr': 'systemnr', 'stednr': 'stednr', 'loknr': 'loknr', 'sbext': 'sbext', 'frednr': 'frednr', 'anlaegstyp': 'anlaegstyp', 'datering': 'datering', 'zone': 'zone', 'url': 'url', });
lyr_kommuneplan_6.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Havne_7.set('fieldAliases', {'havne_id': 'havne_id', 'navn': 'navn', 'erhvervsha': 'erhvervsha', 'lystbaadeh': 'lystbaadeh', 'bredde': 'bredde', 'laengde': 'laengde', 'x': 'x', 'y': 'y', 'type': 'type', 'typetekst': 'typetekst', 'mst_id': 'mst_id', 'distr_id': 'distr_id', 'ho_id': 'ho_id', 'link': 'link', });
lyr_Folkeskoler_8.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Tankstationer_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Supermarkeder_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sundhed_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'navn': 'navn', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Brnehaver_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Apoteker_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bager_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Svmmehal_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ungdomsuddannelser_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Frededeomrder_1.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Lokalplanforslag_2.set('fieldImages', {'fid': 'TextEdit', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanvedtaget_3.set('fieldImages', {'fid': 'TextEdit', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Strandbeskyttelse_4.set('fieldImages', {'fid': '', 'forretningshaendelse': '', 'senesteSagLokalId': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalId': '', 'paataenktHandling': '', 'registreringFra': '', 'virkningFra': '', 'virkningsaktoer': '', 'temaFladeID': '', 'tematype': '', 'jordstykkeLokalId': '', });
lyr_Kulturbeskyttedeomrder_5.set('fieldImages', {'fid': 'TextEdit', 'lokalitet_': 'TextEdit', 'systemnr': 'TextEdit', 'stednr': 'TextEdit', 'loknr': 'TextEdit', 'sbext': 'TextEdit', 'frednr': 'TextEdit', 'anlaegstyp': 'TextEdit', 'datering': 'TextEdit', 'zone': 'TextEdit', 'url': 'TextEdit', });
lyr_kommuneplan_6.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Havne_7.set('fieldImages', {'havne_id': 'TextEdit', 'navn': 'TextEdit', 'erhvervsha': 'TextEdit', 'lystbaadeh': 'TextEdit', 'bredde': 'TextEdit', 'laengde': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'type': 'TextEdit', 'typetekst': 'TextEdit', 'mst_id': 'TextEdit', 'distr_id': 'TextEdit', 'ho_id': 'TextEdit', 'link': 'TextEdit', });
lyr_Folkeskoler_8.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Tankstationer_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Supermarkeder_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Sundhed_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'navn': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Brnehaver_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Apoteker_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Togstationer_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Bager_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Svmmehal_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Legeplads_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ungdomsuddannelser_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Frededeomrder_1.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Lokalplanforslag_2.set('fieldLabels', {'fid': 'hidden field', 'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'hidden field', 'doklink': 'inline label - always visible', 'anvendelse': 'hidden field', });
lyr_Lokalplanvedtaget_3.set('fieldLabels', {'fid': 'hidden field', 'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'hidden field', 'doklink': 'inline label - always visible', 'anvendelse': 'hidden field', });
lyr_Strandbeskyttelse_4.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_Kulturbeskyttedeomrder_5.set('fieldLabels', {'fid': 'hidden field', 'lokalitet_': 'hidden field', 'systemnr': 'hidden field', 'stednr': 'hidden field', 'loknr': 'hidden field', 'sbext': 'hidden field', 'frednr': 'hidden field', 'anlaegstyp': 'hidden field', 'datering': 'hidden field', 'zone': 'hidden field', 'url': 'hidden field', });
lyr_kommuneplan_6.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'id': 'inline label - always visible', 'planid': 'inline label - always visible', 'objektkode': 'inline label - always visible', 'komnr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datoforsl': 'hidden field', 'datovedt': 'hidden field', 'datoaflyst': 'hidden field', 'datoikraft': 'hidden field', 'datoslut': 'hidden field', 'aktuel': 'hidden field', 'datooprt': 'hidden field', 'datoopdt': 'hidden field', 'status': 'hidden field', 'datostart': 'hidden field', 'glkomnr': 'hidden field', 'kommunenavn': 'hidden field', 'glkomnavn': 'hidden field', 'glkomnavn_besk': 'hidden field', });
lyr_Havne_7.set('fieldLabels', {'havne_id': 'hidden field', 'navn': 'inline label - always visible', 'erhvervsha': 'inline label - always visible', 'lystbaadeh': 'inline label - always visible', 'bredde': 'hidden field', 'laengde': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'type': 'hidden field', 'typetekst': 'hidden field', 'mst_id': 'hidden field', 'distr_id': 'hidden field', 'ho_id': 'hidden field', 'link': 'hidden field', });
lyr_Folkeskoler_8.set('fieldLabels', {'Skolenavn': 'inline label - visible with data', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Tankstationer_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Supermarkeder_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Sundhed_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'navn': 'hidden field', });
lyr_Brnehaver_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Apoteker_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Togstationer_14.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Bager_15.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Svmmehal_16.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Legeplads_17.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Ungdomsuddannelser_18.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Ungdomsuddannelser_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});