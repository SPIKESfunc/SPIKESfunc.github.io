var agoconcarraff = [0, -9, -8, -7, -6];
var affaff = document.getElementById("affaffslider").defaultValue;
var effaff = document.getElementById("effaffslider").defaultValue;
var denaff = document.getElementById("denaffslider").defaultValue;
var efficaff = document.getElementById("efficiaffslider").defaultValue;
var agoaffaff = document.getElementById("agoaffnumaff").defaultValue;
var agoafflogaff = document.getElementById("agoafflognumaff").defaultValue;
var agoeffaff = document.getElementById("agoeffaff").defaultValue;
var efflevelaff = document.getElementById("efflevelaff").defaultValue;
document.getElementById("displayeffectaff").innerHTML = (efflevelaff*100).toFixed(2);
document.getElementById("efftableaff").innerHTML = (efflevelaff*100).toFixed(2);
var isPointValidaff = [true, true, true, true];

var antval0aff = document.getElementById("ant0aff").defaultValue;
var antval1aff = document.getElementById("ant1aff").defaultValue;
var antval2aff = document.getElementById("ant2aff").defaultValue;
var antval3aff = document.getElementById("ant3aff").defaultValue;
var antval4aff = document.getElementById("ant4aff").defaultValue;
var antlogval1aff = document.getElementById("antlog1aff").defaultValue;
var antlogval2aff = document.getElementById("antlog2aff").defaultValue;
var antlogval3aff = document.getElementById("antlog3aff").defaultValue;
var antlogval4aff = document.getElementById("antlog4aff").defaultValue;
var affHalfMaxEffect;

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

function titleAff(){
    document.getElementById("tabtitle").innerHTML = "Schild Plot Generator for Allosteric Antagonist (Affinity)"
}

function findAffHalfMaxEffect(lineData){
    affHalfMaxEffect = Math.max.apply(Math, lineData[1]) * efflevelaff;
} 

function calc50Aff(lineData){
    
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= affHalfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [affHalfMaxEffect]];
	return agoret; //return x, y
}

