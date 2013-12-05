var TWENTY_FIVE_MINUTES=1500000;
var countdown=TWENTY_FIVE_MINUTES;
var date;
var timer;
var timerRunning = false;
var countdownCompleteTime;

function Timer(callback,delay){

    var timerId, start, remaining = delay;

    this.pause = function(){
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function(){
        start = new Date();
        timerId = window.setTimeout(callback,remaining);
    };

    this.resume();
}


//var startTimer = function(){
//    timer = setInterval(function(){
//        intervalComplete();
//    }, 1000);
//}
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

var start = function(){
    console.log('start');

    //if it's running that is the timer
    console.log(timer);

    //do not start if it's running

    if(!timerRunning)
    {
        timer = setInterval(function(){
            intervalComplete();
        }, 1000);

        timerRunning = true;
    }
}

//var start = new Timer(function(){
//    intervalComplete();
//},1000)

var pause = function(){
    clearInterval(timer);
    timerRunning = false;
}

var reset = function(){
    countdown = countdownCompleteTime;
    $('.timer-display').text(milliSecondsToTimeFormat(countdown));
    clearInterval(timer);
    timerRunning = false;
}

var setTimeButtonClick = function(time){

    console.log('set time ' + time);
    countdown = time;
    countdownCompleteTime = time;
    clearInterval(timer);
    timerRunning = false;
    $('.timer-display').text(milliSecondsToTimeFormat(countdown));
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



