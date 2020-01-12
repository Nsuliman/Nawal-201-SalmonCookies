'use strict';


var megaTotal = 0;
var newarray = [];
var rowData1;
var rowData2;
var sum = 0;
/////////////////////// Constructor Functions ///////////////
function Locations(nameoflocation, min, max, avgCookieSale) {

    this.name = nameoflocation;
    this.maxCust = max;
    this.minCust = min;
    this.avgCookieSale = avgCookieSale;
    this.totalCookies = 0;
    this.genArray = [];  // cookies number per hour 

}

var shopF = document.getElementById('formArea-cookies');

shopF.addEventListener('submit', function (event) {


    event.preventDefault();
    var nameofloc = event.target.nameofloc.value;
    console.log('name ', nameofloc);
    var maxCust = parseInt(event.target.maxCust.value);
    console.log('max ', maxCust);
    var minCust = parseInt(event.target.minCust.value);
    console.log('min ', minCust);
    var avgCookieSale = parseFloat(event.target.avgCookieSale.value);
    console.log('avg ', avgCookieSale);

    var newLoc = new Locations(nameofloc, minCust, maxCust, avgCookieSale);
        newLoc.cookiesValues();         // calculate the cookies for the new object 
        console.log(newLoc);
        addshop (newLoc);
        newarray.push(nameofloc);
        console.log('new locaaaaation' , newarray.length);

        // if (newarray==newarray.length)
        // {

        // var newLoc1 = new Locations(nameofloc, minCust, maxCust, avgCookieSale);
        // newLoc1.cookiesValues();         // calculate the cookies for the new object 
        // console.log(newLoc1);
        // addshop2 (newLoc1);
        // }

        
   
}); // end of event function 


function addshop (newLoc)
{
    var rowCount = table.rows.length;
    console.log('table rooooow' , rowCount);
    table.deleteRow(rowCount-1);
    
    //table.removeChild(rowData);   // remove last row in the table to addd the new object 
    newLoc.table();                 // add the new object to the table 

    rowData1 = document.createElement('tr');
    table.appendChild(rowData1);
    var total2 = document.createElement('td');
    rowData1.appendChild(total2);
    total2.textContent = 'Totals';

    for (var i = 0; i <= 13; i++) {
        var total2 = document.createElement('td');
        rowData1.appendChild(total2);
        total2.textContent = seattle.genArray[i] + tokyo.genArray[i] + dubai.genArray[i] + paris.genArray[i] + lima.genArray[i] + newLoc.genArray[i]  ;
        
    }

    var total2 = document.createElement('td');
    rowData1.appendChild(total2);

    total2.textContent = seattle.totalCookies + tokyo.totalCookies + dubai.totalCookies + paris.totalCookies + lima.totalCookies  + newLoc.totalCookies;

}

// function addshop2 (newLoc1)
// {
//     var rowCount = table.rows.length;
//     console.log('table rooooow' , rowCount);
//     table.deleteRow(rowCount-1);
    
//     //table.removeChild(rowData);   // remove last row in the table to addd the new object 
//     newLoc.table();                 // add the new object to the table 

//     rowData1 = document.createElement('tr');
//     table.appendChild(rowData1);
//     var total2 = document.createElement('td');
//     rowData1.appendChild(total2);
//     total2.textContent = 'Totals';

//     for (var i = 0; i <= 13; i++) {
//         var total2 = document.createElement('td');
//         rowData1.appendChild(total2);
//         total2.textContent = seattle.genArray[i] + tokyo.genArray[i] + dubai.genArray[i] + paris.genArray[i] + lima.genArray[i] + newLoc.genArray[i] +newLoc1.genArray[i] ;
        
//     }

//     var total2 = document.createElement('td');
//     rowData1.appendChild(total2);

//     total2.textContent = seattle.totalCookies + tokyo.totalCookies + dubai.totalCookies + paris.totalCookies + lima.totalCookies  + newLoc.totalCookies + newLoc1.totalCookies;

// }
///////////////////// The Objects //////////////////////////

var seattle = new Locations('seattle', 23, 65, 6.3);
console.log(' seattle object : ', seattle);

