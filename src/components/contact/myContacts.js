import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
class MyContacts extends React.Component {
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <SearchBar
        placeholder="Search"
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        onChangeText={this.updateSearch}
        value={search}
        cancelButtonTitle="Cancel"
      />
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

export default MyContacts;
