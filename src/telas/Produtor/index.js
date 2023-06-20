import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native"
import Cesta from "./componentes/Cesta";

import useTextos from "../../hooks/useTextos";

import topo from '../../assets/produtores/topo.png'
import Topo from "../../componentes/Topo";

export default function ProdutorDetalhes() {
    const route = useRoute()
    const {tituloProdutor, tituloCestas} = useTextos()
    const {nome, imagem, cestas} = route.params

    function TopoLista() {
        return <>
            <Topo titulo={tituloProdutor} imagem={topo} altura={150} />
            <View style={estilos.conteudo} >
                <View style={estilos.logo} >
                    <Image source={imagem} style={estilos.produtorImage}/>
                    <Text style={estilos.produtor}>{nome}</Text>
                    <Text style={estilos.cestas}>{tituloCestas}</Text>
                </View>
            </View>
        </>
    }
    return(
        <FlatList
            data={cestas}
            keyExtractor={(item)=>item.nome}
            renderItem={({item})=><Cesta {...item} produtor={{nome, imagem}} />}
            style={estilos.lista}
            ListHeaderComponent={TopoLista}
        />
    )
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 65,
        height: 65,
        marginTop: -23,
        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
