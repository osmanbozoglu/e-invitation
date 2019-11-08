import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
class Contacts extends React.Component {
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

export default Contacts;
