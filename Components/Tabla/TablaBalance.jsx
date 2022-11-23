import React from "react";
import { Table } from "semantic-ui-react";

const colors = ["red", "blue", "green"];

const TablaBalance = () => (
  <div>
    {
      <Table color={"blue"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Total-Entrada</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>700</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    }

    {
      <Table color={"red"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Total-Salida</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>500</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    }

    {
      <Table color={"green"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ganancia Neta</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>200</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    }
    <Table collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Fecha</Table.HeaderCell>
          <Table.HeaderCell>Cantidad CUP</Table.HeaderCell>
          <Table.HeaderCell>Descripción</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>04/11/2022</Table.Cell>
          <Table.Cell>400</Table.Cell>
          <Table.Cell>Cake</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>04/11/2022</Table.Cell>
          <Table.Cell>200</Table.Cell>
          <Table.Cell>Refresco</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>04/11/2022</Table.Cell>
          <Table.Cell>100 </Table.Cell>
          <Table.Cell>Pan</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <Table collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Fecha</Table.HeaderCell>
          <Table.HeaderCell>Cantidad CUP</Table.HeaderCell>
          <Table.HeaderCell>Descripción</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>04/11/2022</Table.Cell>
          <Table.Cell>400</Table.Cell>
          <Table.Cell>Cake</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>04/11/2022</Table.Cell>
          <Table.Cell>200</Table.Cell>
          <Table.Cell>Refresco</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>04/11/2022</Table.Cell>
          <Table.Cell>100 </Table.Cell>
          <Table.Cell>Pan</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);
export default TablaBalance;
