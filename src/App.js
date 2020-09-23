import React, { useState } from "react";
// import bridge from "@vkontakte/vk-bridge";
import { Root, View, Panel, PanelHeader, PanelHeaderBack, Avatar, PanelHeaderButton } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Diary from "./panels/Diary";
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeView: "app",
            activePanel: "home"
        };
    }
    hideMenu = () => {
        this.setState({ activePanel: "home" });
    };
    render() {
        return (
            <Root activeView={this.state.activeView}>
                <View id="app" activePanel={this.state.activePanel}>
                    <Panel id="home">
                        <PanelHeader
                            left={
                                <PanelHeaderButton
                                    className="menu-button"
                                    onClick={() => {
                                        this.setState({ activePanel: "menu" });
                                    }}
                                >
                                    <Avatar size={36} src="https://krot.info/uploads/posts/2019-10/1570183451_instagram-jelizabet-debiki-73.jpg" />
                                </PanelHeaderButton>
                            }
                            separator={false}
                        ></PanelHeader>
                        <Diary />
                    </Panel>
                    <Panel id="menu">
                        <PanelHeader left={<PanelHeaderBack onClick={this.hideMenu} />}>Настройки</PanelHeader>
                        <div>123</div>
                    </Panel>
                </View>
            </Root>
        );
    }
}
export default App;
