import {useEffect, useState} from "react";
import Contact from "./Contact";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Experiments() {
    // 1. UseEffect ->
    // 2. UseState
    // 3. UseRef
    useEffect(() => {
        // alert("Hello ")
    }, [])
    const [userDetail, setUserDetails] = useState({
        username: 'Fahad Shahzad',
        email: 'fahadqureshi.se@gmail.com'
    })

    function submitInformation() {
        // data to server
        console.log(userDetail)
    }

    return (
        <div className={"project-section p-4"}>
            <h1>Experiments</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=> setUserDetails({...userDetail, email: e.target.value})}  value={userDetail.email} type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>User Name</Form.Label>
                <Form.Control onChange={(e)=> setUserDetails({...userDetail, username: e.target.value})} value={userDetail.username} type="text" placeholder="Password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button onClick={submitInformation} variant="light" type="submit">
                Submit
            </Button>
        </div>
    )
}
