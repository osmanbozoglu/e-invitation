import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Alert,
  Dimensions
} from 'react-native';

class Notification extends React.Component {
  static navigationOptions = {
    title: 'Notification'
  };
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.isModalOpened}
        >
          <View style={styles.modalContent}>
            <View style={{ marginTop: 50, backgroundColor: 'yellow' }}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.props.toggleModal(false);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'yellow',

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Notification;
