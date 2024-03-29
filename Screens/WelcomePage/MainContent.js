import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native';
import { TextInput, Button, ViewStyle, Title, Card } from 'react-native-paper';
import * as Location from 'expo-location';

import request from '../../Requests/APIKit';
import { StoreContext } from '../../Store/StoreProvider';

import Header from './Header';

 const MainContent = ({ route }) => {

  const { city } = route.params;
  let currentCity = city; 

  const [information, setInformation] = useState({
    name:'chwilunia',
    temp:'ładowanie',
    humidity:'ładowanie',
    desc:'ładowanie',
    icon:'ładowanie',
  });

  const {location, setLocation } = useContext(StoreContext);

  const asyncPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  const getWeatherData = () => {
    
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;

    const initialEndpoint = `/weather?lat=${lat}&lon=${lon}&units=metric&lang=pl&appid=0dc29c7083613a2117fd359b623e0b9d`;
    const endpoint = `/weather?q=${currentCity}&units=metric&lang=pl&appid=0dc29c7083613a2117fd359b623e0b9d`;

    let isCity = currentCity ? endpoint : initialEndpoint;

    request.get(isCity)
    .then(res => {
      const data = res.data;
      setInformation({
        name:data.name,
        temp:data.main.temp,
        humidity:data.main.humidity,
        desc:data.weather[0].description,
        icon:data.weather[0].icon,
      });
    })
    .catch(err => {
      alert(`Nie ma takiego miasta lub wystąpił błąd serwera`);
    })
  } 

  useEffect(() => {
    asyncPosition();
  }, []);

  useEffect(() => {
    if (location?.coords) {
      getWeatherData();
    }
  }, [currentCity , location ]);

  let URI = `https://openweathermap.org/img/w/${information.icon}.png`;

  return (
       <View >
        <Header name="Pogodynka"/>
        <View style={{alignItems:'center'}}>
          <Title style={{color:'#3498db',marginTop:30,fontSize:30}}>
            {information.name}
          </Title>
          <Image style={{width:120,height:120}}
            source={{uri:URI}}
          />
        </View>

        <Card style={{margin:5,padding:12}}>
            <Title style={{color:'#3498db'}}>Temperatura: {information.temp}&deg;C</Title>
        </Card>
        <Card style={{margin:5,padding:12}}>
            <Title style={{color:'#3498db'}}>Wilgotność powietrza: {information.humidity}%</Title>
        </Card>
        <Card style={{margin:5,padding:12}}>
            <Title style={{color:'#3498db'}}>Opis: {information.desc}</Title>
        </Card>
        <View>
          <Button 
            mode="contained"
            color="#3498db"
            style={{marginLeft:"auto",marginRight:"auto",marginTop:10}}
            onPress={getWeatherData}>
            <Text style={{color:"white"}}>odśwież</Text>
          </Button>
        </View>
      </View>
  )
}

export default MainContent;
