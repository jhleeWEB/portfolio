import HeaderNavBar from './components/HeaderNavBar';
import Introduction from './components/Introduction/Introduction';

const App = () => {
	return (
		<main
			className={
				'font-notosan text-foreground bg-background flex flex-col items-center justify-center w-full h-full'
			}
		>
			<HeaderNavBar />
			<Introduction />
		</main>
	);
};
export default App;
