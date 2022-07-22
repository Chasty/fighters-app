import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const RootContainer = styled.View`
  padding: 16px;
  margin-top: 20px;
`;

export const FighterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FighterInformation = styled.View``;

export const FighterText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const FighterUniverseText = styled.Text`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const DownloadsText = styled.Text`
  font-size: 14px;
`;

export const PriceContainer = styled.View`
  margin-top: 12px;
  background-color: #007aff;
  border-radius: 8px;
  width: 100px;
  padding-vertical: 6px;
  align-items: center;
  margin-bottom: 20px;
`;

export const PriceText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

export const FigherImage = styled(FastImage)`
  width: 160px;
  height: 160px;
`;

export const FighterDescription = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
`;
