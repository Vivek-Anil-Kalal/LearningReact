import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";

export default function AlertDemo() {
    return <Alert variant="success" style={{ width: "42rem" }}>
        <Alert.Heading>
            This is a success alert which has green background
        </Alert.Heading>
    </Alert>

}