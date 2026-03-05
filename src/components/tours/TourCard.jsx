function TourCard({ title, image, description, price }) {
  return (
    <div className="tour-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="price">${price}</span>
      <button>Reservar</button>
    </div>
  );
}

export default TourCard;