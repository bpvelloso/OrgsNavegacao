import { SafeAreaView, StatusBar } from "react-native";
import useProdutores from "./src/hooks/useProdutores";
import AppRotas from "./src/rotas/AppRotas";

export default function App() {
  const produtores = useProdutores(false);
  return <SafeAreaView style={{ flex: 1 }}>
          <StatusBar />
          <AppRotas />    
        </SafeAreaView>
}