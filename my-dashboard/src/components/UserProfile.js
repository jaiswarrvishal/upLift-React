// src/components/UserProfile.js
import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function UserProfile() {
  return (
    <Card>
      <Card.Header as="h5">Edit Profile</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit">Update Profile</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default UserProfile;
