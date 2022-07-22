import React from 'react';
import { View, Text } from 'react-native';
import { CategoryText, TouchableView, Container } from './FilterTab.styles';

type FilterTabProps = {
  category: string;
  active?: boolean;
  onTab: () => void;
};

const FilterTab = ({ category, active, onTab }: FilterTabProps) => {
  return (
    <Container>
      <TouchableView onPress={onTab}>
        <CategoryText active={active}>{category}</CategoryText>
      </TouchableView>
    </Container>
  );
};

export default FilterTab;
