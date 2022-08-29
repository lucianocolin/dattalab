import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../css/Modal/ShowSurveyModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
 
const ShowSurveyModal = ({ show, onHide, title, header }) => {

  const twLogo = <FontAwesomeIcon icon={faTwitter} />
  const igLogo = <FontAwesomeIcon icon={faInstagram} />
  const fbLogo = <FontAwesomeIcon icon={faFacebook} />

  return (
    <Modal
      show={show}
      size='xl'
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='survey-modal'
    >
      <Modal.Header className='survey-modal-header'>
        <Modal.Title 
        id="contained-modal-title-vcenter"
        className='survey-modal-title' >
          <h3>{title}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='survey-modal-body'>
        <div className='survey-modal-img-container'>
          <img src={header} alt="img prueba" />
        </div>
        <div className='survey-modal-results'>
          <h4>Descripción</h4>
          <p>AAAAAAAAAAAAA</p>
        </div>
        <div>
          <a href='a' target='blank' className='survey-tw-logo'>{twLogo}</a>
          <a href='a' target='blank' className='survey-ig-logo'>{igLogo}</a>
          <a href='a' target='blank' className='survey-fb-logo'>{fbLogo}</a>
        </div>
      </Modal.Body>
      <Modal.Footer className='survey-modal-footer'>
        <Button variant='danger' onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ShowSurveyModal;