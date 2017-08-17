'use strict';
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];
// var storeHoursArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
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
function tableFooter() {
// function to throw collected data from above into 'tr'
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
tableFooter();

//Form Stuff - Events
function Post(newStore, newMinCust, newMaxCust, newAvgCookieSales){
  this.newStore = newStore;
  this.newMinCust = newMinCust;
  this.newMaxCust = newMaxCust;
  this.newAvgCookieSales = newAvgCookieSales;

  this.renderToHTML = function(){
    // select the body
    var body = document.getElementsByTagName('body')[0];

    // create the article element and give it a class and attach to the body.
    var postArticle = document.createElement('article');
    // postArticle.setAttribute('class', 'post');
    // accomplishes the same as below
    postArticle.className = 'post';
    body.appendChild(postArticle);
    // var postArticle = createAndAppend('article', 'post', '', body);

    // create the title and append it to the article
    var h2 = document.createElement('h2');
    h2.innerText = this.title;
    postArticle.appendChild(h2);
    // createAndAppend('h2', '', this.title, postArticle);

    // create the author_date p-tag and append it to the article
    var authorDate = document.createElement('p');
    authorDate.className = 'author_date';
    authorDate.innerText = 'By ' + this.author + ' on ' + this.date;
    postArticle.appendChild(authorDate);
    // createAndAppend('p', 'author_date', 'By ' + this.author + ' on ' + this.date, postArticle);

    // create the body p-tag and append it to the article
    var postBody = document.createElement('p');
    postBody.className = 'post-body';
    postBody.innerText = this.body;
    postArticle.appendChild(postBody);
    // createAndAppend('p', 'post-body', this.body, postArticle);
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
    return theElement;
  }

}
