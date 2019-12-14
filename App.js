import React from "react";
import { StyleSheet, View, Provider } from "react-native";

import { RootNavigator } from "./routes";

class App extends React.Component {
  render() {
    const Nav = RootNavigator();
    return (
      <View style={styles.container}>
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
