import React from 'react';
import { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

export default Podcast = props => {
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        //play or pause episode here
    }, [playing])

    const totalSeconds = parseInt(props.duration / 1000);
    const minutes = parseInt(totalSeconds / 60);
    let seconds = parseInt(totalSeconds % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return (
        <View style={{ margin: 10 }}>
            <Image style={{
                width: 100,
                height: 100 }} source={{uri: props.logo}}/>
            <Text>{props.title}</Text>
            <Text>{props.author}</Text>
            <Text>{`${minutes}:${seconds}`}</Text>
            <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => setPlaying(!playing)}>
                <Text>{playing ? "Playing" : "Paused"}</Text>
            </TouchableOpacity>
        </View>
  );
}