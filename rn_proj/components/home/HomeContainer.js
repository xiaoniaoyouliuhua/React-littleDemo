/**
 * Created by liulongbin on 2017/4/28.
 */
import React from 'react'
import {View, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class HomeContainer extends React.Component{
    render(){
        return <View style={{paddingTop:54}}>
            <Text onPress={()=>{Actions.test({name:'张三'})}}>HomeContainer</Text>
        </View>
    }
}