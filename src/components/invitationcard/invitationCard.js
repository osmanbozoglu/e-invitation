import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Card, Button } from "react-native-elements";

import Templates from "./templates";

class InvitationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfos: {
        imageLocation: "./cards/template1.jpg",
        imageInfo: {}
      }
    };
  }
  static navigationOptions = {
    title: "Cards"
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card image={Templates.templateOne}>
          <Button
            type="solid"
            buttonStyle={{
              backgroundColor: "#20b2aa"
            }}
            titleStyle={{ color: "black" }}
            title="VIEW"
            raised={true}
            onPress={() =>
              this.props.navigation.navigate("ViewTemplate", {
                imageName: this.state.cardInfos.imageLocation
              })
            }
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default InvitationCard;
