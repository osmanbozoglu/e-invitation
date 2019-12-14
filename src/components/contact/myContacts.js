import React from "react";
import {
  StyleSheet,
  Platform,
  ScrollView,
  Alert,
  View,
  Text
} from "react-native";
import { SearchBar, ListItem } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
class MyContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchContactList: [
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
        <View style={styles.recommended}>
          <Text>Recommended Users</Text>
        </View>
        {this.state.searchContactList.map((l, i) => (
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
              <Ionicons
                name={
                  Platform.OS === "ios" ? "ios-person-add" : "md-person-add"
                }
                size={25}
                color="blue"
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
  recommended: {
    alignItems: "center",
    backgroundColor: "#20b2aa",
    color: "#fff"
  }
});

export default MyContacts;
