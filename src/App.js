import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillCalendar2CheckFill} from "react-icons/bs";
import {  Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Search from "./components/Search";
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/Appointmentinfo';
import { useCallback, useEffect, useState } from 'react';


function App() {

  let [AppointmentList, setAppointmentList] = useState([]);
  let [query, setQuery]= useState("");
  let [sortBy, setSortBy] = useState("FirstName");
  let [orderBy, setOrderBy] = useState("asc")


  const filteredAppoinments = AppointmentList.filter(
    item => {
      return (
        item.FirstName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.LastName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.AptNotes.toLowerCase().includes(query.toLocaleLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === "asc") ? 1 : -1;
    return(
      a[sortBy].toLowerCase()< b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback (() => {
    fetch('./data.json')
    .then(Response => Response.json())
    .then(data => {
      setAppointmentList(data)
    });
  }, [])

  useEffect(() => {
    fetchData()
  },[fetchData])
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className='text-center fw-light mt-3'><BsFillCalendar2CheckFill />Apoointments</h1>

            
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <AddAppointment 
          onSendAppointment={myAppointment => setAppointmentList([...AppointmentList, myAppointment])} 
          lastId={AppointmentList.reduce((max, item)=> Number(item.id) > max ? Number(item.id) : max,0)}/>

        </Row>
        <Row className='justify-content-center'>
          <Col md="4">
            <Search 
             query={query} 
             onQueryChange = {myQuery => setQuery(myQuery)}
             orderBy = {orderBy}
             onOrderByChange={mySort => setOrderBy(mySort)}
             sortBy={sortBy}
             onSortByChange={myySort => setSortBy(myySort)}/>
          </Col> 
        </Row>
        <Row className='justify-content-center'>
          <Col md='8'>
            <Card className='mb-3'>
              <Card.Header>Appointments</Card.Header>
              <ListGroup variant='flush'>
                {filteredAppoinments.map(appointment => (
                  <AppointmentInfo key={appointment.id} appointment={appointment}
                  onDeleteAppointment = {
                    appointmentId => setAppointmentList(AppointmentList.filter(
                      appointment => appointment.id !== appointmentId
                    ))
                  } />
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
        </Container>
     
      
    </div>
  );
}

export default App;
