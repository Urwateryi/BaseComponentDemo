/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/31 0031
 */
import React from "react";
import { StyleSheet, Text,View } from "react-native";
import BaseComponent from "../base/BaseComponent";

export default class PageTwo extends BaseComponent {

    renderComponent() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>PageTwo</Text>
            </View>
        )
    }
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