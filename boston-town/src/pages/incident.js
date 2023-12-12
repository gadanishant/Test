import React, { useState } from 'react';
import { List, Button, Modal, Input, Form, DatePicker } from 'antd';
import './incident.css';
import Map from "../../src/map"

const Incident = () => {
  // Replace this data with your actual incident data
  const [allIncidentData, setAllIncidentData] = useState(
    Array.from({ length: 15 }, (_, index) => ({
      id: index + 1,
      title: `Incident ${index + 1}`,
      location: "Boston",
      date: "01/09/2023",
      description: `Description of incident ${index + 1}`,
    }))
  );

  // State variables
  const [showAllIncidents, setShowAllIncidents] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [addIncidentModalVisible, setAddIncidentModalVisible] = useState(false);

  // Form to handle new incident input
  const [form] = Form.useForm();

  // Function to handle incident click and show the modal
  const handleIncidentClick = (incident) => {
    setSelectedIncident(incident);
    Modal.info({
      title: incident.title,
      content: (
        <div>
          <p><strong>Location:</strong> {incident.location}</p>
          <p><strong>Date:</strong> {incident.date}</p>
          <p><strong>Description:</strong> {incident.description}</p>
        </div>
      ),
      onOk() {
        setSelectedIncident(null);
      },
    });
  };

  // Function to handle adding a new incident
  const handleAddIncident = () => {
    setAddIncidentModalVisible(true);
  };

  // Function to handle submitting the new incident form
  const handleAddIncidentSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Entered Data:', values);
        setAllIncidentData((prevData) => [
          ...prevData,
          {
            id: prevData.length + 1,
            ...values,
          },
        ]);
        setAddIncidentModalVisible(false);
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log('Failed:', errorInfo);
      });
  };

  // Function to handle closing the "Add Incident" modal
const handleAddIncidentCancel = () => {
  form.resetFields();
  setAddIncidentModalVisible(false);
};

  return (
    
    <div className="incident-container-padding">
      <div>
        <Map/>
      </div>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <List
          dataSource={allIncidentData.slice(0, showAllIncidents ? undefined : 10)}
          renderItem={(incident) => (
            <List.Item className="incidentList" key={incident.id} onClick={() => handleIncidentClick(incident)}>
              <div>
                <h3>{incident.title}</h3>
                <h4>{incident.location}</h4>
                <h5>{incident.date}</h5>
                <p>{incident.description}</p>
              </div>
            </List.Item>
          )}
        />
      </div>

      <Button className="showAllIncidents" onClick={() => setShowAllIncidents(true)}>
        Show All Incidents
      </Button>

      <Button className="addIncident" onClick={handleAddIncident}>
        Add Incident
      </Button>

      <Modal
      title="Add New Incident"
      open = {addIncidentModalVisible}
      onOk={handleAddIncidentSubmit}
      onCancel={handleAddIncidentCancel}
      >
        <Form form={form}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input placeholder = "Enter the title"/>
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please enter the location' }]}
          >
            <Input placeholder = "Enter the location"/>
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please enter the date' }]}
          >
            <DatePicker placeholder = "Enter the date" format="MM/DD/YYYY" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter the description' }]}
          >
            <Input.TextArea placeholder = "Enter the description"/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Incident;