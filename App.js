import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";

import MainScreen from "./Screens/MainScreen";
import TopBar from "./Components/TopBar";
export default function App() {
    return (
      <PaperProvider >
        <TopBar/>
  
        <MainScreen/>
      </PaperProvider>
    );
  }
  