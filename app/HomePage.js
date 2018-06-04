/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/6/4 0029
 */
import React,{ PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Actions } from 'react-native-router-flux'

export default class HomePage extends PureComponent {

    onClickOne(){
        Actions.push('PageOne');
    }

    onClickTwo(){
        Actions.push('PageTwo');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.btn} onPress={()=>this.onClickOne()}>PageOne</Text>
                <Text style={styles.btn} onPress={()=>this.onClickTwo()}>PageTwo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    btn:{
        backgroundColor:'#5a979c',
        width:200,
        height:80,
        margin:10,
        fontSize:18,
        color:'white',
        textAlign:'center',
        borderRadius:5,
        textAlignVertical:'center'
    },
});