/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';

// import App from './Components/Image/App';

// import Input from './Components/Input/Input';
// import Button from './Components/Button/Button';

import TouchableOpacity from './Components/TouchableOpacity/TouchableOpacity';



import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TouchableOpacity);
