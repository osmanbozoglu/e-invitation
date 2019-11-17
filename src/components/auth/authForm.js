import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import Input from "../../utils/forms/input";
import Validation from "../../utils/forms/validation";

class AuthForm extends React.Component {
  state = {
    type: "Login",
    action: "Login",
    actionMode: "Register",
    hasErrors: false,
    form: {
      name: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          minLength: 3
        }
      },
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
      phoneNumber: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          isEmail: true
        },
        keyboardType: "decimal-pad"
      },
      password: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          confirmPass: "password"
        }
      }
    }
  };

  confirmPassword = () =>
    this.state.type != "Login" ? (
      <Input
        placeholder="Confirm password"
        placeholderTextColor="#cecece"
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        autoCapitalize={"none"}
        onChangeText={value => this.updateInput("confirmPassword", value)}
        secureTextEntry
      />
    ) : null;

  name = () =>
    this.state.type != "Login" ? (
      <Input
        placeholder="Name and Surname"
        placeholderTextColor="#cecece"
        type={this.state.form.name.type}
        value={this.state.form.name.value}
        autoCapitalize={"none"}
        onChangeText={value => this.updateInput("name", value)}
      />
    ) : null;

  phoneNumber = () =>
    this.state.type != "Login" ? (
      <Input
        placeholder="Phone Number"
        placeholderTextColor="#cecece"
        type={this.state.form.phoneNumber.type}
        value={this.state.form.phoneNumber.value}
        autoCapitalize={"none"}
        onChangeText={value => this.updateInput("phoneNumber", value)}
        keyboardType={this.state.form.phoneNumber.keyboardType}
      />
    ) : null;

  changeFormType = () => {
    const type = this.state.type;

    this.setState({
      type: type === "Login" ? "Register" : "Login",
      action: type === "Login" ? "Register" : "Login",
      actionMode: type === "Login" ? "Login" : "Register"
    });
  };

  formHasErrors = () =>
    this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Opps, check your info</Text>
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

    console.log(valid);

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
      if (this.state.type === "Login") {
        //Login
        if (key !== "confirmPassword") {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        //Reigster
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    }
  };

  render() {
    return (
      <View>
        {this.name()}
        <Input
          placeholder="E-mail"
          placeholderTextColor="#cecece"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          autoCapitalize={"none"}
          keyboardType={this.state.form.email.keyboardType}
          onChangeText={value => this.updateInput("email", value)}
        />
        {this.phoneNumber()}
        <Input
          placeholder="Password"
          placeholderTextColor="#cecece"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          autoCapitalize={"none"}
          onChangeText={value => this.updateInput("password", value)}
          secureTextEntry
        />

        {this.confirmPassword()}

        {this.formHasErrors()}

        <View style={{ marginTop: 20 }}>
          <View style={styles.button}>
            <Button
              title={this.state.action}
              onPress={this.submitUser}
              color={"#D99C9C"}
            />
          </View>

          <View style={styles.button}>
            <Button
              title={this.state.actionMode}
              onPress={this.changeFormType}
              color={"#D99C9C"}
            />
          </View>

          {/* <View style={styles.button}>
            <Button
              title="Home Page"
              onPress={() => this.props.goNext()}
              color={"red"}
            />
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default AuthForm;
