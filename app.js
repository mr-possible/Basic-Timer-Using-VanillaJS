const duration = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

/** ANIMATION TACTIC.
 *
 * At Start:
 *          dasharray = perimeter
 *          dashoffset = 0
 * End:
 *          dasharray = perimeter
 *          dashoffset = -1 * perimeter
 * 
 * General formula:
 *          offset = perimeter * timeRemaining / totalDuration - perimeter.
 * 
 * Example: 
 *          offsetAtStart = p * 30/30 - p
 *          offsetAtEnd = p * 0/30 - p
 * 
 */

let totalDuration;
const myTimer = new Timer(duration, startButton, pauseButton, {
    onStart(duration) {
        console.log('Timer Started !');
        totalDuration = duration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / totalDuration - perimeter);
    },
    onComplete() {
        console.log('Timer Ended !')
    }
});