// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.

  //globalish variables

  var dateHeaderEl = $('#currentDay');

  var currentDate = dayjs();

  var CurrentHour = currentDate.format('H') - 1;

  var MilitaryTime = $('#TimeStyle');

  var dayHours = 
    [$("#hour-1") ,
    $("#hour-2") ,
    $("#hour-3") ,
    $("#hour-4") , 
    $("#hour-5") ,
    $("#hour-6") ,
    $("#hour-7") ,
    $("#hour-8") ,
    $("#hour-9") ,
    $("#hour-10") ,
    $("#hour-11") ,
    $("#hour-12") ,
    $("#hour-13") ,
    $("#hour-14") ,
    $("#hour-15") ,
    $("#hour-16") ,
    $("#hour-17") ,
    $("#hour-18") ,
    $("#hour-19") ,
    $("#hour-20") ,
    $("#hour-21") ,
    $("#hour-22") ,
    $("#hour-23") ,
    $("#hour-24")
    ] 

  dateHeaderEl.text(currentDate.format('MMM D, YYYY'));


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // function to set the time

  function sideTimeMt (Style) {
    
    if(Style === true){
  
      for(i = 0; i < dayHours.length ; i++){
  
        if(i < 9){
  
          dayHours[i].find('div').text( "0"+ (i+1) +"00 Hours" );
    
        }
  
        else
  
        {
  
        dayHours[i].find('div').text( (i+1) + "00 Hours" );
  
        }
  
      }
  
    }
  
    else
  
    {
  
      for(i = 0; i < dayHours.length ; i++){
  
        if(i > 11){
  
          dayHours[i].find('div').text((i-11) + "PM");
    
        }
  
         else
  
        {
    
          dayHours[i].find('div').text((i+1) + "AM");
    
      }

    }

    }

  }

  //sets default time style on page load 

  sideTimeMt(false);

// if the checkbox is clicked change the time style

MilitaryTime.on('click' , function(){ // if you want military time check the box

  if(MilitaryTime.is(':checked') === true){

   sideTimeMt(true);

  }

  else

  {

    sideTimeMt(false);

  }

});

  //styles the past


  for(i = 0; i < CurrentHour; i++){

    dayHours[i].addClass("row time-block past")

  }

  //styles the present

  dayHours[CurrentHour].addClass("row time-block present")

  //styles the future

  for(i = CurrentHour + 1; i < dayHours.length ; i++){
    console.log(CurrentHour)
    dayHours[i].addClass("row time-block future")

  }

  // makes the 24 hours
/*
  for(i = 0 ; i < 24; i++){

    // creates the element

    var divContainerEl = $('div');

    var divHourEl = $('div');

    var textEl = $('textarea');

    var buttonEl = $('textarea');

    var iEl = $('i');

    // append the element

    scedual.append(divContainerEl);

    divContainerEl.append(divHourEl);

    divContainerEl.append(textEl);

    divContainerEl.append(buttonEl);

    buttonEl.append(iEl);

    // add class to element

    divContainerEl.addId(('hour-')+(i+1));

    console.log(divContainerEl)

    divHourEl.addClass("col-2 col-md-1 hour text-center py-3");

    textEl.addClass("col-8 col-md-10 description");

    buttonEl.addClass("btn saveBtn col-2 col-md-1");

    iEl.addClass("fas fa-save")

    //styles element

    textEl.rows = "3";

    divHourEl.text(i)





  }*/
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
