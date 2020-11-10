import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View , Vibration , Platform, Button} from 'react-native';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.8.131:3000";
var countDownString;
var countDownTimeInMS;
var showNowClock;
var newCurrentTime;
var startTitleHolder;
var offsetTimeInit;

export default function App() {
  //-- SocketIO
    const [response, setResponse] = useState("");
    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);


      socket.on("centerTextContent", data => {
        countDownString     = data.countDownString;
        countDownTimeInMS   = data.countDownTimeInMS;
        showNowClock        = data.showNowClock;
        newCurrentTime      = data.newCurrentTime;
        startTitleHolder    = data.startTitleHolder;
        offsetTimeInit      = data.offsetTimeInit;

        if (countDownTimeInMS < (5*60*1000) &&  countDownTimeInMS > (5*60*1000) - 5000){
          Vibration.vibrate(PATTERN,true)
        }
        else{
          Vibration.cancel();
        }
        setResponse(countDownString);
      });


    }, []);

  //-- SocketIO




  //---------- VIBRATION
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [100,100,100,100];
  //---------- VIBRATION

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{response}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"white",
    fontSize: 100,
  }
});
