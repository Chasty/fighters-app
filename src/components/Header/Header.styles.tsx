import { Platform } from 'react-native';
import styled from 'styled-components/native';

type RootContainerProps = {
  topInsets: number;
};

export const RootContainer = styled.View<RootContainerProps>`
  padding-top: ${({ topInsets }) => topInsets}px;
  background-color: ${Platform.OS === 'android' ? '#2360b1' : 'white'};
`;

export const TouchableView = styled.TouchableOpacity`
  padding: 6px;
`;

export const Container = styled.View<RootContainerProps>`
  height: 55px;
  background-color: ${Platform.OS === 'android' ? '#007aff' : 'white'};
  width: 100%;
  flex-direction: ${Platform.OS === 'android' ? 'row' : 'column'};
  align-items: ${Platform.OS === 'android' ? 'center' : 'flex-start'};
  justify-content: space-between;
  padding-horizontal: 16px;
  margin-bottom: ${Platform.OS === 'android' ? 0 : 12}px;
`;

export const BackButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderButton = styled.Image`
  width: ${Platform.OS === 'android' ? 16 : 14}px;
  height: ${Platform.OS === 'android' ? 16 : 36}px;
`;

export const FilterIconContainer = styled.View`
  width: 100%;
`;

export const FilterIcon = styled.Image`
  width: 20px;
  height: 15px;
  align-self: flex-end;
`;

export const HeaderLabel = styled.Text<{ showBackButton: boolean }>`
  color: ${Platform.OS === 'android' ? 'white' : 'black'};
  font-size: ${Platform.OS === 'android' ? 20 : 34}px;
  font-weight: bold;
  margin-left: ${({ showBackButton }) => (showBackButton ? 24 : 0)}px;
`;
