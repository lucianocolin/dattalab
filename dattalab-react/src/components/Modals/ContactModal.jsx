import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../css/Modal/ContactModal.css';

const ContactModal = ( { show, onHide } ) => {

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    teléfono: ''
  });

  const initialValues = {
    name: '',
    lastname: '',
    mail: '',
    phone: ''
  };

  const [error, setError] = useState({});

  const handleChange = e =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  };

  const handleOnBlur = e =>{
    if(e.target.value === ''){
    setError({
      ...error,
      [e.target.name] : `El ${e.target.name} es obligatorio`
    })} else{
    setError({
      ...error,
      [e.target.name] : ''
    });
    }
  };

  const handleOnFocus = e =>{
    if(e.target.value ===! ''){
      setError({})
    }
  }

  const handleSubmit = e =>{
    e.preventDefault();
    console.log('Enviando', form)
    setForm(initialValues);
    onHide(true);
  }


  return (
        <Modal
          show={show}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className='contact-modal'
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Contactate con nosotros
            </Modal.Title>
          </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className='modal-body'>
            <Form.Group className="mb-3 modal-section" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
            name="nombre" 
            type="text" 
            placeholder="Nombre/s"
            className='inputs'
            onChange={handleChange}
            value={form.nombre}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}/>
            <p>
              {
                error.nombre && <p className='errorMsg'>{error.nombre}</p>
              }
            </p>
            </Form.Group>
            <Form.Group className="mb-3 modal-section" controlId="formBasicPassword">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
              name="apellido" 
              type="text" 
              placeholder="Apellido/s" 
              className='inputs'
              onChange={handleChange}
              value={form.apellido}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}/>
              <div>
              {
                error.apellido && <p className='errorMsg'>{error.apellido}</p>
              }
              </div>
            </Form.Group>
            <Form.Group className="mb-3 modal-section" controlId="formBasicMail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
              name="correo" 
              type="email" 
              placeholder="ejemplo@gmail.com" 
              className='inputs'
              onChange={handleChange}
              value={form.correo}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}/>
              <div>
              {
                error.correo && <p className='errorMsg'>{error.correo}</p>
              }
              </div>
            </Form.Group>
            <Form.Group className="mb-3 modal-section" controlId="formBasicPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
              name="teléfono" 
              type="tel" 
              placeholder="+(Cód. de área) Número de teléfono" 
              className='inputs'
              onChange={handleChange}
              value={form.teléfono}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}/>
              <div>
              {
                error.teléfono && <p className='errorMsg'>{error.teléfono}</p>
              }
              </div>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button 
            onClick={onHide} 
            variant='danger'
            className='contact-modal-cancel-btn' >Cancelar</Button>
            <Button 
            variant="success" 
            type="submit"
            className='contact-modal-send-btn' >
              Enviar
            </Button>
          </Modal.Footer>
        </Form>
        </Modal>
      );
    }

export default ContactModal