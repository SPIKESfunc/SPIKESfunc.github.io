var agoconcarr = [0, -9, -8, -7, -6];

var affcom = document.getElementById("affcomslider").defaultValue;
var effcom = document.getElementById("effcomslider").defaultValue;
var dencom = document.getElementById("dencomslider").defaultValue;
var efficcom = document.getElementById("efficicomslider").defaultValue;
var agoaffcom = document.getElementById("agoaffcomslider").defaultValue;

var animation = {
    transition: {
        duration: 100,
        easing: "exp-in-out"
    }
}

function checkSliderMinCom(){
    let ret = false;
    if(document.getElementById("affcomslider").value == 4){
        ret = true
    }
    if(document.getElementById("effcomslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("dencomslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("effcomslider").value == -0.3){
        ret = true
    }
    return ret
}

function updateAffinityCom(value){
    affcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("competitive", 'visible', false)
        graphAlert("comalert")
    }
    else{
        graphRemoveAlert("comalert")
        Plotly.restyle("competitive", 'visible', true)
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        
        //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("competitive",{
                data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
                {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
                y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
                traces: [0,1,2,3,4,5,6,7,8,9],
                layout: {}
                },animation)
    }
} 

function updateEfficacyCom(value){
    effcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("competitive", 'visible', false)
        graphAlert("comalert")
    }
    else{
        graphRemoveAlert("comalert")
        Plotly.restyle("competitive", 'visible', true)
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("competitive",{
                data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
                {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
                y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
                traces: [0,1,2,3,4,5,6,7,8,9],
                layout: {}
                },animation)         
    }

} 

function updateDensityCom(value){
    dencom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("competitive", 'visible', false)
        graphAlert("comalert")
    }
    else{
        graphRemoveAlert("comalert")
        Plotly.restyle("competitive", 'visible', true)
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);    //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("competitive",{
                data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
                {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
                y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
                traces: [0,1,2,3,4,5,6,7,8,9],
                layout: {}
                },animation)
    }
} 

function updateEfficiencyCom(value){
    efficcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("competitive", 'visible', false)
        graphAlert("comalert")
    }
    else{
        graphRemoveAlert("comalert")
        Plotly.restyle("competitive", 'visible', true)
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);    //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("competitive",{
                data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
                {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
                y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
                traces: [0,1,2,3,4,5,6,7,8,9],
                layout: {}
                },animation)
    }

} 

function updateAgoAffinityCom(value){
    agoaffcom = value;
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    //I'm doing something wrong if I try just place lineData into newData, below works though
    Plotly.animate("competitive",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
     		traces: [0,1,2,3,4,5,6,7,8,9],
     		layout: {}
     		},animation)

}

function resetCom(){
	affcom = document.getElementById("affcomslider").value = document.getElementById("affcomslider").defaultValue;
	effcom = document.getElementById("effcomslider").value = document.getElementById("effcomslider").defaultValue;
	dencom = document.getElementById("dencomslider").value = document.getElementById("dencomslider").defaultValue;
	efficcom = document.getElementById("efficicomslider").value = document.getElementById("efficicomslider").defaultValue;
	agoaffcom = document.getElementById("agoaffcomslider").value = document.getElementById("agoaffcomslider").defaultValue;
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);    
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    //I'm doing something wrong if I try just place lineData into newData, below works though
    Plotly.animate("competitive",{
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

function calcLinesCom(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoconcentration){
    //console.log("calclines ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    //var affin = 10**affinity;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    //var agoaffin = 10**agoaffinity;
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
    	agoconc = 10**agoconcentration;
    	for (i=-12; i<-2;i=i+STEP){
        	effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin*(1+agoconc/agoaffin));
        	data[0].push(i);
        	data[1].push(effect);
    	}
	}
    return data;
}

var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#cc0000"]

function plotGraphCom(chart){
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
    	var data = []
    	var lineData = calcLinesCom(affcom, effcom, dencom, efficcom, agoaffcom, agoconcarr[j]);
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
        var halfData = calcLinesCom(affcom, effcom, dencom, efficcom, agoaffcom, agoconcarr[i]);
        data50 = calc50(halfData);
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "50% effect"
        }];
        Plotly.plot(chart,trace1,layout, {responsive: true});
    }
}
plotGraphCom("competitive");
