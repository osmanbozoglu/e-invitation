import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import Input from "../../utils/forms/input";
import Validation from "../../utils/forms/validation";

import AuthLogo from "./authLogo";

import { connect } from "react-redux";
import { signIn } from "../../store/actions/user_actions";
import { bindActionCreators } from "redux";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrors: false,
      form: {
        email: {
          value: "",
          valid: false,
          type: "textinput",
          rules: {
            isRequired: true,
            isEmail: true
          },
          keyboardType: "email-address"
        },
        password: {
          value: "",
          valid: false,
          type: "textinput",
          rules: {
            isRequired: true,
            minLength: 6
          }
        }
      },
      isLoggedIn: false
    };
  }

  formHasErrors = () =>
    this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Opps, check your infos</Text>
      </View>
    ) : null;

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    let rules = formCopy[name].rules;
    let valid = Validation(value, rules, formCopy);

    formCopy[name].valid = valid;

    this.setState({
      form: formCopy
    });
  };

  submitUser = () => {
    let isFormValid = true;
    let formToSubmit = {};
    const formCopy = this.state.form;

    for (let key in formCopy) {
      isFormValid = isFormValid && formCopy[key].valid;
      formToSubmit[key] = formCopy[key].value;
    }

    if (isFormValid) {
      this.props.signIn(formToSubmit);
    } else {
      this.setState({
        hasErrors: true
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <ScrollView>
          <AuthLogo />
          <Input
            placeholder="E-mail"
            placeholderTextColor="#cecece"
            type={this.state.form.email.type}
            value={this.state.form.email.value}
            autoCapitalize={"none"}
            keyboardType={this.state.form.email.keyboardType}
            onChangeText={value => this.updateInput("email", value)}
          />

          <Input
            placeholder="Password"
            placeholderTextColor="#cecece"
            type={this.state.form.password.type}
            value={this.state.form.password.value}
            autoCapitalize={"none"}
            onChangeText={value => this.updateInput("password", value)}
            secureTextEntry
          />

          {this.formHasErrors()}

          <View style={{ marginTop: 20 }}>
            <View style={styles.button}>
              <Button
                title={"Login"}
                onPress={this.submitUser}
                color={"#20b2aa"}
              />
            </View>

            <View style={styles.button}>
              <Button
                title={"Register"}
                onPress={() => this.props.navigation.navigate("SignUp")}
                color={"#20b2aa"}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"Go To Home"}
                onPress={() => this.props.navigation.navigate("App")}
                color={"#20b2aa"}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 50
  },
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: "#f44336"
  },
  errorLabel: {
    color: "black",
    textAlignVertical: "center",
    textAlign: "center"
  },
  button: {
    ...Platform.select({
      ios: {
        marginBottom: 0
      },
      android: {
        marginTop: 10,
        marginBottom: 10
      }
    })
  }
});

function mapStateToProps(state) {
  return {
    User: state.User
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
