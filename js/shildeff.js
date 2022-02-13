var affeff = document.getElementById("affeffslider").defaultValue;
var effeff = document.getElementById("effeffslider").defaultValue;
var deneff = document.getElementById("deneffslider").defaultValue;
var efficeff = document.getElementById("efficieffslider").defaultValue;
var agoaffeff = document.getElementById("agoeffnumeff").defaultValue;
var agoefflogeff = document.getElementById("agoefflognumeff").defaultValue;
var agoeffeff = document.getElementById("agoeffeff").defaultValue;
var effleveleff = document.getElementById("effleveleff").defaultValue;
document.getElementById("displayeffecteff").innerHTML = (effleveleff*89).toFixed(1);
document.getElementById("efftableeff").innerHTML = (effleveleff*89).toFixed(1);
document.getElementById("effeffdisplay").value = (10**(-1*agoeffeff)).toFixed(2);

var isPointValideff = [true, true, true, true];
var allmarkercolourseff = ['rgb(255,215,0)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];
var markercolourseff = ['rgb(255,215,0)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];
var linestyles = ["solid", "solid", "solid", "solid", "solid"];
var markercolours = ['rgb(255,215,55)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];

var plotmarkercolors = ['rgb(225,225,225)','rgb(255,215,55)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];

var antval0eff = document.getElementById("ant0eff").defaultValue;
var antval1eff = document.getElementById("ant1eff").defaultValue;
var antval2eff = document.getElementById("ant2eff").defaultValue;
var antval3eff = document.getElementById("ant3eff").defaultValue;
var antval4eff = document.getElementById("ant4eff").defaultValue;
var agoconcarreff = [0, Math.log10(antval1eff), Math.log10(antval2eff), Math.log10(antval3eff), Math.log10(antval4eff)];
var antlogval1eff = Math.log10(antval1eff);
var antlogval2eff = Math.log10(antval2eff);
var antlogval3eff = Math.log10(antval3eff);
var antlogval4eff = Math.log10(antval4eff);

document.getElementById("antlog1eff").value = Math.log10(antval1eff).toFixed(1);
document.getElementById("antlog2eff").value = Math.log10(antval2eff).toFixed(1);
document.getElementById("antlog3eff").value = Math.log10(antval3eff).toFixed(1);
document.getElementById("antlog4eff").value = Math.log10(antval4eff).toFixed(1);
var effHalfMaxEffect;

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

function titleEff(){
    document.getElementById("tabtitle").innerHTML = "Schild Plot Generator for Allosteric Antagonist (Efficacy)"
}

function findEffHalfMaxEffect(lineData){
    effHalfMaxEffect = Math.max.apply(Math, lineData[1])*effleveleff;
} 

function calc50Eff(lineData){
    
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= effHalfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [effHalfMaxEffect]];
	return agoret; //return x, y
}

function resetQuantEff(){
    affeff = document.getElementById("affeffslider").value = document.getElementById("affeffslider").defaultValue;
    effeff = document.getElementById("effeffslider").value = document.getElementById("effeffslider").defaultValue;
    deneff = document.getElementById("deneffslider").value = document.getElementById("deneffslider").defaultValue;
    efficeff = document.getElementById("efficieffslider").value = document.getElementById("efficieffslider").defaultValue;
    agoaffeff = document.getElementById("agoeffnumeff").value = document.getElementById("agoeffnumeff").defaultValue;
    agoeffeff = document.getElementById("agoeffeff").value = document.getElementById("agoeffeff").defaultValue;
    effleveleff = document.getElementById("effleveleff").value = document.getElementById("effleveleff").defaultValue;
    document.getElementById("displayeffecteff").innerHTML = (effleveleff*89).toFixed(1);
    document.getElementById("efftableeff").innerHTML = (effleveleff*89).toFixed(1);
    document.getElementById("effeffdisplay").value = (10**(-1*agoeffeff)).toFixed(2);

    agoefflogeff = document.getElementById("agoefflognumeff").value = document.getElementById("agoefflognumeff").defaultValue;
    antval0eff = document.getElementById("ant0eff").value = document.getElementById("ant0eff").defaultValue;
    antval1eff = document.getElementById("ant1eff").value = document.getElementById("ant1eff").defaultValue;
    antval2eff = document.getElementById("ant2eff").value = document.getElementById("ant2eff").defaultValue;
    antval3eff = document.getElementById("ant3eff").value = document.getElementById("ant3eff").defaultValue;
    antval4eff = document.getElementById("ant4eff").value = document.getElementById("ant4eff").defaultValue;
    agoconcarreff = [0, Math.log10(antval1eff), Math.log10(antval2eff), Math.log10(antval3eff), Math.log10(antval4eff)];
    antlogval1eff = Math.log10(antval1eff);
    antlogval2eff = Math.log10(antval2eff);
    antlogval3eff = Math.log10(antval3eff);
    antlogval4eff = Math.log10(antval4eff);
    document.getElementById("antlog1eff").value = Math.log10(antval1eff).toFixed(1);
    document.getElementById("antlog2eff").value = Math.log10(antval2eff).toFixed(1);
    document.getElementById("antlog3eff").value = Math.log10(antval3eff).toFixed(1);
    document.getElementById("antlog4eff").value = Math.log10(antval4eff).toFixed(1);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    graphRemoveAlertAff("quantalertAff");
    Plotly.restyle("quantitativeAff", 'visible', true);
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    idealSchildData = calcIdealSchildEff(agoefflogeff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}, {x: idealSchildData[0], y: idealSchildData[1]}], traces: [0, 1], layout: {}},animation)
}

