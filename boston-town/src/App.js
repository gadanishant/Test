import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Login from './pages/customer/login/login';
import Signup from './pages/customer/signup/signup';
import ApartmentListings from './pages/customer/apartmentListings/apartmentListings'
import Home from './pages/home';
import Feed from './pages/feed';
import Profile from './pages/profile';
import AboutUs from './pages/aboutUs'
import Incidents from './pages/incident'

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Navbar />
					{/* <hr /> */}
					{/* <Home /> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/feed" element={<Feed />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route path="/listing" element={<ApartmentListings />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/aboutUs" element={<AboutUs />} />
						<Route path="/incidents" element={<Incidents />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
