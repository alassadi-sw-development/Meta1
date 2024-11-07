import { Image, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Sub({ navigation }) {
  const [input, setInput] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (isValidEmail(input)) {
      Alert.alert(
        "Thank You!",
        "Thanks for subscribing!",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo2.png")} style={styles.image} />
      </View>
      <Text style={styles.title}>Subscribe to Our Newsletter</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="Type Your Email here"
        keyboardType="email-address"
      />
      <Text style={styles.displayText}>Your E-Mail: {input}</Text>
      <Pressable
        style={[styles.button, { backgroundColor: isValidEmail(input) ? '#125016' : '#ccc' }]}
        onPress={handleSubscribe}
        disabled={!isValidEmail(input)}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#125016',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ddd',
    backgroundColor: "#ffffff",
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 16,
    marginTop: 10,
    color: '#125016',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 30,
  },
  buttonText: {
    color: '#e1ebe1',
    fontSize: 20,
    textAlign: 'center',
  },
});
