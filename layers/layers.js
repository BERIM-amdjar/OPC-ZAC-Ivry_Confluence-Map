var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Rseauxprojets_0 = new ol.format.GeoJSON();
var features_Rseauxprojets_0 = format_Rseauxprojets_0.readFeatures(json_Rseauxprojets_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseauxprojets_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rseauxprojets_0.addFeatures(features_Rseauxprojets_0);var lyr_Rseauxprojets_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rseauxprojets_0, 
                style: style_Rseauxprojets_0,
    title: 'Réseaux projetés<br />\
    <img src="styles/legend/Rseauxprojets_0_0.png" /> BER_PR_ASS_EP_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_1.png" /> BER_PR_ASS_EU_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_2.png" /> BER_PR_ASS_UN_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_3.png" /> BER_PR_Chauffage_OUV_ Feeder 3<br />\
    <img src="styles/legend/Rseauxprojets_0_4.png" /> BER_PR_Chaufferie Geothermal<br />\
    <img src="styles/legend/Rseauxprojets_0_5.png" /> BER_PR_CHU_EDOUARD-TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_6.png" /> BER_PR_CHU_OUV_TR1 a realiser<br />\
    <img src="styles/legend/Rseauxprojets_0_7.png" /> BER_PR_CHU_OUV_TR1 realisÃ©<br />\
    <img src="styles/legend/Rseauxprojets_0_8.png" /> BER_PR_CHU_TRACE TR2<br />\
    <img src="styles/legend/Rseauxprojets_0_9.png" /> BER_PR_CHU_TRACE TR3<br />\
    <img src="styles/legend/Rseauxprojets_0_10.png" /> BER_PR_CHU_Tube Aller<br />\
    <img src="styles/legend/Rseauxprojets_0_11.png" /> BER_PR_CHU_TXT TR3<br />\
    <img src="styles/legend/Rseauxprojets_0_12.png" /> BER_PR_ECL_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_13.png" /> BER_PR_ELE_ECL_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_14.png" /> BER_PR_ELE_EDF-BT_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_15.png" /> BER_PR_ELE_EDF-BT-reprise-ex_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_16.png" /> BER_PR_ELE_EDF-HT_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_17.png" /> BER_PR_ELE-BTA_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_18.png" /> BER_PR_TEL_SIPPEREC_TRACE<br />\
    <img src="styles/legend/Rseauxprojets_0_19.png" /> BER_PR_Tubes RCU solution 1<br />'
        });var format_LOTsconstruction_1 = new ol.format.GeoJSON();
var features_LOTsconstruction_1 = format_LOTsconstruction_1.readFeatures(json_LOTsconstruction_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTsconstruction_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LOTsconstruction_1.addFeatures(features_LOTsconstruction_1);var lyr_LOTsconstruction_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTsconstruction_1, 
                style: style_LOTsconstruction_1,
    title: 'LOTs construction<br />\
    <img src="styles/legend/LOTsconstruction_1_0.png" /> Phase 2<br />\
    <img src="styles/legend/LOTsconstruction_1_1.png" /> Phase 3<br />\
    <img src="styles/legend/LOTsconstruction_1_2.png" /> <br />'
        });var format_Info_2 = new ol.format.GeoJSON();
var features_Info_2 = format_Info_2.readFeatures(json_Info_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Info_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Info_2.addFeatures(features_Info_2);var lyr_Info_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Info_2, 
                style: style_Info_2,
                title: '<img src="styles/legend/Info_2.png" /> Info'
            });var format_Rseauxexistants_3 = new ol.format.GeoJSON();
