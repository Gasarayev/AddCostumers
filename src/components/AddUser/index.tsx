import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddUser() {
  return (
    <div>
      <Form>
      <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicEmail">
      <Form.Label className='d-flex justify-content-end me-2' style={{width: "200px"}}><span className='me-1' style={{color: "red"}}>*</span> Company Name: </Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-end me-2' style={{width: "200px"}}><span className='me-1' style={{color: "red"}}>*</span> Contact Title: </Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex align-items-center justify-content-end" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-end me-2' style={{width: "200px"}}><span className='me-1' style={{color: "red"}}>*</span> City: </Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex align-items-center justify-content-end" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-end me-2' style={{width: "200px"}}><span className='me-1' style={{color: "red"}}>*</span> Country: </Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default AddUser;
