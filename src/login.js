import React from 'react';
import { Button,LoadMore, CellBody, ButtonArea, Article, Form, FormCell, CellHeader, Label, Input } from 'react-weui';
import axios from 'axios';


export default class Mine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            person: {
                name: ""
            },
            logining: false
        }
        this.getUserInfo();
        this.login = this.login.bind(this);
    }

    getUserInfo() {
        axios.get(`/api/user/load`, { withCredentials: true })
            .then(res => {
                const persons = res.data;
                this.setState({ person: persons});
            })
    }
    login(phone, password) {
        this.setState({logining: true})
        axios.post(`/api/user/login`, { "phone": phone, "password": password })
            .then(res => {
                console.log(res);
                this.getUserInfo();
            }).finally(()=>{
                console.log("login done")
                this.setState({logining: false});
            })
    }


    render() {
        if (this.state.person.name && this.state.person.name !== "") {
            return (
                <div style={{ display: this.props.display }}>
                    <p1> 欢迎 {this.state.person.name} </p1>
                </div>
            );
        } else {
            return (
                <div style={{ display: this.props.display }}>
                    <Article>
                        <h1>请登录</h1>
                    </Article>
                    <Login login={this.login} logining={this.state.logining}>
                    </Login>
                </div>
            );
        }
    }
};



class Login extends React.Component {

    render() {
        return (
            <Article>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>Phone</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="输入手机号 #" id='phone' />
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>Password</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="password" placeholder="输入密码 #" id='password' />
                        </CellBody>
                    </FormCell>
                </Form>
                <LoadMore  style={{ display: this.props.logining === true ? null : 'none' }}>Logining...</LoadMore>
                <ButtonArea>
                    <Button onClick={() => {
                        this.props.login(document.getElementById("phone").value, document.getElementById("password").value)
                    }}>立即登录</Button>
                </ButtonArea>
            </Article>
        );
    }
}