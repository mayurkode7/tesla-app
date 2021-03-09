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
import CarItem from './CarItem';


const App = () => {
  return (<>
    <View style={styles.container}>

      <CarItem
        name="Model Y"
        tagline="Starting at $30,000"
        taglineCTA="Touchless Delivery"
        image={require('./assets/images/ModelY.jpeg')} />


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
