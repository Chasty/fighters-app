import { useNavigation, useRoute } from '@react-navigation/native';

import React, { useState } from 'react';
import { Alert, Platform, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../../components/Header';
import RadioButton from '../../components/RadioButton/RadioButton';
import Stars from '../../components/Stars/Stars';
import {
  BottomContainer,
  ButtonContainer,
  Card,
  SortByText,
  Star,
  StarContainer,
  TouchableView,
} from './Filter.styles';
import { Container } from './Filter.styles';

const activeStar = require('../../../assets/active-star.png');
const inactiveStar = require('../../../assets/inactive-star.png');

const filters = [
  {
    id: 1,
    selected: false,
    label: 'Name',
  },
  {
    id: 2,
    selected: false,
    label: 'Price',
  },
  {
    id: 3,
    selected: false,
    label: 'Rate',
  },
  {
    id: 4,
    selected: false,
    label: 'Downloads',
  },
];

export default function Filter() {
  const route = useRoute();
  const params = route?.params;
  const { sortBy, filterBy } = params || { sortBy: null, filterBy: null };

  const navigation = useNavigation<any>();
  const [selectedIndex, setselectedIndex] = useState(
    filters.findIndex(x => x.label === sortBy),
  );
  const [rating, setRating] = useState(filterBy);

  return (
    <View>
      <Header
        title="Filters"
        showBackButton
        onBack={() => navigation.goBack()}
      />
      <Container>
        {Platform.OS === 'ios' && <SortByText>Sort By</SortByText>}

        <Card>
          {Platform.OS === 'android' && <SortByText>Sort By</SortByText>}
          {filters.map((data, index) => {
            return (
              <RadioButton
                key={data.id}
                value={data.label}
                status={index === selectedIndex ? 'checked' : 'unchecked'}
                onPress={() => setselectedIndex(index)}
                label={data.label}
                color={Platform.OS === 'android' ? '#007AFF' : 'white'}
              />
            );
          })}
        </Card>
        {Platform.OS === 'ios' && <SortByText>Filter By</SortByText>}
        <Card style={{ marginTop: Platform.OS === 'android' ? 15 : 0 }}>
          {Platform.OS === 'android' && <SortByText>Filter By</SortByText>}
          <Stars
            rate={rating}
            onTapStar={rate => {
              setRating(rate);
            }}
            isActive
          />
        </Card>
        <BottomContainer>
          <Button
            style={{
              width: '50%',
              marginRight: 10,
              justifyContent: 'center',
              borderRadius: Platform.OS === 'android' ? 0 : 22,
            }}
            color={Platform.OS === 'android' ? 'white' : '#DADADA'}
            mode="contained"
            onPress={() => {
              navigation.navigate('Home', {
                sortBy: null,
                filterBy: null,
              });
            }}>
            Reset
          </Button>
          <Button
            style={{
              width: '50%',
              marginLeft: 10,
              justifyContent: 'center',
              borderRadius: Platform.OS === 'android' ? 0 : 22,
            }}
            color={Platform.OS === 'android' ? 'white' : '#296DF1'}
            mode="contained"
            onPress={() => {
              navigation.navigate('Home', {
                sortBy:
                  selectedIndex >= 0 ? filters[selectedIndex].label : null,
                filterBy: rating,
              });
            }}>
            Apply
          </Button>
        </BottomContainer>
      </Container>
    </View>
  );
}
