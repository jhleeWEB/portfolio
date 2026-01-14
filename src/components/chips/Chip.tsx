import { Chip } from '@heroui/react';

type Props = {
	content: string;
};
export default function CustomChip({ content }: Props) {
	return (
		<Chip size='sm' className='rounded-lg'>
			{content}
		</Chip>
	);
}
