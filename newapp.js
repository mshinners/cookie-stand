'use strict';

var pike = {
  name: '1st and Pike',
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function() {
    return math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  eachHourSales: function() {
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookiesSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(Math.ceil(this.avgCookies * this.randomCustomersPerHour()));
    }
  },
  dailySalesReport: function(){
    this.eachHourSales();
    var list = document.getElementsById('list');
    var locationName = document.getElementsById('h2');
    locationName.innertext = this.name;
    location.appendChild(locationName);
    for (var i = 0; i < store1.storeHours.length; i++) {
      var location = document.getElementsById('list')
      var listItems = documents.createElement('li');
      listIems.innerText = store1.storehours[i] + ': ' + store1.simCookies[i] + 'cookies.';
      list.appendChild(listItems);

      var list = document.createElement('ul');
      location.appendChild(list);
    }
    var listItems = document.createElement('li');
    listItems.innertext = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
store1.dailySalesReport();
}

























var store2 = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
};
var store3 = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
};
var store4 = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
};
var store5 = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
};
