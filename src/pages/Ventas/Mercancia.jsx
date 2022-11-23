import Layout from "../../../Components/Layout";
import "semantic-ui-css/semantic.min.css";
import ModalPedido from "../../../Components/Modal/ModalPedido";

export default function App() {
  return (
    <Layout>
      <h1>Pedido</h1>

      <ModalPedido />
    </Layout>
  );
}
