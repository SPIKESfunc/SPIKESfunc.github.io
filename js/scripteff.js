
var affeff = document.getElementById("affeffslider").defaultValue;
var effeff = document.getElementById("effeffslider").defaultValue;
var deneff = document.getElementById("deneffslider").defaultValue;
var efficeff = document.getElementById("efficieffslider").defaultValue;
var agoaffeff = document.getElementById("agoaffeffslider").defaultValue;
var agoeffeff = document.getElementById("agoeffeffslider").defaultValue;


var agoconcarr = [0, -9, -8, -7, -6];

var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}

function updateAffinityEff(value){
    affeff = value;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[4]);
    Plotly.animate("alloeffic",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateEfficacyEff(value){
    effeff = value;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[4]);
    Plotly.animate("alloeffic",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateDensityEff(value){
    deneff = value;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[4]);
    Plotly.animate("alloeffic",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateEfficiencyEff(value){
    efficeff = value;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[4]);
    Plotly.animate("alloeffic",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateAgoAffinityEff(value){
    agoaffeff = value;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[4]);
    Plotly.animate("alloeffic",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

}

function updateAgoEffectEff(value){
    agoeffeff = value;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[4]);
    Plotly.animate("alloeffic",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
}

function resetEff(){
    affeff = document.getElementById("affeffslider").value = document.getElementById("affeffslider").defaultValue;
    effeff = document.getElementById("effeffslider").value = document.getElementById("effeffslider").defaultValue;
    deneff = document.getElementById("deneffslider").value = document.getElementById("deneffslider").defaultValue;
    efficeff = document.getElementById("efficieffslider").value = document.getElementById("efficieffslider").defaultValue;
    agoaffeff = document.getElementById("agoaffeffslider").value = document.getElementById("agoaffeffslider").defaultValue;
    agoeffeff = document.getElementById("agoeffeffslider").value = document.getElementById("agoeffeffslider").defaultValue;
    lineData0 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[0]);
    lineData1 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[1]);
    lineData2 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[2]);
    lineData3 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[3]);
    lineData4 = calcLinesEff(affeff,effeff,deneff,efficeff,agoaffeff,agoeffeff,agoconcarr[4]);
    //console.log(lineData0)
    Plotly.animate("alloeffic",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
}

function calcLinesEff(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoeffect, agoconcentration){
    //console.log("calclines ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    console.log("Inside calclines, agoeffeff:" + agoeffect)
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);

    var agoeff = 10**(-1*agoeffect);


    if(agoconcentration == 0){
        //console.log("agoconc 0 activated")
        agoconc = 0;
        agoaffin = 0;
        for (i=-12; i<-2;i=i+STEP){
            effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push(effect);
        }
    }
    else{
        //console.log("agoconc not 0 activated")
        agoconc = 10**agoconcentration;
        for (i=-12; i<-2;i=i+STEP){
            var aconc = 10**i;
            //effect = (100/((agoconc/agoaffin)+1))*(((aconc*efcay*recep*efcey)/((aconc*((efcay*recep*efcey)+1))+affin))+((agoconc*aconc*((agoeff*efcay)*recep*efcey))/(agoaffin*aconc*(((agoeff*efcay)*recep*efcey)+1)+affin)))
            effect1 = (100/((agoconc/agoaffin)+1))
            effect2 = (aconc*efcay*recep*efcey)/(aconc*(efcay*recep*efcey+1)+affin)
            effect3 = (agoconc/agoaffin)
            effect4 = (aconc*agoeff*efcay*recep*efcey)/(aconc*(agoeff*efcay*recep*efcey+1)+affin)
            effect = effect1*(effect2+effect3*effect4)
            data[0].push(i);
            data[1].push(effect);
        }
    }
    return data;
}

function plotGraphEff(chart){

    var layout = {
        xaxis:{
            title: "[Agonist] (log M)",
            showline: true,
            range: [-12,-2],
            
        },
        yaxis:{
            title: "Effect (% Emax)",
            showline: true,
            range: [0,100],
            tickvals: [0,20,40,60,80,100]

        }
    }
    var j;
    for(j = 0; j<5; j++){
        var data= [];
        var lineData = calcLinesEff(affeff, effeff, deneff, efficeff, agoaffeff, agoeffeff, agoconcarr[j])

        if(j==0){
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 0+"nM",
                line: {
                width: 1
                }
            }
        }
        else{
        var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 10**agoconcarr[j]*1000000000+"nM",
                line: {
                width: 1
                }
            }
        }
    data.push(graph);

    Plotly.plot(chart,data,layout);
    }
}

plotGraphEff("alloeffic");
