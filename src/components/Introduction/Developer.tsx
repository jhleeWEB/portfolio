import fryLogo from '@src/assets/fry.webp';
import { Avatar } from '@heroui/react';

const Developer = () => {
	return (
		<div className='flex flex-col w-1/2 items-center justify-center'>
			<Avatar src={fryLogo} className='w-48 h-48' />
			<div className='px-4'>
				<div className='text-2xl font-semibold'>
					꾸준함을 추구하는 개발자,
					<span className='text-blue-500'>이중훈</span>
					입니다
				</div>
				<div className='text-sm font-light text-gray-600 dark:text-gray-300'>
					Next.js, React 기반으로 Web을 다루는 4년차 개발자(재외국민)입니다.
				</div>
			</div>
		</div>
	);
};

export default Developer;
