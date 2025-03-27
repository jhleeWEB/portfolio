import HeaderNavBar from './components/HeaderNavBar';
import Landing from './components/landingSection/LandingSection';
import MyIntro from './components/cards/MyIntro';
import MyProjects from './components/cards/MyProjects';
import MySkills from './components/cards/MySkills';

const App = () => {
	return (
		<main
			className={
				'font-notosan text-foreground bg-background flex flex-col items-center justify-center w-full h-full'
			}
		>
			<HeaderNavBar />
			<div className='container mx-auto py-8 mb-4'>
				<Landing />
				<MyIntro />
				<MyProjects />
				<MySkills />
			</div>
		</main>
	);
};
export default App;
