import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import BottomPopup from './src/BottomPopup';
const popupList = [
  { id: 0, name: 'Task' },
  { id: 1, name: 'Message' },
  { id: 2, name: 'Note' },
  { id: 3, name: 'Share' }
]
export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  close = () => {
    this.setState({
      isShow: false
    })
  }

  render() {
    const { isShow } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            width: 100, height: 30, backgroundColor: 'orange',
            justifyContent: 'center', alignItems: 'center'
          }}
          onPress={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}
        >
          <Text style={{ color: 'white' }}> Show </Text>
        </TouchableOpacity>
        <BottomPopup
          show={isShow}
          title={"Demo Popup"}
          animationType={"fade"}
          closePopup={this.close}
          data={popupList}
          haveOutsideTouch={true}
        />
      </SafeAreaView>
    );
  }
}
