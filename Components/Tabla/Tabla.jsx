import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";

import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import ModalAlmacen from "../Modal/ModalAlmacen";

export default function Tabla() {
  const columns = [
    { name: "PRODUCTO", uid: "PRODUCTO" },
    { name: "COSTO", uid: "COSTO" },
    { name: "CANTIDAD", uid: "CANTIDAD" },
    { name: "PRECIO DE VENTA", uid: "PRECIODEVENTA" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const productos = [
    {
      id: 1,
      Producto: "REFRESCO",
      Costo: "165",
      Cantidad: "45",
      PrecioVenta: "169",
    },

    {
      id: 2,
      Producto: "Pan",
      Costo: "89",
      Cantidad: "100",
      PrecioVenta: "169",
    },
    {
      id: 1,
      Producto: "REFRESCO",
      Costo: "165",
      Cantidad: "45",
      PrecioVenta: "169",
    },

    {
      id: 2,
      Producto: "Pan",
      Costo: "89",
      Cantidad: "100",
      PrecioVenta: "169",
    },
    {
      id: 1,
      Producto: "REFRESCO",
      Costo: "165",
      Cantidad: "45",
      PrecioVenta: "169",
    },

    {
      id: 2,
      Producto: "Pan",
      Costo: "89",
      Cantidad: "100",
      PrecioVenta: "169",
    },
  ];
  const renderCell = (productos, columnKey) => {
    const cellValue = productos[columnKey];
    switch (columnKey) {
      case "PRODUCTO":
        return (
          <Col>
            <Row>
              <Text b size={13}>
                {productos.Producto}
              </Text>
            </Row>
          </Col>
        );
      case "COSTO":
        return (
          <Col>
            <Row>
              <Text b size={13}>
                {productos.Costo}
              </Text>
            </Row>
          </Col>
        );
      case "CANTIDAD":
        return (
          <Col>
            <Row>
              <Text b size={13}>
                {productos.Cantidad}
              </Text>
            </Row>
          </Col>
        );

      case "PRECIODEVENTA":
        return (
          <Col>
            <Row>
              <Text b size={13}>
                {productos.PrecioVenta}
              </Text>
            </Row>
          </Col>
        );
      case "actions":
        return (
          <Row justify='center' align='center'>
            <Col css={{ d: "flex" }}>
              <Tooltip content='Details'>
                <IconButton
                  onClick={() => console.log("View user", productos.id)}
                ></IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content='Edit user'>
                <IconButton
                  onClick={() => console.log("Edit user", productos.Costo)}
                >
                  <EditIcon size={20} fill='#979797' />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content='Delete user'
                color='error'
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill='#FF0080' />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <>
      <Table
        aria-label='Example table with custom cells'
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode='none'
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={productos}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <ModalAlmacen />
    </>
  );
}
