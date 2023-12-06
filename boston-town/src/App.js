import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Login from './pages/customer/login/login';
import Signup from './pages/customer/signup/signup';

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Navbar />
					<hr />
					<Routes>
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
