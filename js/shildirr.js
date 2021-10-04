var agoconcarrirr = [0, -9, -8, -7, -6];
var affirr= document.getElementById("affirrslider").defaultValue;
var effirr = document.getElementById("effirrslider").defaultValue;
var denirr = document.getElementById("denirrslider").defaultValue;
var efficirr = document.getElementById("efficiirrslider").defaultValue;
var agoaffirr = document.getElementById("agoaffirrnum").defaultValue;
var agoafflogirr = document.getElementById("agoafflogirrnum").defaultValue;
var efflevelirr = document.getElementById("efflevelirr").defaultValue;
document.getElementById("displayeffectirr").innerHTML = (efflevelirr*100).toFixed(2);
document.getElementById("efftableirr").innerHTML = (efflevelirr*100).toFixed(2);
var isPointValidirr = [true, false, false, false];


var antval0irr = document.getElementById("ant0irr").defaultValue;
var antval1irr = document.getElementById("ant1irr").defaultValue;
var antval2irr = document.getElementById("ant2irr").defaultValue;
var antval3irr = document.getElementById("ant3irr").defaultValue;
var antval4irr = document.getElementById("ant4irr").defaultValue;
var antlogval1irr = document.getElementById("antlog1irr").defaultValue;
var antlogval2irr = document.getElementById("antlog2irr").defaultValue;
var antlogval3irr = document.getElementById("antlog3irr").defaultValue;
var antlogval4irr = document.getElementById("antlog4irr").defaultValue;
var irrHalfMaxEffect;


$(document).ready(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.visibility = "visible";
    document.getElementById("page").style.position = "relative";
    document.getElementById("footer").style.visibility = "visible";
  })
  
var animation = {
      transition: {
          duration: 0,
          easing: "cubic-in-out"
      },
      frame: {
          duration: 0,
          redraw: false,
   }
}

//new vars
var dotsize = 10 // defines 50% dot size

//
function titleIrr(){
    document.getElementById("tabtitle").innerHTML = "Schild Plot Generator for Irreversible Antagonist"
}
//
function findIrrHalfMaxEffect(lineData){
    irrHalfMaxEffect = Math.max.apply(Math, lineData[1]) * efflevelirr;
}
//
function calc50Irr(lineData){
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= irrHalfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [irrHalfMaxEffect]];
	return agoret; //return x, y
    
}
//
function resetQuantIrr(){
    agoconcarrirr = [0, -9, -8, -7, -6];
    affirr = document.getElementById("affirrslider").value = document.getElementById("affirrslider").defaultValue;
    effirr = document.getElementById("effirrslider").value = document.getElementById("effirrslider").defaultValue;
    denirr = document.getElementById("denirrslider").value = document.getElementById("denirrslider").defaultValue;
    efficirr = document.getElementById("efficiirrslider").value = document.getElementById("efficiirrslider").defaultValue;
    agoaffirr = document.getElementById("agoaffirrnum").value = document.getElementById("agoaffirrnum").defaultValue;
    agoafflogirr = document.getElementById("agoafflogirrnum").value = document.getElementById("agoafflogirrnum").defaultValue;
    efflevelirr = document.getElementById("efflevelirr").value = document.getElementById("efflevelirr").defaultValue;
    document.getElementById("displayeffectirr").innerHTML = (efflevelirr*100).toFixed(2);
    document.getElementById("efftableirr").innerHTML = (efflevelirr*100).toFixed(2);
    
    antval0irr = document.getElementById("ant0irr").value = document.getElementById("ant0irr").defaultValue;
    antval1irr = document.getElementById("ant1irr").value = document.getElementById("ant1irr").defaultValue;
    antval2irr = document.getElementById("ant2irr").value = document.getElementById("ant2irr").defaultValue;
    antval3irr = document.getElementById("ant3irr").value = document.getElementById("ant3irr").defaultValue;
    antval4irr = document.getElementById("ant4irr").value = document.getElementById("ant4irr").defaultValue;
    antlogval1irr = document.getElementById("antlog1irr").value = document.getElementById("antlog1irr").defaultValue;
    antlogval2irr = document.getElementById("antlog2irr").value = document.getElementById("antlog2irr").defaultValue;
    antlogval3irr = document.getElementById("antlog3irr").value = document.getElementById("antlog3irr").defaultValue;
    antlogval4irr = document.getElementById("antlog4irr").value = document.getElementById("antlog4irr").defaultValue;
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);

    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function graphAlertIrr(div){
    document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}
