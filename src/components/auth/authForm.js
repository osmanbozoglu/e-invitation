import React from "react";
import { View, Image, Text } from "react-native";

import Input from "../../utils/forms/input";
class AuthFrom extends React.Component {
  state = {
    type: "Login",
    action: "Login",
    actionMode: "Register",
    hasErrors: false,
    form: {
      email: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          isEmail: true
        }
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
  render() {
    return (
      <View>
        <Input
          placeholder="Email"
          placeholderTextColor="#cecece"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          autoCapitalize={"none"}
        />
      </View>
    );
  }
}

export default AuthFrom;
