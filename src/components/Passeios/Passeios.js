import "./Passeios.scss";

const Passeios = ({ image, altText, title, description, buttonLabel }) => {
  return (
    <div className="passeios-card">
      <img src={`${image}`} alt={altText} />
      <h2>{title}</h2>
      <span>{description}</span>
      <button>{buttonLabel}</button>
    </div>
  );
};

export default Passeios;
