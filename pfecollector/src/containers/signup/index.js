import React , { useState} from 'react'
import { Container, Form, Button , Row , Col } from "react-bootstrap";
import Layout from "../../components/Layout/index";
import Input from '../../components/ui/input/index'
import { Redirect } from 'react-router-dom'
import { useSelector , useDispatch  } from 'react-redux'
import { signup } from '../../actions'
const Signup =  (props) => {
  const auth = useSelector(state => state.auth)
  const [firstname , setFirstname ] = useState('');
  const [lastname , setLastname ] = useState('');
  const [email , setEmail ] = useState('');
  const [password , setPassword ] = useState('');
  const [contactNumber , setContactNumber ] = useState('');
  const [error , setError ] = useState('');
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const userSignup = (e) =>{
    e.preventDefault();
        const user =  {
          firstname , lastname , email , password , contactNumber 
        }
        dispatch(signup(user))
  }
  if(auth.authenticate){
    return <Redirect to={`/`}/>

  }
 if (user.loading){
   return <p>Loading ... </p>
 }
    return (
       
        <Layout>
        <Container>
          { user.message }
          <Row style={{ marginTop : '100px'}}>
            <Col md={{ span:'6' , offset : '3'}}>
              <Form onSubmit={userSignup}>
                  <Row>
                      <Col md={6}>
                           <Input 
                           label="Firstname"
                           placeholder="Firstname ..."
                           value={firstname}
                           type="text"
                           onChange = { (e) => {setFirstname(e.target.value)}}
                           
                           
                           />
                      </Col>

                      <Col md={6}>
                      <Input 
                           label="lastname"
                           placeholder="lastname ..."
                           value={lastname}
                           type="text"
                           onChange = { (e) => {setLastname(e.target.value)}}
                           
                           
                           />
                      </Col>

                  </Row>
                  <Input 
                           label="email"
                           placeholder="email ..."
                           value={email}
                           type="email"
                           onChange = { (e) => {setEmail(e.target.value)}}
                           
                           
                           />
  
                <Input 
                           label="password"
                           placeholder="password ..."
                           value={password}
                           type="password"
                           onChange = { (e) => {setPassword(e.target.value)}}
                           
                           
                           />
                 <Input 
                           label="Contact number"
                           placeholder="Contact number ..."
                           value={contactNumber}
                           type="text"
                           onChange = { (e) => {setContactNumber(e.target.value)}}
                           
                           
                           />
               
                <Button variant="primary" type="submit">
                  SignUp
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
        
    )
}

export default Signup;