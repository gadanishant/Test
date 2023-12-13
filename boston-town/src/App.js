import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import AboutUs from './pages/aboutUs';
import ApartmentListings from './pages/customer/apartmentListings/apartmentListings';
import ApartmentDetails from './pages/customer/apartmentListings/apartmentdetails';
import Login from './pages/customer/login/login';
import Signup from './pages/customer/signup/signup';
import Feed from './pages/feed';
import Home from './pages/home';
import Incidents from './pages/incident';
import Profile from './pages/profile';
import { ContextProvider } from './components/context';
import PrivacyPolicy from './pages/privacyPolicy';
import TermsOfService from './pages/termsOfService';

function App() {
	return (
		<ContextProvider>
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
							<Route path="/profile/:username" element={<Profile />} />
							<Route path="/aboutUs" element={<AboutUs />} />
							<Route path="/incidents" element={<Incidents />} />
							<Route path="/apartmentdetails" element={<ApartmentDetails />} />
							<Route path="/privacypolicy" element={<PrivacyPolicy />} />
							<Route path="/termsOfService" element={<TermsOfService />} />
						</Routes>
						<Footer />
					</div>
				</Router>
			</div>
		</ContextProvider>
	);
}

export default App;
