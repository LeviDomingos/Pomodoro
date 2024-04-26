let startandStopTime = true;
let breakSessionStart = true;
let keepTrackOfTime = 0;
let breakDecrementAndIncrement = 5;
let sessionDecremenetAndIncrement = 25;
let getMinutes = 25; 
let getSeconds = "00";
let sessionTitle ="Session";

$(document).ready(function () {
    $("#break-length").text(breakDecrementAndIncrement);
    $("#session-length").text(sessionDecremenetAndIncrement);
    $("#timer-label").text(sessionTitle);
    $("#break-decrement").on("click", breakDecrement);
    $("#break-increment").on("click", breakIncrement);
    $("#session-decrement").on("click", sessionDecrement);
    $("#session-increment").on("click", sessionIncrement);
    $("#start_stop").on("click", startStopTime);
    $("#reset").on("click", resetTheClock);
    $("#time-left").text(hourFormat(getMinutes, getSeconds));


    function breakDecrement() {
        if(startandStopTime) {
            if(breakDecrementAndIncrement > 1) {
                $("#break-length").text(breakDecrementAndIncrement -= 1);
            }
        }
    }

    function breakIncrement() {
        if(startandStopTime) {
            if(breakDecrementAndIncrement < 60 ) {
                $("#break-length").text(breakDecrementAndIncrement += 1);
            }
        }
       
    }
    function sessionDecrement() {
        if(startandStopTime) {
            getSeconds = "00";
            if(sessionDecremenetAndIncrement > 1) {
                sessionDecremenetAndIncrement = sessionDecremenetAndIncrement - 1;
                getMinutes =  sessionDecremenetAndIncrement;
                $("#session-length").text(sessionDecremenetAndIncrement);
                if(getMinutes > 9) {
                    $("#time-left").text(hourFormat(getMinutes, getSeconds));
                }
                else {
                    getMinutes = "0" + getMinutes;
                    $("#time-left").text(hourFormat(getMinutes, getSeconds));
                }
               
            } 
        }      
    }

    function sessionIncrement() {
        if(startandStopTime) {
            getSeconds = "00";
            if(sessionDecremenetAndIncrement < 60) {
                sessionDecremenetAndIncrement = sessionDecremenetAndIncrement + 1;
                getMinutes = sessionDecremenetAndIncrement;
                $("#session-length").text(sessionDecremenetAndIncrement );

                if(getMinutes > 9) {
                    $("#time-left").text(hourFormat(getMinutes, getSeconds));
                } else {
                    getMinutes = "0" + getMinutes;
                    $("#time-left").text(hourFormat(getMinutes, getSeconds));
                }
            }
        }
    }

    function hourFormat(minutes, seconds) {
        return minutes + ":" + seconds;
    }

    function startStopTime() {
        if(startandStopTime) {
            keepTrackOfTime = setInterval(startTickingTime, 1000);
            startandStopTime = false;
        }
        else {
            if(!startandStopTime) {
                clearInterval(keepTrackOfTime);
                startandStopTime = true;
            }
        }
    }
        
    function startTickingTime() {
        if(getSeconds === "00") {
            getMinutes = getMinutes - 1;
            getSeconds = 59;
            if(getMinutes > 9) {
                $("#time-left").text(hourFormat(getMinutes, getSeconds));
            } else {
                getMinutes = "0" + getMinutes;
                $("#time-left").text(hourFormat(getMinutes, getSeconds));
            }
           
        } else {
            getSeconds = getSeconds - 1;
            if(getSeconds > 9) {
                $("#time-left").text(hourFormat(getMinutes, getSeconds));
            } else {
                getSeconds = "0" + getSeconds;
                $("#time-left").text(hourFormat(getMinutes,getSeconds));
            }

            if(getSeconds === "00" && getMinutes ==="00" && sessionTitle === "Break") {
            
                sessionTitle ="Session"; 
                $("#timer-label").text(sessionTitle);
                const hourformat = hourFormat(getMinutes ="00", getSeconds = "00");
                $("#time-left").text(hourformat);
                getMinutes = $("#session-length").text();
            }

            if(getSeconds === "00" && getMinutes ==="00" && sessionTitle === "Session") {
                let s = setTimeout(startStopTime, 2000);
                sessionTitle ='Break'; 
                $("#timer-label").text(sessionTitle);
                let hourformat = hourFormat(getMinutes ="00", getSeconds = "00");
                $("#time-left").text(hourformat);
                getMinutes = "0" + $("#break-length").text(); 
                clearTimeout(s);
            }
        }
    }

    function resetTheClock() {
        clearInterval(keepTrackOfTime);
    
        getSeconds = "00";
        breakDecrementAndIncrement = 5;
        sessionDecremenetAndIncrement = 25;
        getMinutes = sessionDecremenetAndIncrement;
        $("#time-left").text(hourFormat(getMinutes, getSeconds));
        $("#timer-label").text("Session");
        $("#break-length").text(breakDecrementAndIncrement);
        $("#session-length").text(sessionDecremenetAndIncrement);
        startandStopTime = true;
        $('#beep').currentTime = 0;
        
    }

    function playSound() {
       //var audios = document.getElementById("beep").src;
       //audios.play();
        
    }

});
