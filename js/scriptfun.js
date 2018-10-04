
var afffun = document.getElementById("afffunslider").defaultValue;
var efffun = document.getElementById("efffunslider").defaultValue;
var denfun = document.getElementById("denfunslider").defaultValue;
var efficfun = document.getElementById("efficifunslider").defaultValue;
var agoafffun = document.getElementById("agoafffunslider").defaultValue;
var agoefffun = document.getElementById("agoefffunslider").defaultValue;
var agodenfun = document.getElementById("agodenfunslider").defaultValue;
var agoefficfun = document.getElementById("agoefficifunslider").defaultValue;

var agoconcarr = [0, -9, -8, -7, -6];

var animation = {
    transition: {
        duration: 100,
        easing: "exp-in-out"
    }
}

function checkSliderMinFun(){
    let ret = false;
    if(document.getElementById("afffunslider").value == 4){
        ret = true
    }
    if(document.getElementById("efffunslider").value == 0){
        ret = true
    }
    if(document.getElementById("denfunslider").value == 0){
        ret = true
    }
    if(document.getElementById("efficifunslider").value == 0){
        ret = true
    }
    return ret
}

function updateAffinityFun(value){
    afffun = value;
    if(checkSliderMinFun()){
        Plotly.restyle("functional", 'visible', false)
        graphAlert("funalert")
    }
    else{
        graphRemoveAlert("funalert")
        Plotly.restyle("functional", 'visible', true)
        lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
        lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
        lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
        lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
        lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("functional",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}, 
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }

} 

function updateEfficacyFun(value){
    efffun = value;
    if(checkSliderMinFun()){
        Plotly.restyle("functional", 'visible', false)
        graphAlert("funalert")
    }
    else{
        graphRemoveAlert("funalert")
        Plotly.restyle("functional", 'visible', true)
        lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
        lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
        lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
        lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
        lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("functional",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }
} 

function updateDensityFun(value){
    denfun = value;
    if(checkSliderMinFun()){
        Plotly.restyle("functional", 'visible', false)
        graphAlert("funalert")
    }
    else{
        graphRemoveAlert("funalert")
        Plotly.restyle("functional", 'visible', true)
        lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
        lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
        lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
        lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
        lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("functional",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }
} 

function updateEfficiencyFun(value){
    efficfun = value;
    if(checkSliderMinFun()){
        Plotly.restyle("functional", 'visible', false)
        graphAlert("funalert")
    }
    else{
        graphRemoveAlert("funalert")
        Plotly.restyle("functional", 'visible', true)
        lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
        lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
        lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
        lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
        lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("functional",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }

} 

function updateAgoAffinityFun(value){
    agoafffun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)

}

function updateAgoEfficacyFun(value){
    agoefffun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
}

function updateAgoDensityFun(value){
    agodenfun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
} 

function updateAgoEfficiencyFun(value){
    agoefficfun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)

} 

function resetFun(){
    afffun = document.getElementById("afffunslider").value = document.getElementById("afffunslider").defaultValue;
    efffun = document.getElementById("efffunslider").value = document.getElementById("efffunslider").defaultValue;
    denfun = document.getElementById("denfunslider").value = document.getElementById("denfunslider").defaultValue;
    efficfun = document.getElementById("efficifunslider").value = document.getElementById("efficifunslider").defaultValue;
    agoafffun = document.getElementById("agoafffunslider").value = document.getElementById("agoafffunslider").defaultValue;
    agoefffun = document.getElementById("agoefffunslider").value = document.getElementById("agoefffunslider").defaultValue;
    agodenfun = document.getElementById("agodenfunslider").value = document.getElementById("agodenfunslider").defaultValue;
    agoefficfun = document.getElementById("agoefficifunslider").value = document.getElementById("agoefficifunslider").defaultValue;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
}

function calc50(lineData){

    var halfMaxEffect = Math.max.apply(Math, lineData[1])/2; //get the 50% value
    //var halfMaxEffect = lineData[1][1000]/2
	console.log("halfmaxeffect" + halfMaxEffect);
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= halfMaxEffect;
    });
    console.log("maxeffectagoindex" + maxEffectAgoIndex);
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    console.log("halfagoeffect" + halfAgoEffect)
    var agoret = [[halfAgoEffect], [halfMaxEffect]];
    console.log("agoret"+ agoret)
	return agoret; //return x, y

}

function calcLinesFun(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoefficacy, agoconcentration, agodensity, agoefficiency){
    //console.log("calclines ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var agoeff = 10**(agoefficacy);
    var agoden = 10**agodensity;
    var agoeffic = 10**agoefficiency;

    var emaxa = 100;
    var emaxb = 100;

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
            /*effect1 = (100/((agoconc/agoaffin) +1));
            effect2 = aconc*efcay*recep*efcey;
            effect3 = (aconc*((efcay*recep*efcey)+1))+affin;
            effect4 = agoconc*aconc*agoeff*agoden*agoeffic;
            effect5 = agoaffin*((aconc*((agoeff*agoden*agoeffic)+1))+affin);
            effect = effect1*((effect2/effect3)+(effect4/effect5));*/

            effect1 = aconc*efcay*recep*efcey*emaxa;
            effect2 = (aconc*((efcay*recep*efcey)+1))+affin;
            effect3 = agoconc*agoeff*agoden*agoeffic*emaxb;
            effect4 = (agoconc*((agoeff*agoden*agoeffic)+1))+agoaffin;

            effect = ((effect1/effect2)-(effect3/effect4));

            //effect = (100/((agoconc/agoaffin)+1))*(((aconc*efcay*recep*efcey)/((aconc*((efcay*recep*efcey)+1))+affin))+((agoconc*aconc*(agoeff*agoden*agoeffic))/(agoaffin*aconc*((agoeff*agoden*agoeffic)+1)+affin)));
            data[0].push(i);
            data[1].push(effect);
        }
    }
    return data;
}

var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#cc0000"]

function plotGraphFun(chart){

    var layout = {
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
            dtick: 10

        }
    }
    var j;
    for(j = 0; j<5; j++){
        var data= [];
        var lineData = calcLinesFun(afffun, efffun, denfun, efficfun, agoafffun, agoefffun, agoconcarr[j],agodenfun,agoefficfun)
        
        if(j==0){
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 0+"nM",
                line: {
                    color: linecolours[j],
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
                    color: linecolours[j],
                    width: 1
                }
            }
        }
    data.push(graph);

    Plotly.plot(chart,data,layout, {responsive: true});
    }
    var i;
    for(i = 0; i<5; i++){
        var halfData = calcLinesFun(afffun, efffun, denfun, efficfun, agoafffun, agoefffun, agoconcarr[i],agodenfun,agoefficfun);
        data50 = calc50(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "50% effect"
        }];
        Plotly.plot(chart,trace1,layout, {responsive: true});
    }
}

plotGraphFun("functional");

