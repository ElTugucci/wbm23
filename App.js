/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import List from "./components/List";


const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello world!!</Text>
        <List/>
      </View>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
