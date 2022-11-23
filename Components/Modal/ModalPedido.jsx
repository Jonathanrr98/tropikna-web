import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { Label } from "semantic-ui-react";
import SelectPedido from "../Select.Pedido/SelectPedido";

export default function ModalPedido() {
  const { setVisible, bindings } = useModal();
  return (
    <div className='d-flex justify-content-center'>
      <Button auto shadow color='secondary' onClick={() => setVisible(true)}>
        Open modal
      </Button>
      <div className='d-flex justify-content-center '>
        <Modal
          className=''
          width='600px'
          aria-labelledby='modal-title'
          aria-describedby='modal-description'
          {...bindings}
        >
          <Modal.Header>
            <Text id='modal-title'>Modal with a lot of content</Text>
          </Modal.Header>
          <Modal.Body>
            <Label className='m-3'>Seleccione un producto</Label>
            <SelectPedido />
            <Label className='m-3'>Seleccione la cantidad de productos</Label>
            <SelectPedido />
            <Button auto flat color='primary' onClick={() => setVisible(false)}>
              Close
            </Button>
            <Button auto onClick={() => setVisible(false)}>
              Agree
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
