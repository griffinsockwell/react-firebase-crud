import React, { Component, PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class Button extends Component {
  render() {
    const { onPress, name, color } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.Button}>
        <Icon name={name} size={22} color={color} />
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
