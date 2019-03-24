import { createStackNavigator } from 'react-navigation';

import { SplashScreen, LoginScreen } from "../screens";

const loginFlow = {
    screen: createStackNavigator({
        splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            }
        },
        login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            }
        },
    }),
    navigationOptions: {
        header: null,
    }
};

export default loginFlow;