import CardContainer from './CardContainer';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Link,
} from '@heroui/react';
import CustomChip from '../chips/Chip';
import DetailInfoModal from '../modals/DetailInfoModal';

const rows = [
	{
		key: '1',
		link: 'https://spacewalk.tech/',
		duration: '2017.03 ~ 2022.08',
		experience: {
			company: '스페이스워크',
			role: ['프론트엔드 개발자'],
		},
		assignments: [
			'하이브리드 웹/앱 애플리케이션 프로젝트 개발',
			'Landbook 애플리케이션에 다양한 기능 개발',
			'LB Developer 애플리케이션 어드민/사용자 페이지 개발',
			'사용자 분석을 위해 사용자 행동 추척 툴 삽입 및 관리',
		],
		contributionModalContent: [
			{
				title: 'What I learned',
				list: [
					'개발 파이프라인을 체계화하면서 다양한 툴을 활용해 다른 팀과 협업하는 방법',
					'회사 사이드 프로젝트를 담당하면서 기술 선택에 대한 고민',
					'백엔드 개발자와 밀첩하게 작업하면서 배운 다양한 지식들',
					'꾸준히 노력하지 않으면 도태된다는 점',
				],
			},
			{
				title: 'What I regret',
				list: [
					'제한된 리소스, 짧은 개발시간 등등으로 너무 보수적으로 기술을 선택하여, 신기술을 메인 프로젝트에 많이 적용하지 못했다는점',
					'CI/CD 파이프라인을 조금 더 일찍 구축하지 못했다는 점',
					'테스트 커버리지의 부족 및 예외처리',
					'익숙한 기술을 사용했던 고집',
				],
			},
		],
		services: [
			{
				title: 'Landbook',
				list: [
					'AI 자동설계를 통해 토지가치평가를 보다 빠르고 정확한 정보를 제공',
				],
				links: {
					homepage: 'https://www.landbook.net/home',
					about: 'https://www.landbook.net/service/ai-analytics',
				},
			},
			{
				title: 'LB Developer',
				list: [
					'문서로 진행하던 가로주택정비사업 검토방식을 온라인으로 제공',
					'빠른 자동설계를 통해 정확한 사업성 분석 제공',
				],
				links: {
					homepage: 'https://lbdeveloper.landbook.net/',
					about: 'https://info-lbdeveloper.landbook.net/',
				},
			},
		],
	},
];

const BodyContent = () => {
	return (
		<Table removeWrapper aria-label='Example static collection table'>
			<TableHeader>
				<TableColumn>회사</TableColumn>
				<TableColumn>업무</TableColumn>
				<TableColumn>기여</TableColumn>
				<TableColumn>서비스</TableColumn>
			</TableHeader>
			<TableBody>
				{rows.map((row) => (
					<TableRow key={row.key}>
						<TableCell>
							<h1 className='text-xl font-semibold mb-[-6px]'>
								{row.experience.company}
							</h1>
							<Link size='sm' href={row.link} showAnchorIcon>
								<i>{row.link}</i>
							</Link>
							<div className='flex gap-2 mt-1'>
								{row.experience.role.map((n, i) => (
									<CustomChip key={n + i} content={n} />
								))}
							</div>
							<small>{row.duration}</small>
						</TableCell>
						<TableCell>
							<ul>
								{row.assignments.map((n) => (
									<li key={n} className='flex'>
										· {n}
									</li>
								))}
							</ul>
						</TableCell>
						<TableCell>
							<DetailInfoModal
								title={row.experience.company}
								content={row.contributionModalContent}
							/>
						</TableCell>
						<TableCell>
							<DetailInfoModal
								title={row.experience.company}
								content={row.services}
							/>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
const MyExperiences = () => {
	return (
		<CardContainer
			id='experiences'
			title='Experiences'
			subTitle='실패를 통해 배우고, 배움을 통해 성장해갑니다'
			bodyContent={<BodyContent />}
		/>
	);
};

export default MyExperiences;
