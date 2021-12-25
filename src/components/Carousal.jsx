import Slider from "react-slick";
import "../assets/styles/Carousal.scss";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider4 from "../assets/images/slider4.jpg";

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
            bottom: "5vh",
            left: "42%",
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
    <div className="slider">
      <h1 className="slider_title">
        Built to boost up your performance and increase sales
      </h1>
      <Slider {...settings}>
        <div className="slider_inner slider1">
          <div className="slider_container">
            <div className="slider_left">
              <h2 className="title2">Built for eBay sellers by eBay sellers</h2>
              <br />
              <p className="descp">
                As former eBay sellers, we are aware of the small things that
                matter to you, we are familiar with the different workflows and
                know exactly what you need to seamlessly manage your customer
                support.
                <br />
                <br />
                We’ve built Subivi so that you could manage your entire customer
                support cycle in an easy and intuitive way. Our platform is
                packed with features especially built so that you can close your
                tickets in the minimum time possible while keeping your
                customers satisfied and ready for future purchases.
              </p>
            </div>
            <div className="slider_right">
              <img src={slider1} alt="" />
            </div>
          </div>
        </div>
        <div className="slider_inner slider2">
          <div className="slider_container">
            <div className="slider_left">
              <h2 className="title2">
                Close all of your tickets without opening eBay
              </h2>
              <br />
              <p className="descp">
                We know how frustrating eBay’s messaging and ticketing system
                can be, which is precisely why you could handle all of your
                tickets in Subivi without even opening eBay.
                <br />
                <br />
                Upload labels, issue refunds (full or partial) and update
                tracking numbers. Subivi is built to support all of eBay’s
                ticket types, including returns, cases, INS cases,
                cancellations, and messages.
              </p>
            </div>
            <div className="slider_right">
              <img src={slider2} alt="" />
            </div>
          </div>
        </div>
        <div className="slider_inner slider2">
          <div className="slider_container">
            <div className="slider_left">
              <h2 className="title2">Multiple Sources</h2>
              <br />
              <p className="descp">
                As many of us know by now - in a lot of cases, eBay sellers own
                multiple eBay accounts and stores, some even sell on their own
                WooCommerce/Magento websites.
                <br />
                <br />
                Since we know how time-consuming jumping between different
                accounts and platforms to answer inquiries can be, in Subivi,
                you can connect an unlimited amount of eBay stores and Gmail
                accounts, so that all of your tickets appear in 1 place.
              </p>
            </div>
            <div className="slider_right">
              <img src={slider1} alt="" />
            </div>
          </div>
        </div>
        <div className="slider_inner slider2">
          <div className="slider_container">
            <div className="slider_left">
              <h2 className="title2">Time to automate your business</h2>
              <br />
              <p className="descp">
                As business owners, we are often required to perform tedious,
                repetitive tasks, whether it’s constantly opening and closing an
                excel sheet with your template message, copy-pasting the
                customer’s information or sending a ‘thank-you’ message after
                each new order.
                <br />
                <br />
                In Subivi, our mission is to identify the most time consuming
                (and let’s be honest - boring) parts of your customer support
                operation and making you forget them by giving you the tools
                fully automate them and save your time and effort.
              </p>
            </div>
            <div className="slider_right">
              <img src={slider4} alt="" />
            </div>
          </div>
        </div>
        <div className="slider_inner slider2">
          <div className="slider_container">
            <div className="slider_left">
              <h2 className="title2">
                Pieces of information are displayed on a single screen{" "}
              </h2>
              <br />
              <p className="descp">
                You’ve just received a message, and you want to close it as fast
                as possible, now you only need to - open the document with your
                ready templates, find the necessary order information, check its
                tracking status, and then replace all of the placeholders in the
                template, piece of cake.
                <br />
                <br />
                In Subivi, all of this would’ve been done in 2 clicks. Just
                beside the ticket, you’ll see the entire customer and order
                information, his order history, and all of his past tickets.
                Also, you can implement pre-made quick replies with smart tags
                which will pull and implement the required information in the
                reply instantly.
              </p>
            </div>
            <div className="slider_right">
              <img src={slider2} alt="" />
            </div>
          </div>
        </div>
        <div className="slider_inner slider2">
          <div className="slider_container">
            <div className="slider_left">
              <h2 className="title2">Answer tickets instantly</h2>
              <br />
              <p className="descp">
                Are you manually typing your messages and needing to search a
                document for the correct template to respond to a customer? -
                There's no denying that this is a time-consuming process.
                <br />
                Join Subivi today and you'll never have to waste that time
                again.
                <br />
                With pre-made templates, you can implement them with a few quick
                clicks and smart tags that are instantly replaced with the
                customer's/order details, reducing your response time to a few
                seconds.
              </p>
            </div>
            <div className="slider_right">
              <img src={slider4} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousal;
