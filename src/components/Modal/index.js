import React, { Component } from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { vw, vh } from '../units'


class ColorModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            content: {},
        }
    }

    displayComponent = (i) => {
        return <View style={{
            flex: 1,
            // borderWidth: 1 
        }}>
            <Text>Hello</Text>
        </View >
    }

    show = () => {
        this.setState((prev) => {
            return {
                ...prev,
                visible: true
            }
        })
    }

    hide = () => {
        // this.setState({
        //     visible:false
        // })

        this.setState((prev) => {
            return {
                ...prev,
                visible: false
            }
        })
    }

    render() {
        return (
            <Modal
                key={'accepted'}
                onBackdropPress={this.hide}
                transparent={true}
                visible={this.state.visible}
                style={{
                    flex: 1,
                    zIndex: 10000000,
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        backgroundColor: (0, 0, 0, 0.6),
                        width: 100 * vw,
                        height: 100 * vh,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={this.hide}
                >
                </TouchableOpacity>

                <View
                    style={{
                        // flex: 1,
                        backgroundColor: 'transparent', //rgba(0,0,0,.5)
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 38 * vh,
                        alignSelf: 'center',

                        // position: 'absolute',// marginHorizontal: 5 * vw,
                        // marginRight: 20 * vw,
                        // borderWidth: 1,
                        // borderColor: 'red'
                    }}
                >
                    <View
                        style={{
                            // width: vw * 90,
                            // flex: 0.5,
                            // flexDirection: 'column-reverse',
                            // alignItems: 'center',
                            elevation: 10 * vw,
                            borderRadius: 5 * vw,

                            backgroundColor: 'white',//'#5374E8',
                            // marginHorizontal: 25 * vw,
                            // marginBottom: 10 * vh,
                            // left: 35 * vw,
                            alignSelf: 'center',

                            // top: 38 * vh,
                            // position: 'absolute',
                            paddingHorizontal: 5 * vw,
                            paddingTop: 2 * vw,
                            // marginHorizontal: 5 * vw,
                            width: 80 * vw

                            // borderWidth: 1,
                            // borderColor: 'blue'
                        }}
                    >
                        <Text style={{
                            alignSelf: 'flex-start', 
                            fontWeight: 'bold',
                            fontSize: 18,
                            marginBottom: 1 * vh,
                        }}>User Details:</Text>
                        <View 
                        // style={{borderWidth: 1, alignItems: 'center'}}
                        >
                            <Image
                                source={{
                                    uri: this.props.picture,
                                    height: 30, 
                                    width: 30 
                                }}
                                style={{
                                    borderRadius: 15 , 
                                    borderColor: 'transparent',
                                    alignSelf: 'center'
                                }}
                            />
                            <Text>Followers: {this.props.followers}</Text>
                            <Text>Following: {this.props.following}</Text>
                            <Text>Location: {this.props.location}</Text>
                            <Text>Full Name:{this.props.fullName}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.hide(); 
                            }}
                        >

                            <View style={{
                                // flexDirection: 'row',
                                 alignItems: 'center',
                                //borderWidth: 1, 
                                top: -0.5 * vh,
                                marginLeft: 0.15 * vw,
                                marginTop: 1 * vh
                            }}>
                                <Text
                                    style={{ color: '#5374E8', marginLeft: 1 * vw }}
                                >Close</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >

        )
    }
}

export default connect(null, null, null, { forwardRef: true })(ColorModal)