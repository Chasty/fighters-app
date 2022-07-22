import styled from 'styled-components/native';

export const TouchableView = styled.TouchableOpacity``;

export const Container = styled.View`
  height: 40px;
`;

export const CategoryText = styled.Text<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#003C7E' : '#007aff')};
  padding-vertical: 12px;
  padding-horizontal: 16px;
  margin-left: 10px;
  color: white;
`;
