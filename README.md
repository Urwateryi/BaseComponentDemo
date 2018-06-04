## 前言

自己学demo以来，一直带着开发Android的思维，做Android的时候，自己首先会封装base层，把公共的部分抽出来，学RN的时候，就一直在想这个问题，怎么在RN里进行封装，就我目前的了解，有两种解决办法：

- 封装父类
- 高阶组件

今天我先讲第一种方法

## 实现

#### 主要功能
我主要抽取的是title部分，和load部分，中间变化的布局由每个页面自行绘制

#### 代码讲解


```
/**
 * Description:父控件
 *
 * Author: zoe
 * Time: 2018/6/4 0031
 */
import React, { PureComponent } from "react";
import { StyleSheet, View, Text, ToastAndroid, Image, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import Colors from "../resources/Colors";
import Images from "../resources/Images";
import { Actions } from 'react-native-router-flux'

export default class BaseComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.renderComponent = this.renderComponent.bind(this);

        this.state = {

            //title
            isShowRightTxtLeft : false,//title右部左边文字按钮，是否显示
            isShowRightTxtRight : false,//title右部右边文字按钮，是否显示
            isShowRightImgLeft : false,//title右部左边图片按钮，是否显示
            isShowRightImgRight : false,//title右部左边图片按钮，是否显示
            isShowRightBtn : false,//title右部按钮，是否显示
            isShowLeftBtn : true,//title左部按钮，是否显示

            centerTxt : '',//中间title
            leftImg : '',//title左边的图片
            txtLeft : '确定',//title右部，左边文字按钮的文字内容
            txtRight : '',//title右部，右边文字按钮的文字内容
            imgLeft : '',//title右部，左边图片按钮的图片资源
            imgRight : '',//title右部，右边图片按钮的图片资源
            rightBtnTxt : '',//title右部，按钮的文字内容
            rightBtnBgColor : Colors.primary,//title右部，按钮的背景颜色
            rightBtnTxtColor : Colors.white,//title右部，按钮的文字颜色

            //pageLoad
            isLoad : true,//是否加载
        };

        this.onClickRightTxtLeft = this.onClickRightTxtLeft.bind(this);
        this.onClickRightTxtRight = this.onClickRightTxtRight.bind(this);
        this.onClickRightImgLeft = this.onClickRightImgLeft.bind(this);
        this.onClickRightImgRight = this.onClickRightImgRight.bind(this);
        this.onClickRightBtnRight = this.onClickRightBtnRight.bind(this);
        this.onClickLeftImg = this.onClickLeftImg.bind(this);
        this.initData = this.initData.bind(this);
    }

    /**
     * 初始化title
     */
    initTitle() {

    };

    /**
     * 网络请求
     */
    initData() {

    };

    componentDidMount() {
        this.initTitle();
        this.initData();
    }

    /**
     * 显示title右部，左边按钮的文字
     * @param rightTxtLeft
     */
    setRightTxtLeftVisible = (rightTxtLeft) => {
        this.setState({
            isShowRightTxtLeft : true,
            txtLeft : rightTxtLeft
        });
    };

    /**
     * 显示title右部，右边按钮的文字
     * @param rightTxtRight
     */
    setRightTxtRightVisible = (rightTxtRight) => {
        this.setState({
            isShowRightTxtRight : true,
            txtRight : rightTxtRight
        });
    };

    /**
     * 显示title右部，左边按钮的图片
     * @param rightImgLeft
     */
    setRightImgLeftVisible = (rightImgLeft) => {
        this.setState({
            isShowRightImgLeft : true,
            imgLeft : rightImgLeft
        });
    };

    /**
     * 显示title右部，右边按钮的图片
     * @param rightImgRight
     */
    setRightImgRightVisible = (rightImgRight) => {
        this.setState({
            isShowRightImgRight : true,
            imgRight : rightImgRight
        });
    };

    /**
     * 设置title中间的内容
     * @param centerContent
     */
    setTitleCenter = (centerContent) => {
        this.setState({
            centerTxt : centerContent
        })
    };

    /**
     * 显示title右部按钮
     * @param rightBtnTxt
     */
    setRightBtnVisible = (rightBtnTxt) => {
        this.setState({
            isShowRightBtn : true,
            rightBtnTxt : rightBtnTxt,
        });
    };

    /**
     * 显示title左部，按钮的图片
     * @param leftImg
     */
    setLeftImgVisible = (leftImg) => {
        this.setState({
            leftImg : leftImg
        });
    };

    onClickRightTxtLeft() {
        ToastAndroid.show('onClickRightTxtLeft', ToastAndroid.SHORT)
    };

    onClickRightTxtRight() {
        ToastAndroid.show('onClickRightTxtRight', ToastAndroid.SHORT)
    };

    onClickRightImgLeft() {
        ToastAndroid.show('onClickRightImgLeft', ToastAndroid.SHORT)
    };

    onClickRightImgRight() {
        ToastAndroid.show('onClickRightImgRight', ToastAndroid.SHORT)
    };

    onClickRightBtnRight() {
        ToastAndroid.show('onClickRightBtnRight', ToastAndroid.SHORT)
    };

    onClickLeftImg() {
        Actions.pop();
    };

    renderRightButton() {
        console.log('txtLeft：', this.state.isShowRightTxtRight);
        return (
            <View style={styles.view_right}>
                {this.state.isShowRightTxtLeft ?
                    <TouchableOpacity onPress={() => this.onClickRightTxtLeft()}>
                        <Text style={styles.title_right}>{this.state.txtLeft}</Text>
                    </TouchableOpacity> : null}

                {this.state.isShowRightTxtRight ?
                    <TouchableOpacity onPress={() => this.onClickRightTxtRight()}>
                        <Text style={styles.title_right}>{this.state.txtRight}</Text>
                    </TouchableOpacity> : null}

                {this.state.isShowRightImgLeft ?
                    <TouchableOpacity onPress={() => this.onClickRightImgLeft()}>
                        <Image style={styles.img_right} source={this.state.imgLeft}/>
                    </TouchableOpacity> : null}

                {this.state.isShowRightImgRight ?
                    <TouchableOpacity onPress={() => this.onClickRightImgRight()}>
                        <Image style={styles.img_right} source={this.state.imgRight}/>
                    </TouchableOpacity> : null}

                {this.state.isShowRightBtn ?
                    <TouchableOpacity onPress={() => this.onClickRightBtnRight()}>
                        <Text style={styles.btn_right}>
                            {this.state.rightBtnTxt}</Text>
                    </TouchableOpacity> : null}
            </View>
        );
    };

    /**
     * 显示load
     */
    showLoad() {
        this.setState({
                isLoad : true
            }
        );
    };

    /**
     * 隐藏load
     */
    hideLoad() {
        this.setState({
                isLoad : false
            }
        );
    };

    /**
     * 渲染title
     * @returns {*}
     */
    renderTitle = () => {
        return (
            <View style={styles.title}>
                {this.state.isShowLeftBtn ?
                    <TouchableOpacity onPress={() => this.onClickLeftImg()}>
                        <Image style={styles.left_img} source={Images.all.ic_back}/>
                    </TouchableOpacity> : null}
                <Text style={styles.txt}>{this.state.centerTxt}</Text>
                {this.renderRightButton()}
            </View>
        )
    };

    /**
     * 渲染子组件
     */
    renderComponent() {
    };

    render() {
        return (
            <View style={[ styles.container, this.props.style ]}>
                {this.renderTitle()}

                {this.state.isLoad ? <ActivityIndicator style={styles.indicator} size='large' color='#ff0000'/> :
                    this.renderComponent()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.bg,
    }, indicator : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
    },
    title : {
        flexDirection : 'row',
        alignItems : 'center',
        height : 50,
        width : Dimensions.get('window').width,
        backgroundColor : Colors.white,

        //以下是阴影属性：
        shadowOffset : { width : 0, height : 5 },
        shadowOpacity : 1,
        shadowRadius : 15,
        shadowColor : Colors.light_gray,
        //注意：这一句是可以让安卓拥有灰色阴影
        elevation : 5,
    },
    left_img : {
        width : 20,
        height : 20,
        resizeMode : 'center',
        marginLeft : 10,
    },
    txt : {
        flex : 1,
        textAlign : 'center',
        color : Colors.black,
        fontSize : 17,
    },
    title_right : {
        color : Colors.black,
        fontSize : 14,
        marginLeft : 10,
    },
    img_right : {
        width : 20,
        height : 20,
        resizeMode : 'center',
        marginLeft : 10,
    },
    btn_right : {
        width : 60,
        height : 30,
        textAlign : 'center',
        textAlignVertical : 'center',
        color : Colors.white,
        backgroundColor : Colors.primary,
        borderRadius : 5,
    },
    view_right : {
        flexDirection : 'row',
        marginRight : 18,
    }
});
```

使用


```
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
```


## 写在最后

本人才疏学浅，算是初学者，如有错误或者不好的地方，欢迎大家及时指正

[传送门](https://github.com/Urwateryi/BaseComponentDemo.git)