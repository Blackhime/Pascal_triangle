/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * @param {string} lineId 
 * @param {string} targetId
 * */
var printPascal = function (lineId, targetId){
	// TODO....
};

/**
 * @param {integer} numOfLine 
 * @returns {array} a 2-Dimension Array, represents a Pascal Triangle.
 * */
var computePascalTriangel = function(numOfLine){
	//
	// return an array of array
};


///////////////////////////////////////////

var formatLi = function(formater){
	var li = document.getElementsByTagName("li");
	for (let i = 0; i < li.length; ++i){
		formater(li[i]);
	}
};

var simpleFormater = function(ele){
	console.log(ele);
	ele.className += " concert";
};

var makeRed = function(ele){
	ele.style.color = "red";
};

