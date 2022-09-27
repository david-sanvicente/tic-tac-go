import { StyleSheet, View } from 'react-native';
import {Game, Home} from "./screens"
import {useFonts, Dokdo_400Regular} from "@expo-google-fonts/dokdo"
import AppLoading from "expo-app-loading"
import Text from "./components/text/text"

export default function App() {
    const [fontLoaded] = useFonts({
        Dokdo_400Regular
    })
    if(!fontLoaded) return <AppLoading/>

  return (
    <View style={styles.container}>
      <Text 
        onPress={()=>{alert(true)}} 
        style={{fontSize:40}}
        >
            Hello world!!!
      </Text>
    </View>
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
