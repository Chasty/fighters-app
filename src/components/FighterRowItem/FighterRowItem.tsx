import React from 'react';
import {
  Container,
  DownloadsText,
  FighterAnalytics,
  FighterDescription,
  FighterImage,
  FighterTextName,
  FighterTextSkill,
  PriceText,
  RateText,
} from './FighterRowItem.styles';

type FighterRowItemProps = {
  url: string;
  name: string;
  skill: string;
  price: string;
  rate: number;
  downloads: string;
  onPress: () => void;
};

const FighterRowItem = ({
  url,
  name,
  skill,
  price,
  rate,
  downloads,
  onPress,
}: FighterRowItemProps) => {
  return (
    <Container onPress={onPress}>
      <FighterImage source={{ uri: url }} />
      <FighterDescription>
        <FighterTextName>{name}</FighterTextName>
        <FighterTextSkill>{skill}</FighterTextSkill>
      </FighterDescription>
      <FighterAnalytics>
        <PriceText>Price: {price}</PriceText>
        <RateText>Rate: {rate}</RateText>
        <DownloadsText>Downloads: {downloads}</DownloadsText>
      </FighterAnalytics>
    </Container>
  );
};

export default FighterRowItem;
