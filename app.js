'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];

function CookieStore(location, minHourlyCust, maxHourlyCust, avgCookiesPerSale) {
  this.location = location;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgDailyCustomersHr = function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  };
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlyCookiesSold = [];
  this.hourlyCookiesSoldRate = function() {
    for (var i = 0; i < 14; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    };
  };
  // this.goToSales = function() {
  //   var stores = document.getElementById('SalesReport');
  //   var storeLocationName = document.createElement('h2');
  //   storeLocationName.innerText = this.location;
  //   var totalsNum1 = document.getElementById('SalesReport');
  //   this.hourlyCookiesSoldRate();
  //   stores.appendChild(storeLocationName);
  //   for (var i = 0; i < hoursOfOperation.length; i++) {
  //     var newLi = document.createElement('li');
  //     newLi.innerText = hoursOfOperation[i] + ': ' + this.hourlyCookiesSold[i] + ' cookies sold.';
  //     SalesReport.appendChild(newLi);

  var Totals1 = 0;
  for (var i = 0; i < this.hourlyCookiesSold.length; i++) {
    Totals1 = Totals1 + this.hourlyCookiesSold[i];
  }
  // var TotalLi = document.createElement('li');
  // TotalLi.innerText = 'Total: ' + Totals1 + ' cookies sold.'; stores.appendChild(TotalLi);
  //  };
  storeLocations.push(this);
  //};

  var firstPike = new CookieStore('1st & Pike', 23, 65, 6.3);
  var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
  var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
  var CapitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
  var alki = new CookieStore('Alki',2, 16, 4.6);

  for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].SalesReport();
  }
  function createTable() {
    var createTable = document.getElementsByID('Table');
    var dataArray = [];
    for (var i = 0; i < dataarray.length; i++) {
      var row = document.createElement('TR');
      for (var j = 0; j < hoursOfOperation.length; j++) {
        var td = document.createElement('TD');
        td.innerText = dataArray[i].hourlyCookiesSoldRate[j];
        row.appendChild(td);
      }
      table.appendChild(row);
    }
  }
}
createTable();
//
// var createTable = function() {
//   for (var i = 0; i < storeLocations.length; i++) {
//     storeLocations[i].document.createElement('TR');
// var tr = document.createElement('TR');
//             tableBody.appendChild(tr);
//             for (i = 0; i < heading.length; i++) {
//                 var th = document.createElement('TH')
//                 th.appendChild(document.createTextNode(heading[i]));
//                 tr.appendChild(th);
//
// for (i = 0; i < storelocations.length; i++) {
//   var tr = document.createElement('TR');
//   for (j = 0; j < storelocations[i].length; j++) {
//     var td = document.createElement('TD');
//     td.appendChild(document.createTextNode(stock[i][j]));
//     tr.appendChild(td);
//   }
//   tableBody.appendChild(tr);
// }
// document.createTable

// createTable();
