import CardContainer from '../CardContainer';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Chip,
	Button,
	Link,
} from '@heroui/react';
import { DocumentTextIcon } from '../Icons';

const rows = [
	{
		key: '1',
		experience: {
			name: '작은 프로젝트 프론트엔드 담당',
			role: ['프론트엔드 담당'],
		},
		assignments: [
			'가로주택정비사업 검토 서비스 어드민/사용자 페이지 개발',
			'Next.js기반 SSR 서비스 개발',
			'CI/CD 파이프라인 구축',
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
	},
	{
		key: '2',
		experience: {
			name: 'LB Developer',
			url: 'https://lbdeveloper.landbook.net/',
			role: ['프론트엔드 개발자', '프로젝트 리드'],
			duration: '2019.11 ~ 2020.01',
		},
		assignments: [
			'가로주택정비사업 온라인 검토 서비스 어드민/사용자 웹앱 개발',
			'Three.js를 활용해 대규모 3D 렌더링 컴포넌트 개발',
			'전역 상태관리 편의성을 위해 Redux-Toolkit 도입',
		],
		detail: {
			objectives: ['가로주택정비사업에 적합한 필지 검토 서비스'],
			accomplishments: [
				'수많은 자동설계 검토 진행',
				'고도화된 결과보고서 제공',
				'제한된 리소스로 안정적으로 서비스 출시',
			],
			contributions: [
				'프론트엔드 리드를 맡아 프로젝트 진행',
				'CI/CD 스크립트 및 기타 인프라 관리',
				'Next.js 기반 SSR 웹 애플리케이션 설계/개발/배포',
				'React-Query 캐싱을 활용해 api요청 최적화',
			],
		},
	},
	{
		key: '3',
		experience: {
			name: 'Landbook v1.0',
			url: '-',
			role: ['프론트엔드 개발자'],
			duration: '2018.03 ~ 2019.10',
		},
		assignments: [
			'Next.js(v6) + React(v15)를 활용해 랜드북 프로젝트 유지보수',
			'스타일 체계화를 위해 SCSS 도입',
		],
	},
	{
		key: '4',
		experience: {
			name: '베트남 사회주택 자동설계 프로그램',
			url: '-',
			role: ['연구원'],
			duration: '2018.10 ~ 2018.03',
		},
		assignments: [
			'Unity, 게임 엔진으로 개발한 베트남 사회주택 자동설계 프로그램 개발 참여',
		],
	},
	{
		key: '5',
		experience: {
			name: '가로주택 정비사업 플러그인',
			url: '-',
			role: ['연구원'],
			duration: '2017.03 ~ 2017.10',
		},
		assignments: [
			'Rhino, 2D, 3D모델링 툴 플러그인으로 납품한 가로주택정비사업 검토 프로그램 개발 참여',
		],
	},
];

const BodyContent = () => {
	return (
		<Table removeWrapper aria-label='Example static collection table'>
			<TableHeader>
				<TableColumn>프로젝트</TableColumn>
				<TableColumn>업무</TableColumn>
				<TableColumn>상세정보</TableColumn>
			</TableHeader>
			<TableBody>
				{rows.map((row) => (
					<TableRow key={row.key}>
						<TableCell>
							<h1 className='text-lg font-semibold'>{row.experience.name}</h1>
							{row.experience.url !== '-' && (
								<Link size='sm' href={row.experience.url} showAnchorIcon>
									{row.experience.url}
								</Link>
							)}
							<div className='flex gap-2'>
								{row.experience.role.map((n) => (
									<Chip size='sm'>{n}</Chip>
								))}
							</div>
							<small>{row.experience.duration}</small>
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
