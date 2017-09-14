import { Bike } from './../js/bike.js';
// var apiKey = require('./../.env').apiKey;
// let displayStatus = function(results){
//   if (bikes.stolen === false) {
//     $('#notStolen').text('not');
//   }
// }
//
// $(document).ready(function(){
//   let bike = new Bike();
//
//   $("#serial-form").submit(function(e){
//     e.preventDefault();
//     let userInput = $('#unique').val();
//     bike.getStatus(userInput, displayStatus);
//   });
// });
  let displayStatus = function(bikes) {
      $('#notStolen').text(bikes.stolen);
    };

$(document).ready(function(){
  let bike = new Bike();
  $('#serial-form').submit(function(){
    let serialNum = $("#unique").val();
    bike.getStatus(serialNum, displayStatus);
    $('#bike-serial').text(serialNum);
  });
});

    // let request = new XMLHttpRequest();
    // let url = `https://bikeindex.org/api/v3/search?serial=${serialNum}`;
    //
    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200){
    //     alert("hey");
    //     let response = JSON.parse(this.responseText);
    //     console.log(responseText);
    //     console.log(response);
    //     getStatus(response);
    //   }
    // };
    //
    // request.open("GET", url, true);
    // request.send();
    //
    // getStatus = function(response) {
    //   // $("#bike-serial").text(serialNum);
    //   if (response.body.bikes.stolen === false){
    //     $("#notStolen").text("not");
    //   }
    // };
//   });
// });
