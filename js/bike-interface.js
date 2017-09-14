
var apiKey = require('./../.env').apiKey;

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
