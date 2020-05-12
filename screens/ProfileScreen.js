import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  };
