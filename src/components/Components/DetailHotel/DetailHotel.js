// Khai báo thư viện
import React, { Component } from "react";
import "./DetailHotel.css";
import RenderPhoto from "./RenderPhoto";
import DetailHeader from "./DetailHeader";
import Container from "../../UI/Container";

// Cấu trúc Component detail
const DetailHotel = () => {
  // Lấy dữ liệu thừ file json
  const details = require("../../../data/detail.json");
  return (
    <Container className="detail-hotel">
      {/* component header */}
      <DetailHeader item={details} />
      {/* Component Photo */}
      <RenderPhoto item={details.photos} />
      <div className="detail-description">
        <div>
          <h3>{details.title}</h3>
          <p>{details.description}</p>
        </div>
        <div>
          <h4>Perfect for a 9-night stay!</h4>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p>
            <strong>${details.nine_night_price}</strong> (9 nights)
          </p>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </Container>
  );
};

export default DetailHotel;
