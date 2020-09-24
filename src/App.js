import React, { useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { Root, View, Panel, PanelHeader, PanelHeaderBack, Avatar, PanelHeaderButton, PanelHeaderContent } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Diary from "./panels/Diary";
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeView: "app",
            activePanel: "home",
            userId: "123",
            userPicUrl: '',
        };
        this.getId();
    }

    getId = () => {
        try {
            bridge.send("VKWebAppGetUserInfo").then(
                result => {
                    console.log(result);
                    this.setState({ userId: result.id, userPicUrl: result.photo_200 });
                },
                error => {
                    console.log(error);
                }
            );
        } catch (e) {
            console.log(e);
        }
    };

    hideMenu = () => {
        this.setState({ activePanel: "home" });
    };

    render() {
        return (
            <Root activeView={this.state.activeView}>
                <View id="app" activePanel={this.state.activePanel}>
                    <Panel id="home">
                        <PanelHeader
                            separator={false}
                            left={
                                <PanelHeaderButton
                                    className="menu-button"
                                    onClick={() => {
                                        this.setState({ activePanel: "menu" });
                                    }}
                                >
                                    <Avatar size={36} src={this.state.userPicUrl} />
                                </PanelHeaderButton>
                            }
                        >
                            <PanelHeaderContent>userId:{this.state.userId}</PanelHeaderContent>
                        </PanelHeader>
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
