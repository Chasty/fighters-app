import OnBoarding from './Onboarding';
import Home from './Home';
import Detail from './Detail';
import Filter from './Filter';

export type CommonStackParamList = {
  OnBoarding: undefined;
  Home: undefined;
  Detail: undefined;
};

export const onboardingScreens = {
  OnBoarding: { component: OnBoarding },
};

export const appScreens = {
  Home: { component: Home },
  Detail: { component: Detail },
  Filter: { component: Filter },
};
