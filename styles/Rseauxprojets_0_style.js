var size = 0;
var placement = 'point';
function categories_Rseauxprojets_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'BER_PR_ASS_EP_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(12,201,12,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_ASS_EU_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(185,210,38,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_ASS_UN_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(64,223,112,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_Chauffage_OUV_ Feeder 3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,95,201,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_Chaufferie Geothermal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(206,92,47,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_CHU_EDOUARD-TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,96,231,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_CHU_OUV_TR1 a realiser':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(38,209,186,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_CHU_OUV_TR1 realisÃ©':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(183,56,205,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_CHU_TRACE TR2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,167,119,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_CHU_TRACE TR3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(135,214,31,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_CHU_Tube Aller':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,74,222,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_CHU_TXT TR3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,171,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_ECL_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,187,21,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_ELE_ECL_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(41,222,147,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_ELE_EDF-BT_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,44,148,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_ELE_EDF-BT-reprise-ex_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(208,101,131,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_ELE_EDF-HT_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,212,232,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_ELE-BTA_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,65,214,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_TEL_SIPPEREC_TRACE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(216,88,88,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BER_PR_Tubes RCU solution 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(144,218,115,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Rseauxprojets_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Layer");
    var labelText = "";
    size = 0;
    var labelFont = "6.5px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Layer") !== null && resolution > 0 && resolution < 0) {
        labelText = String(feature.get("Layer"));
    }
    
var style = categories_Rseauxprojets_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
