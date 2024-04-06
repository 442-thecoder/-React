import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import aos from 'aos'
const Home = () => {
  return (
    <div>
      <h6 className='text-white text-center'>Hello i'm</h6><br />
      <h3 className='text-white text-center'>442 CODER</h3><br />
      <h4 className='text-white text-center'>Front END DEVELOPER</h4><br />
     <Row>
        <Col><img src="./src/assets/github.png" alt="" /><span><img src="" alt="" /></span></Col>
        <Col><Button variant="primary">Primary</Button><span><Button variant="primary">Primary</Button></span></Col>
        <Col></Col>
     </Row>
    </div>
  )
}

export default Home
