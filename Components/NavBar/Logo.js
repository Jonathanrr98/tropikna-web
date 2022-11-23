import { Avatar, Grid } from "@nextui-org/react";

export default function Logo() {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Avatar size='lg' src='../../public/img/Tropiknalogo' zoomed />
      </Grid>
    </Grid.Container>
  );
}
