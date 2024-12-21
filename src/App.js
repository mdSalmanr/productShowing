import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const product = [
   {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {

    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      },
      {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      },
]


function App() {
  return (
    <Container>
      <h1 className='text-center my-4'> our products</h1>
      <Row>
        {product.map((index,item)=>{
          return(
          <Col key={item} sm={12} md={6} lg={4} className='mb-4'  >
            <Card>
              <Card.Img variant='top' src={index.imageUrl} alt={index.title} />
              <Card.Body>
               <Card.Title>{index.title}</Card.Title>
               <Card.Text>Price:${index.price}</Card.Text>
               <Button variant='primary'  >Add to cart   </Button>
              </Card.Body>
            </Card>
          </Col>
          )
        })}
      </Row>
    </Container> 
  );
}

export default App;
