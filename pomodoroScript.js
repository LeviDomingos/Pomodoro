class TakeAwayAndAdd {
    constructor() {
       this.operators = {
            add: (a, b) => a+b,
            subtractor: (a,b) => a-b
        }
    }
}

class ClassTrueOrFalse {
    constructor() { 
        this.startandStopTime = true;
        this.keepTrackOfTime = 0;
        this.sessionTitle ="Session";
    }

    showStartAndStop = () => this.startandStopTime;

    resetClassTrueFalse() {
        this.startandStopTime = true;
        this.keepTrackOfTime = 0;
        this.sessionTitle = "Session";
    }
}

class ClassSession extends TakeAwayAndAdd {
    constructor() {
        super()
        this.sessionDecremenetAndIncrement = 25;
    }

    sessionDecrement() {
        if(this.sessionDecremenetAndIncrement > 10) {
            const result = this.sessionDecremenetAndIncrement =  this.operators.subtractor(this.sessionDecremenetAndIncrement, 1);
            return result;
        } else {
            if(this.sessionDecremenetAndIncrement > 1 ) {
                this.sessionDecremenetAndIncrement =  this.operators.subtractor(this.sessionDecremenetAndIncrement, 1);
                const result = "0" + this.sessionDecremenetAndIncrement;
                return result;
            } else {
                const result = "0" + this.sessionDecremenetAndIncrement;
                return result;
            }
        }
    }

    sessionIncrement() {
        if(this.sessionDecremenetAndIncrement < 10) {
            this.sessionDecremenetAndIncrement = this.operators.add(this.sessionDecremenetAndIncrement, 1);
            if(this.sessionDecremenetAndIncrement === 10) {
                const result =  this.sessionDecremenetAndIncrement;
                return result;
            } else {
                const result = "0" + this.sessionDecremenetAndIncrement;
                return result;
            }
        } else {
            if(this.sessionDecremenetAndIncrement < 60 ) {
                const result = this.sessionDecremenetAndIncrement = this.operators.add(this.sessionDecremenetAndIncrement, 1);
                return result;
            } else {
                const result = this.sessionDecremenetAndIncrement;
                return result;
            }
        } 
        
    }

    showSessionLength() {
        return this.sessionDecremenetAndIncrement;
    }

    resetSessionDecremenetAndIncrement = () => this.sessionDecremenetAndIncrement = 25;
}
class ClassMinutesAndSecond extends TakeAwayAndAdd {
    constructor() {
        super()
        this.minutes = 25; 
        this.seconds = "00";
        this.count = 60;
    }

    hourFormat(min, sec) {
        return min + ":" + sec;
    }

    countDownMinutes() {
        this.minutes =  this.operators.subtractor(this.minutes, 1);
        if(this.minutes < 10) {
            return "0" + this.minutes;
        } else {
            return this.minutes;
        }
    }

    countDownSeconds() {
        this.seconds =  this.operators.subtractor(this.count, 1);
        this.count = this.seconds;
        if(this.count < 10) {
            return "0" + this.seconds;
        } else {
            return this.seconds;
        }
    }

    resetClassMinutesAndSeconds() {
        this.minutes = 25;
        this.seconds =  "00";
        this.count = 60;
    }
}

class ClassBreak extends TakeAwayAndAdd{
    constructor() {
        super()
        this.breakDecrementAndIncrement = 5;
    }

    breakDecrement() {
        if(this.breakDecrementAndIncrement > 1) {
            return this.breakDecrementAndIncrement = this.operators.subtractor(this.breakDecrementAndIncrement, 1);
        }
    }

    breakIncrement() {
        if(this.breakDecrementAndIncrement < 60 ) {
            return this.breakDecrementAndIncrement =this.operators.add(this.breakDecrementAndIncrement, 1);
        }
    }

    showBreakLength() {
        return this.breakDecrementAndIncrement;
    } 

    resetBreakDecrementAndIncrement = () => this.breakDecrementAndIncrement = 5;
}

