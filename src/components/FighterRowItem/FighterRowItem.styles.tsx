import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 120px;
  width: 100%;
  flex-direction: row;
  padding: 0px 16px;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
  padding-top: 16px;
  margin-top: 16px;
`;

export const FighterImage = styled(FastImage)`
  height: 73px;
  width: 73px;
`;

export const FighterDescription = styled.View`
  margin-left: 12px;
`;

export const FighterTextName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
`;

export const FighterTextSkill = styled.Text`
  font-size: 14px;
`;

export const FighterAnalytics = styled.View`
  flex: 1;
  margin-top: 8px;
`;

export const PriceText = styled.Text`
  font-size: 14px;
  text-align: right;
`;

export const RateText = styled.Text`
  font-size: 14px;
  text-align: right;
`;

export const DownloadsText = styled.Text`
  font-size: 14px;
  text-align: right;
`;
