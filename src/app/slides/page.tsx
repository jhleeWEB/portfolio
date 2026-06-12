import type { Metadata } from 'next';
import { landbook, lbDeveloper, primarySkills, profile } from '../../data/portfolio';
import styles from './slides.module.css';

export const metadata: Metadata = {
	title: `${profile.name} | Frontend Portfolio`,
	description: `${profile.name} 프론트엔드 개발자의 프로젝트 포트폴리오`,
};

const navigation = [
	['profile', 'Profile'],
	['landbook', 'Landbook'],
	['landbook-architecture', 'Architecture'],
	['landbook-improvement', 'Improvement'],
	['lb-developer', 'LB Developer'],
	['lb-architecture', 'Architecture'],
	['lb-decisions', 'Decisions'],
	['closing', 'Closing'],
];

const SlideNumber = ({ children }: { children: string }) => (
	<span className={styles.slideNumber}>{children} / 08</span>
);

const Stack = ({ items }: { items: string[] }) => (
	<div className={styles.stack}>{items.map((item) => <span key={item}>{item}</span>)}</div>
);

const ProductImage = ({ id, alt }: { id: string; alt: string }) => (
	<div className={styles.productImage}>
		<img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={alt} />
		<span>PRODUCT DEMO</span>
	</div>
);

