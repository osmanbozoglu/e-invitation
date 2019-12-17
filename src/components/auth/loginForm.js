import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage
} from "react-native";

import Input from "../../utils/forms/input";
import Validation from "../../utils/forms/validation";

import AuthLogo from "./authLogo";

import Service from "../../utils/service/service";
import { ScrollView } from "react-native-gesture-handler";

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

    if (this.state.type === "Login") {
      //Login
      isFormValid = isFormValid && formCopy["email"].valid;
      formToSubmit["email"] = formCopy["email"].value;

      isFormValid = isFormValid && formCopy["password"].valid;
      formToSubmit["password"] = formCopy["password"].value;
    } else {
      //Register
      // NOT COMPLETED
      isFormValid = isFormValid && formCopy["email"].valid;
      formToSubmit["email"] = formCopy["email"].value;

      isFormValid = isFormValid && formCopy["password"].valid;
      formToSubmit["password"] = formCopy["password"].value;
    }

    if (isFormValid) {
      if (this.state.type === "Login") {
        if (AsyncStorage.getItem("loginDetails") != null) {
          console.log("YEAP");
        }
        Service.signin(formToSubmit)
          .then(response => console.log(response))
          .catch(error => console.log(error));
        this.props.goNext();
      } else {
        this.saveData(formToSubmit["email"], formToSubmit["password"]);
        Service.signup(formToSubmit)
          .then(response => console.log(response))
          .catch(error => console.log(error));
      }
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

export default LoginForm;
