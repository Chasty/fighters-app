import React, { FC, useState } from 'react';
import { View, Image, Alert, Platform, Text } from 'react-native';
import ViewPager from 'react-native-pager-view';
import { Button } from 'react-native-paper';
import { useGlobalContext } from '../../context/FirstTimeAppProvider';
import {
  DotContainer,
  Label,
  Dot,
  NextImage,
  NextButton,
} from './Onboarding.styles';

const onboardingSlide_1 = require('../../../assets/walkthrough1.png');
const onboardingSlide_2 = require('../../../assets/walkthrough2.png');
const onboardingSlide_3 = require('../../../assets/walkthrough3.png');
const nextImage = require('../../../assets/next-icon.png');

const data = [
  {
    image: onboardingSlide_1,
    text: `Access our\nExtended Catalog`,
  },
  {
    image: onboardingSlide_2,
    text: `Filter Fighters`,
  },
  {
    image: onboardingSlide_3,
    text: `And More ...`,
  },
];

export const OnboardingCarousel: FC = () => {
  const { isFirstTimeOpen, setIsFirstTimeOpen } = useGlobalContext();
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: '#1A90F0' }}>
      <View
        style={{
          height: '55%',
          width: '100%',
          top: Platform.OS === 'android' ? '23%' : '10%',
        }}>
        <ViewPager
          style={{
            height: '100%',
            width: '100%',
          }}
          onPageSelected={event => {
            setSelectedPage(event.nativeEvent.position);
          }}>
          <View
            key="slide_1"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
            <Image
              style={{
                width: '88%',
                height: Platform.OS === 'android' ? '80%' : '100%',
                bottom: Platform.OS === 'android' ? '2%' : '12%',
                alignSelf: 'center',
              }}
              resizeMode="contain"
              source={data[0].image}
            />
            <Label
              style={{
                height: '25%',
                position: 'absolute',
                bottom: Platform.OS === 'android' ? -30 : -50,
              }}>
              {data[0].text}
            </Label>
          </View>
          <View
            key="slide_2"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
            }}>
            <Image
              style={{
                width: '100%',
                height: '75%',
                alignSelf: 'center',
              }}
              resizeMode="contain"
              source={data[1].image}
            />
            <Label
              style={{
                height: '20%',
                bottom: Platform.OS === 'android' ? -30 : -50,
              }}>
              {data[1].text}
            </Label>
          </View>
          <View
            key="slide_3"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
            }}>
            <Image
              style={{
                width: '100%',
                height: '70%',
                alignSelf: 'center',
              }}
              resizeMode="contain"
              source={data[2].image}
            />
            <Label
              style={{
                height: '20%',
                bottom: Platform.OS === 'android' ? -30 : -50,
              }}>
              {data[2].text}
            </Label>
          </View>
        </ViewPager>
        <DotContainer>
          {data.map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Dot active={index === selectedPage} key={`dot_${index}`} />
          ))}
        </DotContainer>
      </View>
      {selectedPage === 2 && (
        <>
          {Platform.OS === 'android' ? (
            <View
              style={{
                position: 'absolute',
                bottom: 30,
                right: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}>
              <NextButton onPress={() => setIsFirstTimeOpen(false)}>
                <NextImage source={nextImage} />
              </NextButton>
            </View>
          ) : (
            <View
              style={{
                position: 'absolute',
                bottom: 70,
                width: '100%',
                flex: 1,
                alignItems: 'center',
                marginLeft: 100,
                height: 50,
                backgroundColor: 'transparent',

                right: 0,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}>
              <Button
                style={{
                  width: '80%',
                  height: '100%',
                  justifyContent: 'center',
                  borderRadius: 22,
                }}
                onPress={() => setIsFirstTimeOpen(false)}
                labelStyle={{ color: '#1A90F0', fontSize: 16 }}
                color="white"
                mode="contained">
                Let's Go
              </Button>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default OnboardingCarousel;
