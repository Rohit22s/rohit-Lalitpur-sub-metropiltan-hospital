import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Img1 from "../assets/img1.jpg";
// import Img2 from "../assets/img2.jpg";
// import Img3 from "../assets/img3.jpg";
import "./Slider.css";

function Silder() {
  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img
            alt=""
            src={
              "https://www.vayodhahospitals.com/wp-content/uploads/2019/11/MICU-1-1600x650_c.jpg"
            }
          />
          {/* <p className="legend">Photo 1 desc</p> */}
        </div>
        <div>
          <img
            alt=""
            src={
              "https://www.vayodhahospitals.com/wp-content/uploads/2019/11/Emergency-1-1600x650_c.jpg"
            }
          />
          {/* <p className="legend">Photo 2 desc</p> */}
        </div>
        <div>
          <img
            alt=""
            src={
              "https://www.vayodhahospitals.com/wp-content/uploads/2019/11/EICU-1-1600x650_c.jpg"
            }
          />
          {/* <p className="legend">Photo 3 desc</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Silder;
