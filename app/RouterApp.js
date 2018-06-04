import React, { PureComponent } from "react";
import {
    Router,
    Scene,
} from 'react-native-router-flux'
import HomePage from "./HomePage";
import BaseComponent from "./base/BaseComponent";
import PageOne from "./screens/PageOne";
import PageTwo from "./screens/PageTwo";
import NetErrorPage from "./components/NetErrorPage";
import PageThree from "./screens/PageThree";

export default class RouterApp extends PureComponent {
    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene hideNavBar>
                    <Scene key="BaseComponent" component={BaseComponent}/>
                    <Scene key="HomePage" initial component={HomePage}/>
                    <Scene key="PageOne" component={PageOne}/>
                    <Scene key="PageTwo" component={PageTwo}/>
                    <Scene key="PageThree" component={PageThree}/>
                    <Scene key="NetErrorPage" component={NetErrorPage}/>
                </Scene>
            </Router>
        );
    }
}

const getSceneStyle = () => ({
    backgroundColor : 'white',
    shadowOpacity : 1,
    shadowRadius : 3,
});
