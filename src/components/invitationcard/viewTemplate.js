import React from "react";
import { Text, ImageBackground, StyleSheet, Image } from "react-native";

class ViewTemplate extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cardInfos: {
        cardLocation: this.props.navigation.getParam("imageName")
      }
    };
    console.log(this.state.cardInfos.cardLocation);
  }

  render() {
    return (
      <Image
        source={{ uri: this.state.cardInfos.cardLocation }}
        style={styles.imgBg}
      ></Image>
    );
  }
}

const styles = StyleSheet.create({
  imgBg: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "yellow"
  }
});

export default ViewTemplate;
