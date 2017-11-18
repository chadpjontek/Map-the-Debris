function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var op = 0;
  // formula
  for (var i = 0; i < arr.length; i++) {
    op = Math.round((Math.PI * 2) * Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius), 3) / GM));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = op;
  }

  return arr;
}
// Examples
orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]); // returns [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 },
]); // returns [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
