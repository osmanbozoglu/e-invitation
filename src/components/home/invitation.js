import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Alert,
  Switch
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import InvCard from '../../../assets/images/inv.jpeg';

class Invitation extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Invitation'
    };
  };
  state = {
    switchValue: false
  };
  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <ImageBackground source={InvCard} style={styles.img} />
        </View>
        <View style={styles.icons}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-navigate' : 'md-navigate'}
            size={25}
            onPress={() => Alert.alert('Hello')}
            style={{ paddingRight: 30 }}
          />
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
            trackColor={{ true: '#20b2aa', false: null }}
            thumbColor="black"
            size={25}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  icons: {
    top: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    right: 30
  }
});

export default Invitation;