function graphAlertEff(div){

    document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}

function graphRemoveAlertEff(div){
    document.getElementById(div).innerHTML = ""
}
//set min with new range
function checkSliderMinEff(){
    let ret = false;
    if(document.getElementById("affeffslider").value == 4){
        ret = true
    }
    if(document.getElementById("effeffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("deneffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("efficieffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("effleveleff").value == 0){
        ret = true
    }
    return ret
}

function updateAffinityEff(value){
    affeff = value;
    if(checkSliderMinEff()){
        Plotly.restyle("quantitativeEff", 'visible', false)
        graphAlertEff("quantalertEff")
    }
    else{
        graphRemoveAlertEff("quantalertEff")
        Plotly.restyle("quantitativeEff", 'visible', true)
        lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
        lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
        lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
        lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
        lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
        //findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);
        halfData4 = calc50Eff(lineData4);
        updateValidEff(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
        Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateEfficacyEff(value){
    effeff = value;
    if(checkSliderMinEff()){
        Plotly.restyle("quantitativeEff", 'visible', false)
        graphAlertEff("quantalertEff")
    }
    else{
        graphRemoveAlertEff("quantalertEff")
        Plotly.restyle("quantitativeEff", 'visible', true)
        lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
        lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
        lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
        lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
        lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
        //findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);
        halfData4 = calc50Eff(lineData4);
        updateValidEff(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
        Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateDensityEff(value){
    deneff = value;
    if(checkSliderMinEff()){
        Plotly.restyle("quantitativeEff", 'visible', false)
        graphAlertEff("quantalertEff")
    }
    else{
        graphRemoveAlertEff("quantalertEff")
        Plotly.restyle("quantitativeEff", 'visible', true)
        lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
        lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
        lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
        lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
        lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
        //findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);
        halfData4 = calc50Eff(lineData4);
        updateValidEff(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
        Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 

function updateEfficiencyEff(value){
    efficeff = value;
    if(checkSliderMinEff()){
        Plotly.restyle("quantitativeEff", 'visible', false)
        graphAlertEff("quantalertEff")
    }
    else{
        graphRemoveAlertEff("quantalertEff")
        Plotly.restyle("quantitativeEff", 'visible', true)
        lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
        lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
        lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
        lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
        lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
        //findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);
        halfData4 = calc50Eff(lineData4);
        updateValidEff(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
        Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 

function updateAgoAffinityEff(value){
    agoaffeff = value;
    agoefflogeff = -1*Math.log10(value);
    document.getElementById("agoefflognumeff").value = agoefflogeff.toFixed(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateefflevelEff(value){
    effleveleff = value;
    document.getElementById("displayeffecteff").innerHTML = (effleveleff*89).toFixed(1);
    document.getElementById("efftableeff").innerHTML = (effleveleff*89).toFixed(1);
    if(checkSliderMinEff()){
        Plotly.restyle("quantitativeEff", 'visible', false)
        graphAlertEff("quantalertEff")
    }
    else{
        graphRemoveAlertEff("quantalertEff")
        Plotly.restyle("quantitativeEff", 'visible', true)
        lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
        lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
        lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
        lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
        lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
        findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);
        halfData4 = calc50Eff(lineData4);
        updateValidEff(halfData1, halfData2, halfData3, halfData4);
    
        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
        Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateAgoAffinityLogEff(value){
    agoefflogeff = value;
    agoaffeff = Math.pow(10, -value);
    document.getElementById("agoeffnumeff").value = agoaffeff.toExponential(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    idealSchildData = calcIdealSchildEff(agoefflogeff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}, {x: idealSchildData[0], y: idealSchildData[1]}], traces: [0, 1], layout: {}},animation)
}

function updateAgoAffEff(value){
    agoeffeff = value;
    document.getElementById("effeffdisplay").value = (10**(-1*agoeffeff)).toFixed(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist1Eff(value){
    antval1eff = value;
    agoconcarreff[1] = Math.log10(value);
    document.getElementById("antlog1eff").value = agoconcarreff[1].toFixed(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog1Eff(value){
    agoconcarreff[1] = value;
    antval1eff = Math.pow(10, value);
    document.getElementById("ant1eff").value = antval1eff.toExponential(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist2Eff(value){
    antval2eff = value;
    agoconcarreff[2] = Math.log10(value);
    document.getElementById("antlog2eff").value = agoconcarreff[2].toFixed(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog2Eff(value){
    agoconcarreff[2] = value;
    antval2eff = Math.pow(10, value);
    document.getElementById("ant2eff").value = antval2eff.toExponential(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist3Eff(value){
    antval3eff = value;
    agoconcarreff[3] = Math.log10(value);
    document.getElementById("antlog3eff").value = agoconcarreff[3].toFixed(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog3Eff(value){
    agoconcarreff[3] = value;
    antval3eff = Math.pow(10, value);
    document.getElementById("ant3eff").value = antval3eff.toExponential(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist4Eff(value){
    antval4eff = value;
    agoconcarreff[4] = Math.log10(value);
    document.getElementById("antlog4eff").value = agoconcarreff[4].toFixed(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog4Eff(value){
    agoconcarreff[4] = value;
    antval4eff = Math.pow(10, value);
    document.getElementById("ant4eff").value = antval4eff.toExponential(2);
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[4]);
    //findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);
    halfData4 = calc50Eff(lineData4);
    updateValidEff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], agoconcarreff[4], logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function calcAgoHalfEffectEff(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoeffect, antagconc){
    var ago;
    var lineData = calcLinesEff(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoeffect, antagconc);
    //findEffHalfMaxEffect(calcLinesEff(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoeffect, agoconcarraff[0]));
    var data50 = calc50Eff(lineData);
    //console.log(data50[0]);
    if(10**data50[0] == 1){
        ago = NaN;
        //console.log("undefine dectected")
    }
    else{
        ago = 10**(data50[0]);
    }
    return ago;
}

function calcDoseRatioEff(presant, absant){
    var doserat;
    doserat = presant/absant;
    return doserat;
}

function calcLogDREff(doseratio){
    var logdr;
    logdr = Math.log10(doseratio-1);
    return logdr;
}

function updateEverythingEff(){

    antlogval1eff = Math.log10(antval1eff);
    antlogval2eff = Math.log10(antval2eff);
    antlogval3eff = Math.log10(antval3eff);
    antlogval4eff = Math.log10(antval4eff);

    anthalfeff0eff = document.getElementById("anteff0eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[0]).toExponential(2);
    anthalfeff1eff = document.getElementById("anteff1eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[1]).toExponential(2);
    anthalfeff2eff = document.getElementById("anteff2eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[2]).toExponential(2);
    anthalfeff3eff = document.getElementById("anteff3eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[3]).toExponential(2);
    anthalfeff4eff = document.getElementById("anteff4eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[4]).toExponential(2);
    
    doseratio1eff = document.getElementById("antdose1eff").value = calcDoseRatioEff(anthalfeff1eff, anthalfeff0eff).toFixed(2);
    doseratio2eff = document.getElementById("antdose2eff").value = calcDoseRatioEff(anthalfeff2eff, anthalfeff0eff).toFixed(2);
    doseratio3eff = document.getElementById("antdose3eff").value = calcDoseRatioEff(anthalfeff3eff, anthalfeff0eff).toFixed(2);
    doseratio4eff = document.getElementById("antdose4eff").value = calcDoseRatioEff(anthalfeff4eff, anthalfeff0eff).toFixed(2);
    
    logdr1eff = document.getElementById("antlogdr1eff").value = calcLogDREff(doseratio1eff).toFixed(2);
    logdr2eff = document.getElementById("antlogdr2eff").value = calcLogDREff(doseratio2eff).toFixed(2);
    logdr3eff = document.getElementById("antlogdr3eff").value = calcLogDREff(doseratio3eff).toFixed(2);
    logdr4eff = document.getElementById("antlogdr4eff").value = calcLogDREff(doseratio4eff).toFixed(2);

    updateSchildPropertyTableEff();
}


function calcLinesEff(
    affinity,
    efficacy,
    recepDensity,
    efficiency,
    agoaffinity,
    agoeffect,
    agoconcentration
  ) {
    const STEP = 0.01;
    var data = [[], []];
    var i, effect;
  
    //Inverse log input values
  
    var affin = 10 ** (-1 * affinity);
    var efcay = 10 ** efficacy;
    var recep = 10 ** recepDensity;
    var efcey = 10 ** efficiency;
    var agoaffin = 10 ** (-1 * agoaffinity);
    var agoeff = 10 ** (-1 * agoeffect);
  
    if (agoconcentration === 0) {
      var agoconc = 0;
      agoaffin = 0;
      for (i = -12; i < -2; i = i + STEP) {
        data[0].push(i);
        data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin));
      }
    } else {
      agoconc = 10 ** agoconcentration;
      for (i = -12; i < -2; i = i + STEP) {
        var aconc = 10 ** i;
        var effect1 = 100 / (agoconc / agoaffin + 1);
        var effect2 =
          (aconc * efcay * recep * efcey) /
          (aconc * (efcay * recep * efcey + 1) + affin);
        var effect3 = agoconc / agoaffin;
        var effect4 =
          (aconc * agoeff * efcay * recep * efcey) /
          (aconc * (agoeff * efcay * recep * efcey + 1) + affin);
        effect = effect1 * (effect2 + effect3 * effect4);
        data[0].push(i);
        data[1].push(effect);
      }
    }
    return data;
  }


var linecolourseff = ['rgb(0,0,0)','rgb(255,215,55)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];

function plotGraphEff(chart){
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
    	var lineData = calcLinesEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[j])
   		if(j==0){
			var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 0+"nM",
                line: {
                    color: linecolourseff[j],
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
       			name: 10**agoconcarreff[j]*1000000000+"nM",
                   line: {
                    color: linecolours[j],
                    width: 1.2,
                    dash: linestyles[j]
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
        var halfData = calcLinesEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[i]);
        findEffHalfMaxEffect(calcLinesEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[0]));
        data50 = calc50Eff(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "Level of Effect",
            marker: {
                color: plotmarkercolors[i],
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
plotGraphEff("quantitativeEff");

var anthalfeff0eff = document.getElementById("anteff0eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[0]).toExponential(2);
var anthalfeff1eff = document.getElementById("anteff1eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[1]).toExponential(2);
var anthalfeff2eff = document.getElementById("anteff2eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[2]).toExponential(2);
var anthalfeff3eff = document.getElementById("anteff3eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[3]).toExponential(2);
var anthalfeff4eff = document.getElementById("anteff4eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[4]).toExponential(2);

var doseratio1eff = document.getElementById("antdose1eff").value = calcDoseRatioEff(anthalfeff1eff, anthalfeff0eff).toFixed(2);
var doseratio2eff = document.getElementById("antdose2eff").value = calcDoseRatioEff(anthalfeff2eff, anthalfeff0eff).toFixed(2);
var doseratio3eff = document.getElementById("antdose3eff").value = calcDoseRatioEff(anthalfeff3eff, anthalfeff0eff).toFixed(2);
var doseratio4eff = document.getElementById("antdose4eff").value = calcDoseRatioEff(anthalfeff4eff, anthalfeff0eff).toFixed(2);

var logdr1eff = document.getElementById("antlogdr1eff").value = calcLogDREff(doseratio1eff).toFixed(2);
var logdr2eff = document.getElementById("antlogdr2eff").value = calcLogDREff(doseratio2eff).toFixed(2);
var logdr3eff = document.getElementById("antlogdr3eff").value = calcLogDREff(doseratio3eff).toFixed(2);
var logdr4eff = document.getElementById("antlogdr4eff").value = calcLogDREff(doseratio4eff).toFixed(2);

function updateValidEff(data0, data1, data2, data3){
    var validdata = [data0[0], data1[0], data2[0], data3[0]];

    for(i = 0; i<4; i++){
        if(validdata[i]>=-12 && validdata[i]<=-2){
            isPointValideff[i] = true;
        }
        else{
            isPointValideff[i] = false;
        }
    }

    markercolourseff = [];
    for (j = 0; j < 4; j++) {
        if (isPointValideff[j]){
            markercolourseff.push(allmarkercolourseff[j]);
        }
    }
    var update = {
        marker :{
            color: markercolourseff,
            size: dotsize,
        }
    };
    Plotly.restyle("schildEff", update, 0);
}

function calcSchildEff(logval1,logval2, logval3, logval4, dr1, dr2, dr3, dr4){ //add 3 other concentrations as args
    var data = [[],[]];
	var allxLogs = [logval1, logval2, logval3, logval4] //x values for the schild
	var alllogDr1 = [dr1, dr2, dr3, dr4]
    var xLogs = [];
    var logDr1 = [];
    var j = 0;

    for(i = 0; i<4; i++){
        if(isPointValideff[i]){
            xLogs[j] =  allxLogs[i];
            logDr1[j] = alllogDr1[i];
            j++;
        }
    }

	data[0] = xLogs;
	data[1] = logDr1;

    return data;

}

//Define a function to calculate the x values and y values for ideal plot in Schild plot.
function calcIdealSchildEff(negativelogKBValue){
    var idealData = [[],[]];

    //Ideal Plot Equation: y = 1 * x + (-logKBValue).

    //Calculate x values for ideal plot.
	var idealAllxLogs = [-10, -9, -8, -7, -6];

    //Calculate y values for ideal plot based on the equation.
    var idealAllLogDr1 = [];
    var negLogKBValue = Number(negativelogKBValue);
    for(i = 0; i < idealAllxLogs.length; i++){
        idealAllLogDr1[i] = 1 * idealAllxLogs[i] + negLogKBValue;
    }
	
	idealData[0] = idealAllxLogs;
	idealData[1] = idealAllLogDr1;

    return idealData;
}

function plotSchildEff(chart){
	var layout = {
        height:403,
        width:450,
        xaxis:{
            title: "Log [Antagonist] (log M)",
            showline: true,
            range: [-10,-6],
            
        },
        yaxis:{
            title: "Log(DR-1)",
            showline: true,
            range: [0,2],
            tickvals: [0, 0.5, 1, 1.5, 2]

        },
	}	
	var data = []

    var lineData = calcSchildEff(antlogval1eff, antlogval2eff, antlogval3eff, antlogval4eff, logdr1eff, logdr2eff, logdr3eff, logdr4eff);
	var trace1 = {
		x: lineData[0],
		y: lineData[1],
		mode: 'lines+markers',
        name: 'Actual Plot',
		line: {
            width: 1,
            color: 'rgb(0,0,0)',
        },
        marker: {
            color: markercolourseff,
            size: dotsize,
            line: {
                color: 'black',
                width: 1
            }
        }
	}
	data.push(trace1);

    //Add a ideal plot on Schild plot.
    var lineData2 = calcIdealSchildEff(agoefflogeff);
    var trace2 = {
        x: lineData2[0],
        y: lineData2[1],
        mode: 'lines',
        name: 'Ideal Plot',
        line: {
            dash: 'dot',
            color:'rgb(128, 128, 128)',
            width: 1
        }
    }
    data.push(trace2);
	
	Plotly.plot(chart, data, layout, {responsive: true});
}

plotSchildEff("schildEff");

//Define a function to calculate actual plot properties for Shild Plot Property Table.
function updateSchildPropertyTableEff(){
    //Get x values and y values.
    var tableData = calcSchildEff(antlogval1eff, antlogval2eff, antlogval3eff, antlogval4eff, logdr1eff, logdr2eff, logdr3eff, logdr4eff);
    var tempxTableData = tableData[0];
    var tempyTableData = tableData[1];
    var tempNumberofx = tempxTableData.length;
    for(i = 0; i < tempNumberofx; i++){
        tempxTableData[i] = Number(tempxTableData[i]);
        tempyTableData[i] = Number(tempyTableData[i]);
    }

    //Check if there are any equal x values and remove duplicated one(s).
    var x1 = tempxTableData[0];
    var y1 = tempyTableData[0];
    var xTableData = [x1];
    var yTableData = [y1];
    for (i = 1; i < tempNumberofx; i++){
        if(xTableData[0] != tempxTableData[i]){
            xTableData.push(tempxTableData[i]);
            yTableData.push(tempyTableData[i]);
        }
    }
    var numberofx = xTableData.length;
    var numberofy = yTableData.length;

    /*
    Calculate actual plot properties.
    Note: There are some cases can't calculate actual plot properties, need to provide error messages.
          1. There are multiple groups of coordinates with same x values and y values, or there is less than one group of coordinates.
          2. There are multiple x values but y values are the same.
    */
    if (numberofx < 2){
        document.getElementById("slopevalueeff").innerHTML = "NA";
        document.getElementById("pA2valueeff").innerHTML = "NA";
        document.getElementById("r2valueeff").innerHTML = "NA";
        document.getElementById("noteeff").innerHTML = "Note: Values are not avaliable (NA), becasue Schild Plot has no point or only one point - please try changing the properties of the agonist or antagonist, or the Level of Effect.";
    }
    else{
        const allEqual = arr => arr.every(val => val === arr[0]);
        if(allEqual(yTableData) == true){
            document.getElementById("slopevalueeff").innerHTML = "NA";
            document.getElementById("pA2valueeff").innerHTML = "NA";
            document.getElementById("r2valueeff").innerHTML = "NA";
            document.getElementById("noteeff").innerHTML = "Note: Values are not avaliable (NA), becasue Schild Plot has no point - please try changing the properties of the agonist or antagonist, or the Level of Effect.";
        }
        else{
            var x1Calc = xTableData[0];
            var x2Calc = xTableData[numberofx - 1];
            var y1Calc = yTableData[0];
            var y2Calc = yTableData[numberofy - 1];

            //Calculate the slope.
            var slopeValueEff = (y2Calc - y1Calc) / (x2Calc - x1Calc);
            document.getElementById("slopevalueeff").innerHTML = slopeValueEff.toFixed(2);
        
            //Calculate pA2 (x-intercept).
            var b = y1Calc - (slopeValueEff * x1Calc);
            pA2ValueEff = (0 - b) / slopeValueEff;
            document.getElementById("pA2valueeff").innerHTML = pA2ValueEff.toFixed(2);

            //Calculate R square.

            //Calculate the mean of x and y.
            var xTotal = 0;
            var yTotal = 0;
            for (var i = 0; i < numberofx; i++) {
                xTotal += xTableData[i];
                yTotal += yTableData[i];
            }
            var xMean = xTotal/numberofx;
            var yMean = yTotal/numberofy;

            //Calculate sum of regression.
            var regressionSum = 0;
            for (var i = 0; i < numberofx; i++) {
                regressionSum += (xTableData[i] - xMean) * (yTableData[i] - yMean);
             }

            //Calculate sum of total.
            var sumx2 = 0;
            var sumy2 = 0;
            for (var i = 0; i < numberofx; i++) {
                sumx2 += (xTableData[i] - xMean) ** 2;
                sumy2 += (yTableData[i] - yMean) ** 2;
            }
            var totalSum = Math.sqrt(sumx2 * sumy2);

            //Calculate R square value.
            var rValue = regressionSum/totalSum;
            var r2ValueEff = rValue ** 2;
            document.getElementById("r2valueeff").innerHTML = r2ValueEff.toFixed(2);

            document.getElementById("noteeff").innerHTML = "";
        }
    }
}

updateSchildPropertyTableEff();

function showInstructionsQuant() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#quant"]').tab('show');
};

//QUESTION BOX
var questionsSchildeff = ["For an allosteric antagonist that reduces agonist efficacy only, is a Schild plot likely to be linear with a slope equal to one?",
"Is the shape and position of the Schild plot likely to be independent of the properties of the agonist (affinity / efficacy) and/or cell (receptor density, signal amplification)?",
"Can the pA<sub>2</sub> values derived from the Schild plot for an allosteric antagonist that affects agonist efficacy be used to calculate –logK<sub>B</sub> values?"];
	
	
var answersSchildeff = ["<b>NO</b>, the shape of the Schild plot for an allosteric antagonist that affects agonist efficacy is unlikely to be linear with a slope equal to one.  At lower concentrations of the antagonist, the Schild plot slope is likely to be one or greater, whereas at higher concentrations the slope will be less than one.  These concentration-dependent changes in the slope of the Schild plot ensure that it is typically nonlinear.  This can be readily observed by using the Dose-Response Visualiser.",
"<b>NO</b>, for an allosteric antagonist that affects agonist efficacy, the shape and position of the Schild plot may be dependent upon the agonist used (unlike competitive antagonists).  This is because allosteric antagonists display ‘probe dependence’, whereby the effects of an allosteric antagonist on the efficacy of the agonist for the orthosteric binding site on the receptor may vary markedly between agonists, i.e. it may be substantial for one agonist but inconsequential for another agonist.  If the allosteric antagonist differentially affects agonist efficacy, then the shape and position of the Schild plot will likely be sensitive to changes in receptor density or signal amplification, but not agonist affinity.  This can be readily observed by using the Dose-Response Visualiser.",
"Due to the complex effects of the antagonist on the shape and position of the Schild plot, it is <b>unlikely</b> that a derived pA<sub>2</sub> value per se will be an accurate measure of the –logK<sub>B</sub> value.  Alternately, the fitting of experimental agonist dose-response data obtained over a wide range of [allosteric antagonist] to an appropriate model of allosteric antagonism using nonlinear least squares regression analysis may generate reliable K<sub>B</sub> values (and &#946 values) <br>(Kenakin (2019), p428)."]; 

 
var questionCounterSchildeff = 0;
document.getElementById("schildQuestioneff").innerHTML = "<b>" + questionsSchildeff[questionCounterSchildeff] + "</b>";


function revealAnswerSchildEff() {
    document.getElementById("schildAnswereff").innerHTML = answersSchildeff[questionCounterSchildeff];
    $('#schildAnswerModaleff').modal('show');
}


function nextQuestionSchildEff() {
    if (questionCounterSchildeff + 1 == questionsSchildeff.length) { //end of questions
        questionCounterSchildeff++;
        document.getElementById("schildQuestioneff").style.display = "none";
        document.getElementById("revealSchildAnswereff").style.display = "none";
        document.getElementById("restartMessageSchildeff").style.display = "inline-block";
        document.getElementById("restartQuestionSchildeff").style.display = "inline-block";
        document.getElementById("nextSchildQuestioneff").style.display = "none";
    }
    else {
        questionCounterSchildeff++;
        document.getElementById("restartMessageSchildeff").style.display = "none";
        document.getElementById("restartQuestionSchildeff").style.display = "none";
        document.getElementById("schildQuestioneff").innerHTML = "<b>" + questionsSchildeff[questionCounterSchildeff] + "</b>";
    }
}

function prevQuestionSchildEff() {
    if (!questionCounterSchildeff) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterSchildeff--;
        document.getElementById("schildQuestioneff").style.display = "block";
        document.getElementById("nextSchildQuestioneff").style.display = "inline-block";
        document.getElementById("revealSchildAnswereff").style.display = "inline-block";
        document.getElementById("restartMessageSchildeff").style.display = "none";
        document.getElementById("restartQuestionSchildeff").style.display = "none";
        document.getElementById("schildQuestioneff").innerHTML = "<b>" + questionsSchildeff[questionCounterSchildeff] + "</b>";
    }
}

function restartQuestionSchildEff() {
    questionCounterSchildeff = 0;
    document.getElementById("schildQuestioneff").style.display = "block";
    document.getElementById("nextSchildQuestioneff").style.display = "inline-block";
    document.getElementById("restartMessageSchildeff").style.display = "none";
    document.getElementById("restartQuestionSchildeff").style.display = "none";
    document.getElementById("schildQuestioneff").innerHTML = "<b>" + questionsSchildeff[questionCounterSchildeff] + "</b>";
    document.getElementById("revealSchildAnswereff").style.display = "inline-block";
}
