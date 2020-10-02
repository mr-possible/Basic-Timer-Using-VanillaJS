class Timer {
    constructor(duration, startButton, pauseButton, callbacks) {
        this.duration = duration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    //Method to start the timer.
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);
    }

    //Method for tracking every second.
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }

    }

    //Method to pause the timer.
    pause = () => {
        console.log('Timer PAUSED !')
        clearInterval(this.interval);
    }

    //GETTER to get the time remaining from input-textbox.
    get timeRemaining() {
        return parseFloat(this.duration.value);
    }

    //SETTER to set the time into the text-box.
    set timeRemaining(time) {
        this.duration.value = time.toFixed(2);
    }
}
