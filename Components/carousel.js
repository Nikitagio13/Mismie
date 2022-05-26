import * as React from 'react';
import { StatusBar, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('screen');

const data = [
    {image: require('../assets/photos/test4.jpg'), title: 'დამისხი დამალევინე', price: '15 ₾'},
    {image: require('../assets/photos/test7.jpg'), title: 'დამპლური თამაშები', price: '10 ₾'},
    {image: require('../assets/photos/test.jpg'), title: 'სექსთინაინ', price: '12 ₾'},
    {image: require('../assets/photos/test2.jpg'), title: 'იგრიალე ოქრო', price: '17 ₾'},
    {image: require('../assets/photos/test3.jpg'), title: 'დამისხი დამალევინე', price: '25 ₾'},
    {image: require('../assets/photos/test5.jpg'), title: 'ისევ დამისხი დამალევინე', price: '8 ₾'},
    {image: require('../assets/photos/test6.jpg'), title: 'კიდევ დამისხი დამალევინე', price: '9.5 ₾'},

];



const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function ImgData(){
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar hidden />
            <View style={StyleSheet.absoluteFillObject}>
                
                {data.map((image, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,
                    ]
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })
                    return <Animated.Image 
                        source={image.image}
                        key={`image-${index}`}
                        style={[
                            StyleSheet.absoluteFillObject,
                            {
                                opacity
                            }
                        ]}
                        blurRadius={50}
                    />
                })}
            </View>
            <Animated.FlatList
                data={data}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    { useNativeDriver: true }
                )}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                renderItem={({item}) => {
                    return <View style={{
                            width, justifyContent: 'center', alignItems: 'center',
                            shadowColor: 'black',
                            shadowOpacity: .5,
                            shadowOffset: {
                                    width: 0,
                                    height: 0,
                            },
                            shadowRadius: 15
                            }}>

                            
                                <Image source={item.image} style={{
                                    width: imageW,
                                    height: imageH,
                                    resizeMode: 'cover',
                                    borderRadius: 16,
                                    marginTop: 45,
                                }}/>
                           

                            <Text style={{color: "#FFF", fontSize: 25, marginTop: 40, fontFamily: 'thinGeo', maxWidth: '93%', textAlign: 'center'}}>{item.title}</Text>
                            <TouchableOpacity style={{backgroundColor: 'rgba(249,249,249, 1)',  marginTop: 25, paddingHorizontal: 35, paddingTop: 6, paddingBottom:10, borderRadius: 50 }}>
                                 <Text style={{ fontSize: 19, color: '#0A84FF',  }}> გახსენი {item.price}</Text>
                            </TouchableOpacity>
                          
                        </View> 
                }}
            />

            
        </View>
    );
};
