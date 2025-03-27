import Container from '../Container';
import Developer from './Developer';
import FloatingComponents from './FloatingComponents';

const Landing = () => {
	return (
		<Container style={{ marginBottom: '80px' }}>
			<Developer />
			<FloatingComponents />
		</Container>
	);
};

export default Landing;
