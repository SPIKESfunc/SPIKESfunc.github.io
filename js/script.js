var affago = document.getElementById("affslider").defaultValue;
var effago = document.getElementById("effslider").defaultValue;
var denago = document.getElementById("denslider").defaultValue;
var efficago = document.getElementById("efficislider").defaultValue;
 //var calc50aff;
 var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}
 $(document).ready(function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.visibility = "visible";
  document.getElementById("page").style.position = "relative";
  document.getElementById("footer").style.visibility = "visible";
})
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
    var agoret = [halfAgoEffect, halfMaxEffect];
    console.log("agoret"+ agoret)
	return agoret; //return x, y
 }
 function graphAlert(div){
     document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}
 function graphRemoveAlert(div){
    //Determine which graph to remove alert from
    document.getElementById(div).innerHTML = ""
}
 function checkSliderMinAgo(){
    let ret = false;
    if(document.getElementById("affslider").value == 4){
        ret = true
    }
    if(document.getElementById("effslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("denslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("efficislider").value == -0.3){
        ret = true
    }
    return ret
}
 function updateAffinity(value){
    affago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", 'visible', false)
        graphAlert("agoalert")
    }
    else{
        graphRemoveAlert("agoalert")
        Plotly.restyle("agonist", 'visible', true)
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData); //not calling properly
        console.log(calc50aff[0]); //getting undefined here!
         /*var graph = {
            y: lineData[1],
            traces:[0]
        }
        newData.push(graph);*/
        
        //I'm doing something wrong if I try just place lineData into newData, below works though
        //Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: [calc50aff]}], traces: [0,1], layout: {}},animation)
         Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: [calc50aff[0]], y: [calc50aff[1]]}], traces: [0,1], layout: {}},animation)
     }
} 
 function updateEfficacy(value){
    effago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", 'visible', false)
        graphAlert("agoalert")
    }
    else{
        graphRemoveAlert("agoalert")
        Plotly.restyle("agonist", 'visible', true)
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);
         //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: [calc50aff[0]], y: [calc50aff[1]]}], traces: [0,1], layout: {}},animation)
    }
} 
 function updateDensity(value){
    denago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", 'visible', false)
        graphAlert("agoalert")
    }
    else{
        graphRemoveAlert("agoalert")
        Plotly.restyle("agonist", 'visible', true)
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);
         //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: [calc50aff[0]], y: [calc50aff[1]]}], traces: [0,1], layout: {}},animation)
    }
} 
 function updateEfficiency(value){
    efficago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", 'visible', false)
        graphAlert("agoalert")
    }
    else{
        graphRemoveAlert("agoalert")
        Plotly.restyle("agonist", 'visible', true)
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);
         //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: [calc50aff[0]], y: [calc50aff[1]]}], traces: [0,1], layout: {}},animation)
    }
} 
 function resetAgo(){
    affago = document.getElementById("affslider").value = document.getElementById("affslider").defaultValue;
    effago = document.getElementById("effslider").value = document.getElementById("effslider").defaultValue;
    denago = document.getElementById("denslider").value = document.getElementById("denslider").defaultValue;
    efficago = document.getElementById("efficislider").value = document.getElementById("efficislider").defaultValue;
    lineData = calcLines(affago,effago,denago,efficago);
    calc50aff = calc50(lineData);
     Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: [calc50aff]}], traces: [0,1], layout: {}},animation)
}
 function calcLines(affinity, efficacy, recepDensity, efficiency){
    const STEP = 0.01;
    var data = [[],[]];
    //Inverse log input values
     var affin = (10**(-1*affinity));
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    for (i=-12; i<-2;i=i+STEP){
        effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
        data[0].push(i);
        data[1].push(effect);
    }
    return data;
}
 function plotGraph(chart){
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
            //tickvals: [0,20,40,60,80,100],
            dtick: 10
         },
        showlegend: false
        /*sliders: [
            {
                label: 'Slider 1',
                pad: {t: 30},
                active: 50,
                font:{color: 'transparent'}, 
                tickcolor: 'transparent',
                steps: sliderSteps
            },
            {
                label: 'Slider 2',
                pad: {t: 30},
                active: 50,
                font:{color: 'transparent'}, 
                tickcolor: 'transparent',
                steps: sliderSteps
            }
        ]*/
    }
    var data = []
    var lineData = calcLines(affago, effago, denago, efficago)
	
    //console.log(lineData)
    var graph = {
        x: lineData[0],
        y: lineData[1],
        mode: "lines",
        line: {
            color: '#000000',
            width: 1
        }
    }
    data.push(graph);
     Plotly.plot(chart,data,layout, {responsive: true});
	
	data50 = calc50(lineData); //plot the 50% effect marker
	var trace1 = [{
		x: [data50[0]],
		y: [data50[1]],
		mode: 'markers',
		name: "50% effect"
	}];
	Plotly.plot(chart,trace1,layout, {responsive: true});
}
plotGraph("agonist");
