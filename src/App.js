import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import Button from 'react-bootstrap/button'

function App() {
  return (
    <div className="App">
<h1>Contact us</h1>
<p>A problem, a question, want to send us a message of love? Do not hesitate to use this form to contact us !</p>
<form action="/page-traitement-donnees" method="post"/>
<Form>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
    <Form.Label column sm="2">
    Name
    </Form.Label>
    <Col sm="10">
      <Form.Control placeholder="Enter your name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumber">
    <Form.Label column sm="2">
    Telephone
    </Form.Label>
    <Col sm="10">
      <Form.Control  placeholder="+89 4352718955" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email"  placeholder="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password"  placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextMessage">
    <Form.Label column sm="2">
     message
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text"  placeholder="Enter your message please" />
    </Col>
  </Form.Group>

  <Button variant="primary" size="lg" active>
    Send message
  </Button>
  
</Form> 
      
    </div>
  );
}

export default App;
