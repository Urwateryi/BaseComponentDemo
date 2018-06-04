/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/6/4 0031
 */
import React ,{PureComponent}from "react";
import { StyleSheet, Text,View } from "react-native";
import BaseComponent from "../base/BaseComponent";

export default class PageThree extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>PageThree</Text>
            </View>
        )}
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
    },
    txt : {
        color : 'black',
        fontSize : 40,
        fontWeight : '200'
    },
});