
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, View, Text, Linking } from 'react-native';

const styles = StyleSheet.create({
    slide: {
        width: '100%', height: 200
    },
    titulo: {
        fontSize: 25, padding: 15, fontWeight: '700', opacity: 0.8
    },
    conteudo: {
        fontSize: 18, padding: 15, opacity: 0.6
    },
    textoEmDestaque: {
        fontWeight: "bold", color: 'red'
    },
    fonte: {
        color: 'blue', fontSize: 20
    }
})


export default class TabThree extends Component {
    render() {
        return (
            <ScrollView>
                <Image style={styles.slide} source={{ uri: "https://assetsnffrgf-a.akamaihd.net/assets/m/502012473/univ/art/502012473_univ_lsr_xl.jpg" }} />
                <Text style={styles.titulo} >Jesus</Text>
                <Text style={styles.conteudo}>S the ViewPager component. On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and Full.{"\n"}{"\n"}

                    On iOS a <Text style={styles.textoEmDestaque}>ScrollView</Text>  with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.{"\n"}{"\n"}
                    On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.{"\n"}{"\n"}
                    On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.

                    The ScrollView works best to present a small amount of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of more items than can fit on the screen, you should use a FlatList instead. So let's learn about list views next.
                </Text>
                <Text style={styles.conteudo} >Fonte:
                    <Text style={styles.fonte} onPress={() => Linking.openURL('http://google.com')}> Google
                </Text>
                </Text>
            </ScrollView>
        )
    }
}