function resetQuantAff(){
    agoconcarraff = [0, -9, -8, -7, -6];
    affaff = document.getElementById("affaffslider").value = document.getElementById("affaffslider").defaultValue;
    effaff = document.getElementById("effaffslider").value = document.getElementById("effaffslider").defaultValue;
    denaff = document.getElementById("denaffslider").value = document.getElementById("denaffslider").defaultValue;
    efficaff = document.getElementById("efficiaffslider").value = document.getElementById("efficiaffslider").defaultValue;
    agoaffaff = document.getElementById("agoaffnumaff").value = document.getElementById("agoaffnumaff").defaultValue;
    agoafflogaff = document.getElementById("agoafflognumaff").value = document.getElementById("agoafflognumaff").defaultValue;
    agoeffaff = document.getElementById("agoeffaff").value = document.getElementById("agoeffaff").defaultValue;
    efflevelaff = document.getElementById("efflevelaff").value = document.getElementById("efflevelaff").defaultValue;
    document.getElementById("displayeffectaff").innerHTML = (efflevelaff*100).toFixed(2);
    document.getElementById("efftableaff").innerHTML = (efflevelaff*100).toFixed(2);
    
    antval0aff = document.getElementById("ant0aff").value = document.getElementById("ant0aff").defaultValue;
    antval1aff = document.getElementById("ant1aff").value = document.getElementById("ant1aff").defaultValue;
    antval2aff = document.getElementById("ant2aff").value = document.getElementById("ant2aff").defaultValue;
    antval3aff = document.getElementById("ant3aff").value = document.getElementById("ant3aff").defaultValue;
    antval4aff = document.getElementById("ant4aff").value = document.getElementById("ant4aff").defaultValue;
    antlogval1aff = document.getElementById("antlog1aff").value = document.getElementById("antlog1aff").defaultValue;
    antlogval2aff = document.getElementById("antlog2aff").value = document.getElementById("antlog2aff").defaultValue;
    antlogval3aff = document.getElementById("antlog3aff").value = document.getElementById("antlog3aff").defaultValue;
    antlogval4aff = document.getElementById("antlog4aff").value = document.getElementById("antlog4aff").defaultValue;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function graphAlertAff(div){

    document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}

function graphRemoveAlertAff(div){
    document.getElementById(div).innerHTML = ""
}
//set min with new range
function checkSliderMinAff(){
    let ret = false;
    if(document.getElementById("affaffslider").value == 4){
        ret = true
    }
    if(document.getElementById("effaffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("denaffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("efficiaffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("efflevelaff").value == 0){
        ret = true
    }
    return ret
}

function updateAffinityAff(value){
    affaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        halfData4 = calc50Aff(lineData4);
        updateValidAff(halfData1, halfData2, halfData3, halfData4);

        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateEfficacyAff(value){
    effaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        halfData4 = calc50Aff(lineData4);
        updateValidAff(halfData1, halfData2, halfData3, halfData4);

        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateDensityAff(value){
    denaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        halfData4 = calc50Aff(lineData4);
        updateValidAff(halfData1, halfData2, halfData3, halfData4);

        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 

function updateEfficiencyAff(value){
    efficaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        halfData4 = calc50Aff(lineData4);
        updateValidAff(halfData1, halfData2, halfData3, halfData4);

        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 

function updateAgoAffinityAff(value){
    agoaffaff = value;
    agoafflogaff = -1*Math.log10(value);
    document.getElementById("agoafflognumaff").value = agoafflogaff.toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAgoAffinityLogAff(value){
    agoafflogaff = value;
    agoaffaff = Math.pow(10, -value);
    document.getElementById("agoaffnumaff").value = agoaffaff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAgoEffAff(value){
    agoeffaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist1Aff(value){
    antval1aff = value;
    agoconcarraff[1] = Math.log10(value);
    document.getElementById("antlog1aff").value = agoconcarraff[1].toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateefflevelAff(value){
    efflevelaff = value;
    document.getElementById("displayeffectaff").innerHTML = (efflevelaff*100).toFixed(2);
    document.getElementById("efftableaff").innerHTML = (efflevelaff*100).toFixed(2);
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        halfData4 = calc50Aff(lineData4);
        updateValidAff(halfData1, halfData2, halfData3, halfData4);

        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, 
            {x: halfData1[0], y: halfData1[1]}, 
            {x: halfData2[0], y: halfData2[1]}, 
            {x: halfData3[0], y: halfData3[1]},
            {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateAntagonistLog1Aff(value){
    agoconcarraff[1] = value;
    antval1aff = Math.pow(10, value);
    document.getElementById("ant1aff").value = antval1aff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist2Aff(value){
    antval2aff = value;
    agoconcarraff[2] = Math.log10(value);
    document.getElementById("antlog2aff").value = agoconcarraff[2].toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog2Aff(value){
    agoconcarraff[2] = value;
    antval2aff = Math.pow(10, value);
    document.getElementById("ant2aff").value = antval2aff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist3Aff(value){
    antval3aff = value;
    agoconcarraff[3] = Math.log10(value);
    document.getElementById("antlog3aff").value = agoconcarraff[3].toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog3Aff(value){
    agoconcarraff[3] = value;
    antval3aff = Math.pow(10, value);
    document.getElementById("ant3aff").value = antval3aff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist4Aff(value){
    antval4aff = value;
    agoconcarraff[4] = Math.log10(value);
    document.getElementById("antlog4aff").value = agoconcarraff[4].toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog4Aff(value){
    agoconcarraff[4] = value;
    antval4aff = Math.pow(10, value);
    document.getElementById("ant4aff").value = antval4aff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[4]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    halfData4 = calc50Aff(lineData4);
    updateValidAff(halfData1, halfData2, halfData3, halfData4);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},{y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, 
        {x: halfData1[0], y: halfData1[1]}, 
        {x: halfData2[0], y: halfData2[1]}, 
        {x: halfData3[0], y: halfData3[1]},
        {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], agoconcarraff[4], logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function calcAgoHalfEffectAff(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoeffect, antagconc){
    /**
    var ago;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var antconc = antagconc;
    //past equation
    //ago = (affHalfMaxEffect*(affin*(1+antconc/agoaffin)))/((efcay*recep*efcey*100)-(affHalfMaxEffect*(efcay*recep*efcey+1)));
    //equation A4
    return ago;
    */
    var ago
    var lineData = calcLinesAff(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoeffect, antagconc);
    findAffHalfMaxEffect(calcLinesAff(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoeffect, agoconcarraff[0]));
    var data50 = calc50Aff(lineData);
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

function calcDoseRatioAff(presant, absant){
    var doserat;
    doserat = presant/absant;
    return doserat;
}

function calcLogDRAff(doseratio){
    var logdr;
    logdr = Math.log(doseratio-1);
    return logdr;
}

function updateEverythingAff(){
    anthalfeff0aff = document.getElementById("anteff0aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[0]).toExponential(2);
    anthalfeff1aff = document.getElementById("anteff1aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[1]).toExponential(2);
    anthalfeff2aff = document.getElementById("anteff2aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[2]).toExponential(2);
    anthalfeff3aff = document.getElementById("anteff3aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[3]).toExponential(2);
    anthalfeff4aff = document.getElementById("anteff4aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[4]).toExponential(2);
    
    doseratio1aff = document.getElementById("antdose1aff").value = calcDoseRatioAff(anthalfeff1aff, anthalfeff0aff).toFixed(2);
    doseratio2aff = document.getElementById("antdose2aff").value = calcDoseRatioAff(anthalfeff2aff, anthalfeff0aff).toFixed(2);
    doseratio3aff = document.getElementById("antdose3aff").value = calcDoseRatioAff(anthalfeff3aff, anthalfeff0aff).toFixed(2);
    doseratio4aff = document.getElementById("antdose4aff").value = calcDoseRatioAff(anthalfeff4aff, anthalfeff0aff).toFixed(2);
    
    logdr1aff = document.getElementById("antlogdr1aff").value = calcLogDRAff(doseratio1aff).toFixed(2);
    logdr2aff = document.getElementById("antlogdr2aff").value = calcLogDRAff(doseratio2aff).toFixed(2);
    logdr3aff = document.getElementById("antlogdr3aff").value = calcLogDRAff(doseratio3aff).toFixed(2);
    logdr4aff = document.getElementById("antlogdr4aff").value = calcLogDRAff(doseratio4aff).toFixed(2);
    //updatePropertyTable();
    updateSchildPropertyTableAff();
}


function calcLinesAff(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoeffect, agoconcentration){
    const STEP = 0.01;
    var data = [[],[]];
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var agoeff = 10**(-1*agoeffect);
    var agoconc;

    if(agoconcentration === 0){
        agoconc = 0;
        agoaffin = 0;
        var i;
        for (i=-12; i<-2;i=i+STEP){
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin));
        }
    }
    else{
        agoconc = 10**agoconcentration;
        var i;
        for (i=-12; i<-2;i=i+STEP){
            //effect = ((10**i)*efcay*recep*efcey*100)/((10**i)*(efcay*recep*efcey+1)+((affin*(agoconc/agoaffin + 1))/(1+((agoeff*agoconc)/agoaffin))));
            data[0].push(i);
            data[1].push(((10**i)*efcay*recep*efcey*100)/((10**i)*(efcay*recep*efcey+1-efcay)+((affin*(agoconc/agoaffin + 1))/(1+((agoeff*agoconc)/agoaffin)))));
        }
    }
    return data;
}

var linecoloursaff = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#ff0000"]

function plotGraphAff(chart){
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
    	var lineData = calcLinesAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[j])
   		if(j==0){
			var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 0+"nM",
                line: {
                    color: linecoloursaff[j],
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
       			name: 10**agoconcarraff[j]*1000000000+"nM",
                line: {
                    color: linecoloursaff[j],
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
        var halfData = calcLinesAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[i]);
        findAffHalfMaxEffect(calcLinesAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[0]));
        data50 = calc50Aff(halfData); //plot the 50% effect marker
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
plotGraphAff("quantitativeAff");

var anthalfeff0aff = document.getElementById("anteff0aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[0]).toExponential(2);
var anthalfeff1aff = document.getElementById("anteff1aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[1]).toExponential(2);
var anthalfeff2aff = document.getElementById("anteff2aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[2]).toExponential(2);
var anthalfeff3aff = document.getElementById("anteff3aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[3]).toExponential(2);
var anthalfeff4aff = document.getElementById("anteff4aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[4]).toExponential(2);

var doseratio1aff = document.getElementById("antdose1aff").value = calcDoseRatioAff(anthalfeff1aff, anthalfeff0aff).toFixed(2);
var doseratio2aff = document.getElementById("antdose2aff").value = calcDoseRatioAff(anthalfeff2aff, anthalfeff0aff).toFixed(2);
var doseratio3aff = document.getElementById("antdose3aff").value = calcDoseRatioAff(anthalfeff3aff, anthalfeff0aff).toFixed(2);
var doseratio4aff = document.getElementById("antdose4aff").value = calcDoseRatioAff(anthalfeff4aff, anthalfeff0aff).toFixed(2);

var logdr1aff = document.getElementById("antlogdr1aff").value = calcLogDRAff(doseratio1aff).toFixed(2);
var logdr2aff = document.getElementById("antlogdr2aff").value = calcLogDRAff(doseratio2aff).toFixed(2);
var logdr3aff = document.getElementById("antlogdr3aff").value = calcLogDRAff(doseratio3aff).toFixed(2);
var logdr4aff = document.getElementById("antlogdr4aff").value = calcLogDRAff(doseratio4aff).toFixed(2);
//updatePropertyTable();
updateSchildPropertyTableAff();

function updateValidAff(data0, data1, data2, data3){
    var validdata = [data0[0], data1[0], data2[0], data3[0]];

    for(i = 0; i<4; i++){
        if(validdata[i]>=-12 && validdata[i]<=-2){
            isPointValidaff[i] = true;
        }
        else{
            isPointValidaff[i] = false;
        }
    }
}

function calcSchildAff(logval1,logval2, logval3, logval4, dr1, dr2, dr3, dr4){ //add 3 other concentrations as args
    var data = [[],[]];
	var allxLogs = [logval1, logval2, logval3, logval4] //x values for the schild
	var alllogDr1 = [dr1, dr2, dr3, dr4]
    var xLogs = [];
    var logDr1 = [];
    var j = 0;

    for(i = 0; i<4; i++){
        if(isPointValidaff[i]){
            xLogs[j] =  allxLogs[i];
            logDr1[j] = alllogDr1[i];
            j++;
        }
    }

	data[0] = xLogs;
	data[1] = logDr1;

    return data;

}

function plotSchildAff(chart){
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

    var lineData = calcSchildAff(antlogval1aff, antlogval2aff, antlogval3aff, antlogval4aff, logdr1aff, logdr2aff, logdr3aff, logdr4aff);
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
    var lineData2 = calcSchildAff(antlogval1aff, antlogval2aff, antlogval3aff, antlogval4aff, logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    for (i = 0; i < lineData2[1].length; i++){
        lineData2[1][i] = Number(lineData2[0][i]) + 9;
        console.log("loop exed");
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

plotSchildAff("schildAff");

//Define a function to calculate real line values for Shild Plot Property Table, this part hasn't been finished yet.
function updateSchildPropertyTableAff(){
    //Get x values and y values.
    var tableDataAff = calcSchildAff(antlogval1aff, antlogval2aff, antlogval3aff, antlogval4aff, logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    var xtableDataAff = tableDataAff[0];
    var ytableDataAff = tableDataAff[1];
    for (i = 0; i < xtableDataAff.length; i++){
    xtableDataAff[i] = Number(xtableDataAff[i]);
    }
    for (i = 0; i < ytableDataAff.length; i++){
    ytableDataAff[i] = Number(ytableDataAff[i]);
    }

    //Calculate the slope.
    var y2 = ytableDataAff[3];
    var y1 = ytableDataAff[0];
    var x2 = xtableDataAff[3];
    var x1 = xtableDataAff[0];

    var slopeValueAff = (y2 - y1) / (x2 - x1);
    document.getElementById("slopevalueaff").innerHTML = slopeValueAff.toFixed(3);
    //document.getElementById("slopevalueaff").innerHTML = x1;

    //Calculate pA2.
    var bAff = y1 - (slopeValueAff * x1);
    var pA2ValueAff = (0 - bAff) / slopeValueAff;
    document.getElementById("pA2valueaff").innerHTML = bAff.toFixed(3);

    //Calculate R square.

    //Calculate the mean of x.
    var xtotal = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
      xtotal += xtableDataAff[i];
    }
    var xmean = xtotal/xtableDataAff.length;

    //Calculate the mean of y.
    var ytotal = 0;
    for (var i = 0; i < ytableDataAff.length; i++) {
      ytotal += ytableDataAff[i];
    }
    var ymean = ytotal/ytableDataAff.length;

    //Calculate sum of regression.
    var regressionSum = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
        regressionSum += (xtableDataAff[i] - xmean) * (ytableDataAff[i] - ymean);
    }

    //Calculate sum of total.
    var sumx2 = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
        sumx2 += (xtableDataAff[i] - xmean) ** 2;
    }

    var sumy2 = 0;
    for (var i = 0; i < ytableDataAff.length; i++) {
        sumy2 += (ytableDataAff[i] - ymean) ** 2;
    }

    var totalSum = Math.sqrt(sumx2 * sumy2);

    //Calculate R square value.
    var rValue = regressionSum/totalSum;
    var r2ValueAff = rValue ** 2;

    document.getElementById("r2valueaff").innerHTML = r2ValueAff.toFixed(3);
    //document.getElementById("r2valueaff").innerHTML = xtotal;

}

/*
function updatePropertyTable(){
    // get data of plot point in the shild plot 
    var tableDataAff = calcSchildAff(antlogval1aff, antlogval2aff, antlogval3aff, antlogval4aff, logdr1aff, logdr2aff, logdr3aff, logdr4aff);
    var xtableDataAff = tableDataAff[0];
    var ytableDataAff = tableDataAff[1];
    for (i = 0; i < xtableDataAff.length; i++){
        xtableDataAff[i] = Number(xtableDataAff[i]);
    }
    for (i = 0; i < ytableDataAff.length; i++){
        ytableDataAff[i] = Number(ytableDataAff[i]);
    }
    //slope in this table
    var slopeValue = (xtableDataAff[2]-xtableDataAff[1])/(ytableDataAff[2]-ytableDataAff[1]);
    document.getElementById("slopevalueaff").innerHTML = slopeValue.toFixed(1);

    //PA2 value
    if (0 in xtableDataAff){
        var index = ytableDataAff.indexOf(0);
        document.getElementById("pA2valueaff").innerHTML = xtableDataAff[index];
    } 
    else {
        document.getElementById("pA2valueaff").innerHTML = "Not Exist";
    }
    //R^2 value
    //Calculate the mean of x.
    var xtotal = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
      xtotal += xtableDataAff[i];
    }
    var xmean = xtotal/xtableDataAff.length;
    //Calculate the mean of y.
    var ytotal = 0;
    for (var i = 0; i < ytableDataAff.length; i++) {
      ytotal += ytableDataAff[i];
    }
    var ymean = ytotal/ytableDataAff.length;
    //Calculate sum of regression.
    var regressionSum = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
        regressionSum += (xtableDataAff[i] - xmean) * (ytableDataAff[i] - ymean);
    }
    //Calculate sum of total.
    var sumx2 = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
        sumx2 += (xtableDataAff[i] - xmean) ** 2;
    }
    var sumy2 = 0;
    for (var i = 0; i < ytableDataAff.length; i++) {
        sumy2 += (ytableDataAff[i] - ymean) ** 2;
    }

    var totalSum = Math.sqrt(sumx2 * sumy2);

    //Calculate R square value.
    var rValue = regressionSum/totalSum;
    var r2Value = rValue ** 2;
    document.getElementById("r2valueaff").innerHTML = r2Value.toFixed(2);
}*/
//old version here
/*
//Define functions to calculate actual line values for Shild Plot Property Table, the formulas need to be modified here, this part hasn't been finished yet.
//Get x values and y values.
var tableDataAff = calcSchildAff(antlogval1aff, antlogval2aff, antlogval3aff, antlogval4aff, logdr1aff, logdr2aff, logdr3aff, logdr4aff);
var xtableDataAff = tableDataAff[0];
var ytableDataAff = tableDataAff[1];
for (i = 0; i < xtableDataAff.length; i++){
    xtableDataAff[i] = Number(xtableDataAff[i]);
}
for (i = 0; i < ytableDataAff.length; i++){
    ytableDataAff[i] = Number(ytableDataAff[i]);
}

//Calculate slope.
function calcSlopeValueAff(){
    var slopeValue = (xtableDataAff[2]-xtableDataAff[1])/(ytableDataAff[2]-ytableDataAff[1]);
    return slopeValue;
}
var slopeValueAff = document.getElementById("slopevalueaff").innerHTML = calcSlopeValueAff().toFixed(1);

//Calculate pA2.
function calcpA2ValuAff(){
    if (0 in xtableDataAff){
        var index = ytableDataAff.indexOf(0);
        var pA2Value = xtableDataAff[index];
    } 
    else {
        var pA2Value = "Not Exist";
    }
    return pA2Value; 
}
var pA2ValueAff = document.getElementById("pA2valueaff").innerHTML = calcpA2ValuAff().toFixed(0);

//Calculate R square.
function calcr2ValueAff(){
    //Calculate the mean of x.
    var xtotal = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
      xtotal += xtableDataAff[i];
    }
    var xmean = xtotal/xtableDataAff.length;

    //Calculate the mean of y.
    var ytotal = 0;
    for (var i = 0; i < ytableDataAff.length; i++) {
      ytotal += ytableDataAff[i];
    }
    var ymean = ytotal/ytableDataAff.length;

    //Calculate sum of regression.
    var regressionSum = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
        regressionSum += (xtableDataAff[i] - xmean) * (ytableDataAff[i] - ymean);
    }

    //Calculate sum of total.
    var sumx2 = 0;
    for (var i = 0; i < xtableDataAff.length; i++) {
        sumx2 += (xtableDataAff[i] - xmean) ** 2;
    }

    var sumy2 = 0;
    for (var i = 0; i < ytableDataAff.length; i++) {
        sumy2 += (ytableDataAff[i] - ymean) ** 2;
    }

    var totalSum = Math.sqrt(sumx2 * sumy2);

    //Calculate R square value.
    var rValue = regressionSum/totalSum;
    var r2Value = rValue ** 2;

    return r2Value; 
}
var r2ValueAff = document.getElementById("r2valueaff").innerHTML = calcr2ValueAff().toFixed(2);
*/

function showInstructionsQuant() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#quant"]').tab('show');
};

//QUESTION BOX
var questionsSchildaff = ["For an allosteric antagonist that reduces agonist affinity only, will the Schild plot be linear with a slope = 1.0?",
"Is the shape and position of the Schild plot likely to be independent of the properties of the agonist (affinity / efficacy) and/or cell (receptor density, signal amplification)?",
"Can the pA<sub>2</sub> values derived from the Schild plot be used to calculate –logK<sub>B</sub> values for an allosteric antagonist?",
"Are allosteric antagonists appropriate for use in Schild analyses?"];
	
	
var answersSchildaff = ["YES and NO, depending on the concentration range of allosteric antagonist used and the maximum level of rightward shift produced by the antagonist. <br> Let’s first consider an allosteric antagonist that has a large propensity to reduce agonist affinity.  For example, an allosteric antagonist with a low  value of 0.001 will cause a maximum 1000-fold (1/) rightward shift of an agonist dose-response curve (when high [allosteric antagonist] saturate the allosteric binding site).  When such an allosteric antagonist is used at concentrations that produce 5, 20 and 100-fold rightward shifts (much less than the maximum level of possible shift), it will appear that the agonist dose-response curves are shifted to the right in a parallel manner, akin to that produced by a competitive antagonist.  Using these concentrations of allosteric antagonist, the generated Schild plot will appear linear with a slope of unity. <br>Secondly, if an allosteric antagonist has either a low propensity to reduce agonist affinity, or if high concentrations are used (that approach the maximum level of possible shift), then the resultant Schild plot will be nonlinear (a plateau region appearing at high [antagonist]) with a slope < 1.0.  This can be readily observed by using the Dose-Response Visualiser.  (see Kenakin p188 and p428).",
"YES, for an allosteric antagonist that affects agonist affinity only, the shape and position of the Schild plot may be dependent upon the agonist used (unlike competitive antagonists).  This is because allosteric antagonists display ‘probe dependence’, whereby the effects of an allosteric antagonist on the affinity of the agonist for the orthosteric binding site on the receptor may vary markedly between agonists, i.e. be substantial for one agonist but inconsequential for another agonist.  Thus, whereas the use of the former agonist may produce a characteristic Schild plot (linear with slope = 1.0) the latter agonist may NOT produce a Schild plot at all (as the allosteric antagonist does not affect the affinity of this particular agonist).  If the allosteric antagonist only affects agonist affinity, then the impact of changing agonist efficacy, receptor density or signal amplification on the shape and position of the Schild plot should be minimal.",
"YES, it is possible to determine the –logK<sub>B</sub> value for an allosteric antagonist that affects agonist affinity from a pA<sub>2</sub> value derived from a Schild plot.<br> As indicated in the first question of this series, a Schild plot for an allosteric antagonist that affects agonist affinity will appear linear with a slope of 1.0 IF the allosteric antagonist has a large propensity to reduce agonist affinity and the [allosteric antagonist] used produce dose ratios (shifts) that are much less than the maximum dose ratio.  In this instance, the pA<sub>2</sub> value is likely to be a reliable estimate of the affinity (-logK<sub>B</sub>) of the antagonist for the allosteric binding site on the receptor.  Alternately, the fitting of experimental agonist dose-response data obtained over a wide range of [allosteric antagonist] to an appropriate model of allosteric antagonism using nonlinear least squares regression analysis may generate reliable K<sub>B</sub> values (and &#946 values) (see Kenakin p428). ",
"As indicated in the answers to previous questions, careful analyses of Schild plots obtained to allosteric antagonists that affect agonist affinity can provide reliable measures of the affinity of the antagonist for the allosteric binding site on the receptor."]; 

 
var questionCounterSchildaff = 0;
document.getElementById("schildQuestionaff").innerHTML = "<b>" + questionsSchildaff[questionCounterSchildaff] + "</b>";


function revealAnswerSchildAff() {
    document.getElementById("schildAnsweraff").innerHTML = answersSchildaff[questionCounterSchildaff];
    $('#schildAnswerModalaff').modal('show');
}


function nextQuestionSchildAff() {
    if (questionCounterSchildaff + 1 == questionsSchildaff.length) { //end of questions
        questionCounterSchildaff++;
        document.getElementById("schildQuestionaff").style.display = "none";
        document.getElementById("revealSchildAnsweraff").style.display = "none";
        document.getElementById("restartMessageSchildaff").style.display = "inline-block";
        document.getElementById("restartQuestionSchildaff").style.display = "inline-block";
        document.getElementById("nextSchildQuestionaff").style.display = "none";
    }
    else {
        questionCounterSchildaff++;
        document.getElementById("restartMessageSchildaff").style.display = "none";
        document.getElementById("restartQuestionSchildaff").style.display = "none";
        document.getElementById("schildQuestionaff").innerHTML = "<b>" + questionsSchildaff[questionCounterSchildaff] + "</b>";
    }
}

function prevQuestionSchildAff() {
    if (!questionCounterSchildaff) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterSchildaff--;
        document.getElementById("schildQuestionaff").style.display = "block";
        document.getElementById("nextSchildQuestionaff").style.display = "inline-block";
        document.getElementById("revealSchildAnsweraff").style.display = "inline-block";
        document.getElementById("restartMessageSchildaff").style.display = "none";
        document.getElementById("restartQuestionSchildaff").style.display = "none";
        document.getElementById("schildQuestionaff").innerHTML = "<b>" + questionsSchildaff[questionCounterSchildaff] + "</b>";
    }
}

function restartQuestionSchildAff() {
    questionCounterSchildaff = 0;
    document.getElementById("schildQuestionaff").style.display = "block";
    document.getElementById("nextSchildQuestionaff").style.display = "inline-block";
    document.getElementById("restartMessageSchildaff").style.display = "none";
    document.getElementById("restartQuestionSchildaff").style.display = "none";
    document.getElementById("schildQuestionaff").innerHTML = "<b>" + questionsSchildaff[questionCounterSchildaff] + "</b>";
    document.getElementById("revealSchildAnsweraff").style.display = "inline-block";
}
