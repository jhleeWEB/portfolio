import { Card, CardBody, CardHeader } from '@heroui/react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
	title: string;
	subTitle: string;
	bodyContent: React.ReactElement;
};
const CardContainer = ({ title, subTitle, bodyContent }: Props) => {
	const { ref, inView } = useInView({ threshold: 0, rootMargin: '-100px' });

	useEffect(() => {
		console.log(inView);
	}, [inView]);

	return (
		<Card ref={ref} className='container py-8 px-4 mb-12'>
			<div
				className={`opacity 0.6s ease-in-out, top 0.6s ease-in-out duration-700 ${
					inView ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
					<h4 className='font-bold text-large'>{title}</h4>
					<p className='text-tiny uppercase font-bold'>{subTitle}</p>
				</CardHeader>
				<CardBody className='overflow-visible gap-4 '>{bodyContent}</CardBody>
			</div>
		</Card>
	);
};
export default CardContainer;
