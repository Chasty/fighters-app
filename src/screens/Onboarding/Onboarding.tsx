import React, { FC, useState } from 'react';
import { View, Image, Alert } from 'react-native';
import ViewPager from 'react-native-pager-view';
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
          top: '23%',
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
                height: '100%',
                bottom: '12%',
                alignSelf: 'center',
              }}
              resizeMode="contain"
              source={data[0].image}
            />
            <Label
              style={{
                height: '25%',
                position: 'absolute',
                bottom: -50,
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
            <Label style={{ height: '20%', bottom: -50 }}>{data[1].text}</Label>
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
            <Label style={{ height: '20%', bottom: -50 }}>{data[2].text}</Label>
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
        <View
          style={{
            position: 'absolute',
            bottom: 70,
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
      )}
    </View>
  );
};

export default OnboardingCarousel;
