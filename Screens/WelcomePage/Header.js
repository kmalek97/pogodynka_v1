import * as React from 'react';
import {StyleSheet} from 'react-native';
import { Appbar, Title, } from 'react-native-paper';

const Header = (props) => {

  const theme = {
    colors:{
      primary:'#3498db'
    }
  }

  const styles = StyleSheet.create({
    title:{
      color:'white',
      paddingLeft:20,
    }
  })

  return (
    <Appbar.Header theme={theme}>
      <Title style={styles.title}>{props.name}</Title>
    </Appbar.Header>
  );
};

export default Header;