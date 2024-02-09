import React from "react";
import Slider from "react-slick";
import useCards from "../hooks/useCards";
const Topcards = () => {
  const Images = [
    {
      id: 1,
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
      alt: "Image 1",
      title: "Pizza",
      description:
        "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
    },
    {
      id: 2,
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png",
      alt: "Image 2 ",
      title: "North_Indian_4",
      description:
        "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
    },
    {
      id: 3,
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
      alt: "Image 3",
      title: "Chinese",
      description: "For offroad lovers. Super fast, Super Comfortable.",
    },
    {
      id: 4,
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png",
      alt: "Image 4",
      title: "Gulab_Jamun",
      description:
        "Aventador SV provide thrills unlike anything that has ever been experienced before.",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Image 5",
      title: "Pure Veg",
      description:
        "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
      alt: "Pure_Veg",
    },
    {
      id: 6,
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
      alt: "Image 6",
      title: "Chole_Bature.png",
      description:
        "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car.",
    },
    {
      id: 7,
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
      alt: "Image 7",
      title: "Ice_Creams.png",
      description:
        "The Challenger has a classic muscle-car interior, with a simple design",
    },
    {
      id: 8,
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
      alt: "Image 8",
      title: "idli",
      description:
        "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
    },
    {
      id: 9,
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
      alt: "Image 9",
      title: "Vada",
      description:
        "Its electric motor can provide up to 184 pound-feet of torque on demand.",
    },
  ];
  // useCards();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="TopCard">
        <div className="content">
          <div className="sc-kOPcWz dedXvX">
            <div className="sc-cWSHoV dEoCtT">
              <h2 className="sc-aXZVg bwoZPF title">
                Akhilesh, what's on your mind?
              </h2>
              <div className="sc-aXZVg kdMXvo"></div>
            </div>
          </div>
          <div className="container">
            <Slider {...settings}>
              {Images.map((item) => (
                <div key={item.id}>
                  <img src={item.src} alt={item.alt} className="img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topcards;
