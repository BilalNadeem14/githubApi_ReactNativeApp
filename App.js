import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Search from './src/components/inputComponent'
import List from './src/components/listComponent'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'
import reducers from './src/redux/reducers'

const App = () => {
  return (
    <View>
      <Search />
      <List />
      {/* <Text>App</Text> */}
    </View>
  )
}



export default () => (
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App/>
  </Provider>
)
