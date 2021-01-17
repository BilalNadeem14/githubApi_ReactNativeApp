import React from 'react';
import { View, Text, TextInput, Image } from 'react-native'

export default  (props) => {
    console.log('itemComp', props.value)
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
            source={{
                uri: props.value.picture,
                height: 22, 
                width: 22 
              }}
              style={{
                borderRadius: 15 , 
                // borderWidth: 3,
                borderColor: 'transparent',
              }}
              />
            <Text>{props.value.login}</Text>
            <Text>{props.value.link}</Text>
        </View>
    )
}