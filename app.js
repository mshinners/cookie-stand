'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];
var storeHoursArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

function CookieStore(location, minHourlyCust, maxHourlyCust, avgCookiesPerSale) {
  this.location = location;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgDailyCustomersHr = function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlyCookiesSold = [];
  this.hourlyCookiesSoldRate = function() {
    for (var i = 0; i < 14; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  },
  // The data being fed to the Body of the table
  this.render = function() {
    this.hourlyCookiesSoldRate();
    var newTableData = document.getElementsByTagName('table')[0];
    var row = document.createElement('tr');
    newTableData.appendChild(row);
    var tableData = document.createElement('th');
    tableData.innerText = this.location;
    row.appendChild(tableData);
    for (var i = 0; i < this.hourlyCookiesSold.length; i++) {
      var hourlySales = document.createElement('td');
      hourlySales.innerText = this.hourlyCookiesSold[i];
      row.appendChild(hourlySales);
        //Trying to create hourly sub-totals
    }
  };
  this.hourlySubTotal = function() {
    this.hourlyCookiesSold();
    var subTotalRow = document.createElement('tr');
    table.appendChild(subTotalRow);
    for (var i = 0; i < this.hourlyCookiesSold.length; i++) {
      console.log(this.hourlyCookiesSold[i] = storeHoursArray[i]);
      //end of sub-total work section
    };
    var totalHead = document.createElement('SalesReport');
    totalHead.innerText = ('');
    row.appendChild(totalHead);
  };
  storeLocations.push(this);
}

//Table Header
function tableHeader() {
  var headerTop = document.getElementById('tableArea');
  var tableTop = document.createElement('table');
  headerTop.appendChild(tableTop);
  var row = document.createElement('tr');
  tableTop.appendChild(row);
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

var firstPike = new CookieStore('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki',2, 16, 4.6);

tableHeader();
firstPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
