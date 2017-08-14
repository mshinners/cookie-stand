
var cookieStand = {
  location: 'firstPike',
  minHourlyCust:  23,
  maxHourlyCust: 65,
  avgCookiesPerSale: 6.3,
  avgDailyCustomersHr: function() {
  return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust)
  },
}

var cookieStand = {
  location: 'SeaTacAirport',
  minHourlyCust:  3,
  maxHourlyCust: 24,
  avgCookiesPerSale: 1.2,
}

var cookieStand = {
  location: 'seattleCenter',
  minHourlyCust:  11,
  maxHourlyCust: 38,
  avgCookiesPerSale: 3.7,
}

var cookieStand = {
  location: 'CapitolHill',
  minHourlyCust:  20,
  maxHourlyCust: 38,
  avgCookiesPerSale: 2.3,
}

var cookieStand = {
  location: 'alki',
  minHourlyCust:  2,
  maxHourlyCust: 16,
  avgCookiesPerSale: 4.6,
}



First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

Stores the min/max hourly customers, and the average cookies per customer, in object properties

Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

Store the results for each location in a separate array... perhaps as a property of the object representing that location

Display the values of each array as unordered lists in the browser

Calculating the sum of these hourly totals; your output for each location should look like this:

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
1st and Pike	23	65	6.3
SeaTac Airport	3	24	1.2
Seattle Center	11	38	3.7
Capitol Hill	20	38	2.3
Alki	2	16	4.6
