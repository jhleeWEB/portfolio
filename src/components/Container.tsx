import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
	return <div className='flex flex-wrap w-full min-h-[40rem]'>{children}</div>;
};

export default Container;
