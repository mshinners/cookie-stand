'use strict';

//Global Variables
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];

//CookieStore Constructor Function
function CookieStore(location, minHourlyCust, maxHourlyCust, avgCookiesPerSale) {
  this.location = location;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.dailyStoreTotals = 0;
  this.avgDailyCustomersHr = function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  };
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlyCookiesSold = [];
  this.hourlyCookiesSoldRate = function() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
      this.dailyStoreTotals += Math.round(product);
    }
  },
  // The data being fed to the Body of the table
  this.render = function() {
    this.hourlyCookiesSoldRate();
    var newTableData = document.getElementById('SalesReport');
    var row = document.createElement('tr');
    newTableData.appendChild(row);
    var tableData = document.createElement('th');
    tableData.innerText = this.location;
    row.appendChild(tableData);
    for (var i = 0; i < this.hourlyCookiesSold.length; i++) {
      var hourlySales = document.createElement('td');
      hourlySales.innerText = this.hourlyCookiesSold[i];
      row.appendChild(hourlySales);
    }
    var dailySales = document.createElement('td');
    dailySales.innerText = this.dailyStoreTotals;
    row.appendChild(dailySales);
  };
  storeLocations.push(this);
}
//End of Constructor function
//Table Header Function
function tableHeader() {
  var headerTop = document.getElementById('SalesReport');
  var row = document.createElement('tr');
  headerTop.appendChild(row);
  var tableData = document.createElement('th');
  row.appendChild(tableData);
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var hourHead = document.createElement('th');
    hourHead.innerText = hoursOfOperation[i];
    row.appendChild(hourHead);
  };
  var totalHead = document.createElement('th');
  totalHead.innerText = ('Daily Location Total');
  row.appendChild(totalHead);
};
//Spot for Table Footer
var tableFooter = function() {
  var newTableData = document.getElementById('SalesReport');
  var row = document.createElement('tr');
  row.id = 'footer';
  var tableData = document.createElement('th');
  tableData.innerText = ('TOTALS');
  row.appendChild(tableData);
  newTableData.appendChild(row);
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var total = 0;
    for (var j = 0; j < storeLocations.length; j++) {
      total += storeLocations[j].hourlyCookiesSold[i];
    }
    var tableData = document.createElement('th');
    tableData.innerText = total;
    row.appendChild(tableData);
  }
};
// function to throw collected data from above into 'tr'
var firstPike = new CookieStore('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki',2, 16, 4.6);
//Call all my functions
tableHeader();
firstPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
tableFooter();
//
//
//Form Stuff - Events
function Post(newStore, newMinCust, newMaxCust, newAvgCookieSales){
  this.newStore = newStore;
  this.newMinCust = newMinCust;
  this.newMaxCust = newMaxCust;
  this.newAvgCookieSales = newAvgCookieSales;
  this.renderToHTML = function(){
    // select the body
    var body = document.getElementsByTagName('body')[0];
  };
  function createAndAppend(toCreate, theClass, theContent, theParent){
    var theElement = document.createElement(toCreate);
    if (theClass && theClass !== ''){
      theElement.className = theClass;
    }
    if (theContent && theContent !== ''){
      theElement.innerText = theContent;
    }
    theParent.appendChild(theElement);
    storeLocations.push(this);
    return theElement;
  }
}
function addNewStore(event){
  event.preventDefault();
  var salesReport = document.getElementById('SalesReport');
  var newStore = form.elements['newStore'].value;
  var newMinCust = parseInt(form.elements['newMinCust'].value);
  var newMaxCust = parseInt(form.elements['newMaxCust'].value);
  var newAvgCookieSales = parseFloat(form.elements['newAvgCookieSales'].value);
  var newCookieStore = new CookieStore(newStore, newMinCust, newMaxCust, newAvgCookieSales);
  salesReport.removeChild(footer);
  newCookieStore.render();
  tableFooter();

  form.reset();
}
var form = document.getElementById('theForm');
form.addEventListener('submit', addNewStore);
