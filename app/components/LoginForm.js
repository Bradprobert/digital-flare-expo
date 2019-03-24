import React from 'react';
import { colors, constants } from '../constants';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { strings } from '../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.primaryGreen
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 48,
        fontFamily: 'poiret-one-regular',
    },
    textInput: {
        height: 60,
        padding: 12,
        margin: 12,
        borderColor: colors.lightGrey,
        backgroundColor: colors.white,
        borderRadius: constants.BORDER_RADIUS
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 12,
        margin: 12,
        alignItems: 'center',
        borderRadius: constants.BORDER_RADIUS
    },
    quickButton: {
        backgroundColor: colors.white,
        padding: 12,
        margin: 12,
        alignItems: 'center',
        borderRadius: constants.BORDER_RADIUS
    }
});

const LoginForm = (props) => {
    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>{strings.brandName}</Text>
          </View>
          <TextInput style={styles.textInput} placeholder='example@email.com'
                     keyboardType='email-address' value={props.email}
                     onChangeText={(email) => props.onChangeEmail(email)}/>
          <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true}
                     value={props.password}
                     onChangeText={(password) => props.onChangePassword(password)}/>
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} color={colors.primary}
                                onPress={props.onPressSignUp}>
                  <Text>SIGN UP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} color={colors.primary}
                                onPress={props.onPressLogin}>
                  <Text>LOGIN</Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.quickButton} color={colors.primary}
                            onPress={props.onQuickLogin}>
              <Text>QUICK LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
};

export default LoginForm;