import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Contact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello I am the Contact</Text>
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

export default Contact;
