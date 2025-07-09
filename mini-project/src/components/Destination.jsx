import "./DestinationStyles.css";
import Tokyo1 from "../assets/Tokyo1.jpg";
import Tokyo2 from "../assets/Tokyo2.jpg";
import Amalfi1 from "../assets/Amalfi1.jpg";
import Amalfi2 from "../assets/Amalfi2.jpg";
import CapeTown1 from "../assets/CapeTown1.jpg";
import CapeTown2 from "../assets/CapeTown2.jpg";

import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Explore the most visited locations around the World!</p>

      <DestinationData
        className="first-des"
        heading="Tokyo, Japan"
        text="Welcome to the vibrant city of Tokyo, where tradition seamlessly
      blends with cutting-edge modernity. As Japan's bustling capital,
      Tokyo captivates visitors with its electrifying energy, towering
      skyscrapers, and serene temples. Immerse yourself in the sensory
      overload of Shibuya Crossing, where throngs of pedestrians flood the
      streets, or seek tranquility amidst the cherry blossoms in Ueno
      Park. Indulge your taste buds with exquisite sushi at Tsukiji Fish
      Market or savor the eclectic street food scene in Harajuku."
        img1={Tokyo1}
        img2={Tokyo2}
      ></DestinationData>

      <DestinationData
        className="second-des"
        heading="Amalfi Coast, Italy"
        text="Experience the enchanting beauty of the Amalfi Coast, 
        a UNESCO World Heritage Site nestled along the rugged coastline of southern Italy. 
        Picture-perfect villages cling to steep cliffs overlooking the sparkling Mediterranean Sea, 
        creating a breathtaking panorama at every turn. Wander through the narrow streets of Positano, 
        where pastel-colored houses cascade down to the sea, or discover the medieval charm of Ravello, 
        known for its stunning gardens and panoramic views. Indulge in the region's culinary delights, 
        from fresh seafood pasta to creamy limoncello, while soaking in the sun on one of the picturesque beaches."
        img1={Amalfi1}
        img2={Amalfi2}
      ></DestinationData>

      <DestinationData
        className="third-des"
        heading="Cape Town, South Africa"
        text="Embark on a journey to the breathtaking city of Cape Town, South Africa. Nestled between the iconic Table Mountain
         and the glistening Atlantic Ocean, Cape Town is a vibrant tapestry of cultures, landscapes, and experiences. 
         Explore the historic streets of the city center, where colonial architecture blends with modern art galleries and lively markets. 
         Ascend to the summit of Table Mountain for panoramic views that stretch to the horizon, or take a leisurely drive along the scenic Cape Peninsula, 
         stopping to admire the dramatic cliffs of Chapman's Peak and the charming penguins at Boulders Beach. Dive into the colorful bustle of the Victoria & Alfred Waterfront, 
         where world-class restaurants, boutiques, and entertainment await. Immerse yourself in South Africa's rich history and heritage with visits to Robben Island, 
         where Nelson Mandela was imprisoned, and the District Six Museum, which chronicles the city's tumultuous past. "
        img1={CapeTown1}
        img2={CapeTown2}
      ></DestinationData>
      <div className="btnClass">
        <a href="/" className="btn">
          Travel Plan
        </a>
      </div>
    </div>
  );
};

export default Destination;
