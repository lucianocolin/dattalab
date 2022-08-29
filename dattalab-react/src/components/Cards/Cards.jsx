import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../css/Cards/Cards.css';
import ShowSurveyModal from '../Modals/ShowSurveyModal';

const Cards = ({ title, year, header }) => {

  const [ showModal, setShowModal ] = useState(false);

  return (
    <>
      <Card 
      style={{ width: '20rem' }} 
      className='card-survey'
      onClick={()=> setShowModal(true)} >
        <Card.Img variant="top" 
        src={header}
        className='card-img' />
        <Card.Body className='card-body'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {year}
          </Card.Text>
          <Button 
          variant="warning"
          onClick={()=> setShowModal(true)} >Ver resultados</Button>
        </Card.Body>
      </Card>

      <ShowSurveyModal 
      show={showModal}
      onHide={()=> setShowModal(false)}
      title={title}
      header={header} />
    </>
  )
};

export default Cards;