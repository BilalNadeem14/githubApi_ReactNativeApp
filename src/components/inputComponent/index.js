import React, {useState} from 'react';
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'

const inputComponent = (props) => {
    const [text, setText] = useState('')
    return (
        <View>
            <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 10}}
            >Search</Text>
            <TextInput
                style={{borderBottomWidth:1, borderColor: 'gray', marginHorizontal: 10}}
                placeholder='Enter Text'
                onChangeText={(result) => setText(result)}
            />
            <TouchableOpacity
                onPress={()=>{props.action1(text)}}
                style={{
                    borderWidth: 1, 
                    backgroundColor: '#4b6fec', 
                    margin: 10, 
                    height: 40, alignItems: 'center', justifyContent: 'center'
                }}
            >
                <Text style={{color: 'white', fontSize: 20}}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => {
    // console.log('mapStateToProps: inputComponent', state.reducer)
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        action1: (userName) => dispatch(actions.action1(userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(inputComponent)