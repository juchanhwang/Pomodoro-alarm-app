import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Information from './pages/Information';
import Report from './pages/Report';

const Navigator = createBottomTabNavigator({
  Report,
  Home,
  Information,
});

export default createAppContainer(Navigator);