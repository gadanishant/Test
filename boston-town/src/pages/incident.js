import React, { useContext, useEffect, useState } from 'react';
import { List, Button, Modal, Input, Form, DatePicker } from 'antd';
import './incident.css';
import Map from "../../src/map"
import sendRequest from '../components/sendRequest';
import { Context } from '../components/context';

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
	const { user, setUser } = useContext(Context);
	const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticated"));
	const [showAllIncidents, setShowAllIncidents] = useState(false);
	const [selectedIncident, setSelectedIncident] = useState(null);
	const [addIncidentModalVisible, setAddIncidentModalVisible] = useState(false);
	const [listOfIncidents, setListOfIncidents] = useState([]);
	const [incidentCount, setIncidentCount] = useState(0)

	const [newIncidentTitle, setNewIncidentTitle] = useState("");
	const [newIncidentLocation, setNewIncidentLocation] = useState("");
	const [newIncidentDate, setNewIncidentDate] = useState();
	const [newIncidentDescription, setNewIncidentDescription] = useState();

	// Form to handle new incident input
	const [form] = Form.useForm();

	const getAllIncidentsAPI = async () => {
		console.log("getAllIncidentsAPI");
		try {
			const response = await sendRequest("http://localhost:3000/getAllIncidents", {}, "GET", {});

			const data = response.data.description.slice(1);
			setIncidentCount(response.data.description[0].count)
			setListOfIncidents(data);
		} catch (error) {
			console.log("getAllIncidentsAPI: error => ", error);
		}
	}

	const addNewIncidentAPI = async () => {
		console.log("newIncidentTitle => ", newIncidentTitle);
		console.log("newIncidentLocation => ", newIncidentLocation);
		console.log("newIncidentDate => ", newIncidentDate);
		console.log("newIncidentDescription => ", newIncidentDescription);
		try {
			const response = await sendRequest("http://localhost:3000/addNewIncident", {
				"firstName": user.firstName,
				"lastName": user.lastName,
				"username": user.username,
				"email": user.email,
				"gender": user.gender,
				"age": 24,
				"country": null,
				"mobile": "+1-653-322-4924",
				"profession": null,
				"incidentTitle": "Budget magazine law all mind.",
				"incidentDescription": null,
				"incidentIntensity": "Scary",
				"incidentLocation": "4250 Kathleen Gardens\nNicholasport, AR 28833",
				"incidentDate": "2020-06-24T00:00:00.000Z",
				"submissionDate": "2023-12-11T00:00:00.000Z"
			}, "POST", {});
		} catch (error) {

		}
	}

	const setIncidentTitle = (e) => {
		setNewIncidentTitle(e.target.value);
	}
	const setIncidentLocation = (e) => {
		setNewIncidentLocation(e.target.value);
	}
	const setIncidentDate = (e) => {
		setNewIncidentDate(e.target.value);
	}
	const setIncidentDescription = (e) => {
		setNewIncidentDescription(e.target.value);
	}

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
		console.log("handleAddIncidentSubmit => ", handleAddIncidentSubmit);
		form
			.validateFields()
			.then((values) => {
				console.log('Entered Data:', values);
				setListOfIncidents((prevData) => [
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

	useEffect(() => {
		setIsAuthenticated(sessionStorage.getItem("isAuthenticated"));
		console.log("Incidents: user => ", user);
		console.log("isAuthenticated => ", isAuthenticated);
	}, [sessionStorage.getItem("isAuthenticated"), user]);

	useEffect(() => {
		getAllIncidentsAPI();
	}, [])

	// Function to handle closing the "Add Incident" modal
	const handleAddIncidentCancel = () => {
		form.resetFields();
		setAddIncidentModalVisible(false);
	};

	return (
		(isAuthenticated ?
			<div className="incident-container-padding">
				<h4>Upto {incidentCount} incidents reported so far.. </h4>
				<br />
				<div style={{ maxHeight: '300px', overflowY: 'auto' }}>
					<List
						dataSource={listOfIncidents.slice(0, showAllIncidents ? undefined : 10)}
						renderItem={(incident) => (
							<List.Item className="incidentList" key={incident.id} onClick={() => handleIncidentClick(incident)}>
								<div>
									<h3>{incident.incidentTitle}</h3>
									<h4>{incident.incidentLocation}</h4>
									<h5>{incident.incidentDate}</h5>
									<p>{incident.incidentDescription}</p>
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
					open={addIncidentModalVisible}
					onOk={addNewIncidentAPI}
					onCancel={handleAddIncidentCancel}
				>
					<Form form={form}>
						<Form.Item
							label="Title"
							name="title"
							rules={[{ required: true, message: 'Please enter the title' }]}
						>
							<Input onBlur={setIncidentTitle} placeholder="Enter the title" />
						</Form.Item>
						<Form.Item
							label="Location"
							name="location"
							rules={[{ required: true, message: 'Please enter the location' }]}
						>
							<Input onBlur={setIncidentLocation} placeholder="Enter the location" />
						</Form.Item>
						<Form.Item
							label="Date"
							name="date"
							rules={[{ required: true, message: 'Please enter the date' }]}
						>
							<DatePicker onBlur={setIncidentDate} placeholder="Enter the date" format="MM/DD/YYYY" style={{ width: '100%' }} />
						</Form.Item>
						<Form.Item
							label="Description"
							name="description"
							rules={[{ required: true, message: 'Please enter the description' }]}
						>
							<Input.TextArea onBlur={setIncidentDescription} placeholder="Enter the description" />
						</Form.Item>
					</Form>
				</Modal>
			</div>
			: <></>
		)
	);
};

export default Incident;