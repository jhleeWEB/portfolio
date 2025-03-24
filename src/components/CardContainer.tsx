import { Card, CardBody, CardHeader } from '@heroui/react';

type Props = {
	title: string;
	subTitle: string;
	bodyContent: React.ReactElement;
};
const CardContainer = ({ title, subTitle, bodyContent }: Props) => {
	return (
		<Card className='py-4 mb-12'>
			<CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
				<h4 className='font-bold text-large'>{title}</h4>
				<p className='text-tiny uppercase font-bold'>{subTitle}</p>
			</CardHeader>
			<CardBody className='overflow-visible py-2 gap-4'>{bodyContent}</CardBody>
		</Card>
	);
};
export default CardContainer;
