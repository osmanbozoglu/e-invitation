import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  FlatList,
  Linking,
  TouchableHighlight
} from 'react-native';
import { Avatar } from 'react-native-elements';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          name: 'Amy',
          surname: 'CCC',
          province: 'Yozgat',
          email: 'aaa@aa.com',
          avataruri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          telNum: '5370600900'
        }
      ]
    };
  }
  static navigationOptions = {
    title: 'Profile'
  };

  onPressTel = number => {
    Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgcol}>
          <View style={styles.avatar}>
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
              }}
              showEditButton
              onPress={() => Alert.alert('Avatar')}
              onEditPress={() => {
                Alert.alert('Edit Press');
              }}
            />
          </View>
        </View>
        <FlatList
          data={this.state.user}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.flatview}>
              <Text style={styles.name}>
                {item.name} {item.surname}
              </Text>
              <Text style={styles.province}>{item.province}</Text>
              <Text style={styles.telNum}>{item.telNum}</Text>
            </View>
          )}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgcol: { width: '100%', height: '25%', backgroundColor: '#20b2aa' },

  flatview: {
    justifyContent: 'center',
    marginTop: 100
  },
  name: {
    fontSize: 20,
    marginBottom: 20,
    color: 'blue'
  },
  province: {
    fontSize: 20,
    color: 'blue'
  },
  telNum: {
    fontSize: 20,
    color: 'blue'
  },
  email: {
    color: 'red'
  },
  avatar: {
    bottom: 0,
    marginTop: 60,
    alignItems: 'center'
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   header: {
//     backgroundColor: '#20b2aa',
//     width: '100%',
//     height: '25%'
//   },
//   avatar: {
//     bottom: 0,
//     marginTop: 60,
//     alignItems: 'center'
//   },
//   body: {
//     backgroundColor: '#A9A9A9',
//     width: '100%',
//     height: '75%'
//   }
// });

export default Profile;
