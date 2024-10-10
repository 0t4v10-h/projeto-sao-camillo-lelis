import InfoDoacoes from "./components/doacoes/InfoDoacoes";
import Menu from "./components/menu/Menu";
import SobreNos from "./components/SobreNos/SobreNos";
import "./styles/styles.css";

export default function App() {
  return (
    <div>
      <Menu />
      <InfoDoacoes />
      <SobreNos />
    </div>
  );
}
