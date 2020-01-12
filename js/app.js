'use strict';

/////////////////////// Constructor Functions ///////////////
function Location(nameoflocation, min, max, avgCookieSale) {

    this.name = nameoflocation;
    this.maxCust = max;
    this.minCust = min;
    this.avgCookieSale = avgCookieSale;
    this.totalCookies = 0;
    this.genArray = [];  // cookies number per hour 

}
///////////////////// The Objects //////////////////////////
var seattle = new Location('seattle', 23, 65, 6.3);
console.log(' seattle object : ', seattle);

var tokyo = new Location('tokyo', 3, 24, 1.2);
console.log(' tokyo object : ', tokyo);

var dubai = new Location('dubai', 11, 38, 3.7);
console.log(' dubai object : ', dubai);

var paris = new Location('paris', 20, 38, 2.3);
console.log(' paris object : ', paris);

var lima = new Location('lima', 2, 16, 4.6);
console.log(' Lima object : ', lima);


///////////////////////// First coloum anf row in table ////////////
var locationsNames = [seattle, tokyo, dubai, paris, lima];
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var totalDailyCookiesOfLoc = [];
////////////////// Calculate the Random number /////////////////////
Location.prototype.randomInRange = function () {

    var range = this.maxCust - this.minCust;
    //console.log('range',range);
    var randNum = Math.ceil((Math.random() * range) + this.minCust);

    return randNum;
}
//var na =seattle.randomInRange();
//console.log('na',na);

//////////////////////////// Calculate cookies per hour //////////////
Location.prototype.cookiesValues = function () {

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

////////////////////////////////// Show up the Table ///////////////


var contArea = document.getElementById('showArea'); // Choose the place i would like to show my table inside it 

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
    rowheadfirst.textContent = hours[i] ;
}

var totalCookiesLoc = document.createElement('th');  /// put the last header coloum in the table 
tabRow.appendChild(totalCookiesLoc);
totalCookiesLoc.textContent = ' Daily Location Total ';

Location.prototype.render = function () {
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
    this.locationsNames[i].render();
}

var rowData = document.createElement('tr');
    table.appendChild(rowData);
    var total = document.createElement('td');
    rowData.appendChild(total);
    total.textContent = 'Totals';
    for (var i = 0; i <=13; i++) {
        var total = document.createElement('td');
        rowData.appendChild(total);

total.textContent = seattle.genArray[i]+tokyo.genArray[i]+dubai.genArray[i]+paris.genArray[i]+lima.genArray[i];
    }
    var total = document.createElement('td');
    rowData.appendChild(total);

total.textContent =seattle.totalCookies+tokyo.totalCookies+dubai.totalCookies+paris.totalCookies+lima.totalCookies;








