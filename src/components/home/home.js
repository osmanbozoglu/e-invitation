import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
class Home extends React.Component {
  render() {
    const list = [
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
    ];
    return (
      <View>
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            rightTitle={l.date}
            title={l.name}
            //subtitle={l.subtitle}
            onPress={() => {
              Alert('Hello');
            }}
            bottomDivider
            style={styles.avatar}
          />
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
