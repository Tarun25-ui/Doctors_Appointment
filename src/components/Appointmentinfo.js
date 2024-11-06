import { Button, ListGroup } from "react-bootstrap";
import {MdDelete} from "react-icons/md"
const AppointmentInfo = ({appointment,onDeleteAppointment}) => {
    return(
        <>
            <ListGroup.Item>
                <p><small>Date: {appointment.AptDate}</small></p>
                <p><strong>First Name:</strong>{appointment.FirstName}</p>
                <p><strong>Last Name:</strong>{appointment.LastName}</p>
                <p><strong>Notes: </strong>{appointment.AptNotes}</p>
                <Button onClick={() => onDeleteAppointment(appointment.id)}  size="sm" variant="danger"><MdDelete />Delete</Button>
            </ListGroup.Item>
        </>
    )
}

export default AppointmentInfo;