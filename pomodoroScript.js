class TakeAwayAndAdd {
    constructor() {
    }

    plus(a) {
        if( a >= 1 && a < 60) {
            a += 1;
        } 
        return a;
    }

    takeAway(a) {
        if(a > 1) {
            a-= 1;
        }
        return a;
    }

    countSecondsDown(s) {
        if(s === 0) {
            s = 0
        }
        else {
            s -= 1;
        }
        return s;
    }

    countMinutesDown(s, m) {
        if(s === 59) {
            m -= 1
        }
        return m
    }

    startBreakTime(m, s) {
        if(m === 0 && s === 0) {
            return true;
        }
    }
}

class ClassSession extends TakeAwayAndAdd {
    constructor() {
        super()
        this.sessionDecremenetAndIncrement = 25;
    }

    sessionDecrement() {
        return this.sessionDecremenetAndIncrement = this.takeAway(this.sessionDecremenetAndIncrement);
    }

    sessionIncrement() {
        return this.sessionDecremenetAndIncrement = this.plus(this.sessionDecremenetAndIncrement);
    }

    reset() {
        return {
            sessionDecremenetAndIncrement:25
        }
    }
}
class ClassMinutesAndSecond extends TakeAwayAndAdd{
    constructor() {
        super()
        this.minutes = 25; 
        this.seconds = 0;
        this.count = 60;
        this.startandStopTime = true;
        this.sessionTitle ="Session";
        this.sessionOrBreak = true;
    }

    hourFormat(min, sec) {
        if(min < 10) {
            min = `${0}${min}`;
        }
        if(sec < 10) {
            sec =  `${0}${sec}`;
        }
        return `${min}:${sec}`;
    }

    countDownMinutes() {
        return this.minutes =  this.countMinutesDown(this.seconds, this.minutes);
    }

    countDownSeconds() {
        this.count =  this.countSecondsDown(this.count);
        this.seconds = this.count
        return this.seconds;
    }

    breakTime(breakTitle) {
        if(this.startBreakTime(this.minutes, this.seconds)) {
            return true;
        
        }
    }

    reset() {
        return {
            seconds: 0,
            count: 60,
            sessionTitle:"Session",
            sessionOrBreak: true
        }
    }

    resetMinutes() {
        return {
            minutes: 25,
            startandStopTime: true 
        }
    }
}

class ClassBreak extends TakeAwayAndAdd{
    constructor() {
        super()
        this.breakDecrementAndIncrement = 5;
    }

    breakDecrement() {
        return this.breakDecrementAndIncrement =  this.takeAway(this.breakDecrementAndIncrement);
    }

    breakIncrement() {
        return this.breakDecrementAndIncrement =  this.plus(this.breakDecrementAndIncrement);
    }
    reset() {
        return {
            breakDecrementAndIncrement:5
        }
    }
}


let keepTrackOfTime;
let breakstart ;

