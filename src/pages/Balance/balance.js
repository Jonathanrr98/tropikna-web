import Layout from "../../../Components/Layout";
import TablaBalance from "../../../Components/Tabla/TablaBalance";

export default function App() {
  return (
    <Layout>
      <header className='align-center'>
        {" "}
        <h1>Balance Cub-Ita Tropikna</h1>
        <h2>Mes</h2>
      </header>

      <TablaBalance />
    </Layout>
  );
}
