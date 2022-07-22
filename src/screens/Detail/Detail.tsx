import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Stars from '../../components/Stars/Stars';
import {
  RootContainer,
  FighterContainer,
  FighterInformation,
  FighterText,
  FighterUniverseText,
  DownloadsText,
  PriceContainer,
  PriceText,
  FigherImage,
  FighterDescription,
} from './Detail.styles';

type DetailProps = {
  name: string;
  universe: string;
  rate: number;
  downloads: string;
  price: string;
  description: string;
};

const Detail = () => {
  const route = useRoute();
  const { name, universe, rate, downloads, price, description, url } =
    route.params;
  const navigation = useNavigation<any>();

  return (
    <View>
      <Header title={name} showBackButton onBack={() => navigation.goBack()} />

      <RootContainer>
        <FighterContainer>
          <FighterInformation>
            <FighterText>{name}</FighterText>
            <FighterUniverseText>{universe}</FighterUniverseText>
            <Stars rate={rate} />
            <DownloadsText>Downloads: {downloads}</DownloadsText>
            <PriceContainer>
              <PriceText>${price}</PriceText>
            </PriceContainer>
          </FighterInformation>

          <FigherImage source={{ uri: url }} />
        </FighterContainer>

        <FighterDescription>{description}</FighterDescription>
      </RootContainer>
    </View>
  );
};

export default Detail;
