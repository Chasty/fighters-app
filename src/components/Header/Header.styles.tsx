import styled from 'styled-components/native';

type RootContainerProps = {
  topInsets: number;
};

export const RootContainer = styled.View<RootContainerProps>`
  padding-top: ${({ topInsets }) => topInsets}px;
  background-color: #2360b1;
`;

export const TouchableView = styled.TouchableOpacity`
  padding: 6px;
`;

export const Container = styled.View<RootContainerProps>`
  height: 55px;
  background-color: #007aff;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
`;

export const BackButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderButton = styled.Image`
  width: 16px;
  height: 16px;
`;

export const FilterIcon = styled.Image`
  width: 16px;
  height: 10px;
`;

export const HeaderLabel = styled.Text<{ showBackButton: boolean }>`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: ${({ showBackButton }) => (showBackButton ? 24 : 0)}px;
`;
