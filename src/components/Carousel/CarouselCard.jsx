import React, { useState } from "react";
import PropTypes from "prop-types";

function CarouselCard({ img, name, category, likes }) {
  const [liked, setLiked] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();

    setLiked(!liked);

  };
  return (
    <div className="carousel-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="carousel-card-text">
        <p className="name">{name}</p>
        <div className="category-likes">
          <p className="category">{category}</p>
          <p className="likes">
            <i
              className={`bi bi-heart${liked ? '-fill' : ''}`}
              alt="Ícone de like"
              style={{
                fontSize: `25px`,
                color: liked ? 'red' : 'white',
                cursor: 'pointer',
                transition: 'color 0.3s ease, font-size 0.3s ease-out'
              }}
              onClick={(event) => {
                handleClick(event);
              }}
            ></i>
            {likes}
          </p>
        </div>
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default CarouselCard;
