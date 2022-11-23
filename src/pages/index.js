import Layout from "../../Components/Layout";
import "semantic-ui-css/semantic.min.css";
import BarraRedes from "../../Components/Redes/BarraRedes";

export default function App() {
  return (
    <Layout>
      <h1>Inicio</h1>

      <footer>
        {" "}
        <BarraRedes />
      </footer>
    </Layout>
  );
}
