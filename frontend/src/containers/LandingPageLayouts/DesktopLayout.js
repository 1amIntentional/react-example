import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'
import { getWidth } from '../../utils'


class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        textAlign='center'
                        style={{ minHeight: 5, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='h1' style={{ color: 'purple', fontWeight: 'bold' }}>Jelly</Menu.Item>
                                <Menu.Item position='right'>
                                    <Menu.Item>Para empresas</Menu.Item>
                                    <Menu.Item>Acceder</Menu.Item>
                                    <Button as='a' color='purple' primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Crear una cuenta
                  </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

export default DesktopContainer;