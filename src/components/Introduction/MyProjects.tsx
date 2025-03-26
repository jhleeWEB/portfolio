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
import DetailInfoModal from '../DetailInfoModal';

const rows = [
	{
		key: '1',
		project: {
			name: 'Landbook v2.0',
			url: 'https://www.landbook.net',
			role: ['프론트엔드 개발자'],
			duration: '2020.01 ~ 2022.08',
		},
		assignments: [
			'A/B테스트 및 GTM 도입',
			'이미지 로딩 최적화를 통해 SEO 개선',
			'Three.js를 활용해 소규모 3D 렌더링 모듈 개발',
			'kakao map api를 활용해 지도 인터렉션 부분 개발',
			'고도화된 유료 보고서 페이지 개발',
			'수동으로 진행되던 빌드/배포 파이프라인에 자동화',
		],
		modalContent: {
			src: 'https://www.youtube.com/embed/MVnvCQGwjdM?si=wwqBvIKRJNJrNe6i',
			objectives: [
				'신 기술 도입 및 업데이트하여 더욱 편리한 서비스 제공',
				'고도화된 서비스(보고서)로 유료화 도입',
				'내부 건축 의뢰 서비스(수작업)에서 활용 가능하게 개발',
			],
			contribution: [
				'유료 보고서 성공적으로 출시 후 Landbook에서 첫번째 매출 발생',
			],
			accomplishments: [
				'유료 보고서에 핵심 기능인 3D랜더링 모듈 개발',
				'랜드북에 코어 기능인 지도 인터렉션 부분 개발',
			],
		},
	},
	{
		key: '2',
		project: {
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
		modalContent: {
			src: 'https://www.youtube.com/embed/QYl1KoU_Npk?si=ktcEqyeWRtc_XW7Q',
			objectives: ['가로주택정비사업에 적합한 필지 검토 서비스'],
			accomplishments: [
				'수많은 자동설계 검토 진행',
				'고도화된 결과보고서 제공',
				'제한된 리소스로 안정적으로 서비스 출시',
			],
			contribution: [
				'프론트엔드 리드를 맡아 프로젝트 진행',
				'CI/CD 스크립트 및 기타 인프라 관리',
				'Next.js 기반 SSR 웹 애플리케이션 설계/개발/배포',
				'React-Query 캐싱을 활용해 api요청 최적화',
			],
		},
	},
	{
		key: '3',
		project: {
			name: 'Landbook v1.0',
			url: '-',
			role: ['프론트엔드 개발자'],
			duration: '2018.03 ~ 2019.10',
		},
		assignments: [
			'Next.js(v6) + React(v15)를 활용해 랜드북 프로젝트 유지보수',
			'스타일 체계화를 위해 SCSS 도입',
		],
		modalContent: {
			src: 'https://www.youtube.com/embed/oEcdcn9apD4?si=KHlviEAAvVXMm0ok',
			objectives: [
				'신 기술 도입 및 업데이트하여 더욱 편리한 서비스 제공',
				'고도화된 서비스(보고서)로 유료화 도입',
				'내부 건축 의뢰 서비스(수작업)에서 활용 가능하게 개발',
			],
			contribution: [
				'유료 보고서 성공적으로 출시 후 Landbook에서 첫번째 매출 발생',
			],
			accomplishments: [
				'유료 보고서에 핵심 기능인 3D랜더링 모듈 개발',
				'랜드북에 코어 기능인 지도 인터렉션 부분 개발',
			],
		},
	},
	{
		key: '4',
		project: {
			name: '베트남 사회주택 자동설계 프로그램',
			url: '-',
			role: ['연구원'],
			duration: '2018.10 ~ 2018.03',
		},
		assignments: [
			'Unity, 게임 엔진으로 개발한 베트남 사회주택 자동설계 프로그램 개발 참여',
		],
		modalContent: {
			src: undefined,
			objectives: [
				'신 기술 도입 및 업데이트하여 더욱 편리한 서비스 제공',
				'고도화된 서비스(보고서)로 유료화 도입',
				'내부 건축 의뢰 서비스(수작업)에서 활용 가능하게 개발',
			],
			contribution: [
				'유료 보고서 성공적으로 출시 후 Landbook에서 첫번째 매출 발생',
			],
			accomplishments: [
				'유료 보고서에 핵심 기능인 3D랜더링 모듈 개발',
				'랜드북에 코어 기능인 지도 인터렉션 부분 개발',
			],
		},
	},
	{
		key: '5',
		project: {
			name: '가로주택 정비사업 플러그인',
			url: '-',
			role: ['연구원'],
			duration: '2017.03 ~ 2017.10',
		},
		assignments: [
			'Rhino, 2D, 3D모델링 툴 플러그인으로 납품한 가로주택정비사업 검토 프로그램 개발 참여',
		],
		modalContent: {
			src: undefined,
			objectives: [
				'신 기술 도입 및 업데이트하여 더욱 편리한 서비스 제공',
				'고도화된 서비스(보고서)로 유료화 도입',
				'내부 건축 의뢰 서비스(수작업)에서 활용 가능하게 개발',
			],
			contribution: [
				'유료 보고서 성공적으로 출시 후 Landbook에서 첫번째 매출 발생',
			],
			accomplishments: [
				'유료 보고서에 핵심 기능인 3D랜더링 모듈 개발',
				'랜드북에 코어 기능인 지도 인터렉션 부분 개발',
			],
		},
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
							<h1 className='text-lg font-semibold'>{row.project.name}</h1>
							{row.project.url !== '-' && (
								<Link size='sm' href={row.project.url} showAnchorIcon>
									{row.project.url}
								</Link>
							)}
							<div className='flex gap-2'>
								{row.project.role.map((n) => (
									<Chip size='sm'>{n}</Chip>
								))}
							</div>
							<small>{row.project.duration}</small>
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
								<DetailInfoModal
									title={row.project.name}
									content={row.modalContent}
								/>
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
const MyProjects = () => {
	return (
		<CardContainer
			id='projects'
			title='Projects'
			subTitle='편리하고 가치 있는 부동산 서비스를 개발했습니다'
			bodyContent={<BodyContent />}
		/>
	);
};

export default MyProjects;
