import React from "react";
import { StyleSheet, Platform, ScrollView, Alert } from "react-native";
import { SearchBar, ListItem, Button } from "react-native-elements";
import { AntDesign } from "react-native-vector-icons";
class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      contactList: [
        {
          name: "Chris",
          avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
        },
        {
          name: "Jackson",
          avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        },
        {
          name: "Friend",
          avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        }
      ]
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <ScrollView>
        <SearchBar
          placeholder="Search"
          platform={Platform.OS === "ios" ? "ios" : "android"}
          onChangeText={this.updateSearch}
          value={search}
          cancelButtonTitle="Cancel"
        />
        <Button
          title="Send Invitation"
          type="outline"
          onPress={() => Alert.alert("Hello")}
          titleStyle={styles.buttonTitle}
        />
        {this.state.contactList.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            //subtitle={l.subtitle}
            onPress={() => {
              Alert.alert("Hello");
            }}
            bottomDivider
            style={styles.avatar}
            rightElement={
              <AntDesign
                name="deleteuser"
                size={25}
                color="red"
                onPress={() => Alert.alert("Hello")}
              />
            }
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTitle: {
    color: "#20b2aa"
  }
});

export default Contacts;
