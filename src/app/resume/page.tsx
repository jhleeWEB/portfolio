import type { Metadata } from 'next';
import { landbook, lbDeveloper, primarySkills, profile } from '../../data/portfolio';
import styles from './resume.module.css';

export const metadata: Metadata = {
	title: `${profile.name} | 이력서`,
	description: `${profile.name} 프론트엔드 개발자 이력서`,
};

const BulletList = ({ items }: { items: string[] }) => (
	<ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
);

export default function ResumePage() {
	return (
		<main className={styles.page}>
			<header className={styles.header}>
				<div><p>FRONTEND DEVELOPER</p><h1>{profile.name}</h1><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
				<nav><a href='/slides'>Portfolio</a><a href='/'>Overview</a></nav>
			</header>

			<section className={styles.summary}><h2>요약</h2><p>{profile.summary}</p></section>

			<section><h2>핵심 역량</h2><div className={styles.skillGrid}>
				<div><strong>제품 UI</strong><p>복잡한 도메인 요구사항을 단계형 입력과 이해하기 쉬운 결과 화면으로 구체화</p></div>
				<div><strong>상태·데이터</strong><p>React Query 서버 상태관리와 Redux Toolkit 전역 상태 구조 개선</p></div>
				<div><strong>폼</strong><p>React Hook Form, Yup, debounce, 자동 임시 저장을 활용한 입력 경험 설계</p></div>
				<div><strong>리팩토링</strong><p>클래스형 컴포넌트 전환, 커스텀 훅 분리, 스타일 구조 마이그레이션</p></div>
				<div><strong>시각화</strong><p>Kakao Map 인터랙션과 Three.js 기반 건축물 3D 렌더링</p></div>
				<div><strong>배포</strong><p>GitHub Actions, Docker, AWS CLI 기반 빌드·배포 자동화</p></div>
			</div><div className={styles.stack}>{primarySkills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>

			<section><h2>경력</h2><article className={styles.experience}>
				<div><h3>{profile.company}</h3><p>{profile.role} · 개발팀</p><small>{profile.period} ({profile.experience})</small></div>
				<p>부동산 가치평가 및 건축 설계 자동화 제품의 구 버전 유지보수, 신규 버전 개발, 유료 보고서 출시, 가로주택정비사업 검토 플랫폼과 배포 자동화에 참여했습니다.</p>
			</article></section>

			<section><h2>주요 프로젝트</h2>
				<article className={styles.project}>
					<header><div><p>{landbook.name}</p><h3>{landbook.title}</h3></div><div><strong>{landbook.role}</strong><span>{landbook.period}</span></div></header>
					<p className={styles.result}><b>검증된 결과</b> {landbook.verifiedResult}</p>
					<BulletList items={landbook.contribution} />
					<p className={styles.note}>당시 성능 지표는 별도 기록이 없어 감소율·처리 속도 등 임의 수치를 기재하지 않았습니다.</p>
				</article>

				<article className={styles.project}>
					<header><div><p>{lbDeveloper.name}</p><h3>{lbDeveloper.title}</h3></div><div><strong>{lbDeveloper.role}</strong><span>{lbDeveloper.period}</span></div></header>
					<div className={styles.scope}>{lbDeveloper.verifiedScope.map((item) => <span key={item}>{item}</span>)}</div>
					<BulletList items={lbDeveloper.contribution} />
					<p className={styles.note}>처리 속도와 성능 개선율은 당시 측정 자료가 없어 검증 가능한 구현 범위만 기재했습니다.</p>
				</article>

				<article className={styles.project}><header><div><p>Landbook v1</p><h3>토지 가치평가 서비스 구 버전</h3></div><div><strong>프론트엔드 개발자</strong><span>2018.03 - 2019.10</span></div></header><BulletList items={['Next.js v6, React v15 기반 레거시 프로젝트 유지보수와 신규 기능 개발', 'BEM과 Sass를 도입해 스타일 클래스 충돌과 구조 가독성 개선', '구 버전 운영을 통해 신규 버전에 필요한 도메인과 사용자 흐름 습득']} /></article>
			</section>

			<section><h2>초기 프로젝트</h2><div className={styles.earlyProjects}><div><strong>베트남 사회주택 자동설계</strong><span>2017.10 - 2018.03 · Unity</span><p>Unity를 학습해 자동설계 프로그램과 결과 설명 영상 제작에 참여했습니다.</p></div><div><strong>가로주택정비사업 검토 플러그인</strong><span>2017.03 - 2017.10 · Rhino</span><p>Rhino 기반 2D/3D 모델링 도구 플러그인 개발에 참여했습니다.</p></div></div></section>
		</main>
	);
}
