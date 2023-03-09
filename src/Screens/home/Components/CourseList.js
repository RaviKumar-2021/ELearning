import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'


export default class CourseList extends React.Component{
    render(){
        const {img,title, bg, onPress} = this.props
        return(
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10
                }}
            >
                    <Image
                        source={img}
                        style={{width:40,height:40}}
                    />

                    <View>
                         <Text style={{
                             color:"#345c74",
                             fontSize:13,
                             paddingHorizontal:20,
                             width:170
                         }}>{title}</Text>
                         <Text style={{
                             color:"#f58084",
                             fontFamily: 'sans-serif-condensed',
                             fontSize:12,
                             paddingHorizontal:20
                         }}>
                             10 hours, 19 lessons
                         </Text>
                    </View>
                    <Text style={{
                        color:"#345c74",
                        fontFamily: 'sans-serif-condensed',
                        fontSize:13,
                        paddingLeft:10,
                        paddingRight:10
                    }}>
                        50%
                    </Text>
                    <ProgressCircle
                        percent={50}
                        radius={17}
                        borderWidth={1.5}
                        shadowColor="#FFF"
                        bgColor="#FFF"
                        color='blue'
                    >
                        <Image
                            source={require('../../../../assets/Images/RightArrow1.png')}
                            style={{height:15, width:15}}
                        />
                    </ProgressCircle>

            </TouchableOpacity>
        )
    }
}