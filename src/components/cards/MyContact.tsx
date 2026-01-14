import { Card, CardBody, CardHeader } from '@heroui/react';
import CardContainer from './CardContainer';

const BodyContent = () => {
	return (
		<Card className='w-[400px] py-4'>
			<CardHeader className='flex flex-col'>
				<h5 className='text-tiny uppercase font-bold'>FrontEnd Developer</h5>
				<small className='text-default-500 mb-2'>4년차 개발자</small>
				<h1 className='font-black text-2xl'>이중훈(JHLEE)</h1>
			</CardHeader>
			<CardBody className='items-center font-medium'>
				<p>Web Developer</p>
				<p>jhlee89898989@gmail.com</p>
			</CardBody>
		</Card>
	);
};
export default function MyContact() {
	return (
		<CardContainer
			id='contacts'
			title='Contact'
			bodyContent={<BodyContent />}
		/>
	);
}
