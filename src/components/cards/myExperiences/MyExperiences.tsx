import useDevice from '@src/components/hooks/useDevice';
import CardContainer from '../CardContainer';
import MobileContent from './MobileContent';
import DesktopContent from './DesktopContent';

const MyExperiences = () => {
	const isMobile = useDevice();

	return (
		<CardContainer
			id='experiences'
			title='Experiences'
			subTitle='실패를 통해 배우고, 배움을 통해 성장해갑니다'
			bodyContent={isMobile ? <MobileContent /> : <DesktopContent />}
		/>
	);
};

export default MyExperiences;