$(document).ready(function () {

    const startBreak = new ClassBreak();
    const startSession = new ClassSession();
    const setMinuteAndSecond = new ClassMinutesAndSecond();

    const beep = window.document.getElementById("beep"); 
    const audio = new Audio(beep.src);

    $("#break-length").text(startBreak.breakDecrementAndIncrement);
    $("#session-length").text(startSession.sessionDecremenetAndIncrement);
    $("#timer-label").text(setMinuteAndSecond.sessionTitle);
    $("#break-decrement").on("click", breakDecrement);
    $("#break-increment").on("click", breakIncrement);
    $("#session-decrement").on("click", sessionDecrement);
    $("#session-increment").on("click", sessionIncrement);
    $("#start_stop").on("click", startStopTime);
    $("#reset").on("click", resetTheClock);
    $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));

    function breakDecrement() {
        if(setMinuteAndSecond.startandStopTime) {
            const cls = startBreak.breakDecrement();
            $("#break-length").text(cls);
        }
    }

    function breakIncrement() {
        if(setMinuteAndSecond.startandStopTime) {
            const cls = startBreak.breakIncrement();
            $("#break-length").text(cls);
        }
    }

    function sessionDecrement() {
        if(setMinuteAndSecond.startandStopTime) { 
            const cls = startSession.sessionDecrement();
            setMinuteAndSecond.minutes = cls;
            setMinuteAndSecond.count = setMinuteAndSecond.reset().count;
            setMinuteAndSecond.seconds = setMinuteAndSecond.reset().seconds;
            setMinuteAndSecond.sessionTitle = setMinuteAndSecond.reset().sessionTitle;
            setMinuteAndSecond.sessionOrBreak = setMinuteAndSecond.reset().sessionOrBreak;
            $("#session-length").text(cls);
            $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));   
            $("#timer-label").text(setMinuteAndSecond.sessionTitle);  

        }
    }

    function sessionIncrement() {
        if(setMinuteAndSecond.startandStopTime) { 
            const cls = startSession.sessionIncrement();
            setMinuteAndSecond.minutes = cls;
            setMinuteAndSecond.count = setMinuteAndSecond.reset().count;
            setMinuteAndSecond.seconds = setMinuteAndSecond.reset().seconds;
            setMinuteAndSecond.sessionTitle = setMinuteAndSecond.reset().sessionTitle;
            setMinuteAndSecond.sessionOrBreak = setMinuteAndSecond.reset().sessionOrBreak;
            $("#session-length").text(cls);
            $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));   
            $("#timer-label").text(setMinuteAndSecond.sessionTitle);
        }
    }

    function startStopTime() {
        if(setMinuteAndSecond.startandStopTime) { 
            
            keepTrackOfTime = setInterval(startTickingTime, 1000)
            setMinuteAndSecond.startandStopTime = false;
            
        }
        else {
            if(!setMinuteAndSecond.startandStopTime) {
                clearInterval(keepTrackOfTime);
                setMinuteAndSecond.startandStopTime = true;
            }
        }

    }

    function startTickingTime() {
        setMinuteAndSecond.seconds = setMinuteAndSecond.countDownSeconds();
        setMinuteAndSecond.countDownMinutes();

        $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds)); 

        if(setMinuteAndSecond.count === 0) {
        
            setMinuteAndSecond.count = 60;
        }

        if(setMinuteAndSecond.breakTime()) {
            window.document.getElementById("beep").play();
            if(setMinuteAndSecond.sessionTitle ==="Session") {
                setMinuteAndSecond.seconds = setMinuteAndSecond.countDownSeconds();
                setMinuteAndSecond.countDownMinutes();
                setMinuteAndSecond.sessionTitle ="Break";
                setMinuteAndSecond.minutes = startBreak.breakDecrementAndIncrement;
                $("#timer-label").text(setMinuteAndSecond.sessionTitle);
    
            }
        }
        if(setMinuteAndSecond.breakTime()) {
            window.document.getElementById("beep").play();
            if(setMinuteAndSecond.sessionTitle ==="Break") {
                setMinuteAndSecond.seconds = setMinuteAndSecond.countDownSeconds();
                setMinuteAndSecond.countDownMinutes();
                setMinuteAndSecond.sessionTitle ="Session";
                setMinuteAndSecond.minutes = startSession.sessionDecremenetAndIncrement;
                $("#timer-label").text(setMinuteAndSecond.sessionTitle);
            }
        }
    }

    function resetTheClock() {
        clearInterval(keepTrackOfTime);
        keepTrackOfTime = 0;
        const resetBreak = startBreak.reset();
        const resetSession = startSession.reset();
        const resetMinutes = setMinuteAndSecond.resetMinutes();
        const resetOther = setMinuteAndSecond.reset();
        startBreak.breakDecrementAndIncrement = resetBreak.breakDecrementAndIncrement;
        startSession.sessionDecremenetAndIncrement = resetSession.sessionDecremenetAndIncrement;
        setMinuteAndSecond.minutes = resetMinutes.minutes;
        setMinuteAndSecond.seconds = resetOther.seconds;
        setMinuteAndSecond.startandStopTime = resetMinutes.startandStopTime;
        setMinuteAndSecond.sessionTitle = resetOther.sessionTitle;
        setMinuteAndSecond.sessionOrBreak = resetOther.sessionOrBreak;
        setMinuteAndSecond.count = resetOther.count;
        $("#break-length").text(startBreak.breakDecrementAndIncrement);
        $("#session-length").text(startSession.sessionDecremenetAndIncrement);
        $("#time-left").text(setMinuteAndSecond.hourFormat(setMinuteAndSecond.minutes, setMinuteAndSecond.seconds));
        $("#timer-label").text(setMinuteAndSecond.sessionTitle);
        window.document.getElementById("beep").pause();
        window.document.getElementById("beep").currentTime = 0;
    }

});
