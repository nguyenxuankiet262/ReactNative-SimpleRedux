import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

class Header extends Component {
    render(){
        const color = this.props.myHighlight ? 'yellow' : 'white';
        return (
            <View style = {styles.container}>
                <View style = {styles.containerTitle}>
                    <Text style = {[styles.titleText, styles.text]}>
                        EXAM 1:
                    </Text>
                    <Text style = {[styles.titleText, styles.text]}>
                        APP COMPONENT
                    </Text>
                </View>
                <Text style = {{ fontSize: 40, color: color }}>
                    {this.props.myValue}
                </Text>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        myValue: state.value,
        myHighlight: state.highlight,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      containerTitle: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      text: {
          fontSize: 40,
      },
      titleText: {
          color: 'white'
      },
      resultText: {
          color: 'yellow',
      }
});

export default connect(mapStateToProps)(Header);