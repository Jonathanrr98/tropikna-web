import CardVenta from "../../../Components/Card/Card.Venta";
import CardMesas from "../../../Components/Card/CardMesas";
import Layout from "../../../Components/Layout";
import { Grid, Card, Text } from "@nextui-org/react";

export default function App() {
  return (
    <Layout>
      <h1>VENTAS</h1>
      <Grid.Container gap={2} justify='center'>
        <Grid xs={4}>
          <CardVenta />
        </Grid>
        <Grid xs={4}>
          <CardMesas />
        </Grid>
        <Grid xs={4}>
          <CardMesas />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify='center'>
        <Grid xs={4}>
          <CardMesas />
        </Grid>
        <Grid xs={4}>
          <CardMesas />
        </Grid>
        <Grid xs={4}>
          <CardMesas />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify='center'>
        <Grid xs={4}>
          <CardMesas />
        </Grid>
        <Grid xs={4}>
          <CardMesas />
        </Grid>
        <Grid xs={4}>
          <CardMesas />
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
