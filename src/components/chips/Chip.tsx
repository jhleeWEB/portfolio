import { Chip } from '@heroui/react';

type Props = {
	key?: string;
	content: string;
};
export default function CustomChip({ key, content }: Props) {
	return (
		<Chip key={key} size='sm' className='rounded-lg'>
			{content}
		</Chip>
	);
}
