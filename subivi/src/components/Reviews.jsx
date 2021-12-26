import Slider from "react-slick";
import review1 from "../assets/images/review1.jpg";
import review2 from "../assets/images/review2.jpg";
import review3 from "../assets/images/review3.jpg";
import review4 from "../assets/images/review4.jpg";
import review5 from "../assets/images/review5.jpg";
import "../assets/styles/Reviews.scss";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <div
          style={{
            maxWidth: "220px",
            marginLeft: "auto",
            marginRight: "auto",
            // marginTop: "-80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "0vh",
            right: "45%",
          }}
        >
          {" "}
          {dots}{" "}
        </div>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: "transparent",
        }}
      >
        <span></span>
      </div>
    ),
  };

  return (
    <div className="reviews">
      <h1 className="title2">
        Customers Review
        <br />
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
      </h1>
      <Slider {...settings}>
        <div className="review_slider">
          <div className="review_profile">
            <img src={review1} alt="" />
            <p className="review_name">
              Oren Ashkenazi
              <br />
              eBay Seller
            </p>
          </div>
          <p className="review_details">
            "Subivi is an amazing tool which help me manage my customer service.
            It's very easy to use and is constantly evolving and adapting to the
            changing business needs. This tool helps me manage and have
            oversight over my dedicated CS rep (VA)."
          </p>
        </div>

        <div className="review_slider">
          <div className="review_profile">
            <img src={review2} alt="" />
            <p className="review_name">
              Ofir Zur
              <br />
              eBay Seller
            </p>
          </div>
          <p className="review_details">
            "Subivi helped my business cut the time spent on customer support by
            75%! By using the different automation features, we were able to
            decraese the number of clicks required to answer a ticket to just
            two, which drastically changed our avg. response time.
            <br />
            <br />
            We no longer have to spend a long time on obtaining information from
            the different paltforms - it's all right there. Furthermore - it's
            all available on my mobile device anywhere anytime, even when i'm
            outside the office. Countless hours have been saved, very
            recommended!"
          </p>
        </div>

        <div className="review_slider">
          <div className="review_profile">
            <img src={review3} alt="" />
            <p className="review_name">
              Matan Adi
              <br />
              eBay Seller
            </p>
          </div>
          <p className="review_details">
            "After trying a couple of other eBay CRM platforms, I found Subivi -
            and it completely changed my business. The amount of time spent on
            customer support at our company dropped significantly and even more
            importantly - our customers seem to be happier now."
          </p>
        </div>

        <div className="review_slider">
          <div className="review_profile">
            <img src={review4} alt="" />
            <p className="review_name">
              Gunter
              <br />
              eBay Seller
            </p>
          </div>
          <p className="review_details">
            "Subivi is an excellent platform for sellers. After using Subivi, it
            became much easier to communicate with the buyers. Never missed a
            single inquiry. Very helpful customer service. Provided an instant
            solution to all the problems. We can't wait to get the additional
            most awaited features."
          </p>
        </div>

        <div className="review_slider">
          <div className="review_profile">
            <img src={review5} alt="" />
            <p className="review_name">Astech LTD</p>
          </div>
          <p className="review_details">
            "Subivi is an excellent platform for sellers. After using Subivi, it
            became much easier to communicate with the buyers. Never missed a
            single inquiry. Very helpful customer service. Provided an instant
            solution to all the problems. We can't wait to get the additional
            most awaited features."
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
