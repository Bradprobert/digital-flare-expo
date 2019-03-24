import React from "react";
import { createStackNavigator } from 'react-navigation';

import {colors, fonts, fontSizes, strings} from "../constants";
import { HomeScreen } from '../screens';
import loginFlow from "./LoginFlow";

const MainNavigator = createStackNavigator({
    loginFlow: loginFlow,
    mainFlow: {
        screen: HomeScreen,
        navigationOptions: {
            title: strings.brandName,
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerTitleStyle: {
                color: colors.white,
                fontFamily: fonts.title,
                fontSize: fontSizes.title,
            },
        },
    },
}, {
    navigationOptions: {
        headerLeft: null
    }
});

export default MainNavigator;