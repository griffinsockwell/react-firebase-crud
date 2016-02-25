'use strict'
import React, {TouchableOpacity, StyleSheet, Image} from 'react-native'

export default React.createClass({
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.liButton}>
        <Image source={this.props.source}/>
      </TouchableOpacity>
    )
  }
})

const styles = StyleSheet.create({
  liButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5
  }
})
