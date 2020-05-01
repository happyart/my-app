import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Footer, FooterText, TabBarLabel, TabBar, TabBarIcon, TabBarItem, TabBody, Article, Button, FormCell, Form, CellBody, CellHeader, Input, Label, ButtonArea } from 'react-weui';
import Mine from './login.js';
import IconPeople from './img/people.png';
import IconAlbum from './img/album.png';
import IconSchool from './img/school.png';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.css'

let date_ob = new Date();
let this_year = date_ob.getFullYear();

class App extends React.Component {
    state = {
        tab: 2
    };

    render() {
        return (
            <div id='myroot'>
                <Tab>
                    <TabBody>
                        <Article style={{ display: this.state.tab === 0 ? null : 'none' }}>
                            <h1>乐汇艺术中心</h1>
                            <section>
                                <h2 className="title">学校简介</h2>
                                <section>
                                    <h3>名师简介</h3>
                                    <p>左华，拥有20年丰富教学经验</p>
                                </section>
                            </section>
                        </Article>
                        <Article style={{ display: this.state.tab === 1 ? null : 'none' }}>
                            <h1>我的作品</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>2.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                        <Mine display={this.state.tab === 2 ? null : 'none'}>></Mine>
                    </TabBody>




                    <TabBar>
                        <TabBarItem
                            active={this.state.tab === 0}
                            onClick={e => this.setState({ tab: 0 })}
                            icon={<img src={IconSchool} />}
                            label="Tab1"
                        />
                        <TabBarItem active={this.state.tab === 1} onClick={e => this.setState({ tab: 1 })}>
                            <TabBarIcon>
                                <img src={IconAlbum} />
                            </TabBarIcon>
                            <TabBarLabel>Tab2</TabBarLabel>
                        </TabBarItem>
                        <TabBarItem
                            active={this.state.tab === 2}
                            onClick={e => this.setState({ tab: 2 })}
                            icon={<img src={IconPeople} />}
                            label="我的"
                        />
                    </TabBar>

                </Tab>
                {/* <Footer >
                    <FooterText>Copyright &copy; 2017-{this_year} weui.io</FooterText>
                </Footer> */}
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
