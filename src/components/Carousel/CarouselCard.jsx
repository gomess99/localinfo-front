import React from "react";
import PropTypes from "prop-types";

function CarouselCard({ img, name, category, likes }) {
    return (
        <div className="carousel-card">
            <div className="image-container" style={{ backgroundImage: `url(${img})` }} />
            <div className="carousel-card-text">
                <p className="name">{name}</p>
                <div className="category-likes">
                    <p className="category">{category}</p>
                    <p className="likes">Likes: {likes}</p>
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
