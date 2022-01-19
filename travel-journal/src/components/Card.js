export default function Card(props) {
  return (
    <section className="card-section">
      <hr style={{ display: props.card.id === 0 ? "none" : "block" }} />
      <div className="card">
        <img className="card--image" src={props.card.imageUrl} alt="petra" />
        <div className="card--content">
          <p className="card--content--location">
            <img
              className="card--content--location--img"
              src="./images/pin.svg"
              alt=""
            />
            <span className="card--content--location--country">
              {props.card.location}
            </span>
            <a
              className="card--content--location--link"
              href={props.card.googleMapsUrl}
              target="blank"
            >
              View on Google Maps
            </a>
          </p>
          <h2 className="card--content--title">{props.card.title}</h2>
          <p className="card--content--dates">
            {" "}
            {props.card.startDate} - {props.card.endDate}
          </p>
          <p className="card--content-description">{props.card.description}</p>
        </div>
      </div>
    </section>
  );
}
