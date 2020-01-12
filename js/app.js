'use strict';

/********************************* Constructor Functions ********************************/
function Locations(nameoflocation, min, max, avgCookieSale) {

    this.name = nameoflocation;
    this.maxCust = max;
    this.minCust = min;
    this.avgCookieSale = avgCookieSale;
    this.totalCookies = 0;
}

// console.log('Locations Constructor Function : ', Locations);

/********************************* The Objects From Table   ********************************/
var seattle = new Locations('seattle', 23, 65, 6.3);
// console.log(' seattle object : ', seattle);

var tokyo = new Locations('tokyo', 3, 24, 1.2);
// console.log(' tokyo object : ', tokyo);

var dubai = new Locations('dubai', 11, 38, 3.7);
// console.log(' dubai object : ', dubai);

var paris = new Locations('paris', 20, 38, 2.3);
// console.log(' paris object : ', paris);

var lima = new Locations('lima', 2, 16, 4.6);
// console.log(' Lima object : ', lima);

/********************************* Data needed to calculate the functions I need  ********************************/
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var totalCookiesOfLocations = 0;


// A Prototype Function To generate a Random Number for each location / instance from the constructor function 
Locations.prototype.randomRange = function () {
    let range = this.maxCust - this.minCust;
    let rand = Math.ceil((Math.random() * range) + this.minCust);
    // console.log('rand : ', rand);
    return rand;
} // end of randomRange function 


// Calculate the cookies for each location at spesific hour ,Show up the Output For Each Location in the same function
Locations.prototype.cookiesValues = function () {

    var contArea = document.getElementById('showArea');
    var header = document.createElement('h1');
    header.textContent = this.name;
    contArea.appendChild(header);
    var ul = document.createElement('ul');
    contArea.appendChild(ul);

    for (var i = 0; i<hours.length;i++)  
    {   
        var locRN = this.randomRange();
        var numOfCookies = Math.ceil(locRN * (this.avgCookieSale));
        // // console.log('numOfCookies : ', numOfCookies);
        this.totalCookies += numOfCookies;
        // // console.log('this.totalCookies : ', this.totalCookies);
        var li = document.createElement('li');
        li.textContent = hours[i] + ': ' + numOfCookies + ' cookies' ;
        // console.log('li.textContent : ', li.textContent);
        ul.appendChild(li);
    } // end of ForLoop  

    var pargh = document.createElement('p');
    pargh.textContent =  this.name +' Total : ' + this.totalCookies + ' cookies' ;
    ul.appendChild(pargh);

    totalCookiesOfLocations += this.totalCookies;
} // end of cookiesValues function 

/********************************* Array of objects , calculate the hourly cookies for each object   ********************************/
var locationsNames = [seattle, tokyo, dubai, paris, lima];

for (var i = 0; i < locationsNames.length; i++) {
    this.locationsNames[i].cookiesValues();
}

var contArea = document.getElementById('showArea');
var section = document.createElement('section');
section.textContent = 'The Total Numbers of Cookies For All Locations : ' + totalCookiesOfLocations;
contArea.appendChild(section);

