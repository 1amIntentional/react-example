import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authSignup } from "../store/actions/auth";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, first_name, last_name, email, password1, password2 } = this.state;
    this.props.signup(username, first_name, last_name, email, password1, password2);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, first_name, last_name, email, password1, password2 } = this.state;
    const { error, loading, token } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="purple" textAlign="center">
            Crea tu cuenta de Jelly
          </Header>
          {error && <p>{this.props.error.message}</p>}

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  onChange={this.handleChange}
                  value={username}
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Usuario"
                />
                <Grid columns={2}>
                <Grid.Column>
                `<Form.Input
                    onChange={this.handleChange}
                    value={first_name}
                    name="first_name"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Nombre"
                  />`
                </Grid.Column>
                <Grid.Column>
                `<Form.Input
                    onChange={this.handleChange}
                    value={last_name}
                    name="last_name"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Apellido"
                  />`
                </Grid.Column>
                </Grid>
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="Correo electronico"
                />
                <Grid columns={2}>
                <Grid.Column>
                  <Form.Input
                    onChange={this.handleChange}
                    fluid
                    value={password1}
                    name="password1"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Contraseña"
                    type="password"
                  />
                </Grid.Column>
                <Grid.Column>
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={password2}
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirmacion"
                  type="password"
                />
                </Grid.Column>
                </Grid>
                <br></br>
                <Button
                  color="purple"
                  fluid
                  size="large"
                  loading={loading}
                  disabled={loading}
                >
                  Siguente
                </Button>
              </Segment>
            </Form>
            <Message>
                <NavLink to="/login">Acceder a tu cuenta en su lugar</NavLink>
            </Message>
          </React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, first_name, last_name, email, password1, password2) =>
      dispatch(authSignup(username, first_name, last_name, email, password1, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);