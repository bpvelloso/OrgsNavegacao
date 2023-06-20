import { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import useTextos from "../../hooks/useTextos";
import { useNavigation, useRoute } from '@react-navigation/native'
import sucesso from '../../assets/sucesso.png'
import Texto from "../../componentes/Texto";

export default function FinalPedido() {
    const nav = useNavigation()
    const route = useRoute()

    const nomeCompra = route.params?.compra.nome 
    const timestampCompra = route.params?.compra.timestamp

    const { mensagemCompra, tituloSucesso, botaoAoProdutor, botaoHome } = useTextos();
    console.log(timestampCompra);
  
    useEffect(()=>{
      console.log("Effect de nomeCompra!");
      let timeout;
      console.log("Criando timer!");
        timeout = setTimeout(()=>{
          console.log("Executando timer!");
          nav.navigate('HomeScreen')
        },5000)
      
      return ()=>clearTimeout(timeout)
    }, [])
  
    console.log("Compra: ",nomeCompra);
    const msgCompleta = mensagemCompra?.replace('$NOME', nomeCompra)

    return(
        <ScrollView>
        <Image source={sucesso} style={estilos.imagem} />
        <View style={estilos.corpo}>
            <Text style={estilos.tituloSucesso}>{tituloSucesso}</Text>
            <Text style={estilos.compra}>{msgCompleta}</Text>

            <TouchableOpacity 
                style={estilos.botaoPrincipal} 
                onPress={() => (nav.navigate('HomeScreen'))} >

                <Texto style={estilos.textoBotaoPrincipal}>{ botaoHome }</Texto>
            </TouchableOpacity>

            <TouchableOpacity 
                style={estilos.botaoSecundario} 
                onPress={() => (nav.pop(2)) } >

                <Texto style={estilos.textoBotaoSedundario}>{ botaoAoProdutor }</Texto>
            </TouchableOpacity>

        </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    imagem:{
        width: '100%',
        alignSelf:'center',
        marginTop: -100
    },
    corpo:{
        padding: 5
    },
    tituloSucesso:{
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#707070'
    },
    compra:{
      color: '#707070',
      fontSize: 20
    },
    botaoPrincipal: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    botaoSecundario: {
        marginTop: 16,
        backgroundColor: "white",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotaoPrincipal: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
      },textoBotaoSedundario: {
        textAlign: "center",
        color: "#2A9F85",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
      },
  })