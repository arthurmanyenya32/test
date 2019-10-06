import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from './Home';
import AboutScreen from './about';
import SettingScreen from './Settings';

export default createBottomTabNavigator({
    Home: HomeScreen,
    About: AboutScreen,
    Settings: SettingScreen
})