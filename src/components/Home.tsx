import { styled } from 'styled-components';
import image from '@assets/frye.webp';

const Wrapper = styled.div(({}) => ({
	display: 'flex',
}));
const DeveloperNameContainer = styled.article``;
const FloatingElementsContainer = styled.section``;

const Home = () => {
	return (
		<Wrapper>
			<DeveloperNameContainer>
				<img src={image} />
				<h1>개발의 흥미와 호기심을 참지 못해 돌아온 개발자, 이중훈입니다</h1>
				<h3>React, Next.js기반 웹 4년차 프론트엔드 개발자(재외국민)입니다. </h3>
			</DeveloperNameContainer>
			<FloatingElementsContainer>
				<h1>element 1</h1>
				<h1>element 2</h1>
				<h1>element 3</h1>
			</FloatingElementsContainer>
		</Wrapper>
	);
};

export default Home;
