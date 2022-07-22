import React from 'react';
import { View, ScrollView } from 'react-native';
import FilterTab from '../FilterTab/FilterTab';

type FilterTab = {
  name: string;
  selected: boolean;
};

type FilterTabsProps = {
  tabs: Array<FilterTab>;
  onTab: (name: string) => void;
};

const FilterTabs = ({ tabs = [], onTab }: FilterTabsProps) => {
  return (
    <View style={{ marginTop: 16 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map((x, idx) => (
          <FilterTab
            key={idx}
            active={x.selected}
            category={x.name}
            onTab={() => onTab(x.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FilterTabs;
