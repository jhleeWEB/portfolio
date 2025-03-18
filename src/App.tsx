import { Routes, Route } from 'react-router';
import { PATHNAME } from './consts/consts';
import Home from './components/Home';
import Career from './components/Career';
import About from './components/About';

const App = () => {
	return (
		<Routes>
			<Route path={PATHNAME.HOME} element={<Home />} />
			<Route path={PATHNAME.CAREER} element={<Career />} />
			<Route path={PATHNAME.ABOUT} element={<About />} />
		</Routes>
	);
};
export default App;
