import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function AddUser({user, setUser, userId, setUserId}){

    const [companyName, setCompanyName] =useState<string> ('');
    const [contactTitle, setContactTitle] =useState<string>('');
    const [city, setCity] =useState<string>('');
    const [country, setCountry] =useState<string>('');
    const [error, setError] =useState<string>('');


    const handleAddUser = () =>{

        if(companyName.trim() === '' || contactTitle.trim() === '' || city.trim() === '' || country.trim() === '' ){
            setError('Xanalari bosh qalib');
            return;
        }


        const newUser = {
            id: userId,
            companyName,
            contactTitle,
            city,
            country,
        };

        setUser([...user, newUser]);
        setCompanyName('');
        setContactTitle('');
        setCity('');
        setCountry('');
        setUserId(userId + 1);
        setError('');
    }

  return (
    <div>
        {error && <p onChange={handleAddUser} style={{color:'red'}}>*Xanalari doldurun!!</p>}
      <Form>
      <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicEmail">
      <Form.Label className='d-flex justify-content-end me-2' style={{width: "200px"}}><span className='me-1' style={{color: "red"}}>*</span> Company Name: </Form.Label>
        <Form.Control type="text" value={companyName} onChange={(e)=> setCompanyName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-end me-2' style={{width: "200px"}}><span className='me-1' style={{color: "red"}}>*</span> Contact Title: </Form.Label>
        <Form.Control type="text" value={contactTitle} onChange={(e)=> setContactTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex align-items-center justify-content-end" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-end me-2' style={{width: "200px"}}><span className='me-1' style={{color: "red"}}>*</span> City: </Form.Label>
        <Form.Control type="text" value={city} onChange={(e)=> setCity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex align-items-center justify-content-end" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-end me-2' style={{width: "200px"}}><span className='me-1' style={{color: "red"}}>*</span> Country: </Form.Label>
        <Form.Control type="text" value={country} onChange={(e)=> setCountry(e.target.value)}/>
      </Form.Group>
      
      <div style={{width:"78%"}}>
      <Button onClick={handleAddUser} variant="primary">
        Submit
      </Button>
      </div> <br />
    </Form>
    </div>
    
  );
}

export default AddUser;
