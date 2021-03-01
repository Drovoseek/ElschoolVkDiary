import React, { useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { Root, View, Panel, PanelHeader, PanelHeaderBack, Avatar, PanelHeaderButton, FormLayout, Input, FormLayoutGroup, Button, FormStatus } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Diary from "./panels/Diary";
import "./styles.css";
import SettingsPage from "./panels/Settings";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeView: "logon",
            activePanel: "home",
            apiToken: null,
            userPicUrl: "",
        };
        this.getToken();
    }

    getToken = () => {
        try {
            bridge.send("VKWebAppGetAuthToken", { app_id: 7475417, scope: "" }).then(
                (result) => {
                    this.setState({ userPicUrl: result.photo_200 });
                    fetch("https://api.elschool.ru/vk/auth?vktoken=" + result.access_token, {
                        crossDomain: true,
                        method: "GET",
                        withCredentials: false,
                    }).then(response => response.json())
                    .then((apiResponse) => {
                        this.setState({
                            apiToken: apiResponse.token,
                            activeView: 'app',
                        });
                        console.log(apiResponse.token);
                    });
                },
                (error) => {
                    console.log('error: ' + error);
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
                <View id="logon" activePanel="logon_panel">
                    <Panel id="logon_panel">
                        <PanelHeader>Дневник</PanelHeader>
                        <FormLayout>
                            <FormLayoutGroup top="Логин">
                                <Input placeholder="Введите логин" />
                            </FormLayoutGroup>
                            <FormLayoutGroup top="Пароль">
                                <Input placeholder="Введите пароль" />
                            </FormLayoutGroup>
                            <FormLayoutGroup>
                                <Button className="mx-auto d-block" onClick={() => {}}>
                                    Войти
                                </Button>
                            </FormLayoutGroup>
                            <FormStatus header="Неправильный логин или пароль" mode="error">
                                Пожалуйста, введите верные логин и пароль.
                            </FormStatus>
                        </FormLayout>
                        <div>version 01.03.2021 15:23</div>
                    </Panel>
                </View>
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
                        ></PanelHeader>
                        <Diary token={this.state.apiToken} />
                    </Panel>
                    <Panel id="menu">
                        <PanelHeader left={<PanelHeaderBack onClick={this.hideMenu} />}>Настройки</PanelHeader>
                        <SettingsPage />
                    </Panel>
                </View>
            </Root>
        );
    }
}
export default App;
