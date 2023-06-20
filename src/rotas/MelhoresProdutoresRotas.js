import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtor from "../telas/Produtores/componentes/Produtor";
import Home from "../telas/Produtores/Home";
import ProdutorRotas from "./ProdutorRotas";
import MelhoresProdutores from "../telas/Produtores/MelhoresProdutores";


export default function MelhoresProdutoresRotas(params) {
    const Stack = createNativeStackNavigator();

    return (
        <ProdutorRotas ComponentePrincipal={MelhoresProdutores}/>
    )
}