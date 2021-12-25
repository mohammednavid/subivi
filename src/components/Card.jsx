import "../assets/styles/Card.scss";

const Card = ({
  title,
  price,
  plan,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  benefit5,
  benefit6,
}) => {
  return (
    <div className="card">
      <h6 className="card_title">{title}</h6>
      <h1 className="card_price">${price}</h1>
      <p className="card_plan">
        per agent /{plan}
        <br />
        <span>*billed annually</span>
      </p>
      <ul>
        <li>
          <i className="bi bi-check2-circle"></i> {benefit1}
        </li>
        <li>
          <i className="bi bi-check2-circle"></i> {benefit2}
        </li>
        <li>
          <i className="bi bi-check2-circle"></i> {benefit3}
        </li>
        <li>
          <i className="bi bi-check2-circle"></i> {benefit4}
        </li>
        <li>
          <i className="bi bi-check2-circle"></i> {benefit5}
        </li>
        <li>
          <i className="bi bi-check2-circle"></i> {benefit6}
        </li>
      </ul>
      <button className="card_button">Start your free trial</button>
    </div>
  );
};

export default Card;
