import { Switch } from '@heroui/react';
import { useTheme } from '@heroui/use-theme';
import { MoonIcon, SunIcon } from '../Icons';

export default function DarkModeSwitch() {
	const { theme, setTheme } = useTheme();

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTheme(event.target.checked ? 'light' : 'dark');
	};

	return (
		<Switch
			isSelected={theme === 'light' ? true : false}
			onChange={handleOnChange}
			color='primary'
			endContent={<MoonIcon />}
			size='lg'
			startContent={<SunIcon />}
		/>
	);
}
