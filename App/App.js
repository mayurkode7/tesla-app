import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';
import Header from './components/Header'
import CarsList from './components/CarsList'


const App = () => {
  return (<>
    <View style={styles.container}>
      <Header />
      <CarsList />
    </View>
  </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },



});

export default App;
