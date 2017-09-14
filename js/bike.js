export class Bike {
  constructor(serialNumber) {
    this.serialNumber = serialNumber;
  }

  getStatus(serialNum, displayStatus) {
    $.get(`https://bikeindex.org/api/v3/search?serial=${this.serialNumber}`)
      .then(function(bikes) {
        displayStatus(bikes);
      })
      .fail(function() {
        console.log('Try again');
      });
  }
  // getStatus(serialNum, displayStatus) {
  //   $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&serial='+serialNum)
  //     .then(function(results) {
  //       console.log(results);
  //       displayStatus(results);
  //       return results.body.bikes.stolen;
  //     })
  //     .fail(function() {
  //       console.log('Try again');
  //     });
  // }



}
