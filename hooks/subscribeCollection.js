import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const subscribeCollection = collection => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        // Add users into an array
        const dataCollection = querySnapshot.docs.map(documentSnapshot => {
          return {
            ...documentSnapshot.data(),
            key: documentSnapshot.id, // required for FlatList
          };
        });
        // Update state with the users array
        setResponse(dataCollection);

        // As this can trigger multiple times, only update loading after the first update
        if (loading) {
          setLoading(false);
        }
      });
    return () => unsubscribe();
  }, []);

  return {
    loading,
    response,
  };
};

export default subscribeCollection;
