import React from 'react'
import Office from './Office'
import Department from './Department'
import Classroom from './Classroom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function App() {

  let districts = [
    {
        id: 1,
        title: 'Malappuram',
        image: 'https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/malappuram.jpg',
        desc: 'Land of Teak'
    },

    {
        id: 2,
        title: 'TVM',
        image: 'https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/malappuram.jpg',
        desc: 'Capital of kerala'
    },


    {
        id: 3,
        title: 'Kollam',
        image: 'https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/malappuram.jpg',
        desc: 'Land of Cashew'
    },


    {
        id: 4,
        title: 'Wayanad',
        image: 'https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/malappuram.jpg',
        desc: 'Paradise of Kerala'
    },


    {
        id: 5,
        title: 'Alappuzha',
        image: 'https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/malappuram.jpg',
        desc: 'Houseboat'
    }
]


  return (
    <div>
      <Container>
        <Row>
          {
            districts.map((e)=>(
              <Col key={e.id}>
                <Card style={{ width: '18rem'}}>
                  <Card.Img variant="top" src={e.image} style={{height:'px'}}/>
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                        {e.desc}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}
