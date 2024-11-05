import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/logo1.png")} style={styles.image} />
        </View>
        <Text style={styles.title}>Little Lemon, your Local</Text>
        <Text style={styles.title}>Mediterranean Bistro</Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Subscribe")}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    fontWeight : "bold"
  },
  button: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#125016',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignSelf: 'center',
    width : "90%",
  },
  buttonText: {
    color: '#e1ebe1',
    fontSize: 24,
    textAlign : "center"
  },
});
