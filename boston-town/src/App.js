import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Login from './pages/customer/login/login';
import Signup from './pages/customer/signup/signup';
import Home from './pages/home';
import Feed from './pages/feed';

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Navbar />
					<hr />
					{/* <Home /> */}
					<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/feed" element={<Feed />} />
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
