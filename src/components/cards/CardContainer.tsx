import { Card, CardBody, CardHeader } from '@heroui/react';
import { useInView } from 'react-intersection-observer';

type Props = {
	id?: string;
	title: string;
	subTitle: string;
	bodyContent: React.ReactElement;
};
const CardContainer = ({ id = '', title, subTitle, bodyContent }: Props) => {
	const { ref, inView } = useInView({ threshold: 0, rootMargin: '-100px' });

	return (
		<Card ref={ref} id={id} className='container p-6 mb-12'>
			<div
				style={{
					position: 'relative',
					opacity: inView ? 1 : 0.2,
					transition: 'opacity 0.6s ease-in-out, top 0.6s ease-in-out',
					transitionDelay: '0.1s',
					top: inView ? '0px' : '50px',
				}}
			>
				<CardHeader className='flex-col items-start'>
					<h1 className='mb-2 text-3xl font-extrabold leading-none tracking-tight dark:text-white underline underline-offset-4 decoration-4 decoration-blue-400 dark:decoration-blue-600'>
						{title}
					</h1>
					<p className='font-semibold'>{subTitle}</p>
				</CardHeader>
				<CardBody className='overflow-visible gap-4'>{bodyContent}</CardBody>
			</div>
		</Card>
	);
};
export default CardContainer;
