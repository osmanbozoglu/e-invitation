import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  Linking,
  TextInput,
  Button,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { Avatar } from "react-native-elements";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign
} from "react-native-vector-icons";

import ImagePicker from "react-native-image-picker";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Osman",
        surname: "Bozoglu",
        email: "osman@osman.com",
        avataruri:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        telNum: "+905370600900"
      },
      editable: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",
      headerRight: () => (
        <AntDesign
          name="logout"
          onPress={() => navigation.navigate("Auth")}
          color={"black"}
          size={22}
        />
      )
    };
  };

  onPressTel = number => {
    Linking.openURL(`tel://${number}`).catch(err => console.log("Error:", err));
  };

  changeEditable = () => {
    this.setState({
      editable: !this.state.editable
    });
  };

  changeAvatar = () => {
    options = {
      title: "",
      cameraType: "front",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.warn("Really ?");
      } else if (response.error) {
        console.warn(response.error);
      } else {
        this.setState({
          user: {
            ...this.state.user,
            avataruri: response.uri
          }
        });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <View style={styles.avatar}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri: this.state.user.avataruri
            }}
            showEditButton
            onPress={() => Alert.alert("Avatar")}
            onEditPress={() => {
              this.changeAvatar();
            }}
          />
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="Name"
            value={this.state.user.name.toUpperCase()}
            editable={this.state.editable}
            style={styles.input}
          />
          <TextInput
            placeholder="Surname"
            value={this.state.user.surname.toUpperCase()}
            editable={this.state.editable}
            style={styles.input}
          />
          <TextInput
            placeholder="E-mail"
            value={this.state.user.email}
            editable={this.state.editable}
            style={styles.input}
            autoCapitalize="characters"
          />

          <TextInput
            placeholder="Phone Number"
            value={this.state.user.telNum}
            editable={this.state.editable}
            style={styles.input}
            autoCapitalize="characters"
          />
        </View>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name="account-edit"
            onPress={this.changeEditable}
            color={"black"}
            size={50}
          />
        </View>
        <View style={styles.addGift}>
          <Ionicons
            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
            size={50}
            onPress={() => this.props.navigation.navigate("Auth")}
          />
        </View>
        <View style={styles.call}>
          <FontAwesome5
            name={"gifts"}
            size={50}
            color={"red"}
            onPress={() => this.onPressTel(this.state.user.telNum)}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  flatview: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  userInfo: {
    fontSize: 20,
    marginBottom: 20,
    color: "#20b2aa"
  },
  avatar: {
    top: 10,
    position: "absolute"
  },
  inputcontainer: {
    width: "100%",
    marginTop: 80
  },
  input: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    color: "#1C818C"
  },
  button: {
    marginTop: 30,
    position: "absolute",
    right: 20,
    bottom: 20
  },
  call: {
    position: "absolute",
    bottom: 20
  },
  addGift: {
    marginTop: 30,
    position: "absolute",
    left: 20,
    bottom: 20
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   header: {
//     backgroundColor: '#20b2aa',
//     width: '100%',
//     height: '25%'
//   },
//   avatar: {
//     bottom: 0,
//     marginTop: 60,
//     alignItems: 'center'
//   },
//   body: {
//     backgroundColor: '#A9A9A9',
//     width: '100%',
//     height: '75%'
//   }
// });

export default Profile;
