import Layout from "../../../Components/Layout";
import ModalAlmacen from "../../../Components/Modal/ModalAlmacen";

import Tabla from "../../../Components/Tabla/Tabla";
import TablaAlmacen from "../../../Components/Tabla/TablaAlmacen";
import Tabla2 from "../../../Components/Tabla/TablaIPV";

export default function App() {
  return (
    <Layout>
      <TablaAlmacen />

      <ModalAlmacen />
    </Layout>
  );
}
