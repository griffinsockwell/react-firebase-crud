import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

const Button = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.Button}>
    <MaterialIcons name={props.name} size={22} color={props.color} />
  </TouchableOpacity>
);

export default Button;
