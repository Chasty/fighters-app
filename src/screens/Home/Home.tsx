import { useNavigation } from '@react-navigation/native';
import useSWR from 'swr';
import React, { useCallback } from 'react';
import { Alert, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import FighterRowItem from '../../components/FighterRowItem';
import Header from '../../components/Header';
import { fetcher } from '../../utils/api';
import FilterTab from '../../components/FilterTab';
import FilterTabs from '../../components/FilterTabs';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const allCategory = {
  selected: true,
  name: 'All',
};

const Home = ({ route }) => {
  const [tabs, setTabs] = useState<Array<any>>([allCategory]);
  const [figthers, setFighters] = useState<Array<any>>([]);
  const [filteredFighters, setFilteredFighters] = useState<Array<any>>([]);
  const [selectedTab, setSelectedTab] = useState('All');
  const [filters, setFilters] = useState<{
    sortBy: string | null;
    filterBy: number | null;
  }>({
    sortBy: null,
    filterBy: null,
  });
  const { data: fightersData } = useSWR(
    'https://593cdf8fb56f410011e7e7a9.mockapi.io/fighters',
    fetcher,
  );

  const getCategories = async () => {
    const categories = await axios.get(
      'https://593cdf8fb56f410011e7e7a9.mockapi.io/universes',
    );
    setTabs([allCategory, ...(categories?.data ?? [])]);
  };

  useEffect(() => {
    if (fightersData) {
      setFighters(fightersData);
      setFilteredFighters(fightersData);
    }
  }, [fightersData]);

  useEffect(() => {
    getCategories();
  }, []);

  const renderItem = useCallback(
    ({ item, index }: any) => (
      <FighterRowItem
        key={index}
        name={item.name}
        skill={item.universe}
        url={item.imageURL}
        price={item.price}
        rate={item.rate}
        downloads={item.downloads}
        onPress={() =>
          navigation.navigate('Detail', {
            name: item.name,
            universe: item.universe,
            rate: item.rate,
            price: item.price,
            downloads: item.downloads,
            description: item.description,
            url: item.imageURL,
          })
        }
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const keyExtractor = useCallback(
    (_: any, index: number) => index as unknown as string,
    [],
  );

  useEffect(() => {
    if (route.params) {
      setFilters(route.params);
    }
  }, [route.params]);

  useEffect(() => {
    if (figthers.length > 0) {
      const { sortBy, filterBy } = filters;
      const copyArr = [...figthers];

      let sortedArray = copyArr;
      let filterArray = [];

      if (sortBy) {
        if (sortBy === 'Name') {
          sortedArray = copyArr.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (sortBy === 'Rate') {
          sortedArray = copyArr.sort((a, b) => a.rate - b.rate);
        }
        if (sortBy === 'Price') {
          sortedArray = copyArr.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price),
          );
        }
        if (sortBy === 'Downloads') {
          sortedArray = copyArr.sort(
            (a, b) => parseFloat(a.downloads) - parseFloat(b.downloads),
          );
        }
      }

      filterArray = sortedArray;

      if (filterBy) {
        filterArray = sortedArray.filter(f => f.rate === filterBy);
      }

      if (selectedTab === 'All') {
        setFilteredFighters(filterArray);
        return;
      }

      filterArray = [...filterArray.filter(x => x.universe === selectedTab)];
      setFilteredFighters(filterArray);
    }

    //setFilteredFighters(filteredArray);
  }, [filters, selectedTab, figthers]);

  const navigation = useNavigation<any>();

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Header
        title="Fighters"
        onFilter={() =>
          navigation.navigate('Filter', {
            sortBy: filters.sortBy,
            filterBy: filters.filterBy,
          })
        }
        showFilter
      />
      <FilterTabs
        tabs={tabs}
        onTab={category => {
          const newTabs = [...tabs].map(t => ({
            ...t,
            selected: t.name === category ? true : false,
          }));
          setTabs(newTabs);
          setSelectedTab(category);
          /*if (category === 'All') {
            setFilteredFighters([...figthers]);
            return;
          }
          const filteredArray = [
            ...figthers.filter(x => x.universe === category),
          ];
          setFilteredFighters(filteredArray);*/
        }}
      />
      <FlashList
        data={filteredFighters}
        renderItem={renderItem}
        disableAutoLayout={true}
        estimatedItemSize={120}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default Home;
