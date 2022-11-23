import { Card, Grid, Text } from "@nextui-org/react";
import Link from "next/link";

export default function CardMesas() {
  return (
    <Link href='/Ventas/Mercancia'>
      <Card className='float-start' css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h1 css={{ lineHeight: "$xs" }}>
                Mesa {"#"}
              </Text>
            </Grid>
            <Grid xs={12}></Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>Seleccione para registrar una venta en una mesa.</Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Link>
  );
}
