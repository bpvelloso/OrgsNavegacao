import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtor from "../telas/Produtores/componentes/Produtor";
import Home from "../telas/Produtores/Home";
import ProdutorDetalhes from "../telas/Produtor";
import Cesta from "../telas/Cesta"
import FinalPedido from "../telas/FinalPedido";

export default function ProdutorRotas({ComponentePrincipal=Home}) {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
                headerShown: false
                }}>
            <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
            <Stack.Screen name="Produtor" component={ProdutorDetalhes} />
            <Stack.Screen name="Cesta" component={Cesta} />
            <Stack.Screen name="FinalPedido" component={FinalPedido} options={{
                headerShown:true
            }}/>
        </Stack.Navigator>
    )
}