var features_Rseauxexistants_3 = format_Rseauxexistants_3.readFeatures(json_Rseauxexistants_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseauxexistants_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rseauxexistants_3.addFeatures(features_Rseauxexistants_3);var lyr_Rseauxexistants_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rseauxexistants_3, 
                style: style_Rseauxexistants_3,
    title: 'Réseaux existants<br />\
    <img src="styles/legend/Rseauxexistants_3_0.png" /> BER_EX_AEP_DISTR_VEOLIA_SUPPRIME<br />\
    <img src="styles/legend/Rseauxexistants_3_1.png" /> BER_EX_AEP_DISTR_VEOLIA_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_2.png" /> BER_EX_AEP_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_3.png" /> BER_EX_AEP_TRANS_SAGEP_ABANDONNE<br />\
    <img src="styles/legend/Rseauxexistants_3_4.png" /> BER_EX_AEP_TRANS_SAGEP_AXE GALERIE<br />\
    <img src="styles/legend/Rseauxexistants_3_5.png" /> BER_EX_AEP_TRANS_SAGEP_GABARIT<br />\
    <img src="styles/legend/Rseauxexistants_3_6.png" /> BER_EX_AEP_TRANS_SAGEP_GABARIT GALERIE<br />\
    <img src="styles/legend/Rseauxexistants_3_7.png" /> BER_EX_AEP_TRANS_SEDIF_GABARIT<br />\
    <img src="styles/legend/Rseauxexistants_3_8.png" /> BER_EX_AEP_TRANS_SEDIF_ZONE INCONSTRUCTIBLE<br />\
    <img src="styles/legend/Rseauxexistants_3_9.png" /> BER_EX_AEP_VEOLIA<br />\
    <img src="styles/legend/Rseauxexistants_3_10.png" /> BER_EX_ARR_CH DISCO<br />\
    <img src="styles/legend/Rseauxexistants_3_11.png" /> BER_EX_ARR_PRIM_40MM<br />\
    <img src="styles/legend/Rseauxexistants_3_12.png" /> BER_EX_ARR_PRIM_50MM<br />\
    <img src="styles/legend/Rseauxexistants_3_13.png" /> BER_EX_ARR_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_14.png" /> BER_EX_CHU_CPCU_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_15.png" /> BER_EX_ELE_ECL_A supprimer_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_16.png" /> BER_EX_ELE_ECL_supprimer_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_17.png" /> BER_EX_ELE_ECL_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_18.png" /> BER_EX_ELE_EDF-BT_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_19.png" /> BER_EX_ELE_EDF-BT_TRACE-Aband<br />\
    <img src="styles/legend/Rseauxexistants_3_20.png" /> BER_EX_ELE_EDF-HT_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_21.png" /> BER_EX_ELE_EDF-POSTE TRANSFO-BT-HT<br />\
    <img src="styles/legend/Rseauxexistants_3_22.png" /> BER_EX_ELE_RATP_FRX<br />\
    <img src="styles/legend/Rseauxexistants_3_23.png" /> BER_EX_ELE_RATP_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_24.png" /> BER_EX_ELE_RATP-Aband_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_25.png" /> BER_EX_ELE_RTE_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_26.png" /> BER_EX_ELE_RTE-225Kv_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_27.png" /> BER_EX_ELE_RTE-63Kv_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_28.png" /> BER_EX_ELE_RTE-Abandon_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_29.png" /> BER_EX_ELE_SLT_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_30.png" /> BER_EX_ELE_SNCF-05Kv_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_31.png" /> BER_EX_ELE_SNCF-20Kv_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_32.png" /> BER_EX_ELE-RTE_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_33.png" /> BER_EX_GAZ_Grdf_BP-ABANDON_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_34.png" /> BER_EX_GAZ_Grdf-BP_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_35.png" /> BER_EX_GAZ_Grdf-MP_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_36.png" /> BER_EX_GAZ_Grdf-MP-ABANDON_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_37.png" /> BER_EX_GAZ_GrtGAZ_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_38.png" /> BER_EX_GAZ_GrtGAZ-Servitude_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_39.png" /> BER_EX_GAZ_TRAPIL_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_40.png" /> BER_EX_GAZ_TRAPIL-SERVITUDE_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_41.png" /> BER_EX_TEL_FT_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_42.png" /> BER_EX_TEL_FT-AERIEN_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_43.png" /> BER_EX_TEL_FT-Servitude_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_44.png" /> BER_EX_TEL_FT-Trans_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_45.png" /> BER_EX_TEL_IRISE_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_46.png" /> BER_EX_TEL_Level3_trace<br />\
    <img src="styles/legend/Rseauxexistants_3_47.png" /> BER_EX_TEL_NUM-Dist_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_48.png" /> BER_EX_TEL_NUM-Trans_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_49.png" /> BER_EX_TEL_SIPARTECH_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_50.png" /> BER_EX_TEL-Free_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_51.png" /> BER_REC-1_ELE_ECL_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_52.png" /> BER_REC-1_ELE_EDF-BT_FRX<br />\
    <img src="styles/legend/Rseauxexistants_3_53.png" /> BER_REC-1_ELE_EDF-BT_OUV<br />\
    <img src="styles/legend/Rseauxexistants_3_54.png" /> BER_REC-1_ELE_EDF-BT_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_55.png" /> BER_REC-1_ELE_EDF-HT_OUV<br />\
    <img src="styles/legend/Rseauxexistants_3_56.png" /> BER_REC-1_ELE_EDF-HT_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_57.png" /> BER_REC-1_ELE_EDF-SUPPRESSION_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_58.png" /> BER_REC-1_ELE_M4_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_59.png" /> BER_REC-1_ELE_RATP_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_60.png" /> BER_REC-1_ELE_RATP-Suppr_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_61.png" /> BER_REC1_ELE_RTE_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_62.png" /> BER_REC-1_ELE_RTE-225Kv_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_63.png" /> BER_REC-1_ELE_RTE-63Kv_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_64.png" /> BER_REC-1_ELE_RTE-Suppr_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_65.png" /> BER_REC-1_ELE_SLT_supprimer_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_66.png" /> BER_REC-1_ELE_SLT_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_67.png" /> BER_REC-1_TEL_DOSTIC_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_68.png" /> BER_REC-1_TEL_FT_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_69.png" /> BER_REC-1_TEL_PARCIVAL_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_70.png" /> BER_REC-1_TEL_SIPP_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_71.png" /> BER_REC-1_TEL_TELZEN_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_72.png" /> BER_REC-2_ELE_ECL_TRACE<br />\
    <img src="styles/legend/Rseauxexistants_3_73.png" /> BER_REC-2_TEL_FT_TRACE<br />'
        });

