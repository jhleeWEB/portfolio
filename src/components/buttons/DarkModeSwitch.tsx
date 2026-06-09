'use client';

import { Switch } from '@heroui/react';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../Icons';

type Theme = 'light' | 'dark';

export default function DarkModeSwitch() {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		const savedTheme = window.localStorage.getItem('theme') as Theme | null;
		setTheme(savedTheme ?? 'dark');
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		window.localStorage.setItem('theme', theme);
	}, [theme]);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTheme(event.target.checked ? 'light' : 'dark');
	};

	return (
		<Switch
			isSelected={theme === 'light'}
			onChange={handleOnChange}
			color='primary'
			endContent={<MoonIcon />}
			size='lg'
			startContent={<SunIcon />}
		/>
	);
}
