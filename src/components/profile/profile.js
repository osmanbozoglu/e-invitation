import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello I am the Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Profile;
