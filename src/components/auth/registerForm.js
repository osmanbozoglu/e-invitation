import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";

import Input from "../../utils/forms/input";
import Validation from "../../utils/forms/validation";
import AuthLogo from "./authLogo";

import Service from "../../utils/service/service";
import { ScrollView } from "react-native-gesture-handler";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
            minLength: 10
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
      this.saveData(formToSubmit["email"], formToSubmit["password"]);
      Service.signup(formToSubmit)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    } else {
      this.setState({
        hasErrors: true
      });
    }
  };

  saveData = async (email, password) => {
    //save data with asyncstorage
    let loginDetails = {
      email: email,
      password: password
    };
    AsyncStorage.setItem("loginDetails", JSON.stringify(loginDetails));
  };

  getData = async () => {
    let loginDetails = await AsyncStorage.getItem("loginDetails");
    let ld = JSON.parse(loginDetails);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <ScrollView>
          <AuthLogo />
          <Input
            placeholder="Name"
            placeholderTextColor="#cecece"
            type={this.state.form.name.type}
            value={this.state.form.name.value}
            autoCapitalize={"none"}
            onChangeText={value => this.updateInput("name", value)}
          />
          <Input
            placeholder="Surname"
            placeholderTextColor="#cecece"
            type={this.state.form.name.type}
            value={this.state.form.name.value}
            autoCapitalize={"none"}
            onChangeText={value => this.updateInput("name", value)}
          />
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
            placeholder="Phone Number"
            placeholderTextColor="#cecece"
            type={this.state.form.phoneNumber.type}
            value={this.state.form.phoneNumber.value}
            autoCapitalize={"none"}
            onChangeText={value => this.updateInput("phoneNumber", value)}
            keyboardType={this.state.form.phoneNumber.keyboardType}
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
          <Input
            placeholder="Confirm password"
            placeholderTextColor="#cecece"
            type={this.state.form.confirmPassword.type}
            value={this.state.form.confirmPassword.value}
            autoCapitalize={"none"}
            onChangeText={value => this.updateInput("confirmPassword", value)}
            secureTextEntry
          />

          {this.formHasErrors()}

          <View style={{ marginTop: 20 }}>
            <View style={styles.button}>
              <Button
                title={"Register"}
                onPress={this.submitUser}
                color={"#20b2aa"}
              />
            </View>

            <View style={styles.button}>
              <Button
                title={"Login"}
                onPress={() => this.props.navigation.navigate("SignIn")}
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

export default RegisterForm;
