import React from 'react';
import { Platform } from 'react-native';
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
  align-items: center;
  justify-content: ${Platform.OS === 'android'
    ? 'flex-start'
    : 'space-between'};
`;

const Label = styled.Text`
  font-size: 14px;
  margin-left: 16px;
`;

const Circle = styled.View<{ checked: boolean }>`
  background-color: ${({ checked }) => (checked ? '#007aff' : 'transparent')};
  border-width: ${({ checked }) => (checked ? 0 : 0.75)}px;
  border-color: rgba(60, 60, 67, 0.33);
  border-radius: 25px;
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
      {Platform.OS === 'ios' ? (
        <>
          <Label>{label}</Label>
          <Circle checked={status === 'checked'}>
            <PaperRadioButton
              value={value}
              status={status}
              color={color}
              onPress={onPress}
              uncheckedColor={color}></PaperRadioButton>
          </Circle>
        </>
      ) : (
        <>
          <PaperRadioButton
            value={value}
            status={status}
            color={color}
            onPress={onPress}
            uncheckedColor={color}></PaperRadioButton>
          <Label>{label}</Label>
        </>
      )}
    </Container>
  );
};

export default RadioButton;
