import { Switch } from '@heroui/react';
import { MoonIcon, SunIcon } from './Icons';

export default function DarkModeSwitch() {
	return (
		<Switch
			defaultSelected
			color='primary'
			endContent={<MoonIcon />}
			size='lg'
			startContent={<SunIcon />}
		/>
	);
}
