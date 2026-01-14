import CardContainer from './CardContainer';

const BodyContent = () => {
	return (
		<article className='text-sm'>
			<article>
				개발의 즐거움과 새로운 기술에 대한 호기심을 잊지 못해 다시 돌아온,
				<b>4년 경력의 프론트엔드 개발자</b>입니다.
			</article>
			<br />
			<article>
				스타트업에서 알고리즘 엔지니어로 개발자 커리어를 시작했으며, 1년 차 때
				프론트엔드 개발의 매력에 이끌려 직무를 변경했습니다. 이후 4년 동안
				다양한 프로젝트를 맡으며 타 직군과의 원활한 커뮤니케이션과 문서화의
				중요성을 배웠고, 새로운 시도를 통해 개발자로서의 전문성을 쌓아왔습니다.
			</article>
			<br />
			<article>
				프론트엔드 개발자의 핵심 역할은 기술적 역량과 감각적인 디자인을 조화롭게
				연결하여, 사용자에게 최적의 경험을 제공하는 것이라고 생각합니다. 이
				역할을 충실히 수행하기 위해, 2년간의 사업 운영 경험을 통해 익힌
				커뮤니케이션 스킬, 효율적인 협업 능력, 자발적인 태도, 그리고 끝없이
				배우려는 꾸준한 자세을 바탕으로 더욱 성장하는 개발자가 되고자 합니다.
			</article>
		</article>
	);
};
const MyIntro = () => {
	return (
		<CardContainer
			id='introduction'
			title='Introduction'
			subTitle='꾸준함을 추구하는 프론트엔드 개발자 이중훈입니다'
			bodyContent={<BodyContent />}
		/>
	);
};

export default MyIntro;
