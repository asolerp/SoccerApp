import {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/auth';

const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  const onChange = user => {
    setState({initializing: false, user});
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};

export default useAuth;
