import Landing from './Landing';
import MyIntro from './MyIntro';
import MyProjects from './MyProjects';
import MySkills from './MySkills';

const Introduction = () => {
	return (
		<div className='container mx-auto py-8 mb-4'>
			<Landing />
			<MyIntro />
			<MyProjects />
			<MySkills />
		</div>
	);
};

export default Introduction;
