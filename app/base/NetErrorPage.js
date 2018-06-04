/**
 * Description:错误页面
 *
 * Author: zoe
 * Time: 2018/6/4 0004
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Image,
    ToastAndroid,
    TouchableOpacity,
    Text
} from 'react-native'
import Colors from "../resources/Colors";
import Images from "../resources/Images";

export default class NetErrorPage extends PureComponent {

    onReLoad(){
        ToastAndroid.show('重新加载一下',ToastAndroid.SHORT)
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.onReLoad()}>
                <Image style={styles.img} source={Images.all.ic_net_error}/>
                <Text style={styles.txt}>网络不给力，点击屏幕重试</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.white,
        alignItems:'center'
    }, img:{
        marginTop:150,
        width:100,
        height:100,
        resizeMode:'cover'
    },txt:{
        color:Colors.light_gray,
        fontSize:17,
        marginTop:20
    }
});