import React,  {useState, useEffect} from "react";

export default function CountDownTime() {

    const [time, setTime] = useState({
        Days:14, 
        Hours:0,
        Min:0, 
        Sec:0
    })
  const CountTime = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     setTime({
         Days:days, 
         Hours:hours,
         Min:minutes,
         Sec:seconds
     })

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  };

  useEffect(() => {
    CountTime()
    
  }, [])
  const {Days, Hours, Min, Sec} = time
  return (
    <div className="count-down-wrapper">
      <div className="count-down-inner">
        <div className="event-title bck_orange_dark"> Event Starts in</div>
      </div>
      <div className="event-time-block bck_orange_light">
        <div className="event-item">
          <div className="event-time">{Days}</div>
          <div className="event-tag">Days</div>
        </div>
        <div className="event-item">
          <div className="event-time">{Hours}</div>
          <div className="event-tag">HRS</div>
        </div>
        <div className="event-item">
          <div className="event-time">{Min}</div>
          <div className="event-tag">Min</div>
        </div>
        <div className="event-item">
          <div className="event-time">{Sec}</div>
          <div className="event-tag">Sec</div>
        </div>
      </div>
    </div>
  );
}
