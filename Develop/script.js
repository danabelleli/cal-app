// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Variables
  var description = $('.description');
  var btnSave = $('.saveBtn');
  var currentHour = parseInt(dayjs().format('H'));
  console.log(currentHour);

  // Display current day
  var displayCurrentDay = $('#currentDay');
  var currentDate = dayjs().format('ddd, MMM D, YYYY h:mm A');
  displayCurrentDay.text(currentDate);

  // Collecting all hour divs to an array
  var allDivHours = $('#day').find("[id^='hour']");

  // Looping over each hour element
  allDivHours.each(function (index, element) {

    // Extracting the number from the hour id
    var n = element.id.indexOf('-');
    var divHour = parseInt(element.id.substring(n + 1, element.id.length));

    // Getting the value from local storage
    var textValue = JSON.parse(localStorage.getItem(element.id));
    // Setting the decription area to the text value from the local storage
    $(this).find('.description').val(textValue);

    // Setting the correct class 
    if (divHour < currentHour) {
      $(this).addClass('past');
    } else if (divHour === currentHour) {
      $(this).addClass('present');
    } else if (divHour > currentHour) {
      $(this).addClass('future');
    }
  });

  $(btnSave).on('click', function () {
    // Getting parent element id
    var hourId = $(this).parent()[0].id;
    // Getting the text value
    var textValue = $(this).parent().find('.description').val().trim();
    // Saving to local storage
    localStorage.setItem(hourId, JSON.stringify(textValue));
  })
});
