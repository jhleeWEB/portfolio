import { Routes, Route } from 'react-router';
import { PATHNAME } from './consts/consts';

const App = () => {
	return (
		<Routes>
			<Route path={PATHNAME.HOME} />
			<Route path={PATHNAME.CAREER} />
			<Route path={PATHNAME.ABOUT} />
		</Routes>
	);
};
export default App;
