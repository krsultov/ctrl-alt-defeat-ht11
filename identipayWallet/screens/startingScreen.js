import { StyleSheet, View } from "react-native";
import CustomButton from "../components/customButton";

export default function StartingScreen({navigation}){
  let onPress = () => {
    console.log('pressed');
    navigation.navigate('Scan QR code');
  }
    return (
            <View style={styles.container}>
                <CustomButton text='Create DID' onPress = {onPress}/>
            </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
