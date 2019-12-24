import React from "react";
import { StyleSheet, View } from "react-native";

import { RootNavigator } from "./routes";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";

import reducers from "./src/store/redurcers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

class App extends React.Component {
  render() {
    const Nav = RootNavigator();
    return (
      <Provider store={createStoreWithMiddleware}>
        <View style={styles.container}>
          <Nav />
        </View>
      </Provider>
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
