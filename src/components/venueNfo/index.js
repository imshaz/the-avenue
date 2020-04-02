import React from "react";
import Zoom from 'react-reveal/Zoom';
export default function VenueNfo() {
  return (
    <div className="bck_black">
      <div className="venue-wrapper">
        <div className="venue-outer-wrap">
            <Zoom timeOut={500}>

          <div className="venue-inner">
            <div className="event-section">
              <div className="calendar-square"></div>
              <div className="calendar-icon"></div>
              <div className="event-content">
                <div className="event-date-time-title"> Date & Time </div>
                <div className="event-date-time"> 7 August 2022 @10:00 pm</div>
              </div>
            </div>
          </div>
            </Zoom>
            <Zoom delay={500}>

          <div className="venue-inner">
            <div className="event-section">
              <div className="location-square"></div>
              <div className="location-icon"></div>
              <div className="event-content">
                <div className="event-date-time-title"> Event Location </div>
                <div className="event-date-time"> 345 Speer Street Oakland, CA 9835</div>
              </div>
            </div>
          </div>
          </Zoom>
        </div>
        
      </div>
    </div>
  );
}
