import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native'

import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

import ItemComponent from '../itemComponent'
// import ModalComponent from '../modal'
import ModalComponent from '../Modal'


const listComponent = (props) => {
    const [dummyData, setDummyData] = useState(['1', '20', '3'])
    const userName = 'timmywheels'
    console.log('ListComp:', props.data.length)

    useEffect(()=>{ 

        // props.action1(userName)
        
    }, [])
    var modalRef = {}
    const displayList = (i) => {
        return (
        <View style={{margin: 10}}>
            <ModalComponent
                ref={r => modalRef = r}
                followers={i.item.followers}
                following={i.item.following}
                picture={i.item.picture}
                location={i.item.location}
                fullName={i.item.following}
            />
            <TouchableOpacity
                onPress={()=> modalRef.show()}
            >
                <ItemComponent
                    value={i.item}
                />
            </TouchableOpacity>
            {/* <Text>{i.item}</Text> */}
        </View>
        )
    }

    return (
        <View>
            <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 10}}
            >List of Users</Text>
            
            <FlatList 
                showVerticalScrollIndicator={false}
                data={props.data}
                renderItem={displayList} //func
                keyExtractor={(item) => item.login}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    // console.log('mapStateToProps: ', state.reducer)
    return {data: state.reducer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        action1: (userName) => dispatch(actions.action1(userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listComponent)