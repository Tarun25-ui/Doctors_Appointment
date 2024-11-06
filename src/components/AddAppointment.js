import { Col, Form,Card,Row, Button } from "react-bootstrap";
import { useState } from "react";

const AddAppointment = ({onSendAppointment, lastId}) => {

    const clearData = {
        FirstName: '',
        LastName: '',
        aptDate: '',
        aptTime: '',
        AptNotes: ''
    }

    let [toggleForm, setToggleForm]= useState(false);
    let [formData, setFormData] = useState(clearData);

    function formDataPublish(){
        const AppointmentInfo = {
            id: lastId + 1,
            FirstName: formData.FirstName,
            LastName: formData.LastName,
            aptDate: formData.aptDate + ' ' + formData.aptTime,
            AptNotes: formData.AptNotes
        }
        onSendAppointment(AppointmentInfo);
        setFormData(clearData);
        setToggleForm(!toggleForm);
    }
    return (
        <>
             <Col md="8">
                    <Card className='mb-3'>
                        <Card.Header>Doctor_Details 
                            <Button size="sm" 
                            className="small float-end" 
                            onClick={() => {setToggleForm(!toggleForm)}}>+</Button>
                        </Card.Header>
                        {toggleForm &&
                            <Card.Body>
                            <Form>
                                <Row className='mb-3'>
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" id="FirstName"
                                        onChange={(Event) =>setFormData({...formData,FirstName: Event.target.value})}/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" id="LastName"
                                        onChange={(Event) =>setFormData({...formData,LastName: Event.target.value})}/>
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Col} className="mb-3">
                                        <Form.Label>Doctor Number</Form.Label>
                                        <Form.Control type="number" id="number"
                                        onChange={(Event) =>setFormData({...formData,number: Event.target.value})}/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                        <Form.Label>Appointment Time</Form.Label>
                                        <Form.Control type="time" id="AptTime"
                                        onChange={(Event) =>setFormData({...formData,AptTime: Event.target.value})}/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                        <Form.Label>Comments</Form.Label>
                                        <Form.Control as="textarea" placeholder="Comments" id="AptNotes"
                                        onChange={(Event) =>setFormData({...formData,AptNotes: Event.target.value})}/>
                                </Form.Group>
                                <Button variant="primary" onClick={formDataPublish}>Submit</Button>

                            </Form>
                        </Card.Body>
                        }
                    </Card>
             
             </Col>
        </>
    )
}

export default AddAppointment;