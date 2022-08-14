import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Adcionar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
});
