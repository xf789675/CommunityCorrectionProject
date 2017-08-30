import { Navigation } from 'react-native-navigation';

import PhoneReg from './components/phoneReg';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('cc.phoneReg', () => PhoneReg, store, Provider);
}
