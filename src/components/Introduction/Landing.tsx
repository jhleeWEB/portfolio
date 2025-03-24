import Container from '../Container';
import Developer from './Developer';
import FloatingComponents from './FloatingComponents';

const Landing = () => {
	return (
		<Container>
			<Developer />
			<FloatingComponents />
		</Container>
	);
};

export default Landing;
