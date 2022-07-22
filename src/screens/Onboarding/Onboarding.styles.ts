import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface DotProps {
  active: boolean;
}

export const RootContainer = styled.View`
  background-color: 'white';
  height: 100%;
`;

export const Label = styled.Text`
  font-size: 25px;
  text-align: center;
  color: white;
`;

export const DotContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 50px;
  justify-content: center;
`;

export const Dot = styled.View<DotProps>`
  width: 8px;
  height: 8px;
  top: 5%;
  border-radius: ${RFValue(10)}px;
  margin-right: ${RFValue(4)}px;
  margin-left: ${RFValue(4)}px;
  background-color: ${({ active }) => (active ? '#2360B1' : 'white')};
`;

export const NextButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const NextImage = styled.Image`
  width: 19px;
  height: 18px;
`;
