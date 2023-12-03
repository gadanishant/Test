import Navbar from './components/navbar/navbar';
import Login from './pages/customer/login/login';
import Signup from './pages/customer/signup/signup';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

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

					<Footer/>
				</div>
			</Router>
		</div>
	);
}

export default App;
