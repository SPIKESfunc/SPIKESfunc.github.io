
var agoconcarr = [0, -9, -8, -7, -6];

var affirr = document.getElementById("affirrslider").defaultValue;
var effirr = document.getElementById("effirrslider").defaultValue;
var denirr = document.getElementById("denirrslider").defaultValue;
var efficirr = document.getElementById("efficiirrslider").defaultValue;
var agoaffirr = document.getElementById("agoaffirrslider").defaultValue;

var animation = {
    transition: {
        duration: 100,
        easing: "exp-in-out"
    }
}

function updateAffinityIrr(value){
    affirr = value;

    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateEfficacyIrr(value){
    effirr = value;

    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateDensityIrr(value){
    denirr = value;

    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateEfficiencyIrr(value){
    efficirr = value;

    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateAgoAffinityIrr(value){
    agoaffirr = value;
    
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
    //I'm doing something wrong if I try just place lineData into newData, below works though
    

}

function resetIrr(){
    affirr = document.getElementById("affirrslider").value = document.getElementById("affirrslider").defaultValue;
    effirr = document.getElementById("effirrslider").value = document.getElementById("effirrslider").defaultValue;
    denirr = document.getElementById("denirrslider").value;
    efficirr = document.getElementById("denirrslider").value = document.getElementById("efficiirrslider").defaultValue;
    agoaffirr = document.getElementById("agoaffirrslider").value = document.getElementById("agoaffirrslider").defaultValue;
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
}

function calcLinesIrr(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoconcentration){
    console.log("calclinesirr ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);

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
            effect = (((10**i)/affin)*efcay*recep*efcey*100)/(((10**i)/affin)*(efcay*recep*efcey+1+(agoconc/agoaffin))+1+(agoconc/agoaffin));
            data[0].push(i);
            data[1].push(effect);
        }
    }
    
    return data;
}

function plotGraphIrr(chart){

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
        var lineData = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[j])

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

        Plotly.plot(chart,data,layout, {responsive: true});
    }
    
}
plotGraphIrr("irreversible");
