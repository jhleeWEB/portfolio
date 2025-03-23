import { styled } from 'styled-components';
import Landing from './Landing';
import MyIntro from './MyIntro';
import MyExperiences from './MyExperiences';

const Wrapper = styled.div(({}) => ({}));

const Introduction = () => {
	return (
		<Wrapper className='container py-8 mt-4 gap-6'>
			<Landing />
			<MyIntro />
			<MyExperiences />
		</Wrapper>
	);
};

export default Introduction;
