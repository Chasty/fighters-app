import React, { useState } from 'react';
import { StarContainer, TouchableView, Star } from './Stars.styles';

const activeStar = require('../../../assets/active-star.png');
const inactiveStar = require('../../../assets/inactive-star.png');

type StarsProps = {
  isActive?: boolean;
  rate?: number;
  onTapStar?: (rate: number) => void;
};

const Stars = ({ isActive, rate = 0, onTapStar = () => null }: StarsProps) => {
  const [rating, setRating] = useState(rate);
  return (
    <StarContainer isActive={isActive}>
      {new Array(5).fill(0).map((_, index) => (
        <TouchableView
          key={index}
          disabled={!isActive}
          onPress={() => {
            setRating(index + 1);
            onTapStar(index + 1);
          }}>
          <Star
            isActive={isActive}
            source={index < rating ? activeStar : inactiveStar}
          />
        </TouchableView>
      ))}
    </StarContainer>
  );
};

export default Stars;
