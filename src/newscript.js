var TWENTY_FIVE_MINUTES=1500000;
var countdown=TWENTY_FIVE_MINUTES;
var date;
var timer;

var startTimer = function(){
    timer = setInterval(function(){
        intervalComplete();
    }, 1000);
}
var intervalComplete = function(){
    console.log('INTERVAL COMPLETE');
    if(0 < countdown){
        timerStep();
    }else{
        timerComplete();
    }
}

var timerStep = function(){
    countdown -= 1000;
    $('.timer-display').text(milliSecondsToTimeFormat(countdown));
}

var timerComplete = function(){
    clearInterval(timer);

    var taskName = $('.task').val();

    $('.task-container').append('<p>'+taskName+'</p>')


    console.log($('.task').val());
}

var setTimeButtonClick = function(time){
    countdown=time;
    startTimer();
}

var milliSecondsToTimeFormat = function(miliseconds){
    date = new Date(miliseconds);
    return convertToDoubleDigit(date.getMinutes())+':'+convertToDoubleDigit(date.getSeconds());
}

var convertToDoubleDigit = function(value){
    if(value.toString().length < 2){
        value='0'+value;
    }
    return value.toString();
}



