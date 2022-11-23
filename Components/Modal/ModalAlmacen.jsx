import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { Mail } from "./Mail";

export default function ModalAlmacen() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto ghost color='primary' className='mt-3' onClick={handler}>
        Añadir nuevo producto
      </Button>
      <Modal
        closeButton
        preventClose
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Igresar Nuevo
            <Text b size={18}>
              Producto
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Producto'
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Costo'
          />

          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Cantidad'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error' onClick={closeHandler}>
            Cerrar
          </Button>
          <Button auto onClick={closeHandler}>
            Añadir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
