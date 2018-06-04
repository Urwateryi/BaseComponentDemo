/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/6/4 0031
 */
import React from "react";
import { StyleSheet, View, Text,ToastAndroid } from "react-native";
import BaseComponent from "../base/BaseComponent";
import Colors from "../resources/Colors";

export default class PageOne extends BaseComponent {

    initTitle(){
        this.setTitleCenter('PageOne');
        this.setRightBtnVisible('确定');
    }

    initData(){
        this.showLoad();

        setTimeout(() => {
            this.hideLoad();
        }, 3000)
    }

    onClickRightBtnRight(){
        ToastAndroid.show('点击了右上角按钮',ToastAndroid.SHORT)
    }

    renderComponent() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>PageOne</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    txt : {
        color : Colors.black,
        fontSize : 40,
        fontWeight : '200'
    },
    img:{
        width:100,
        height:100,
        resizeMode:'cover'
    }
});