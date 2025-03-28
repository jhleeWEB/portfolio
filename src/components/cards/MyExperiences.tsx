import CardContainer from './CardContainer';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Button,
	Link,
} from '@heroui/react';
import { DocumentTextIcon } from '../Icons';
import CustomChip from '../chips/Chip';

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
		retrospects: {
			video: [],
			lessons: ['기술선택', '유료 보고서를 통해 고도화된 정보와 가격추정 제공'],
			accomplishments: [
				'유료 보고서 서비스 런칭',
				'편리한 지도 클릭 컴포넌트 개발',
				'시각적으로 확인 가능한 3D랜더링 모듈 개발',
			],
			contributions: [
				'프론트엔드 지도 및 3D랜더링 부분 담당',
				'CI/CD 스크립트 및 기타 인프라 관리',
				'초기 설계 담당',
				'수많은 컴포넌트 개발',
			],
		},
		services: [
			{
				name: 'Landbook',
				objectives: [
					'AI 자동설계를 통해 토지가치평가를 보다 빠르고 정확한 정보를 제공',
				],
				links: {
					homepage: 'https://www.landbook.net/home',
					about: 'https://www.landbook.net/service/ai-analytics',
				},
			},
			{
				name: 'LB Developer',
				objectives: [
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
								{row.experience.role.map((n) => (
									<CustomChip key={n} content={n} />
								))}
							</div>
							<small>{row.duration}</small>
						</TableCell>
						<TableCell>
							<ul>
								{row.assignments.map((n) => (
									<li className='flex'>· {n}</li>
								))}
							</ul>
						</TableCell>
						<TableCell>
							<Button isIconOnly>
								<DocumentTextIcon />
							</Button>
						</TableCell>
						<TableCell>
							<Button isIconOnly>
								<DocumentTextIcon />
							</Button>
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
			title='Experiences'
			subTitle='실패를 통해 배우고, 배움을 통해 성장해갑니다'
			bodyContent={<BodyContent />}
		/>
	);
};

export default MyExperiences;