//
function graphRemoveAlertIrr(div){
    document.getElementById(div).innerHTML = ""
}
//
function checkSliderMinIrr(){
    let ret = false;
    if(document.getElementById("affirrslider").value == 4){
        ret = true
    }
    if(document.getElementById("effirrslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("denirrslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("efficiirrslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("effleveleff").value == 0){
        ret = true
    }
    return ret
}
//
function updateAffinityIrr(value){
    affirr = value;
    if(checkSliderMinIrr()){
        Plotly.restyle("quantitativeIrr", 'visible', false)
        graphAlert("quantalertIrr")
    }
    else{
        graphRemoveAlert("quantalertIrr")
        Plotly.restyle("quantitativeIrr", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
        findIrrHalfMaxEffect(lineData0);
        halfData0 = calc50Irr(lineData0);
        halfData1 = calc50Irr(lineData1);
        halfData2 = calc50Irr(lineData2);
        halfData3 = calc50Irr(lineData3);
        halfData4 = calc50Irr(lineData4);
        updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingIrr();
        Plotly.animate("quantitativeIrr",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
        Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateEfficacyIrr(value){
    effirr = value;
    if(checkSliderMinIrr()){
        Plotly.restyle("quantitativeIrr", 'visible', false)
        graphAlert("quantalertIrr")
    }
    else{
        graphRemoveAlert("quantalertIrr")
        Plotly.restyle("quantitativeIrr", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
        findIrrHalfMaxEffect(lineData0);
        halfData0 = calc50Irr(lineData0);
        halfData1 = calc50Irr(lineData1);
        halfData2 = calc50Irr(lineData2);
        halfData3 = calc50Irr(lineData3);
        halfData4 = calc50Irr(lineData4);
        updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingIrr();
        Plotly.animate("quantitativeIrr",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
        Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateDensityIrr(value){
    denirr = value;
    if(checkSliderMinIrr()){
        Plotly.restyle("quantitativeIrr", 'visible', false)
        graphAlert("quantalertIrr")
    }
    else{
        graphRemoveAlert("quantalertIrr")
        Plotly.restyle("quantitativeIrr", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
        findIrrHalfMaxEffect(lineData0);
        halfData0 = calc50Irr(lineData0);
        halfData1 = calc50Irr(lineData1);
        halfData2 = calc50Irr(lineData2);
        halfData3 = calc50Irr(lineData3);
        halfData4 = calc50Irr(lineData4);
        updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingIrr();
        Plotly.animate("quantitativeIrr",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
        Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateEfficiencyIrr(value){
    efficirr = value;
    if(checkSliderMinIrr()){
        Plotly.restyle("quantitativeIrr", 'visible', false)
        graphAlert("quantalertIrr")
    }
    else{
        graphRemoveAlert("quantalertIrr")
        Plotly.restyle("quantitativeIrr", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
        findIrrHalfMaxEffect(lineData0);
        halfData0 = calc50Irr(lineData0);
        halfData1 = calc50Irr(lineData1);
        halfData2 = calc50Irr(lineData2);
        halfData3 = calc50Irr(lineData3);
        halfData4 = calc50Irr(lineData4);
        updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingIrr();
        Plotly.animate("quantitativeIrr",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
        Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateAgoAffinityIrr(value){
    agoaffirr = value;
    agoafflogirr = -1*Math.log10(value);
    document.getElementById("agoafflogirrnum").value = agoafflogirr.toFixed(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateefflevelIrr(value){
    efflevelirr = value;
    document.getElementById("displayeffectirr").innerHTML = (efflevelirr*100).toFixed(2);
    document.getElementById("efftableirr").innerHTML = (efflevelirr*100).toFixed(2);
    if(checkSliderMinIrr()){
        Plotly.restyle("quantitativeIrr", 'visible', false)
        graphAlert("quantalertIrr")
    }
    else{
        graphRemoveAlert("quantalertIrr")
        Plotly.restyle("quantitativeIrr", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
        findIrrHalfMaxEffect(lineData0);
        halfData0 = calc50Irr(lineData0);
        halfData1 = calc50Irr(lineData1);
        halfData2 = calc50Irr(lineData2);
        halfData3 = calc50Irr(lineData3);
        halfData4 = calc50Irr(lineData4);
        updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingIrr();
        Plotly.animate("quantitativeIrr",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
        Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateAgoAffinityLogIrr(value){
    agoafflogirr = value;
    agoaffirr = Math.pow(10, -value);
    document.getElementById("agoaffirrnum").value = agoaffirr.toExponential(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateAntagonist1Irr(value){
    antval1irr = value;
    agoconcarrirr[1] = Math.log10(value);
    document.getElementById("antlog1irr").value = agoconcarrirr[1].toFixed(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateAntagonistLog1Irr(value){
    agoconcarrirr[1] = value;
    antval1irr = Math.pow(10, value);
    document.getElementById("ant1irr").value = antval1irr.toExponential(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist2Irr(value){
    antval2irr = value;
    agoconcarrirr[2] = Math.log10(value);
    document.getElementById("antlog2irr").value = agoconcarrirr[2].toFixed(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateAntagonistLog2Irr(value){
    agoconcarrirr[2] = value;
    antval2irr = Math.pow(10, value);
    document.getElementById("ant2irr").value = antval2irr.toExponential(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateAntagonist3Irr(value){
    antval3irr = value;
    agoconcarrirr[3] = Math.log10(value);
    document.getElementById("antlog3irr").value = agoconcarrirr[3].toFixed(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateAntagonistLog3Irr(value){
    agoconcarrirr[3] = value;
    antval3irr = Math.pow(10, value);
    document.getElementById("ant3irr").value = antval3irr.toExponential(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist4Irr(value){
    antval4irr = value;
    agoconcarrirr[4] = Math.log10(value);
    document.getElementById("antlog4irr").value = agoconcarrirr[4].toFixed(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateAntagonistLog4Irr(value){
    agoconcarrirr[4] = value;
    antval4irr = Math.pow(10, value);
    document.getElementById("ant4irr").value = antval4irr.toExponential(2);
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]);
    findIrrHalfMaxEffect(lineData0);
    halfData0 = calc50Irr(lineData0);
    halfData1 = calc50Irr(lineData1);
    halfData2 = calc50Irr(lineData2);
    halfData3 = calc50Irr(lineData3);
    halfData4 = calc50Irr(lineData4);
    updateValidIrr(halfData1, halfData2, halfData3, halfData4);
    
    updateEverythingIrr();
    Plotly.animate("quantitativeIrr",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildIrr(agoconcarrirr[1], agoconcarrirr[2], agoconcarrirr[3], agoconcarrirr[4], logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    Plotly.animate("schildIrr",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function calcAgoHalfEffectIrr(affinity, efficacy, recepDensity, efficiency, agoaffinity, antagconc){
    /** 
    var ago;
    var affin = 10**(-1*affinity); //Ka
    var efcay = 10**efficacy;  // E
    var recep = 10**recepDensity; //RT
    var efcey = 10**efficiency; // SA
    var agoaffin = 10**(-1*agoaffinity); //Kb
    //var antconc = antagconc; //[B]
    //console.log(((efcay*recep*efcey*1)-(irrHalfMaxEffect*((efcay*recep*efcey*1)+ 1 - efcay + (antconc/agoaffin)))));
    //past equation
    //ago = (irrHalfMaxEffect*(affin*(1+antconc/agoaffin)))/((efcay*recep*efcey*100)-(irrHalfMaxEffect*(efcay*recep*efcey+1)));
    //equation A3A
    //ago = (irrHalfMaxEffect*affin)/((efcay*recep*efcey*100)-(irrHalfMaxEffect*((efcay*recep*efcey*100)+ 1 - efcay + (antconc/agoaffin))));
    // equation A3
    ago = ( (affin*irrHalfMaxEffect) + ( (affin*irrHalfMaxEffect*antconc)/(agoaffinity) ) )/( (efcay*recep*efcey*100) - irrHalfMaxEffect*(1+(efcay*recep*efcey*100)-efcay+(antconc/agoaffin)));
    return ago;
    */
    var ago
    var lineData = calcLinesIrr(affinity, efficacy, recepDensity, efficiency, agoaffinity, antagconc);
    findIrrHalfMaxEffect(calcLinesIrr(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoconcarrirr[0]));
    var data50 = calc50Irr(lineData);
    //console.log(10**data50[0]);
    if(10**data50[0] == 1){
        ago = NaN;
        //console.log("undefine dectected")
    }
    else{
        ago = 10**(data50[0]);
    }
    return ago;
}
//
function calcDoseRatioIrr(presant, absant){
    var doserat;
    doserat = presant/absant;
    return doserat;
}
//
function calcLogDRIrr(doseratio){
    var logdr;
    logdr = Math.log(doseratio-1);
    return logdr;
}
//
function updateEverythingIrr(){
    anthalfeff0irr = document.getElementById("anteff0irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]).toExponential(2);
    anthalfeff1irr = document.getElementById("anteff1irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]).toExponential(2);
    anthalfeff2irr = document.getElementById("anteff2irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]).toExponential(2);
    anthalfeff3irr = document.getElementById("anteff3irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]).toExponential(2);
    anthalfeff4irr = document.getElementById("anteff4irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]).toExponential(2);
    
    doseratio1irr = document.getElementById("antdose1irr").value = calcDoseRatioIrr(anthalfeff1irr, anthalfeff0irr).toFixed(2);
    doseratio2irr = document.getElementById("antdose2irr").value = calcDoseRatioIrr(anthalfeff2irr, anthalfeff0irr).toFixed(2);
    doseratio3irr = document.getElementById("antdose3irr").value = calcDoseRatioIrr(anthalfeff3irr, anthalfeff0irr).toFixed(2);
    doseratio4irr = document.getElementById("antdose4irr").value = calcDoseRatioIrr(anthalfeff4irr, anthalfeff0irr).toFixed(2);
    
    logdr1irr = document.getElementById("antlogdr1irr").value = calcLogDRIrr(doseratio1irr).toFixed(2);
    logdr2irr = document.getElementById("antlogdr2irr").value = calcLogDRIrr(doseratio2irr).toFixed(2);
    logdr3irr = document.getElementById("antlogdr3irr").value = calcLogDRIrr(doseratio3irr).toFixed(2);
    logdr4irr = document.getElementById("antlogdr4irr").value = calcLogDRIrr(doseratio4irr).toFixed(2);

    updateSchildPropertyTableIrr();
}
//
function calcLinesIrr(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoconcentration) {
    const STEP = 0.01;
    var data = [[], []];
    //Inverse log input values

    var affin = 10 ** (-1 * affinity);
    var efcay = 10 ** efficacy;
    var recep = 10 ** recepDensity;
    var efcey = 10 ** efficiency;
    var agoaffin = 10 ** (-1 * agoaffinity);

    if (agoconcentration == 0) {
        agoconc = 0;
        agoaffin = 0;
        for (i = -12; i < -2; i = i + STEP) {
            data[0].push(i);
            data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin));
        }
    }
    else {
        agoconc = 10 ** agoconcentration;
        for (i = -12; i < -2; i = i + STEP) {
            data[0].push(i);
            data[1].push((((10 ** i)) * efcay * recep * efcey * 100) / (((10 ** i)) * (efcay * recep * efcey + 1 - efcay + (agoconc / agoaffin)) + affin));
        }
    }

    return data;
}

var linecoloursirr = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#ff0000"]
//
function plotGraphIrr(chart){
    var layout = {
        height:372,
        width:450,
        xaxis:{
            title: "[Agonist] (log M)",
            showline: true,
            range: [-12,-2],
            dtick: 1
        },
        yaxis:{
            title: "Effect (% Emax)",
            showline: true,
            range: [0,100],
            tickvals: [0,20,40,60,80,100],
            dtick: 10
        }
    }
    var j;

    for(j = 0; j<5; j++){
    	var data = []
    	var lineData = calcLinesIrr(affirr, effirr, denirr, efficirr, agoafflogirr, agoconcarrirr[j])
   		if(j==0){
			var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 0+"nM",
                line: {
                    color: linecoloursirr[j],
                    width: 1
                },
                showlegend: false
    		}
   		}
   		else{
    	var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 10**agoconcarrirr[j]*1000000000+"nM",
                line: {
                    color: linecoloursirr[j],
                    width: 1
                },
                showlegend: false
    		}
    	}
    	data.push(graph);
    	Plotly.plot(chart,data,layout, {responsive: true});
	}
    var i;
    legendview = [true, false, false, false, false]
    for(i = 0; i<5; i++){
        var halfData = calcLinesIrr(affirr, effirr, denirr, efficirr, agoafflogirr, agoconcarrirr[i]);
        findIrrHalfMaxEffect(calcLinesIrr(affirr, effirr, denirr, efficirr, agoafflogirr, agoconcarrirr[0]));
        data50 = calc50Irr(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "EC Value",
            marker: {
                color: "red",
                size: dotsize,
                line: {
                    color: 'black',
                    width: 1
                  }
            },
            showlegend: legendview[i]
        }];
        Plotly.plot(chart,trace1,layout, {responsive: true});
    }
}
//
plotGraphIrr("quantitativeIrr");

var anthalfeff0irr = document.getElementById("anteff0irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[0]).toExponential(2);
var anthalfeff1irr = document.getElementById("anteff1irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[1]).toExponential(2);
var anthalfeff2irr = document.getElementById("anteff2irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[2]).toExponential(2);
var anthalfeff3irr = document.getElementById("anteff3irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[3]).toExponential(2);
var anthalfeff4irr = document.getElementById("anteff4irr").value = calcAgoHalfEffectIrr(affirr,effirr,denirr,efficirr,agoafflogirr, agoconcarrirr[4]).toExponential(2);

var doseratio1irr = document.getElementById("antdose1irr").value = calcDoseRatioIrr(anthalfeff1irr, anthalfeff0irr).toFixed(2);
var doseratio2irr = document.getElementById("antdose2irr").value = calcDoseRatioIrr(anthalfeff2irr, anthalfeff0irr).toFixed(2);
var doseratio3irr = document.getElementById("antdose3irr").value = calcDoseRatioIrr(anthalfeff3irr, anthalfeff0irr).toFixed(2);
var doseratio4irr = document.getElementById("antdose4irr").value = calcDoseRatioIrr(anthalfeff4irr, anthalfeff0irr).toFixed(2);

var logdr1irr = document.getElementById("antlogdr1irr").value = calcLogDRIrr(doseratio1irr).toFixed(2);
var logdr2irr = document.getElementById("antlogdr2irr").value = calcLogDRIrr(doseratio2irr).toFixed(2);
var logdr3irr = document.getElementById("antlogdr3irr").value = calcLogDRIrr(doseratio3irr).toFixed(2);
var logdr4irr = document.getElementById("antlogdr4irr").value = calcLogDRIrr(doseratio4irr).toFixed(2);

updateSchildPropertyTableIrr();

function updateValidIrr(data0, data1, data2, data3){
    var validdata = [data0[0], data1[0], data2[0], data3[0]];

    for(i = 0; i<4; i++){
        if(validdata[i]>=-12 && validdata[i]<=-2){
            isPointValidirr[i] = true;
        }
        else{
            isPointValidirr[i] = false;
        }
    }
}

function calcSchildIrr(logval1,logval2, logval3, logval4, dr1, dr2, dr3, dr4){ //add 3 other concentrations as args
    var data = [[],[]];
	var allxLogs = [logval1, logval2, logval3, logval4] //x values for the schild
	var alllogDr1 = [dr1, dr2, dr3, dr4]
    var xLogs = [];
    var logDr1 = [];
    var j = 0;

    for(i = 0; i<4; i++){
        if(isPointValidirr[i]){
            xLogs[j] =  allxLogs[i];
            logDr1[j] = alllogDr1[i];
            j++;
        }
    }

	data[0] = xLogs;
	data[1] = logDr1;

    return data;

}

function plotSchildIrr(chart){
	var layout = {
        height:403,
        width:450,
        xaxis:{
            title: "Log [Antagonist] (log M)",
            showline: true,
            range: [-11,-4],
            
        },
        yaxis:{
            title: "Log(DR-1)",
            showline: true,
            range: [0,4],
            tickvals: [0, 1, 2, 3, 4]

        },
	}	
	var data = []

    var lineData = calcSchildIrr(antlogval1irr, antlogval2irr, antlogval3irr, antlogval4irr, logdr1irr, logdr2irr, logdr3irr, logdr4irr);
	var trace1 = {
		x: lineData[0],
		y: lineData[1],
		mode: 'lines+markers',
        name: 'Real Line',
		line: {
			width: 1
		}
	}
	data.push(trace1);

    //Add a ideal line on Schild plot.
    var lineData2 = calcSchildIrr(antlogval1irr, antlogval2irr, antlogval3irr, antlogval4irr, logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    for (i = 0; i < lineData2[1].length; i++){
        lineData2[1][i] = Number(lineData2[0][i]) + 9;
        //console.log("loop exed");
    }
    var trace2 = {
        x: lineData2[0],
        y: lineData2[1],
        mode: 'lines',
        name: 'Ideal Line',
        line: {
            dash: 'dot',
            color:'black',
            width: 1
        }
    }
    data.push(trace2);
	
	Plotly.plot(chart, data, layout, {responsive: true});
}

plotSchildIrr("schildIrr");

//Define functions to calculate actual line values for Shild Plot Property Table, this part hasn't been finished yet.
function updateSchildPropertyTableIrr(){
    //Get x values and y values.
    var tableDataIrr = calcSchildIrr(antlogval1irr, antlogval2irr, antlogval3irr, antlogval4irr, logdr1irr, logdr2irr, logdr3irr, logdr4irr);
    var xtableDataIrr = tableDataIrr[0];
    var ytableDataIrr = tableDataIrr[1];
    for (i = 0; i < xtableDataIrr.length; i++){
        xtableDataIrr[i] = Number(xtableDataIrr[i]);
    }
    for (i = 0; i < ytableDataIrr.length; i++){
        ytableDataIrr[i] = Number(ytableDataIrr[i]);
    }

    
    if (ytableDataIrr[1] == null){
        document.getElementById("slopevalueirr").innerHTML = "NA";
        document.getElementById("pA2valueirr").innerHTML = "NA";
        document.getElementById("r2valueirr").innerHTML = "NA";
    }
    else{

        var y1 = ytableDataIrr[0];
        var y2 = ytableDataIrr[3];
        var x1 = xtableDataIrr[0];
        var x2 = xtableDataIrr[3];

        //Calculate the slope.
        var slopeValueIrr = (y2 - y1) / (x2 - x1);
        document.getElementById("slopevalueirr").innerHTML = slopeValueIrr.toFixed(3);

        //Calculate pA2 (x-intercept).
        var bIrr = y1 - (slopeValueIrr * x1);
        pA2ValueIrr = (0 - bIrr) / slopeValueIrr;
        document.getElementById("pA2valueirr").innerHTML = pA2ValueIrr.toFixed(3); 

        //Calculate R square.

        //Calculate the mean of x.
        var xtotal = 0;
        for (var i = 0; i < xtableDataIrr.length; i++) {
            xtotal += xtableDataIrr[i];
        }
        var xmean = xtotal/xtableDataIrr.length;

        //Calculate the mean of y.
        var ytotal = 0;
        for (var i = 0; i < ytableDataIrr.length; i++) {
            ytotal += ytableDataIrr[i];
        }
        var ymean = ytotal/ytableDataIrr.length;

        //Calculate sum of regression.
        var regressionSum = 0;
        for (var i = 0; i < xtableDataIrr.length; i++) {
            regressionSum += (xtableDataIrr[i] - xmean) * (ytableDataIrr[i] - ymean);
        }

        //Calculate sum of total.
        var sumx2 = 0;
        for (var i = 0; i < xtableDataIrr.length; i++) {
            sumx2 += (xtableDataIrr[i] - xmean) ** 2;
        }

        var sumy2 = 0;
        for (var i = 0; i < ytableDataIrr.length; i++) {
            sumy2 += (ytableDataIrr[i] - ymean) ** 2;
        }

        var totalSum = Math.sqrt(sumx2 * sumy2);

        //Calculate R square value.
        var rValue = regressionSum/totalSum;
        var r2ValueIrr = rValue ** 2;
        
        document.getElementById("r2valueirr").innerHTML = r2ValueIrr.toFixed(3); 
    }
}

function showInstructionsQuant() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#quant"]').tab('show');
};

//QUESTION BOX
var questionsSchildirr = ["Will the Schild plot for an irreversible antagonist be linear with a slope = 1.0?", 
"Is the shape and position of a Schild plot to an irreversible antagonist likely to be independent of the properties of the agonist (affinity / efficacy) and/or cell (receptor density, signal amplification)?",
"Can the pA<sub>2</sub> values derived from the Schild plot for an irreversible antagonist be used to calculate –logK<sub>B</sub> (pK<sub>B</sub>) values?",
"Are irreversible antagonists appropriate for use in Schild analysis?"];
	
	
var answersSchildirr = ["When a wide range of antagonist concentrations is used, the Schild plot for an irreversible antagonist will NOT be linear with a slope of unity.  This is because an effect of higher concentrations (or longer periods of exposure) of an irreversible antagonist is to reduce the maximum agonist-induced response, which ‘flattens the agonist dose-response curve’.  This has the effect of generating non-parallel rightward shifts of the agonist dose-response curves and exaggerated dose-ratio values (slope > 1.0).<br>Under special conditions, Schild plots may be less likely to deviate significantly from linearity and unit slope, e.g. when low concentrations of an irreversible antagonist are used in systems when there is considerable ‘receptor reserve’.  In these systems (e.g. high receptor density, high signal amplification), the effect of a narrow range of low concentrations of an irreversible antagonist is to produce near-parallel rightward shifts of dose-response curves to a high efficacy agonist. This may produce Schild plots that approach linearity with unit slope.  This can be readily observed by using the Dose-Response Visualiser.",
"A key feature of the Schild analysis is that competitive antagonists generate Schild plots whose shape and position are independent of the properties of the agonist (i.e. level of affinity and/or efficacy) or the cell (level of receptor density and/or signal amplification). However, the shapes and positions of Schild plots generated using irreversible antagonists are NOT likely to be independent of the properties of the agonist (esp. efficacy) and/or the cell (receptor density, signal amplification). This can be readily observed by using the Dose-Response Visualiser.",
"YES, but only under very limited conditions.  The pA<sub>2</sub> obtained for an irreversible antagonist will likely be an accurate measure of –logK<sub>B</sub> only at low levels of agonist-receptor occupancy (i.e. for high efficacy agonists AND when low levels of agonist-induced response are used to generate dose ratio values). (see Kenakin book page 151-152).  In most instances, the pA<sub>2</sub> values obtained using irreversible antagonists will under-estimate the –logK<sub>B</sub> value (as slope of Schild plot likely to be greater than one), and thereby over-estimate the true affinity of the antagonist.",
"Like competitive antagonists, irreversible antagonists bind to the orthosteric (agonist) binding site on the receptor. In some special circumstances (as mentioned in previous questions), Schild plots may be used to calculate the affinity of an irreversible antagonist.  However, in general, reliable measures of antagonist affinity are best obtained from Schild plots using competitive, rather than irreversible antagonists."]; 

 
var questionCounterSchildirr = 0;
document.getElementById("schildQuestionirr").innerHTML = "<b>" + questionsSchildirr[questionCounterSchildirr] + "</b>";


function revealAnswerSchildIrr() {
    document.getElementById("schildAnswerirr").innerHTML = answersSchildirr[questionCounterSchildirr];
    $('#schildAnswerModalirr').modal('show');
}


function nextQuestionSchildIrr() {
    if (questionCounterSchildirr + 1 == questionsSchildirr.length) { //end of questions
        questionCounterSchildirr++;
        document.getElementById("schildQuestionirr").style.display = "none";
        document.getElementById("revealSchildAnswerirr").style.display = "none";
        document.getElementById("restartMessageSchildirr").style.display = "inline-block";
        document.getElementById("restartQuestionSchildirr").style.display = "inline-block";
        document.getElementById("nextSchildQuestionirr").style.display = "none";
    }
    else {
        questionCounterSchildirr++;
        document.getElementById("restartMessageSchildirr").style.display = "none";
        document.getElementById("restartQuestionSchildirr").style.display = "none";
        document.getElementById("schildQuestionirr").innerHTML = "<b>" + questionsSchildirr[questionCounterSchildirr] + "</b>";
    }
}

function prevQuestionSchildIrr() {
    if (!questionCounterSchildirr) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterSchildirr--;
        document.getElementById("schildQuestionirr").style.display = "block";
        document.getElementById("nextSchildQuestionirr").style.display = "inline-block";
        document.getElementById("revealSchildAnswerirr").style.display = "inline-block";
        document.getElementById("restartMessageSchildirr").style.display = "none";
        document.getElementById("restartQuestionSchildirr").style.display = "none";
        document.getElementById("schildQuestionirr").innerHTML = "<b>" + questionsSchildirr[questionCounterSchildirr] + "</b>";
    }
}

function restartQuestionSchildIrr() {
    questionCounterSchildirr = 0;
    document.getElementById("schildQuestionirr").style.display = "block";
    document.getElementById("nextSchildQuestionirr").style.display = "inline-block";
    document.getElementById("restartMessageSchildirr").style.display = "none";
    document.getElementById("restartQuestionSchildirr").style.display = "none";
    document.getElementById("schildQuestionirr").innerHTML = "<b>" + questionsSchildirr[questionCounterSchildirr] + "</b>";
    document.getElementById("revealSchildAnswerirr").style.display = "inline-block";
}

