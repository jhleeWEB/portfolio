import { SVGAttributes } from 'react';

interface IHerouiIconProps extends SVGAttributes<SVGElement> {
	filled?: boolean;
	size?: number;
}

export const DocumentTextIcon = ({
	fill = 'currentColor',
	filled,
	size,
	height,
	width,
	...props
}: IHerouiIconProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill={filled ? fill : 'none'}
			height={size || height || 24}
			viewBox='0 0 24 24'
			width={size || width || 24}
			stroke-width='1.5'
			stroke='currentColor'
			className='size-6'
			{...props}
		>
			<path
				stroke-linecap='round'
				stroke-linejoin='round'
				d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
			/>
		</svg>
	);
};
export const DocumentTextSolidIcon = ({
	fill = 'currentColor',
	filled,
	size,
	height,
	width,
	...props
}: IHerouiIconProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={size || height || 24}
			viewBox='0 0 24 24'
			width={size || width || 24}
			className='size-6'
			{...props}
		>
			<path
				fill-rule='evenodd'
				d='M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z'
				clip-rule='evenodd'
			/>
			<path d='M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z' />
		</svg>
	);
};

export const MoonIcon = (props: IHerouiIconProps) => {
	return (
		<svg
			aria-hidden='true'
			focusable='false'
			height='1em'
			role='presentation'
			viewBox='0 0 24 24'
			width='1em'
			{...props}
		>
			<path
				d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z'
				fill='currentColor'
			/>
		</svg>
	);
};

export const SunIcon = (props: IHerouiIconProps) => {
	return (
		<svg
			aria-hidden='true'
			focusable='false'
			height='1em'
			role='presentation'
			viewBox='0 0 24 24'
			width='1em'
			{...props}
		>
			<g fill='currentColor'>
				<path d='M19 12a7 7 0 11-7-7 7 7 0 017 7z' />
				<path d='M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z' />
			</g>
		</svg>
	);
};
