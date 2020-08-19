import React, { Component } from 'react';
import { View, Text, Modal, Dimensions, Pressable, FlatList, TouchableOpacity, Alert } from 'react-native';

export default class BottomPopup extends Component {

  static defaultProps = {
    title: '',
    //slide fade  none
    animationType: 'slide',
    haveOutsideTouch: false,
    data: []
  }

  renderItem = ({ item, inde }) => {
    return (
      <TouchableOpacity
        onPress={()=>Alert.alert(item.name)}
        style={{
          height: 50, flex: 1,
          justifyContent: 'center', alignItems: 'flex-start',
          borderBottomColor: 'grey', borderBottomWidth: 0.5
        }}>
        <Text
          style={{
            fontSize: 18, marginLeft: 18,
            fontWeight: 'normal', color:'#182E44'
          }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  renderContent = () => {
    const { data } = this.props;
    return (
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={item => `key-${item.id}`}
          contentContainerStyle={{
            paddingBottom: 40
          }}
        />
      </View>
    )
  }

  render() {
    const { show, title, animationType, closePopup, haveOutsideTouch } = this.props;

    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={show}
        onRequestClose={() => { }}
      >
        <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
          <Pressable
            onPress={() => {
              if (!haveOutsideTouch) return;
              closePopup()
            }}
            style={{ flex: 1 }}>

          </Pressable>

          <View style={{
            bottom: 0,
            position: 'absolute',
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            // height: Dimensions.get('window').height * 0.4,
            maxHeight: Dimensions.get('window').height * 0.4
          }}>
            <Text style={{
              alignSelf: 'center',
              color: '#182E44',
              fontSize: 20,
              fontWeight: '500',
              margin: 15
            }}>{title}</Text>
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}
