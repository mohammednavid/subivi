import "./assets/styles/App.scss";
import Navbar from "./components/Navbar";
import topLeft from "./assets/images/bg/top-left.svg";
import bottomLeft from "./assets/images/bg/bottom-left.svg";
import bottomRight from "./assets/images/bg/bottom-right.svg";
import ellipse1 from "./assets/images/bg/Ellipse1.svg";
import ellipse2 from "./assets/images/bg/Ellipse2.svg";
import headphones from "./assets/images/headphone.svg";
import card from "./assets/images/card.jpg";
import hustle from "./assets/images/hustle.jpg";
import { useState } from "react";
import Carousal from "./components/Carousal";
import Card from "./components/Card";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <div className="app_bgContainer">
        <img src={topLeft} alt="" className="topLeft" />
        <img src={bottomLeft} alt="" className="bottomLeft" />
        <img src={bottomRight} alt="" className="bottomRight" />
        <img src={ellipse1} alt="" className="ellipse1_1" />
        <img src={ellipse2} alt="" className="ellipse2_1" />
        <img src={ellipse1} alt="" className="ellipse1_2" />
        <img src={ellipse2} alt="" className="ellipse2_2" />
        <img src={ellipse1} alt="" className="ellipse1_3" />
      </div>
      <div className="app_container">
        <div className="banner">
          <div className="banner_left">
            <div className="banner_title">
              <h2 className="title">
                eBay Customer Support - Made Easy <br /> Increase sales by
                making sure your customers are always happy.
              </h2>
              <img src={headphones} alt="" className="" />
            </div>
            <ul>
              <li>
                <i className="bi bi-arrow-right-circle"></i> Full eBay support,
                cases & returns included
              </li>
              <li>
                <i className="bi bi-arrow-right-circle"></i> Save time by using
                Subivi’s automation
              </li>
              <li>
                <i className="bi bi-arrow-right-circle"></i> Manage multiple
                stores in 1 place
              </li>
            </ul>
            <div className="banner_buttons">
              <img src={card} alt="" />
              <button className="btn_unlimited">
                Unlimited <br />
                7-days trial
              </button>
            </div>
            <span>No credit card required</span>
            <div className="toggle_buttons">
              <div className={`toggle_on ${toggle && "toggle_off"}`}></div>
              <button className="toggle">Build a Demo</button>
              <button>Get Started</button>
            </div>
          </div>
          <div className="banner_right">
            <p>
              Need help?
              <br /> Chat us
              <i className="bi bi-chat"></i>
            </p>
            <div className="embed_card">
              <h2>embed video</h2>
            </div>
          </div>
        </div>
        <div className="banner_bottom">
          <h2 className="title">Official Partners:</h2>
          <img src={hustle} alt="" />
        </div>
      </div>
      
      <Carousal />

      <div className="app_container">
        <Reviews />
      </div>

      <div className="plan_container">
        <h2 className="upper_title">Pricing that fits you</h2>
        <h1 className="title2">
          Unlimited 7 days trial - no credit card required
        </h1>
        <div className="toggle_buttons">
          <div className={`toggle_on ${toggle && "toggle_off"}`}></div>
          <button
            className={`${!toggle && "toggle"}`}
            onClick={() => setToggle(false)}
          >
            MONTHLY
          </button>
          <button
            className={`${toggle && "toggle"}`}
            onClick={() => setToggle(true)}
          >
            ANNUALLY
          </button>
        </div>
        {!toggle ? (
          <div className="card_container">
            <Card
              title="Starter"
              price={7}
              plan="month"
              benefit1="up to 1 source"
              benefit2="up to 60 tickets/month"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
            <Card
              title="Basic"
              price={19}
              plan="month"
              benefit1="up to 3 source"
              benefit2="unlimited tickets/messages"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
            <Card
              title="Advance"
              price={30}
              plan="month"
              benefit1="up to 5 source"
              benefit2="unlimited tickets/messages"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
            <Card
              title="Premium"
              price={69}
              plan="month"
              benefit1="up to 10 source"
              benefit2="unlimited tickets/messages"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
            <Card
              title="Enterprise"
              price={109}
              plan="month"
              benefit1="up to 25 source"
              benefit2="unlimited tickets/messages"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
          </div>
        ) : (
          <div className="card_container">
            <Card
              title="Starter"
              price={7}
              plan="month"
              benefit1="up to 1 source"
              benefit2="up to 60 tickets/month"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
            <Card
              title="Basic"
              price={19}
              plan="month"
              benefit1="up to 3 source"
              benefit2="unlimited tickets/messages"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
            <Card
              title="Advance"
              price={30}
              plan="month"
              benefit1="up to 5 source"
              benefit2="unlimited tickets/messages"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
            <Card
              title="Premium"
              price={58}
              plan="month"
              benefit1="up to 10 source"
              benefit2="unlimited tickets/messages"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
            <Card
              title="Enterprise"
              price={109}
              plan="month"
              benefit1="up to 25 source"
              benefit2="unlimited tickets/messages"
              benefit3="quick replies"
              benefit4="automated messages"
              benefit5="customer details in one screen"
              benefit6="upsell feature helps you increase sales"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
