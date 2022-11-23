import { Table } from "semantic-ui-react";

const colors = ["blue"];

export default function TablasPedido() {
  {
    colors.map((color) => (
      <Table className='mt-3' color={color} key={color}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Producto</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Apples</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Orange</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ));
  }
}
