'use client'
import Container from '../Container';
import Developer from './Developer';
import FloatingComponents from './FloatingComponents';

const LandingSection = () => {
	return (
		<Container style={{ marginBottom: '80px' }}>
			<Developer />
			<FloatingComponents />
		</Container>
	);
};

export default LandingSection;
