import { styled } from 'styled-components';
import Landing from './Landing';
import MyIntro from './MyIntro';
import MyProjects from './MyProjects';

const Wrapper = styled.div(({}) => ({}));

const Introduction = () => {
	return (
		<Wrapper className='container py-8 mb-4'>
			<Landing />
			<MyIntro />
			<MyProjects />
		</Wrapper>
	);
};

export default Introduction;