lyr_Rseauxprojets_0.setVisible(true);lyr_LOTsconstruction_1.setVisible(true);lyr_Info_2.setVisible(true);lyr_Rseauxexistants_3.setVisible(true);
var layersList = [baseLayer,lyr_Rseauxprojets_0,lyr_LOTsconstruction_1,lyr_Info_2,lyr_Rseauxexistants_3];
lyr_Rseauxprojets_0.set('fieldAliases', {'Layer': 'Layer', });
lyr_LOTsconstruction_1.set('fieldAliases', {'Layer': 'Layer', 'Phase': 'Phase', });
lyr_Info_2.set('fieldAliases', {'Info': 'Info', });
lyr_Rseauxexistants_3.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Rseauxprojets_0.set('fieldImages', {'Layer': 'TextEdit', });
lyr_LOTsconstruction_1.set('fieldImages', {'Layer': 'TextEdit', 'Phase': 'ValueMap', });
lyr_Info_2.set('fieldImages', {'Info': 'TextEdit', });
lyr_Rseauxexistants_3.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Rseauxprojets_0.set('fieldLabels', {'Layer': 'no label', });
lyr_LOTsconstruction_1.set('fieldLabels', {'Layer': 'no label', 'Phase': 'no label', });
lyr_Info_2.set('fieldLabels', {'Info': 'no label', });
lyr_Rseauxexistants_3.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Rseauxexistants_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});