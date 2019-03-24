import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import * as Progress from 'react-native-progress';
import {colors, fonts, fontSizes, strings} from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.title,
        fontFamily: fonts.splash,
    }
});

const Splash = props => {
    return (
        <View style={styles.container}>
            {props.fontLoaded ? <Text style={styles.title}>{strings.brandName}</Text> : null}
            <Progress.CircleSnail size={50} indeterminate={true} color={colors.white}/>
        </View>
    );
};

export default Splash;