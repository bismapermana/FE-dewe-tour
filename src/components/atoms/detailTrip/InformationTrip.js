import React from "react";
import "./InformationTrip.css";
import { IoAirplaneOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";

const InformationTrip = () => {
  return (
    <div className="infoTripContainer">
      <div>
        <p>Accomodation</p>
        <div className="detailTripContainer">
          <FaHotel size="1.8em" className="mr-1" />
          <span>Hotel 4 Night</span>
        </div>
      </div>
      <div>
        <p>Transportation</p>
        <div className="detailTripContainer">
          <IoAirplaneOutline
            size="1.8em"
            style={{ transform: "rotate(-45deg)" }}
            className="mr-1"
          />
          <span>Qatar Airways</span>
        </div>
      </div>
      <div>
        <p>Eat</p>
        <div className="detailTripContainer">
          <GiMeal size="1.8em" className="mr-1" />
          <span>Included as Itinerary</span>
        </div>
      </div>
      <div>
        <p>Duration</p>
        <div className="detailTripContainer">
          <AiOutlineClockCircle size="1.8em" className="mr-1" />
          <span>6 Days 4 Nights</span>
        </div>
      </div>
      <div>
        <p>Date Trip</p>
        <div className="detailTripContainer">
          <BsCalendarDate size="1.8em" className="mr-1" />
          <span>26 August 2021</span>
        </div>
      </div>
    </div>
  );
};

export default InformationTrip;
