import { Button, Grid } from "@nextui-org/react";

export default function Boton() {
  return (
    <Grid.Container gap={2} type AlignContent='flex-end'>
      <Grid>
        <Button color='primary' auto>
          Añadir producto
        </Button>
      </Grid>
    </Grid.Container>
  );
}
