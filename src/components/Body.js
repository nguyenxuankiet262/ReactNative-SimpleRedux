import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

class Body extends Component {
    onDownKey() {
        this.props.dispatch({ type: 'DOWN' });
        this.props.dispatch({ type: 'CHANGE_COLOR' });
    }
    onUpKey(){
        this.props.dispatch({ type: 'UP' });
        this.props.dispatch({ type: 'CHANGE_COLOR' });
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    CONTROLLER COMPONENT
                </Text>
                <View style = {styles.containerSign}>
                    <TouchableOpacity style = {styles.button} onPress = {this.onUpKey.bind(this)}>
                        <Text style = {styles.sign}>
                            +
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {this.onDownKey.bind(this)}>
                        <Text style = {styles.sign}>
                            -
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect()(Body);

var { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        margin: 16,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
    },
    containerSign: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width,
    },
    sign: {
        fontSize: 40,
        color: 'white'
    }
});