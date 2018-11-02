/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Analytics from 'appcenter-analytics';

Analytics.trackEvent('App starting');

AppRegistry.registerComponent(appName, () => App);
