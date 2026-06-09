import Samples from './Samples';
import reactLogo from '@assets/react.svg';
import tsLogo from '@assets/ts.svg';
import jsLogo from '@assets/js.svg';
import figmaLogo from '@assets/figma.svg';
import sassLogo from '@assets/sass.svg';
import cssLogo from '@assets/css.svg';
import { Image } from '@heroui/react';

const FloatingComponents = () => {
	return (
		<div className='flex flex-1 w-1/2'>
			<div className='grid grid-cols-2 items-center justify-center w-full h-full gap-4 gap-y-4'>
				<Samples.Sample5 />
				<Samples.Sample2 />
				<div className='flex'>
					<Image className='animate-float' src={tsLogo.src} />
					<Image className='animate-float-fast' src={jsLogo.src} />
				</div>
				<Samples.Sample1 />
				<Samples.Sample3 />
				<div className='flex'>
					<Image className='animate-float-fast' src={sassLogo.src} />
					<Image className='animate-float-fast' src={cssLogo.src} />
					<Image className='animate-float-slow' src={figmaLogo.src} />
				</div>
				<Image src={reactLogo.src} className='animate-float-fast' />
				<Samples.Sample4 />
			</div>
		</div>
	);
};

export default FloatingComponents;
