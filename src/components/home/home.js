import React from 'react';
import { StyleSheet, View, Button, Alert, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { AntDesign } from 'react-native-vector-icons/';
import Swipeout from 'react-native-swipeout';

import Notification from './notification';

let _this = null;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
      list: [
        {
          name: 'Amy Farha',
          avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          date: '02/01/2019'
        },
        {
          name: 'Chris Jackson',
          avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman',
          date: '02/01/2019'
        }
      ]
    };
  }

  setModalVisible() {
    this.setState({ isModalOpened: true });
  }

  componentDidMount() {
    _this = this;
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: () => (
        <AntDesign
          name={'notification'}
          onPress={() => {
            _this.setModalVisible(true);
          }}
          size={22}
          style={{ right: 10 }}
        />
      )
    };
  };
  render() {
    const swipeButtons = [
      {
        text: 'Delete',
        type: 'delete',
        backgroundColor: 'red',
        onPress: () => {
          Alert.alert('Pressed');
          console.log(this.props);
          this.setState({ list: this.state.list.splice(this.props.key, 1) });
        }
      }
    ];

    return (
      <ScrollView>
        {this.state.list.map((l, i) => (
          <Swipeout key={i} close={true} right={swipeButtons}>
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              rightTitle={l.date}
              title={l.name}
              //subtitle={l.subtitle}
              onPress={() => {
                this.props.navigation.navigate('Invitation');
              }}
              bottomDivider
              style={styles.avatar}
            />
          </Swipeout>
        ))}

        <Notification
          isModalOpened={this.state.isModalOpened}
          toggleModal={() =>
            this.setState({ isModalOpened: !this.state.isModalOpened })
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
