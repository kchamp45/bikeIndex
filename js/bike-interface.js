
// var apiKey = require('./../.env').apiKey;

import { Bike } from './../js/bike.js';

$(function(){
  $("#serial-form").submit(function(event) {
    event.preventDefault();
    let serialNum = $("#unique").val();
    let selectedBike = Bike.apiRequest(serialNum, display);

    function display(selectedBike) {
      $("#bike-serial").text(serialNum);
      console.log(selectedBike.year);
      if(selectedBike.stolen === false) {
       $("#notStolen").text("not");
      }
      $(".serial-result").show();
    }
  });

  $("#stats-form").submit(function(event) {
    event.preventDefault();
    console.log("stats activate!");
    let manu1Input = $("#manu1").val();
    let manu2Input = $("#manu2").val();
    let dateParamInput = $("#timeFrame").val();
    console.log(dateParamInput);
    let zippie = $("#theft-location").val();

    let manu1Output = Bike.getManufacturer(manu1Input, zippie, dateParamInput, displayManus);
    let manu2Output = Bike.getManufacturer(manu2Input, zippie, dateParamInput, displayManus);

    function displayManus(manu, totalStolen){
      console.log("displayManus activate");
      if (manu === manu1Input){
        $("#inputManu1").text(manu);
        $("#manu1Stolen").text(totalStolen);
      } else {
        $("#inputManu2").text(manu);
        $("#manu2Stolen").text(totalStolen);
      }

      if (dateParamInput === 1.577e7){
        $("#period").text("6 months");
      } else if (dateParamInput === 3.154e7){
        $("#period").text("year");
      } else if (dateParamInput === 6.307e7){
        $("#period").text("2 years");
      }
    }
  });




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
//   let displayStatus = function(bikes) {
//       $('#notStolen').text(bikes.stolen);
//     };
//
// $(document).ready(function(){
//   let bike = new Bike();
//   $('#serial-form').submit(function(){
//     let serialNum = $("#unique").val();
//     bike.getStatus(serialNum, displayStatus);
//     $('#bike-serial').text(serialNum);
//   });
// });


});
// });
