import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from './base_url';
import  axios  from 'axios';
import { Col, Image, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';


function ViewRestaurant() {

  const[RestDetails,setRestDetails] =useState({})
  //destructuring - use id instead of pathParams
  // const pathParams = useParams()
  //console.log(pathParams); //{id:'3'}
  const {id} = useParams()
  console.log(id);

  //api call for fetch particular restaurant details
    const fetchData=async()=>{
      const {data}=await axios.get(`${base_url}/restaurants/${id}`);
      // console.log(data);
      setRestDetails(data)
    }
    console.log(RestDetails);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>
      {
        RestDetails?
        <Row>
        <Col sm={12} md={3}>
          <Image className='border rounded p-2 m-2' src={`${RestDetails?.photograph}`} fluid/>
        </Col>
        <Col md={8}>
          <h2>{RestDetails?.name}</h2> 
          <h5>{RestDetails?.neighborhood}</h5>
          <ListGroup>
            
            <ListGroup.Item>cuisine : {RestDetails?.cuisine_type}</ListGroup.Item>
            <ListGroup.Item><RestOp op={RestDetails?.operating_hours}/></ListGroup.Item>
            <ListGroup.Item><RestReview review={RestDetails?.reviews}/></ListGroup.Item>
      
          </ListGroup>
        </Col>
      </Row>:''
      }
     

    </div>
  )
}

export default ViewRestaurant