import React from 'react'
import { TextInput, View, Text } from 'react-native'
const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textFieldStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 20,
    width: 100,
    flex: 3
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
}

const TextField = ({ label, onChangeText, value, autoCorrect = false, placeholder, secureTextEntry }) => {
  const { textFieldStyle, labelStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        style={textFieldStyle}
        value={value}
        onChangeText={onChangeText}
      />

    </View>
  )
}
export { TextField }
