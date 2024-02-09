import React from "react";
import "./goodCard.css";
import { CDN_URL, TOPRESTRO_IMGURL } from "../ustills/constants";
import Slider from "react-slick";
import useCards from "../hooks/useCards";
const GoodCard = () => {
  const data = useCards();
  const heder = data?.cards[1]?.card?.card?.header;
  const item =
    data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const settings = {
    // dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="container-fluid">
        <div className="sc-kOPcWz dedXvX">
          <div className="sc-cWSHoV dEoCtT">
            <h1 className="sc-aXZVg bwoZPF title">Restaurants</h1>
            <div className="sc-aXZVg kdMXvo"></div>
          </div>
        </div>
        <Slider {...settings}>
          {item?.map((d) => (
            <div className="card">
              <div className="card-cover">
                <img src={CDN_URL + d?.info?.cloudinaryImageId} />
              </div>
              <div className="profile"></div>
              <a href={CDN_URL + d?.info?.cloudinaryImageId} target="_blank">
                <p className="name">{d?.info?.name}</p>
              </a>
              <i className="location-icon fas fa-map-marker-alt"></i>
              <p className="country">{d?.info?.areaName}</p>
              <a href="#" target="_blank">
                <button className="portfolio">Details</button>
              </a>
              <div className="social-icons">
                <a href="#" target="_blank">
                  <i className="facebook fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="instagram fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="patreon fab fa-patreon"></i>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default GoodCard;
