/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
// import subscribeCollection from './hooks/subscribeCollection';
import useAuth from './hooks/useAuth';
import userContext from './contexts/userContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';

const App: () => React$Node = () => {
  // const {loading, response} = subscribeCollection('users');
  const {initializing, user} = useAuth();
  const [confirmation, setConfirmation] = useState(null);
  const phoneAuth = async () => {
    // setConfirmation(await auth().signInWithPhoneNumber('+34 696-487-907'));
    const confirmation = await auth().signInWithPhoneNumber('+34 696-487-907');
  };

  return (
    <>
      <Button title="Press me" onPress={() => phoneAuth()} />
      <View style={styles.body}>
        {initializing && <Text>Loading...</Text>}
        {user ? <Text>{user.uid}</Text> : <Text>No logeado</Text>}
        {console.log(user)}
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
