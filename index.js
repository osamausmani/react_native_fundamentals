/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';

// import App from './Components/Image/App';

// import Input from './Components/Input/Input';
// import Button from './Components/Button/Button';

// import TouchableOpacity from './Components/TouchableOpacity/TouchableOpacity';


// import ScrollView from "./Components/ScrollView/App";
// import ScrollView2 from "./Components/ScrollView/App2";


import Flatlist from "./Components/Flatlist/App";
import Flatlist2 from "./Components/Flatlist/App2";



import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Flatlist2);
