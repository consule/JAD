
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView,  View,  Text, } from 'react-native';



const style = StyleSheet.create({
  titulo: {
    color: 'blue', 
    fontWeight: 'bold', 
    fontSize: 30, 
    backgroundColor: 'powderblue', 
  }, 
  conteudo: {
    color: 'red',
    fontSize: 23, 
    backgroundColor: 'skyblue', 
  }, 
  imagemPadrao: {
    width: '100%', height: '30%'
  }, 
  
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch'
  }, 
  
})


export default class JAD extends Component {
  render() {
    let pic = {
      uri: 'https://i.ytimg.com/vi/OYrKlTtFr1M/maxresdefault.jpg'
    };
    return (

        <ScrollView style={{ height: '100%' }}>
        <View style={{ flex: 1, flexDirection: 'column',  alignItems: 'stretch'}}>
        <Image resizeMode={'cover'} source={ pic} style={ style.imagemPadrao }/>
          {/* <View style={{ height: 200, backgroundColor: '#E93E43'}} /> */}
          <Text style={{ color: '#62625A', backgroundColor: '#f1f1f1', fontWeight: '600', justifyContent: 'center', height: 50, paddingTop: 5, fontSize: 25, paddingLeft: 20 }}>Jesus</Text>
          <Text style={{ backgroundColor: '#fff', color: '#737C77', justifyContent: 'center',  padding: 25, fontSize: 18, letterSpacing: 1, lineHeight: 25, textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
          <View style={{ height: 50, backgroundColor: '#F5A942'}} />
        </View>
        </ScrollView>
   
      // <View> 
      //     <Image source={ pic} style={ style.imagemPadrao }/>
      //     <JesusTitulo jesus='Titulo'/>     
      //     <JesusConteudo conteudo='Conteudo'/>     
      // </View>
    )
  }
}

// class JesusTitulo extends Component {
//   render() {
//     return(
//       <View>
//         <Text style={style.titulo }>{this.props.jesus}</Text>
//       </View>
//     )
//   }
// }

// class JesusConteudo extends Component {
//   render() {
//     return(
//       <View>
//         <Text style={ style.conteudo }>{this.props.conteudo}</Text>
//       </View>
//     )
//   }
// }


// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
