import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

class Home extends React.Component {
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
    this.state = {
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
    return (
      <View>
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
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
