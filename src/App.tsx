import HeaderNavBar from './components/HeaderNavBar';
import Introduction from './components/Introduction/Introduction';

const App = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<HeaderNavBar />
			<Introduction />
		</div>
	);
};
export default App;
