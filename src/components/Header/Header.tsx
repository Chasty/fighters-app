import React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  RootContainer,
  Container,
  HeaderButton,
  HeaderLabel,
  FilterIcon,
  BackButtonContainer,
  TouchableView,
  FilterIconContainer,
} from './Header.styles';
const filterImage = require('../../../assets/filter-icon.png');
const filterImageIos = require('../../../assets/filter-icon-ios.png');
const backButton = require('../../../assets/back-icon.png');
const backButtonIos = require('../../../assets/back.png');

type HeaderProps = {
  title: string;
  onBack?: () => void;
  onFilter?: () => void;
  showBackButton?: boolean;
  showFilter?: boolean;
};

const Header = ({
  title,
  showBackButton,
  showFilter,
  onBack,
  onFilter,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <RootContainer topInsets={insets.top}>
      {Platform.OS === 'android' ? (
        <Container>
          <BackButtonContainer>
            {showBackButton && (
              <TouchableView onPress={onBack}>
                <HeaderButton source={backButton} />
              </TouchableView>
            )}

            <HeaderLabel showBackButton={showBackButton}>{title}</HeaderLabel>
          </BackButtonContainer>
          {showFilter && (
            <TouchableView onPress={onFilter}>
              <FilterIcon source={filterImage} />
            </TouchableView>
          )}
        </Container>
      ) : (
        <Container>
          {showFilter && (
            <FilterIconContainer>
              <TouchableView onPress={onFilter}>
                <FilterIcon source={filterImageIos} />
              </TouchableView>
            </FilterIconContainer>
          )}

          <BackButtonContainer>
            {showBackButton && (
              <TouchableView onPress={onBack}>
                <HeaderButton source={backButtonIos} />
              </TouchableView>
            )}

            <HeaderLabel showBackButton={showBackButton}>{title}</HeaderLabel>
          </BackButtonContainer>
        </Container>
      )}
    </RootContainer>
  );
};

export default Header;
