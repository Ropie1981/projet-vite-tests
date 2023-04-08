import React from "react";
import styles from "../components/Card.scss";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <img
            src="../src/assets/chalet.jpg"
            alt="Chalet"
            className="card-img"
          />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h2>Chalet à louer</h2>

            <img
              src="../src/assets/star.png"
              alt="ratingIcon"
              className="ratingIcon"
            />
            <img
              src="../src/assets/star.png"
              alt="ratingIcon"
              className="ratingIcon"
            />
            <img
              src="../src/assets/star.png"
              alt="ratingIcon"
              className="ratingIcon"
            />
            <img
              src="../src/assets/star.png"
              alt="ratingIcon"
              className="ratingIcon"
            />
            <img
              src="../src/assets/ratingStar.png"
              alt="ratingIcon"
              className="ratingIcon"
            />
          </div>
          <h3>La Rosière</h3>
          <p>4 ch. / capacité 10pers.</p>
          <button className="infoBtn">+ info</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
