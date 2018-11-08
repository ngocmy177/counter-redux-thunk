import React, {Component} from 'react';
import {View, StyleSheet, Button } from 'react-native';
import Child from './components/child';
import * as actions from './actions';
import { connect} from 'react-redux'

class Main extends Component {
    handleIncrease = () => {
        this.props.counterIncrease();
    };

    handleDecrease = () => {
        this.props.counterDecrease();
    };

    addNumber = (number) => {
        this.props.addNumber1(number);
        //this.props.addNumberToCounter(number)
    };
    
    render() {
        const number = 3;
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}
            >
                <View style={{
                    flex: 1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Child/>
                </View>
                <View style = {{flex:1}}>
                    <Button
                        title="Increase"
                        textColor="#000"
                        bgColor="#397af8"
                        onPress={() => this.addNumber(number)}/>
                    <Button
                        title="Decrease"
                        bgColor="orange"
                        onPress={this.handleDecrease}/>
                </View>

            </View>
        )
    }
}

export default connect(null, actions)(Main);

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
});