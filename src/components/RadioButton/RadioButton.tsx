import React from 'react';
import { RadioButton as PaperRadioButton } from 'react-native-paper';
import styled from 'styled-components/native';

enum RadioButtonStatus {
  checked = 'checked',
  unchecked = 'unchecked',
}

interface RadioButtonProps {
  value: string;
  status: keyof typeof RadioButtonStatus;
  label: string;
  color: string;
  onPress: () => void;
}

const Container = styled.View`
  flex-direction: row;
  border-bottom-color: #00000020;
  border-bottom-width: 0.75px;
  margin-top: 30px;
  margin-left: 16px;
`;

const Label = styled.Text`
  font-size: 14px;
  margin-left: 16px;
`;

const RadioButton = ({
  value,
  status,
  label,
  color,
  onPress,
}: RadioButtonProps) => {
  return (
    <Container>
      <PaperRadioButton
        value={value}
        status={status}
        color={color}
        onPress={onPress}
        uncheckedColor={color}></PaperRadioButton>
      <Label>{label}</Label>
    </Container>
  );
};

export default RadioButton;
