import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, ViewStyle } from 'react-native-paper';

import { StoreContext} from '../../Store/StoreProvider';
import Header from './Header';
import request from '../../Requests/APIKit'


const SearchCity = ({ navigation }) => {

  const {city, setCity} = useContext(StoreContext);

  const handleOnPress = () => {
    navigation.navigate("Strona główna",{city:city});
    setCity('');
  }

  return (
    <View>
      <Header name="Inne miasto"/>
      <TextInput
        label="Podaj miasto"
        mode="outlined"
        theme={{colors:{primary:"#3498db"}}}
        placeholder={"np. Londyn"}
        value={city}
        onChangeText={newCity => setCity(newCity)}
      />
      <Button 
        mode="contained"
        color="#3498db"
        style={{marginLeft:"auto",marginRight:"auto",marginTop:10}}
        onPress={handleOnPress}>
          <Text style={{color:"white"}}>WYBIERZ</Text>
      </Button>
    </View>
  );
};

export default SearchCity;