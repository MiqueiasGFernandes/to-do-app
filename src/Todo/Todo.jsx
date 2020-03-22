import React, {useState} from 'react';
import { Container, Row, Col, Input, Button, Table } from 'reactstrap';
import Axios from 'axios';

export default (props)=> {
  
const [description, setDescription] = useState("");

 function getDescription(){
  Axios.get("http://127.0.0.1:8000/api/tasks")
    .then(resolve => {
      setDescription(resolve.data);
    })
  }
  
document.onload = getDescription();

return (
  <div>
    <Container>
      <main>
      <Row className="mt-5 pb-3" xs="12">
        <Col>
          <h1 className="d-inline">Tasks</h1><h2 className="descr d-inline ml-2">Register</h2>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col xs="9">
          <Input xs="9" type="text" placeholder="Add your task here..." name="taskTxt" id="taskTxt"/>
        </Col>
        <Col xs="3">
          <Button className="btnAdd" color="info" >
            Add
          </Button>
          <Button className="ml-left" outline color="secoundary" >
            Search
          </Button>
        </Col>
      </Row>

      <Table>
        <thead>
          <tr>
            <th className="text-left">
              Description
            </th>
            <th className="text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody id="tbody">
          {description}
        </tbody>
      </Table>
      </main>
    </Container>
  </div>
);
}