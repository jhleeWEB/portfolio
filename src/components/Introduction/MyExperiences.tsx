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
} from '@heroui/react';
import { DocumentTextIcon } from '../Icons';

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
			'kakao mali alii를 활용해 지도 인터렉션 부분 개발',
			'고도화된 유료 보고서 페이지 개발',
			'수동으로 진행되던 빌드/배포 파이프라인에 자동화',
		],
		detail: {
			objectives: [
				'AI 자동설계를 활용해 땅의 가치를 추정하는 부동산 플랫폼',
				'유료 보고서를 통해 고도화된 정보와 가격추정 제공',
			],
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
			'Unity, 게 임 엔진으로 개발한 베트남 사회주택 자동설계 프로그램 개발 참여',
		],
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
			'Rhino, 2D, 3D모델링 툴 플러그인으로 가로주택정비사업 검토 프로그램 개발 참여',
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
							<h1 className='text-lg font-semibold'>{row.project.name}</h1>
							<a>{row.project.url}</a>
							<div>
								{row.project.role.map((n) => (
									<Chip>{n}</Chip>
								))}
							</div>
							<small>{row.project.duration}</small>
						</TableCell>
						<TableCell>
							<ul>
								{row.assignments.map((n) => (
									<li>{n}</li>
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
				{/* <TableRow key='1'>
					<TableCell className='flex flex-col'>
						<h1 className='text-lg font-semibold'>Landbook v2.0</h1>
						<a>https://www.landbook.net</a>
						<div>
							<Chip>프론트엔드 개발자</Chip>
						</div>
						<small>2021.3 ~ 2022.08</small>
					</TableCell>
					<TableCell>
						<ul>
							<li>A/B테스트 및 GTM 도입</li>
							<li>이미지 로딩 최적화를 통해 SEO 개선</li>
							<li>Three.js를 활용해 소규모 3D 렌더링 모듈 개발</li>
							<li>kakao mali alii를 활용해 지도 인터렉션 부분 개발</li>
							<li>고도화된 유료 보고서 페이지 개발</li>
							<li>수동으로 진행되던 빌드/배포 파이프라인에 자동화</li>
						</ul>
					</TableCell>
					<TableCell>
						<Button isIconOnly>
							<DocumentTextIcon />
						</Button>
					</TableCell>
					<TableCell>
						<Button isIconOnly>
							<DocumentTextSolidIcon />
						</Button>
					</TableCell>
				</TableRow>
				<TableRow key='2'>
					<TableCell>
						<h1 className='text-lg font-semibold'>LB Developer</h1>
						<a>https://lbdeveloper.landbook.net</a>
						<div>
							<Chip>프론트엔드 개발자</Chip>
							<Chip>프로젝트 리드</Chip>
						</div>
						<small>2021.3 ~ 2022.08</small>
					</TableCell>
					<TableCell>
						<ul>
							<li>
								가로주택정비사업 온라인 검토 서비스 어드민/사용자 웹앱 개발
							</li>
							<li>Three.js를 활용해 대규모 3D 렌더링 컴포넌트 개발</li>
							<li>전역 상태관리 편의성을 위해 Redux-Toolkit 도입</li>
						</ul>
					</TableCell>
					<TableCell>
						<Button isIconOnly>
							<DocumentTextIcon />
						</Button>
					</TableCell>
					<TableCell>
						<Button isIconOnly>
							<DocumentTextSolidIcon />
						</Button>
					</TableCell>
				</TableRow>
				<TableRow key='3'>
					<TableCell>
						<h1 className='text-lg font-semibold'>Landbook v1.0</h1>
						<div>
							<Chip>프로젝트 개발자</Chip>
						</div>
						<small>2021.3 ~ 2022.08</small>
					</TableCell>
					<TableCell>
						<ul>
							<li>
								Next.js(v6) + React(v15)를 활용해 랜드북 프로젝트 유지보수
							</li>
							<li>스타일 체계화를 위해 SCSS 도입</li>
						</ul>
					</TableCell>
					<TableCell>
						<Button isIconOnly>
							<DocumentTextIcon />
						</Button>
					</TableCell>
					<TableCell>-</TableCell>
				</TableRow>
				<TableRow key='4'>
					<TableCell>
						<h1 className='text-lg font-semibold'>
							베트남 사회주택 자동 설계 프로그램
						</h1>
						<div>
							<Chip>연구원</Chip>
						</div>
						<small>2021.3 ~ 2022.08</small>
					</TableCell>
					<TableCell>
						<ul>
							<li>
								Unity, 게 임 엔진으로 개발한 베트남 사회주택 자동 설계 프로그램
								개발 참여
							</li>
						</ul>
					</TableCell>
					<TableCell>
						<Button isIconOnly>
							<DocumentTextIcon />
						</Button>
					</TableCell>
					<TableCell>-</TableCell>
				</TableRow>
				<TableRow key='5'>
					<TableCell>
						<h1 className='text-lg font-semibold'>가로주택정비사업 프로그램</h1>
						<div>
							<Chip>연구원</Chip>
						</div>
						<small>2021.3 ~ 2022.08</small>
					</TableCell>
					<TableCell>
						<ul>
							<li>
								Rhino, 2D, 3D모델링 툴 플러그인으로 가로주택정비사업 검토
								프로그램 개발 참여
							</li>
						</ul>
					</TableCell>
					<TableCell>
						<Button isIconOnly>
							<DocumentTextIcon />
						</Button>
					</TableCell>
					<TableCell>-</TableCell>
				</TableRow> */}
			</TableBody>
		</Table>
	);
};
const MyExperiences = () => {
	return (
		<CardContainer
			title='Experiences'
			subTitle='붚투명한 부동산 정보를 모두 공평하게 제공하는 서비스를 개발했으며, 가치있는 제품을 만들었습니다'
			bodyContent={<BodyContent />}
		/>
	);
};

export default MyExperiences;
