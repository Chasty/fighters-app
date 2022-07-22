import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  RootContainer,
  Container,
  HeaderButton,
  HeaderLabel,
  FilterIcon,
  BackButtonContainer,
  TouchableView,
} from './Header.styles';
const filterImage = require('../../../assets/filter-icon.png');
const backButton = require('../../../assets/back-icon.png');

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
    </RootContainer>
  );
};

export default Header;
