# react-human-timer

React component wrapper for human-timer: tiny, human readable timer with no external dependencies. Specify the duration in seconds, add callbacks to timer ticks and end, stop it at any moment.

[Here's the main human-timer library](https://github.com/oL-web/human-timer)

* * *

### Installation:

`npm install --save react-human-timer`  

Test

`npm run test`  

* * *

### Usage:

```javascript
 <HumanTimer 
    onTick={(timer) => console.log("tick", timer)} 
    onEnd={(timer) => console.log("end", timer)} 
    active={true} // set to false to pause the timer, default is true
    zeroes={false}  // won't turn 5 mins into 05 mins, default is true
    seconds={7200} // 2 hour long duration
>
    {
        (timer) => (
            <div>
                <p>Hours: {timer.hours}</p>
                <p>Minutes: {timer.minutes}</p>
                <p>Seconds: {timer.seconds}</p>
            </div>
        )
    }
</HumanTimer>
```

* * *

### Is there something wrong?

Please tell me!