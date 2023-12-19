import React, { useState } from "react";

function CarouselCard({ avatar, name, categoria, likes }) {
  const [liked, setLiked] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();

    setLiked(!liked);

  };
  return (
    <div className="carousel-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className="carousel-card-text">
        <p className="name">{name}</p>
        <div className="category-likes">
          <p className="category">{categoria}</p>
          <p className="likes">
            <i
              className={`bi bi-heart${liked ? '-fill' : ''}`}
              alt="Ícone de like"
              style={{
                fontSize: `20px`,
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

export default CarouselCard;
