import styled from 'styled-components/native';

type StarProps = {
  isActive: boolean;
};

export const Star = styled.Image<StarProps>`
  width: ${({ isActive }) => (isActive ? 30 : 20)}px;
  height: ${({ isActive }) => (isActive ? 30 : 20)}px;
  margin-left: ${({ isActive }) => (isActive ? 12 : 0)}px;
  margin-right: ${({ isActive }) => (isActive ? 12 : 4)}px;
`;

export const StarContainer = styled.View<StarProps>`
  margin-top: ${({ isActive }) => (isActive ? 30 : 4)}px;
  margin-bottom: ${({ isActive }) => (isActive ? 30 : 4)}px;
  width: 100%;
  flex-direction: row;
  justify-content: ${({ isActive }) => (isActive ? 'center' : 'flex-start')};
`;

export const TouchableView = styled.TouchableOpacity``;
