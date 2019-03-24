import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { colors } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        height: 60,
        backgroundColor: '#03A9F4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingTest: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    list: {
        margin: 5,
        backgroundColor: 'white',
        height: 80,
        justifyContent: 'space-around',
        paddingLeft: 10,
        elevation: 1
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: colors.primary,
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John', age: 18, weight: '180', gender: 'male', height: '6ft 3in' },
                { name: 'Lilli', age: 23, weight: '123', gender: 'female', height: '5ft 3in' },
                { name: 'Lavera', age: 46, weight: '146', gender: 'female', height: '5ft 6in' },
                { name: 'Paul', age: 32, weight: '196', gender: 'male', height: '6ft 1in' },
                { name: 'Jene', age: 14, weight: '134', gender: 'female', height: '5ft 2in' },
                { name: 'Felipe', age: 42, weight: '230', gender: 'male', height: '5ft 9in' }
            ]
        }
    }

    fabClicked = () => {
        alert("fab clicked");
    }
    render() {
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <View style={styles.list}>
                        <Text>Name : {item.name}</Text>
                        <Text>Age : {item.age}</Text>
                        <Text>Weight : {item.weight}</Text>
                        <Text>Gender : {item.gender}</Text>
                        <Text>Height : {item.height}</Text>
                    </View>}
                />
                <TouchableOpacity onPress={this.fabClicked} style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>

            </View>
        );
    }
}