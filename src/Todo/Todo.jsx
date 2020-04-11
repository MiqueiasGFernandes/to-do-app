import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Input, Button, Table } from 'reactstrap';
import { MdAdd, MdSearch, MdDone, MdDelete, MdClose } from 'react-icons/md';

import Axios from 'axios';
export default (props)=> {
  
const [description, setDescription] = useState([]);
const [inSearch, setInSearch] = useState(false);
const apiUrl = "http://127.0.0.1:8000/api/tasks";

useEffect(() => {
  getData();
}, []);

function getTaskData(){
  return {
      description: document.getElementById("taskTxt").value,
      done: false
    }
}

function deleteTask(id){
  Axios.delete(apiUrl + "/" + id).then(response => {
    console.warn("Tarefa de id " + id + " deletada com sucesso!");
    getData();
  }).catch(reject => {
    console.error("Erro", reject);
  })
    
}

function toggleCompleteTask(item){
  item.done = (item.done) ? false : true
  Axios.put(apiUrl + "/" + item.id, item)
    .then(response => {
      console.info("Tarefa concluída com sucesso!");
      getData();
    })
    .catch(reject => {
      console.error("Erro", reject);
    })
}

function newTask(){
  Axios.post(apiUrl, getTaskData()).then(response => {
    console.info(getTaskData());
    getData();
    document.getElementById("taskTxt").value = "";
  }).catch(reject => {
    console.error("Erro", reject);
  })
}


function getData(){
  Axios.get(apiUrl)
  .then(response => {
    setDescription(response.data);
  });
}


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
        <Col xs="10">
          <Input type="text" placeholder="Add your task here..." name="taskTxt" id="taskTxt"/>
        </Col>
        <Col xs="2">
          <Button className="btnAdd" onClick={newTask} color="info" >
            <MdAdd/>
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
          {description.map(item => (
            <tr key={item.id}>
              <td>{(item.done) ? <del>{item.description}</del> : item.description}</td> 
              <td className="text-right">
                <Button className="mr-1" onClick={(e) => toggleCompleteTask(item)} color={( item.done ) ? "warning" : "success" }>
                  {(item.done) ? <MdClose/> : <MdDone/>}
                </Button>  
                <Button color="danger" onClick={(e) => deleteTask(item.id)}>
                  <MdDelete/>
                </Button>
              </td> 
            </tr>
          ))}
        </tbody>
      </Table>
      </main>
    </Container>
  </div>
  );
}