var tokyo = new Locations('tokyo', 3, 24, 1.2);
console.log(' tokyo object : ', tokyo);

var dubai = new Locations('dubai', 11, 38, 3.7);
console.log(' dubai object : ', dubai);

var paris = new Locations('paris', 20, 38, 2.3);
console.log(' paris object : ', paris);

var lima = new Locations('lima', 2, 16, 4.6);
console.log(' Lima object : ', lima);

///////////////////////// First coloum anf row in table ////////////
var locationsNames = [seattle, tokyo, dubai, paris, lima];
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var totalCookiesOfLocations = [];


////////////////// Calculate the Random number /////////////////////
Locations.prototype.randomInRange = function () {

    var range = this.maxCust - this.minCust;
    //console.log('range',range);
    var randNum = Math.ceil((Math.random() * range) + this.minCust);

    return randNum;
}
//var na =seattle.randomInRange();
//console.log('na',na);

//////////////////////////// Calculate cookies per hour //////////////
Locations.prototype.cookiesValues = function () {

    for (var i = 0; i < 14; i++) {
        var SeattleRNC = this.randomInRange(this.minCust, this.maxCust);
        //console.log( ' Seattle RNC' , SeattleRNC);
        var AmountOfCookieS = SeattleRNC * (this.avgCookieSale);
        var output = Math.ceil(AmountOfCookieS);
        //console.log( ' AmountOfCookieS ' , output);
        this.genArray.push(output);
        this.totalCookies = this.totalCookies + output;
    }
}
//console.log('ff',this.genArray);

//////////////calculate the hourly cookies for each object ///////////

for (var i = 0; i < locationsNames.length; i++) {
    this.locationsNames[i].cookiesValues();
}

/////////////////////////////////////////////////////////////////////////
var contArea = document.getElementById('locationsProfile'); // Choose the place i would like to show my table inside it 

var table = document.createElement('table');   // tell the broswer we need to create a table & push it 
contArea.appendChild(table);


var tabRow = document.createElement('tr');  // we need to put the table row  
table.appendChild(tabRow);

var HeadTab = document.createElement('th'); /// put the heading of the table 
tabRow.appendChild(HeadTab);

HeadTab.textContent = ' ';  /// to make a space above the table  

for (var i = 0; i < hours.length; i++)                        /// insert the hours 
{
    var rowheadfirst = document.createElement('th');
    tabRow.appendChild(rowheadfirst);
    rowheadfirst.textContent = hours[i];
}

var totalCookiesLoc = document.createElement('th');  /// put the last header coloum in the table 
tabRow.appendChild(totalCookiesLoc);
totalCookiesLoc.textContent = ' Daily Location Total ';

Locations.prototype.table = function () {

    var rowData = document.createElement('tr');
    table.appendChild(rowData);

    var locNames = document.createElement('th');            /// insert the objects names 
    rowData.appendChild(locNames);
    locNames.textContent = this.name;

    for (var i = 0; i < this.genArray.length; i++)          /// insert the cookies values
    {
        var cookieHourly = document.createElement('td');
        rowData.appendChild(cookieHourly);
        cookieHourly.textContent = this.genArray[i];
    }
    var total = document.createElement('td');
    rowData.appendChild(total);
    total.textContent = this.totalCookies;
};


for (var i = 0; i < locationsNames.length; i++) {
    this.locationsNames[i].table();
}


///////////////// Total ////////////////////
var rowData = document.createElement('tr');
table.appendChild(rowData);
var total = document.createElement('td');
rowData.appendChild(total);
total.textContent = 'Totals';

for (var i = 0; i <= 13; i++) {
    var total = document.createElement('td');
    rowData.appendChild(total);
    total.textContent = seattle.genArray[i] + tokyo.genArray[i] + dubai.genArray[i] + paris.genArray[i] + lima.genArray[i];

}

var total = document.createElement('td');
rowData.appendChild(total);
total.textContent = seattle.totalCookies + tokyo.totalCookies + dubai.totalCookies + paris.totalCookies + lima.totalCookies;
   




