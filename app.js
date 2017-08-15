'usestrict';

var cookieStand = {
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
      this.hourlyCookiesSold.push(product);
    }
  }
};

var cookieStand = {
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
      this.hourlyCookiesSold.push(product);
    }
  }
};

var cookieStand = {
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
      this.hourlyCookiesSold.push(product);
    }
  }
};

var cookieStand = {
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
      this.hourlyCookiesSold.push(product);
    }
  }
};

var cookieStand = {
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
      this.hourlyCookiesSold.push(product);
    }
  }
};
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var stores = document.getElementById('storeLocation');
stores.textContent = cookieStand.location;

cookieStand.hourlyCookiesSoldRate();
for (var i = 0; i < stores.length; i++) {
  var newLi = document.createElement('Li');
  newLi.innerText = hours + ': ' + hourlyCookiesSold + ' cookies sold.';
}

//
// var cookieCount = document.getElementById('listOfCookiesPerHour');
// stores.textContent = cookieStand.hourlyCookiesSold;
//
// //
//
//   for (var i = 0; i < array.length; i++)
//   {
//     document.'HOUR' + ":" + cookieStand.location.hourlyCookiesSold + " cookies."
// };
// getElementById('')
