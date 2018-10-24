import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

class RootPage extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab>
                        <Button active>
                            <Text>Todo</Text>
                        </Button>
                        <Button>
                            <Text>Kids</Text>
                        </Button>
                        <Button>
                            <Text>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default RootPage;