export default function SlidesPage() {
	return (
		<main className={styles.deck}>
			<header className={styles.navigation}>
				<a className={styles.identity} href='#profile'><span>JH</span><strong>Frontend Portfolio</strong></a>
				<nav aria-label='슬라이드 바로가기'>
					{navigation.map(([id, label], index) => <a href={`#${id}`} key={id}><small>0{index + 1}</small>{label}</a>)}
				</nav>
				<a className={styles.resumeLink} href='/resume'>Resume</a>
			</header>

			<section className={`${styles.slide} ${styles.profile}`} id='profile'>
				<SlideNumber>01</SlideNumber>
				<div>
					<p className={styles.eyebrow}>Frontend Developer · {profile.experience}</p>
					<h1>{profile.name}</h1>
					<p className={styles.role}>복잡한 업무를 명확한 제품 경험으로 만듭니다.</p>
					<p className={styles.summary}>{profile.summary}</p>
					<div className={styles.contact}><a href={`mailto:${profile.email}`}>{profile.email}</a><span>{profile.company} · {profile.period}</span></div>
				</div>
				<div className={styles.skillPanel}>
					<p>CORE STACK</p><Stack items={primarySkills} />
					<div className={styles.scopeMetrics}><div><strong>2</strong><span>주요 제품</span></div><div><strong>5.5</strong><span>실무 경력(년)</span></div><div><strong>FE</strong><span>제품 전 과정</span></div></div>
				</div>
			</section>

			<section className={`${styles.slide} ${styles.project}`} id='landbook'>
				<SlideNumber>02</SlideNumber>
				<div className={styles.projectCopy}>
					<p className={styles.eyebrow}>PROJECT 01 · {landbook.period}</p>
					<h2>{landbook.name}<br /><span>{landbook.title}</span></h2>
					<p className={styles.lead}>건축 조건 입력부터 지도·3D 분석, 최종 보고서까지 이어지는 토지 가치평가 제품입니다.</p>
					<div className={styles.verifiedResult}><small>검증된 사업 결과</small><strong>{landbook.verifiedResult}</strong></div>
					<div className={styles.ownership}><small>직접 담당</small>{landbook.contribution.slice(0, 3).map((item) => <p key={item}>• {item}</p>)}</div>
				</div>
				<div><ProductImage id={landbook.videoId} alt='Landbook 제품 화면' /><Stack items={landbook.stack} /></div>
			</section>

			<section className={`${styles.slide} ${styles.architecture}`} id='landbook-architecture'>
				<SlideNumber>03</SlideNumber>
				<div className={styles.sectionTitle}><p className={styles.eyebrow}>LANDBOOK · FRONTEND ARCHITECTURE</p><h2>입력에서 유료 보고서까지</h2><p><b>주황색 영역</b>은 직접 설계·구현한 프론트엔드 책임 범위입니다.</p></div>
				<div className={styles.archDiagram}>
					<div className={`${styles.archNode} ${styles.owned}`}><small>USER EXPERIENCE</small><strong>단계형 조건 입력</strong><span>반응형 UI · 자동 임시 저장</span></div><i>→</i>
					<div className={`${styles.archNode} ${styles.owned}`}><small>FORM & VALIDATION</small><strong>React Hook Form</strong><span>Yup · debounce · 서버 검증</span></div><i>→</i>
					<div className={`${styles.archNode} ${styles.owned}`}><small>APPLICATION</small><strong>Next.js / React</strong><span>컴포넌트 · 커스텀 훅</span></div>
					<div className={styles.stateLayer}><b>React Query</b><span>서버 상태 · 캐싱</span><b>Redux Toolkit</b><span>화면 전역 상태</span></div>
					<div className={styles.partnerNode}><small>협업 연동 영역</small><strong>가치평가·자동설계 API</strong><span>백엔드 분석 결과</span></div><i>→</i>
					<div className={`${styles.archNode} ${styles.owned}`}><small>VISUALIZATION</small><strong>Kakao Map · Three.js</strong><span>필지 인터랙션 · 3D 렌더링</span></div><i>→</i>
					<div className={`${styles.archNode} ${styles.owned} ${styles.result}`}><small>PRODUCT OUTPUT</small><strong>유료 결과 보고서</strong><span>첫 매출 발생</span></div>
				</div>
			</section>

			<section className={`${styles.slide} ${styles.improvement}`} id='landbook-improvement'>
				<SlideNumber>04</SlideNumber>
				<div className={styles.sectionTitle}><p className={styles.eyebrow}>LANDBOOK · BEFORE / AFTER</p><h2>복잡한 입력과 화면 로직을 분리했습니다.</h2></div>
				<div className={styles.beforeAfter}>
					<div><small>BEFORE</small><h3>컴포넌트에 책임 집중</h3><ul><li>API 호출·폼 상태·화면 제어 혼재</li><li>다수 필드와 서버 검증을 한 화면에서 처리</li><li>BEM/Sass와 클래스형 컴포넌트 중심</li></ul></div>
					<span>→</span>
					<div className={styles.after}><small>AFTER · 직접 개선</small><h3>역할별 구조 분리</h3><ul><li>커스텀 훅과 React Query로 비동기 흐름 분리</li><li>단계형 폼, Yup 검증, debounce 적용</li><li>함수형 컴포넌트와 styled-components로 전환</li></ul></div>
				</div>
				<div className={styles.evidenceStrip}><strong>확인 가능한 결과</strong><span>유료 보고서 출시</span><span>첫 매출 발생</span><span>지도·3D 핵심 기능 제품 적용</span><small>※ 당시 성능 지표는 별도 기록이 없어 임의 수치를 사용하지 않았습니다.</small></div>
			</section>

			<section className={`${styles.slide} ${styles.project} ${styles.green}`} id='lb-developer'>
				<SlideNumber>05</SlideNumber>
				<div className={styles.projectCopy}>
					<p className={styles.eyebrow}>PROJECT 02 · {lbDeveloper.period}</p>
					<h2>{lbDeveloper.name}<br /><span>{lbDeveloper.title}</span></h2>
					<p className={styles.lead}>문서로 진행하던 가로주택정비사업 검토를 사용자·운영자 웹앱과 자동설계 결과 흐름으로 전환했습니다.</p>
					<div className={styles.scopeGrid}>{lbDeveloper.verifiedScope.map((item) => { const [count, ...label] = item.split(' '); return <div key={item}><strong>{count}</strong><span>{label.join(' ')}</span></div>; })}</div>
					<div className={styles.ownership}><small>직접 담당</small>{lbDeveloper.contribution.slice(0, 3).map((item) => <p key={item}>• {item}</p>)}</div>
				</div>
				<div><ProductImage id={lbDeveloper.videoId} alt='LB Developer 제품 화면' /><Stack items={lbDeveloper.stack} /></div>
			</section>

			<section className={`${styles.slide} ${styles.architecture} ${styles.architectureGreen}`} id='lb-architecture'>
				<SlideNumber>06</SlideNumber>
				<div className={styles.sectionTitle}><p className={styles.eyebrow}>LB DEVELOPER · SERVICE ARCHITECTURE</p><h2>두 화면, 하나의 자동설계 흐름</h2><p><b>주황색 영역</b>은 직접 주도한 프론트엔드·배포 범위, 회색은 협업 연동 영역입니다.</p></div>
				<div className={styles.lbDiagram}>
					<div className={styles.actors}><small>ACTORS</small><span>사용자</span><span>운영자</span></div><i>→</i>
					<div className={`${styles.appBoundary} ${styles.owned}`}><small>직접 설계·구현</small><div><strong>User Web</strong><span>입력 · 결과 확인</span></div><div><strong>Admin Web</strong><span>검토 · 상태 관리</span></div><footer>React Query · Redux Toolkit · React Hook Form</footer></div><i>→</i>
					<div className={styles.partnerNode}><small>협업 연동 영역</small><strong>자동설계 API</strong><span>필지·건축 조건·설계 결과</span></div><i>→</i>
					<div className={`${styles.outputs} ${styles.owned}`}><small>직접 구현</small><span>Three.js 3D</span><span>결과 보고서</span></div>
				</div>
				<div className={`${styles.delivery} ${styles.owned}`}><small>직접 구축한 배포 흐름</small><b>GitHub</b><i>→</i><b>GitHub Actions</b><i>→</i><b>Docker Build</b><i>→</i><b>AWS CLI Deploy</b></div>
			</section>

			<section className={`${styles.slide} ${styles.decisions}`} id='lb-decisions'>
				<SlideNumber>07</SlideNumber>
				<div className={styles.sectionTitle}><p className={styles.eyebrow}>LB DEVELOPER · DECISIONS & EVIDENCE</p><h2>빠른 출시와 운영을 함께 고려했습니다.</h2></div>
				<div className={styles.decisionTable}>
					<div><strong>복잡한 전역 상태</strong><b>Redux Toolkit</b><p>액션·리듀서 보일러플레이트를 줄여 상태 변경 흐름 단순화</p></div>
					<div><strong>반복되는 서버 요청</strong><b>React Query</b><p>서버 상태와 화면 상태를 분리하고 캐싱·비동기 상태 관리</p></div>
					<div><strong>대규모 건축물 표시</strong><b>Three.js</b><p>렌더링과 리소스 정리 로직을 개선해 화면 안정성 보완</p></div>
					<div><strong>수동 배포 의존</strong><b>CI/CD</b><p>GitHub Actions, Docker, AWS CLI로 반복 배포 과정 자동화</p></div>
				</div>
				<div className={styles.evidenceStrip}><strong>검증 가능한 범위</strong>{lbDeveloper.verifiedScope.map((item) => <span key={item}>{item}</span>)}<small>※ 처리 속도·감소율은 당시 측정 자료가 없어 기재하지 않았습니다.</small></div>
			</section>

			<section className={`${styles.slide} ${styles.closing}`} id='closing'>
				<SlideNumber>08</SlideNumber>
				<div><p className={styles.eyebrow}>EARLIER EXPERIENCE</p><h2>도메인을 이해하고<br />제품으로 연결합니다.</h2><p>Landbook 구 버전 유지보수, Unity 사회주택 자동설계, Rhino 가로주택 검토 플러그인 경험을 통해 건축·부동산 도메인과 2D/3D 시각화의 기반을 쌓았습니다.</p></div>
				<div className={styles.contactCard}><small>CONTACT</small><strong>{profile.name}</strong><span>{profile.role}</span><a href={`mailto:${profile.email}`}>{profile.email}</a><a href='/resume'>이력서 보기 →</a></div>
			</section>
		</main>
	);
}
