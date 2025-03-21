import { StyleSheet, Text, Pressable, View } from "react-native";

export default function CustomButton({text, onPress}){
    return(
        <Pressable onPress={onPress} style={({ pressed }) => [{ backgroundColor: pressed ? '#ddd' : 'transparent', borderRadius: 20 }]}><View style={styles.container}><Text style={styles.text}>{text}</Text></View></Pressable>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderWidth: 1.5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
