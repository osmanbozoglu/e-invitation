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
import Ionicons from "react-native-vector-icons/Ionicons";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Osman",
        surname: "Bozoglu",
        province: "İzmir",
        email: "osman@osman.com",
        avataruri:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        telNum: "+905370600900"
      },
      editable: false
    };
  }
  static navigationOptions = {
    title: "Profile"
  };

  onPressTel = number => {
    Linking.openURL(`tel://${number}`).catch(err => console.log("Error:", err));
  };

  changeEditable = () => {
    this.setState({
      editable: !this.state.editable
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
              Alert.alert("Edit Press");
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
            placeholder="Province"
            value={this.state.user.province.toUpperCase()}
            editable={this.state.editable}
            style={styles.input}
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
          <Button title="Edit" onPress={this.changeEditable} color={"black"} />
        </View>
        <View style={styles.call}>
          <Ionicons
            name={Platform.OS === "ios" ? "ios-call" : "md-call"}
            size={50}
            color={"green"}
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
