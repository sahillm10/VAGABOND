import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.image}></img>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <div className="btnclass">
        <a href="/" className="bttn">
          Book
        </a>
      </div>
    </div>
  );
}

export default TripData;
