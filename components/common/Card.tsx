import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';
import { IMAGES, UI_TEXT } from '../../constants';

const Card: React.FC<CardProps> = ({
  title = 'Property Title',
  description = 'Property description goes here...',
  imageUrl = IMAGES.PLACEHOLDER_PROPERTY,
  price = 0,
  location = 'Location not specified',
  rating = 0,
  className = '',
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">☆</span>
      );
    }

    return stars;
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Location */}
        <p className="text-sm text-gray-600 mb-1">{location}</p>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center mb-3">
            <div className="flex items-center mr-2">
              {renderStars(rating)}
            </div>
            <span className="text-sm text-gray-600">
              {rating.toFixed(1)}
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">
            ${price} <span className="text-sm font-normal text-gray-600">{UI_TEXT.LABELS.PRICE_PER_NIGHT}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
