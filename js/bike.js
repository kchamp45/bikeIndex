export let Bike = {

  apiRequest: function(serialNum, display) {
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search?serial=${serialNum}&stolenness=all`,
      type: "GET",
      data: {
        format: "json"
      },
      success: (response) => {
        console.log("bikes length: " + response.bikes.length);
        this.displayStatus(response, display);

      },
      error: function() {
        $('#error').text('Something is wrong.  Try again.');
      }
    });
  },

  displayStatus: function(response, display) {
    let selectedBike;
    response.bikes.forEach(function(bike) {
      if(selectedBike != null){
        if(bike.id > selectedBike.id){
          selectedBike = bike;
        }
      }else{
        selectedBike = bike;
      }
      // bikes.push(
      //   {
      //       brand: bike.manufacturer_name,
      //       year: bike.year,
      //       stolen: bike.stolen,
      //       location: bike.stolen_location,
      //       date_stolen: bike.date_stolen
      //   });
        console.log("Year " + selectedBike.year + " " + selectedBike.stolen);
      });
      display(selectedBike);
  }
};
    // $("#bike-serial").text(serialNum);
  //   if (response.body.bikes.stolen === false){
  //     $("#notStolen").text("not");
  //   }
  // };
  // getStatus(serialNum, displayStatus) {
  //   $.get(`https://bikeindex.org/api/v3/search?serial=${this.serialNumber}`)
  //     .then(function(bikes) {
  //       displayStatus(bikes);
  //     })
  //     .fail(function() {
  //       console.log('Try again');
  //     });
  // }
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



// }
