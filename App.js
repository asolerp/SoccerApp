/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import subscribeCollection from './hooks/subscribeCollection';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const {loading, response} = subscribeCollection('users');

  return (
    <>
      <View style={styles.body}>
        {loading && <Text>Loading...</Text>}
        {response &&
          response.map((user, i) => (
            <View key={i}>
              <Text style={styles.title}>{user.key}</Text>
              <Text style={styles.title}>{user.name}</Text>
              <Text style={styles.title}>{user.email}</Text>
            </View>
          ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default App;
