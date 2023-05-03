// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Variables
  var currentHour = parseInt(dayjs().format('H'));
  console.log(currentHour);

  // Display current day
  var displayCurrentDay = $('#currentDay');
  var currentDate = dayjs().format('ddd, MMM D, YYYY h:mm A');
  displayCurrentDay.text(currentDate);

  var allDivHours = $('#day').find("[id^='hour']");
  console.log(allDivHours);

  allDivHours.each(function (index, element) {

    var n = element.id.indexOf('-');
    var divHour = parseInt(element.id.substring(n + 1, element.id.length));

    if (divHour < currentHour) {
      $('#' + element.id).addClass('past');
    } else if (divHour === currentHour) {
      $('#' + element.id).addClass('present');
    } else if (divHour > currentHour) {
      $('#' + element.id).addClass('future');
    }


  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // when current hour is in the past -> the caledndar row needs to be grey

  // when current hour is the present -> the calendar row needs to be red

  // when current hour is the future -> the calendar row needs to be green


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
});