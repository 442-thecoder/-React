import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'
const About = () => {
  return (
    <div  id="back" className='text-white'>
      <p className=' text-center'>Get to know</p>
      <h5  className=' text-center'>About Me</h5><br />
      <Row>
        <Col><img className=' h-50 align-content-center' src="./src/assets/me 1.jpg" alt="" /></Col>
        <Col><p  className=' text-white align-items-center'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dolor tenetur, facere blanditiis dolore distinctio reprehenderit ducimus in ab perferendis suscipit nesciunt reiciendis necessitatibus recusandae temporibus praesentium facilis iusto accusamus obcaecati! Quod consequuntur sequi harum dolor? Suscipit voluptatibus ex nostrum error obcaecati eos, optio aliquam facilis id fugit incidunt exercitationem odit ut totam? Reiciendis blanditiis, saepe consequuntur, eligendi modi aliquam soluta eaque veritatis ratione hic numquam fugiat iusto perspiciatis voluptas cumque totam ipsum consequatur repellendus qui enim. Consequuntur tenetur quisquam pariatur repellat odio cumque dolor saepe, facere velit voluptatibus iusto nesciunt? Saepe nostrum, nam facere explicabo pariatur voluptatum doloremque, voluptatibus, suscipit cumque a autem unde earum ratione obcaecati quia sequi officia repellendus voluptas. Reprehenderit deleniti rem amet modi totam ab mollitia praesentium, deserunt sint voluptas ratione illo unde consequatur illum nesciunt sed tenetur cum dolore? Veritatis ad doloribus voluptates ipsum, vel dolorum debitis dolor quod ipsa modi laudantium iste repudiandae eum maiores magnam illo corporis temporibus suscipit laborum deserunt blanditiis porro, cumque facilis delectus? Assumenda cumque dicta sint officiis consequatur dolorem, tempore ut voluptas quod quam. Cum pariatur nesciunt, labore impedit commodi deleniti a at, cumque doloribus molestiae deserunt. Reiciendis, placeat magnam quo saepe nesciunt quidem aliquam iste ipsa at.</p></Col>
      </Row>
        <Row>
          <Col> <Card id="backk" className='text-white justify-content-center align-items-center' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/assets/html.png" />
      <Card.Body>
        <Card.Title>HTML</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
          <Col> <Card id="backk" className='text-white' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/assets/css-3.png" />
      <Card.Body>
        <Card.Title>CSS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
          <Col> <Card id="backk" className='text-white' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/assets/js.png" />
      <Card.Body>
        <Card.Title>JAVASCRIPT</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        </Row><br />
        <Row >
          <Col> <Card id="backk" className='text-white' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/assets/bootstrap.png" />
      <Card.Body>
        <Card.Title>BOOTSTRAP</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
          <Col> <Card id="backk" className='text-white' style={{ width: '18rem' }}>
      <Card.Img  variant="top" src="https://www.drupal.org/files/project-images/screenshot_361.png" />
      <Card.Body>
        <Card.Title>TAILWIND CSS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
          <Col> <Card id="backk" className='text-white' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/assets/react.png" />
      <Card.Body>
        <Card.Title>REACT JS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        </Row><br />
 </div>
  )
}

export default About
