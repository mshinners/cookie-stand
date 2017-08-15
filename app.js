'use strict';

//Store #1 Object begins
var cookieStand1 = {
  location: 'firstPike',
  minHourlyCust:  23,
  maxHourlyCust: 65,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 6.3,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};
//Following code block writes code to sales.html
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = document.getElementById('storeList1');
stores.textContent = cookieStand1.location;
var totalsNum1 = document.getElementById('TotalsNum1');
cookieStand1.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand1.hourlyCookiesSold[i] + ' cookies sold.';
  storeList1.appendChild(newLi);
}
var Totals1 = 0;
for (var i = 0; i < cookieStand1.hourlyCookiesSold.length; i++) {
  Totals1 = Totals1 + cookieStand1.hourlyCookiesSold[i];
}
var TotalLi = document.createElement('li');
TotalLi.innerText = 'Total: ' + Totals1 + ' cookies sold.';
stores.appendChild(TotalLi);

//Store #2 Object begins
var cookieStand2 = {
  location: 'SeaTacAirport',
  minHourlyCust:  3,
  maxHourlyCust: 24,
  avgCookiesPerSale: 1.2,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 6.3,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};
//Following code block writes code to sales.html
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = document.getElementById('storeList2');
stores.textContent = cookieStand2.location;
cookieStand2.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand2.hourlyCookiesSold[i] + ' cookies sold.';
  storeList2.appendChild(newLi);
}
var Totals2 = 0;
for (var i = 0; i < cookieStand2.hourlyCookiesSold.length; i++) {
  Totals2 = Totals2 + cookieStand2.hourlyCookiesSold[i];
}
newLi.innerText = 'Total: ' + Totals2 + ' cookies sold.';
stores.appendChild(newLi);

//Store #3 Object begins
var cookieStand3 = {
  location: 'seattleCenter',
  minHourlyCust:  11,
  maxHourlyCust: 38,
  avgCookiesPerSale: 3.7,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 6.3,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};
//Following code block writes code to sales.html
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = document.getElementById('storeList3');
stores.textContent = cookieStand3.location;
cookieStand3.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand3.hourlyCookiesSold[i] + ' cookies sold.';
  storeList3.appendChild(newLi);
}
var Totals3 = 0;
for (var i = 0; i < cookieStand3.hourlyCookiesSold.length; i++) {
  Totals3 = Totals3 + cookieStand3.hourlyCookiesSold[i];
}
newLi.innerText = 'Total: ' + Totals3 + ' cookies sold.';
stores.appendChild(newLi);

//Store #4 Object begins
var cookieStand4 = {
  location: 'CapitolHill',
  minHourlyCust:  20,
  maxHourlyCust: 38,
  avgCookiesPerSale: 2.3,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 6.3,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};
//Following code block writes code to sales.html
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = document.getElementById('storeList4');
stores.textContent = cookieStand4.location;
cookieStand4.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand4.hourlyCookiesSold[i] + ' cookies sold.';
  storeList4.appendChild(newLi);
}
var Totals4 = 0;
for (var i = 0; i < cookieStand4.hourlyCookiesSold.length; i++) {
  Totals4 = Totals1 + cookieStand4.hourlyCookiesSold[i];
}
newLi.innerText = 'Total: ' + Totals4 + ' cookies sold.';
stores.appendChild(newLi);
//Store #5 Object begins
var cookieStand5 = {
  location: 'alki',
  minHourlyCust:  2,
  maxHourlyCust: 16,
  avgCookiesPerSale: 4.6,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 6.3,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};
//Following code block writes code to sales.html
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = document.getElementById('storeList5');
stores.textContent = cookieStand5.location;
cookieStand5.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand5.hourlyCookiesSold[i] + ' cookies sold.';
  storeList5.appendChild(newLi);
}
function totalCookies5() {
  sum(cookieStand5.hourlyCookiesSold[i]);
  return totalCookies5;
};
var Totals5 = 0;
for (var i = 0; i < cookieStand5.hourlyCookiesSold.length; i++) {
  Totals5 = Totals1 + cookieStand5.hourlyCookiesSold[i];
}
newLi.innerText = 'Total: ' + Totals5 + ' cookies sold.';
stores.appendChild(newLi);