$(document).ready(function () {

    const startBreak = new ClassBreak();
    const startSession = new ClassSession();
    const setMinuteAndSecond = new ClassMinutesAndSecond();
    const trueOrFalse = new ClassTrueOrFalse();

    $("#break-length").text(startBreak.showBreakLength());
    $("#session-length").text(startSession.showSessionLength());
    $("#timer-label").text(trueOrFalse.sessionTitle);
    $("#break-decrement").on("click", breakDecrement);
    $("#break-increment").on("click", breakIncrement);
    $("#session-decrement").on("click", sessionDecrement);
    $("#session-increment").on("click", sessionIncrement);
    $("#start_stop").on("click", startStopTime);
    $("#reset").on("click", resetTheClock);
    $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));
   

    function breakDecrement() {
        if(trueOrFalse.showStartAndStop()) {
            const cls = startBreak.breakDecrement();
            $("#break-length").text(cls);
        }
    }

    function breakIncrement() {
        if(trueOrFalse.showStartAndStop()) {
            const cls = startBreak.breakIncrement();
            $("#break-length").text(cls);
        }
    }

    function sessionDecrement() {
        if(trueOrFalse.showStartAndStop()) { 
            const cls = startSession.sessionDecrement();
            setMinuteAndSecond.minutes = cls;
            setMinuteAndSecond.seconds = "00";
            setMinuteAndSecond.count = 60;
            $("#session-length").text(cls);
            $("#time-left").text(setMinuteAndSecond.hourFormat(cls, setMinuteAndSecond.seconds));     
        }
    }

    function sessionIncrement() {
        if(trueOrFalse.showStartAndStop()) { 
            const cls = startSession.sessionIncrement();
            setMinuteAndSecond.minutes = cls;
            setMinuteAndSecond.seconds = "00";
            setMinuteAndSecond.count = 60;
            $("#session-length").text(cls);
            $("#time-left").text(setMinuteAndSecond.hourFormat(cls, setMinuteAndSecond.seconds));   
        }
    }

    function startStopTime() {
        if(trueOrFalse.showStartAndStop()) {
            trueOrFalse.keepTrackOfTime = setInterval(startTickingTime, 1000);
            trueOrFalse.startandStopTime = false;
        }
        else {
            if(!trueOrFalse.showStartAndStop()) {
                clearInterval(trueOrFalse.keepTrackOfTime);
                trueOrFalse.startandStopTime = true;
            }
        }
    }
        
    function startTickingTime() {
        setMinuteAndSecond.seconds = setMinuteAndSecond.countDownSeconds();
       
        if( setMinuteAndSecond.seconds === 59) {   
            trueOrFalse.sessionTitle = "Session"; 
            $("#timer-label").text(trueOrFalse.sessionTitle);
            setMinuteAndSecond.minutes = setMinuteAndSecond.countDownMinutes();
            $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));  
        }
        else {
            $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));

            if(setMinuteAndSecond.count === 0) {
                setMinuteAndSecond.count = 60;
            }
        }
        if(setMinuteAndSecond.minutes === "00" && setMinuteAndSecond.seconds === "00") {
            trueOrFalse.sessionTitle ="Break";
            $("#timer-label").text(trueOrFalse.sessionTitle);
            $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));  
            let breakLength = startBreak.showBreakLength();

            if(breakLength > 9) {
                setMinuteAndSecond.minutes = "";
                setMinuteAndSecond.minutes = breakLength;
                $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));  
                setMinuteAndSecond.count = setMinuteAndSecond.resetCount(); 
            } else {
                setMinuteAndSecond.minutes = "";
                setMinuteAndSecond.minutes = "0" + breakLength;
                $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));  
                setMinuteAndSecond.count = setMinuteAndSecond.resetCount(); 
            }
        }
    }

    function resetTheClock() {
        clearInterval(trueOrFalse.keepTrackOfTime);
        trueOrFalse.resetClassTrueFalse();
        setMinuteAndSecond.resetClassMinutesAndSeconds();
        $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));
        $("#timer-label").text(trueOrFalse.sessionTitle);
        $("#break-length").text(startBreak.resetBreakDecrementAndIncrement());
        $("#session-length").text(startSession.resetSessionDecremenetAndIncrement());
        
    }

});
