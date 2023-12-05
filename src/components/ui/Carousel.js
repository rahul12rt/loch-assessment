import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSelect from "./Select";

const HorizontalSlider = ({ testimonialData, notificationData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: notificationData ? false : true,
    arrows: false,
    variableWidth: true,
    autoplay: notificationData ? true : false, // Enable autoplay
    autoplaySpeed: notificationData ? 2000 : false,
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <Slider {...settings} className="slick-testimonals">
      {testimonialData?.map((item, id) => {
        return (
          <div className="card-container" key={id}>
            <h6>
              {item?.name}
              <span>{item?.profession}</span>
            </h6>
            <p style={{ maxWidth: `${item?.width}` }}>{item?.feedback}</p>
          </div>
        );
      })}
   {notificationData?.map((item, id) => {
  const isFirstCard = id === 0;

  return (
    <div
      className={`notify-card${isFirstCard ? ' first-card' : ''}`}
      key={id}
    >
      <div className="header">
        <img src={item?.icon} width={28} height={28}/>
        {item?.checkbox ? <input type="checkbox" checked/> : <p>save</p>}
      </div>
      <h3>{item?.header}</h3>
      <div className="footer">
        {item?.checkbox ? '' : <input type="email" />}
        <h6>{item?.childer}</h6>
        {item?.type === "select" ? <CustomSelect options={options} value={item?.value}/> : ""}
        <h6>{item?.footer}</h6>
      </div>
    </div>
  );
})}

    </Slider>
  );
};

export default HorizontalSlider;
