import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { height } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: ${height - 130}px;
  background-color: #e5e5e5;
`;

export const SortByText = styled.Text`
  font-size: 14px;
  color: #979797;
  margin-left: 16px;
`;

export const Card = styled.View`
  padding: 8px;
  background-color: white;
`;

export const Star = styled.Image`
  width: 30px;
  height: 30px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const StarContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const TouchableView = styled.TouchableOpacity``;

export const BottomContainer = styled.View`
  background-color: transparent;
  position: absolute;
  flex-direction: row;
  height: 50px;
  width: 100%;
  bottom: 40px;
  left: 0px;
  padding-left: 16px;
  padding-right: 35px;
`;

export const ButtonContainer = styled.View`
  background-color: green;
  height: 100px;
  width: 100%;
`;
