import Samples from './Samples';

const FloatingComponents = () => {
	return (
		<div className='flex flex-1'>
			<div className='flex flex-wrap items-center justify-center w-full h-full gap-4 gap-y-4'>
				<Samples.Sample5 />
				<Samples.Sample2 />
				<Samples.Sample1 />
				<Samples.Sample3 />
				<Samples.Sample4 />
			</div>
		</div>
	);
};

export default FloatingComponents;
