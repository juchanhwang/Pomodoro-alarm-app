import {
  createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer,
} from 'react-navigation';
import PomoList from './pages/pomo/PomoList';
import Information from './pages/Information';
import Report from './pages/Report';
import SignInScreen from './pages/auth/SignInScreen';
import AuthLoadingScreen from './pages/auth/AuthLoadingScreen';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppStack = createBottomTabNavigator(
  {
    Report,
    PomoList,
    Information,
  },
  {
    initialRouteName: 'PomoList',
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));
