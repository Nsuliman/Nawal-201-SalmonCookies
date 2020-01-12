'use strict';


let totalDailyCookiesOfLoc = [];
let megaTotal = 0;
var locationsNames = [];
/////////////////////// Constructor Functions ///////////////
function Location(nameoflocation, min, max, avgCookieSale) {

    this.name = nameoflocation;
    this.maxCust = max;
    this.minCust = min;
    this.avgCookieSale = avgCookieSale;

    this.totalCookiesAll = 0;
    this.totalCookiesPerLoc = [];                               // cookies number per hour 
}

$('#fcookies').submit(function (event)
{
    event.preventDefault();
    // alert('hiiiiiiiiiiiiiiiiiiiiiiiiii');
    var nameofloc = event.target.nameofloc.value;
    console.log('name ', nameofloc);
    var maxCust = parseInt(event.target.maxCust.value);
    console.log('max ', maxCust);
    var minCust = parseInt(event.target.minCust.value);
    console.log('min ', minCust);
    var avgCookieSale = parseFloat(event.target.avgCookieSale.value);
    console.log('avg ', avgCookieSale);

    var newLoc = new Location(nameofloc, minCust, maxCust, avgCookieSale);
    locationsNames.push(newLoc);
    // newLoc.locRow();
    console.log('locationsNames : ', locationsNames);
    // newLoc.cookiesValues();         // calculate the cookies for the new object 

    $('#total').remove();
    newLoc.cookiesValues();
    newLoc.locRow();
    tableFooter();

});


// Show up the table by create the table tag 
$('#cookieJQ').html('<table></table');

///////////////////// The Objects //////////////////////////

var seattle = new Location('seattle', 23, 65, 6.3);
// console.log(' seattle object : ', seattle);
locationsNames.push(seattle);
var tokyo = new Location('tokyo', 3, 24, 1.2);
// console.log(' tokyo object : ', tokyo);
locationsNames.push(tokyo);

var dubai = new Location('dubai', 11, 38, 3.7);
// console.log(' dubai object : ', dubai);
locationsNames.push(dubai);

var paris = new Location('paris', 20, 38, 2.3);
// console.log(' paris object : ', paris);
locationsNames.push(paris);

var lima = new Location('lima', 2, 16, 4.6);
// console.log(' Lima object : ', lima);
locationsNames.push(lima);

///////////////////////// First coloum anf row in table ////////////
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// headerRow Function 
function tableHeadRow()
{
    let tabRow  = $('<tr></tr>');
    let tabHead = $('<th></th>');
    $('table').append(tabRow);
    $(tabRow).append(tabHead.text('Hours/Shop'));

    hours.forEach(element =>
        {
            $('tr').append($(`<th>${element}</th>`));
        });
    $('tr').append($(`<th>Daily Location Total</th>`));
} // end of headerRow Function 
 
// Location Names Function 
Location.prototype.locRow =function() {

    $('table').append($(`<tr id="${this.name}"><td>${this.name}</td></tr>`));

    this.totalCookiesPerLoc.forEach(element =>
        {
            // console.log('element : ', element);
            $(`#${this.name}`).append($(`<td>${element}</td>`));
        });
        $(`#${this.name}`).append($(`<td>${this.totalCookiesAll}</td>`))

} // Location Names Function

////////////////// Calculate the Random number /////////////////////
Location.prototype.randomInRange = function () {

    var range = this.maxCust - this.minCust;
    //console.log('range',range);
    var randNum = Math.ceil((Math.random() * range) + this.minCust);

    return randNum;
}

//////////////////////////// Calculate cookies per hour //////////////
Location.prototype.cookiesValues = function () {

    for (var i = 0; i < 14; i++) {
        var SeattleRNC = this.randomInRange(this.minCust, this.maxCust);
        //console.log( ' Seattle RNC' , SeattleRNC);
        var AmountOfCookieS = SeattleRNC * (this.avgCookieSale);
        var output = Math.ceil(AmountOfCookieS);
        // console.log(' AmountOfCookieS ', output);
        this.totalCookiesPerLoc.push(output);
        this.totalCookiesAll = this.totalCookiesAll + output;
    }
    totalDailyCookiesOfLoc.push(this.totalCookiesAll);
    // console.log('totalCookiesOfLocations : ', totalDailyCookiesOfLoc);
}

// The table header 
tableHeadRow();

// Event listener by using JQuery

for (var i = 0; i < locationsNames.length; i++) {
    console.log('locationsNames[i] : ', locationsNames[i]);
    locationsNames[i].cookiesValues();
    // The table Data
    locationsNames[i].locRow();
    // this.locationsNames[i].render();
}


// The table footer , the total 
function tableFooter() {
    $('table').append($(`<tr id="total"><td>Total</td></tr>`));

    for (let hourIdx = 0;hourIdx<hours.length;hourIdx++)
        {
            // // console.log('elem1 : ', elem1);
            var totalPerHour = 0;
            for (let shopIdx = 0;shopIdx<locationsNames.length;shopIdx++)
            
                {   
                    // // console.log('elem2 : ', elem2);
                    totalPerHour += locationsNames[shopIdx].totalCookiesPerLoc[hourIdx];
                    // // console.log('totalPerHour : ', totalPerHour);
                }
                $('#total').append($(`<td>${totalPerHour}</td>`))
                megaTotal += totalPerHour;
                // // console.log('megaTotal : ', megaTotal);
        }
        // // console.log('megaTotal : ', megaTotal);
        $('#total').append($(`<td>${megaTotal}</td>`));
} // End of table footer function 

tableFooter();



