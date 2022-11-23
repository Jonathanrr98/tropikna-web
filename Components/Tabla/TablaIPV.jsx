import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";
import { Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { IconButton } from "./IconButton";

import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";

function TablaIPV() {
  return (
    <>
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Producto</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
            <Table.HeaderCell>Inicio</Table.HeaderCell>
            <Table.HeaderCell>Entrada</Table.HeaderCell>
            <Table.HeaderCell>Final</Table.HeaderCell>
            <Table.HeaderCell>Venta</Table.HeaderCell>
            <Table.HeaderCell>Monto</Table.HeaderCell>
            <Table.HeaderCell>Editar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip content='Edit user'>
                <IconButton
                  onClick={() => console.log("Edit user", productos.Costo)}
                >
                  <EditIcon size={20} fill='#979797' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip
                content='Delete user'
                color='error'
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill='#FF0080' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip content='Edit user'>
                <IconButton
                  onClick={() => console.log("Edit user", productos.Costo)}
                >
                  <EditIcon size={20} fill='#979797' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip
                content='Delete user'
                color='error'
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill='#FF0080' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip content='Edit user'>
                <IconButton
                  onClick={() => console.log("Edit user", productos.Costo)}
                >
                  <EditIcon size={20} fill='#979797' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip
                content='Delete user'
                color='error'
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill='#FF0080' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip content='Edit user'>
                <IconButton
                  onClick={() => console.log("Edit user", productos.Costo)}
                >
                  <EditIcon size={20} fill='#979797' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip
                content='Delete user'
                color='error'
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill='#FF0080' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip content='Edit user'>
                <IconButton
                  onClick={() => console.log("Edit user", productos.Costo)}
                >
                  <EditIcon size={20} fill='#979797' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip
                content='Delete user'
                color='error'
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill='#FF0080' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip content='Edit user'>
                <IconButton
                  onClick={() => console.log("Edit user", productos.Costo)}
                >
                  <EditIcon size={20} fill='#979797' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
            <Table.Cell css={{ d: "flex" }}>
              <Tooltip
                content='Delete user'
                color='error'
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill='#FF0080' />
                </IconButton>
              </Tooltip>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='9'>
              <Button
                floated='right'
                icon
                labelPosition='left'
                primary
                size='small'
              >
                <Icon name='pencil' /> Editar IPV
              </Button>
              <Button size='small' className='sucess'>
                Cerrar Día
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

      <h1 className='float-end'>
        Total: <strong>49820</strong>
      </h1>
    </>
  );
}

export default TablaIPV;
