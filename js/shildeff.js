var agoconcarreff = [0, -9, -8, -7];
var affeff = document.getElementById("affeffslider").defaultValue;
var effeff = document.getElementById("effeffslider").defaultValue;
var deneff = document.getElementById("deneffslider").defaultValue;
var efficeff = document.getElementById("efficieffslider").defaultValue;
var agoaffeff = document.getElementById("agoeffnumeff").defaultValue;
var agoefflogeff = document.getElementById("agoefflognumeff").defaultValue;
var agoeffeff = document.getElementById("agoeffeff").defaultValue;
var effleveleff = document.getElementById("effleveleff").defaultValue;
document.getElementById("displayeffecteff").innerHTML = (effleveleff*100).toFixed(2);
document.getElementById("efftableeff").innerHTML = (effleveleff*100).toFixed(2);

var antval0eff = document.getElementById("ant0eff").defaultValue;
var antval1eff = document.getElementById("ant1eff").defaultValue;
var antval2eff = document.getElementById("ant2eff").defaultValue;
var antval3eff = document.getElementById("ant3eff").defaultValue;
var antlogval1eff = document.getElementById("antlog1eff").defaultValue;
var antlogval2eff = document.getElementById("antlog2eff").defaultValue;
var antlogval3eff = document.getElementById("antlog3eff").defaultValue;
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
    agoconcarreff = [0, -9, -8, -7];
    affeff = document.getElementById("affeffslider").value = document.getElementById("affeffslider").defaultValue;
    effeff = document.getElementById("effeffslider").value = document.getElementById("effeffslider").defaultValue;
    deneff = document.getElementById("deneffslider").value = document.getElementById("deneffslider").defaultValue;
    efficeff = document.getElementById("efficieffslider").value = document.getElementById("efficieffslider").defaultValue;
    agoaffeff = document.getElementById("agoeffnumeff").value = document.getElementById("agoeffnumeff").defaultValue;
    effleveleff = document.getElementById("effleveleff").value = document.getElementById("effleveleff").defaultValue;
    document.getElementById("displayeffecteff").innerHTML = (effleveleff*100).toFixed(2);
    document.getElementById("efftableeff").innerHTML = (effleveleff*100).toFixed(2);
    
    agoefflogeff = document.getElementById("agoefflognumeff").value = document.getElementById("agoefflognumeff").defaultValue;
    antval0eff = document.getElementById("ant0eff").value = document.getElementById("ant0eff").defaultValue;
    antval1eff = document.getElementById("ant1eff").value = document.getElementById("ant1eff").defaultValue;
    antval2eff = document.getElementById("ant2eff").value = document.getElementById("ant2eff").defaultValue;
    antval3eff = document.getElementById("ant3eff").value = document.getElementById("ant3eff").defaultValue;
    antlogval1eff = document.getElementById("antlog1eff").value = document.getElementById("antlog1eff").defaultValue;
    antlogval2eff = document.getElementById("antlog2eff").value = document.getElementById("antlog2eff").defaultValue;
    antlogval3eff = document.getElementById("antlog3eff").value = document.getElementById("antlog3eff").defaultValue;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
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
        findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);
        
        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
        findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);

        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
        findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);

        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
        findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);
        
        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateefflevelEff(value){
    effleveleff = value;
    document.getElementById("displayeffecteff").innerHTML = (effleveleff*100).toFixed(2);
    document.getElementById("efftableeff").innerHTML = (effleveleff*100).toFixed(2);
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
        findEffHalfMaxEffect(lineData0);
        halfData0 = calc50Eff(lineData0);
        halfData1 = calc50Eff(lineData1);
        halfData2 = calc50Eff(lineData2);
        halfData3 = calc50Eff(lineData3);

        updateEverythingEff();
        Plotly.animate("quantitativeEff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAgoAffEff(value){
    agoeffeff = value;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoefflogeff, agoeffeff, agoconcarreff[3]);
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
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
    findEffHalfMaxEffect(lineData0);
    halfData0 = calc50Eff(lineData0);
    halfData1 = calc50Eff(lineData1);
    halfData2 = calc50Eff(lineData2);
    halfData3 = calc50Eff(lineData3);

    updateEverythingEff();
    Plotly.animate("quantitativeEff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildEff(agoconcarreff[1], agoconcarreff[2], agoconcarreff[3], logdr1eff, logdr2eff, logdr3eff);
    Plotly.animate("schildEff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function calcAgoHalfEffectEff(affinity, efficacy, recepDensity, efficiency, agoaffinity, antagconc){
    var ago;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var antconc = antagconc;
    ago = (effHalfMaxEffect*(affin*(1+antconc/agoaffin)))/((efcay*recep*efcey*100)-(effHalfMaxEffect*(efcay*recep*efcey+1)));
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
    anthalfeff0eff = document.getElementById("anteff0eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, antval0eff).toExponential(2);
    anthalfeff1eff = document.getElementById("anteff1eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, antval1eff).toExponential(2);
    anthalfeff2eff = document.getElementById("anteff2eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, antval2eff).toExponential(2);
    anthalfeff3eff = document.getElementById("anteff3eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, antval3eff).toExponential(2);
    
    doseratio1eff = document.getElementById("antdose1eff").value = calcDoseRatioEff(anthalfeff1eff, anthalfeff0eff).toFixed(2);
    doseratio2eff = document.getElementById("antdose2eff").value = calcDoseRatioEff(anthalfeff2eff, anthalfeff0eff).toFixed(2);
    doseratio3eff = document.getElementById("antdose3eff").value = calcDoseRatioEff(anthalfeff3eff, anthalfeff0eff).toFixed(2);
    
    logdr1eff = document.getElementById("antlogdr1eff").value = calcLogDREff(doseratio1eff).toFixed(2);
    logdr2eff = document.getElementById("antlogdr2eff").value = calcLogDREff(doseratio2eff).toFixed(2);
    logdr3eff = document.getElementById("antlogdr3eff").value = calcLogDREff(doseratio3eff).toFixed(2);
}


function calcLinesEff(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoeffect, agoconcentration){
    const STEP = 0.01;
    var data = [[],[]];
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
          effect =
            (10 ** i * efcay * recep * efcey * 100) /
            (10 ** i * (efcay * recep * efcey + 1) + affin);
          data[0].push(i);
          data[1].push(effect);
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

var linecolourseff = ["#000000", "#ff6666", "#ff3333", "#ff0000"]

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

    for(j = 0; j<4; j++){
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
                    color: linecolourseff[j],
                    width: 1
                },
                showlegend: false
    		}
    	}
    	data.push(graph);
    	Plotly.plot(chart,data,layout, {responsive: true});
	}
    var i;
    legendview = [true, false, false, false]
    for(i = 0; i<4; i++){
        var halfData = calcLinesEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[i]);
        findEffHalfMaxEffect(calcLinesEff(affeff, effeff, deneff, efficeff, agoefflogeff, agoeffeff, agoconcarreff[0]));
        data50 = calc50Eff(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "EC Value",
            marker: {
                color: "orange"
            },
            showlegend: legendview[i]
        }];
        Plotly.plot(chart,trace1,layout, {responsive: true});
    }
}
plotGraphEff("quantitativeEff");

var anthalfeff0eff = document.getElementById("anteff0eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, antval0eff).toExponential(2);
var anthalfeff1eff = document.getElementById("anteff1eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, antval1eff).toExponential(2);
var anthalfeff2eff = document.getElementById("anteff2eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, antval2eff).toExponential(2);
var anthalfeff3eff = document.getElementById("anteff3eff").value = calcAgoHalfEffectEff(affeff, effeff, deneff, efficeff, agoefflogeff, antval3eff).toExponential(2);

var doseratio1eff = document.getElementById("antdose1eff").value = calcDoseRatioEff(anthalfeff1eff, anthalfeff0eff).toFixed(2);
var doseratio2eff = document.getElementById("antdose2eff").value = calcDoseRatioEff(anthalfeff2eff, anthalfeff0eff).toFixed(2);
var doseratio3eff = document.getElementById("antdose3eff").value = calcDoseRatioEff(anthalfeff3eff, anthalfeff0eff).toFixed(2);

var logdr1eff = document.getElementById("antlogdr1eff").value = calcLogDREff(doseratio1eff).toFixed(2);
var logdr2eff = document.getElementById("antlogdr2eff").value = calcLogDREff(doseratio2eff).toFixed(2);
var logdr3eff = document.getElementById("antlogdr3eff").value = calcLogDREff(doseratio3eff).toFixed(2);

function calcSchildEff(logval1,logval2, logval3, dr1, dr2, dr3){ //add 3 other concentrations as args
	logB1 = logval1;
	logB2 = logval2;
    logB3 = logval3;
    logdr1eff = dr1;
    logdr2eff = dr2;
    logdr3eff = dr3;
	var data = [[],[]];
	var xLogs = [-agoefflogeff, logB1, logB2, logB3] //x values for the schildEff
	var logdr1eff = [0, logdr1eff, logdr2eff, logdr3eff]
	

	data[0] = xLogs;
	data[1] = logdr1eff;
	
	return data;

}

function plotSchildEff(chart){
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

    var lineData = calcSchildEff(antlogval1eff, antlogval2eff, antlogval3eff, logdr1eff, logdr2eff, logdr3eff);
	var trace1 = {
		x: lineData[0],
		y: lineData[1],
		mode: 'lines+markers',
		line: {
			width: 1
		}
	}
	data.push(trace1);
	
	Plotly.plot(chart, data, layout, {responsive: true});
}

plotSchildEff("schildEff");



function showInstructionsQuant() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#quant"]').tab('show');
};

//QUESTION BOX
var questionsSchildeff = ["For an allosteric antagonist that reduces agonist efficacy only, is a Schild plot likely to be linear with a slope equal to one?",
"Is the shape and position of the Schild plot likely to be independent of the properties of the agonist (affinity / efficacy) and/or cell (receptor density, signal amplification)?",
"Can the pA<sub>2</sub> values derived from the Schild plot for an allosteric antagonist that affects agonist efficacy be used to calculate –logK<sub>B</sub> values?"];
	
	
var answersSchildeff = ["NO, the shape of the Schild plot for an allosteric antagonist that affects agonist efficacy is unlikely to be linear with a slope equal to one.  At lower concentrations of the antagonist, the Schild plot slope is likely to be one or greater, whereas at higher concentrations the slope will be less than one.  These concentration-dependent changes in the slope of the Schild plot ensure that it is typically nonlinear.  This can be readily observed by using the Dose-Response Visualiser.",
"NO, for an allosteric antagonist that affects agonist efficacy, the shape and position of the Schild plot may be dependent upon the agonist used (unlike competitive antagonists).  This is because allosteric antagonists display ‘probe dependence’, whereby the effects of an allosteric antagonist on the efficacy of the agonist for the orthosteric binding site on the receptor may vary markedly between agonists, i.e. it may be substantial for one agonist but inconsequential for another agonist.  If the allosteric antagonist differentially affects agonist efficacy, then the shape and position of the Schild plot will likely be sensitive to changes in receptor density or signal amplification, but not agonist affinity.  This can be readily observed by using the Dose-Response Visualiser.",
"Due to the complex effects of the antagonist on the shape and position of the Schild plot, it is unlikely that a derived pA<sub>2</sub> value per se will be an accurate measure of the –logK<sub>B</sub> value.  Alternately, the fitting of experimental agonist dose-response data obtained over a wide range of [allosteric antagonist] to an appropriate model of allosteric antagonism using nonlinear least squares regression analysis may generate reliable K<sub>B</sub> values (and &#946 values) (see Kenakin p428)."]; 

 
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