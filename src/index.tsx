import React, { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, AppBootstrap } from "./components/"
import Navigator from "./config/navigator"
import 'react-native-gesture-handler';

export default function App(): ReactElement {
  return (
    <AppBootstrap>
      <Navigator />
      {/* <View style={styles.container}>
        <Text
          onPress={() => { alert(true) }}
          style={{ fontSize: 40 }}
        >
          Hello world!!!
        </Text>
      </View> */}
    </AppBootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
