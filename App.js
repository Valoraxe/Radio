import React from 'react';
import { useState, useEffect } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import Podcast from './src/components//podcast';

export default App = () => {
  const [data, setData] = useState([]);
  const [showData, setFilter] = useState([]);
  const [search, changeSearch] = useState("");

  const getData = async () => {
    try {
      const response = await 
      fetch('https://public-api.pod.co/podcasts/create-reach-inspire/episodes', {
        method: 'GET',
        header: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      setData(json.data);
      setFilter(json.data);
    } catch {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    if ( search === "") {
      setFilter(data);
    } else {
      const searchData = data.filter(row => (row.title.includes(search) || row.author.includes(search)));
      setFilter(searchData);  
    }
  }, [search])
  
  return (
      <ScrollView style={{flex: 1}}>
        <TextInput
        onChangeText={changeSearch}
        value={search}
        placeholder="Search episodes here"/>

        {showData.map(podcast => (
          <Podcast key={podcast.id} title={podcast.title} 
          logo={podcast.artwork.urls[0].url}
          duration={podcast.duration}
          author={podcast.author}/>
        ))}
      </ScrollView>
  );
}
