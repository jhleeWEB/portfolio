import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@heroui/react';
import { DocumentTextIcon } from './Icons';

type Props = {
	title?: string;
	content: {
		src?: string;
		objectives: string[];
		contribution: string[];
		accomplishments: string[];
	};
};

export default function DetailInfoModal({
	title = 'Modal Title',
	content,
}: Props) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onPress={onOpen} isIconOnly>
				<DocumentTextIcon />
			</Button>
			<Modal
				backdrop='blur'
				isDismissable={true}
				isKeyboardDismissDisabled={true}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					<ModalHeader className='flex flex-col gap-1 text-lg'>
						{title}
					</ModalHeader>
					<ModalBody>
						{content.src && (
							<iframe
								className='rounded-large'
								src={content.src}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
								title='video'
								height='225'
							/>
						)}
						<span className='text-lg font-semibold'>목표</span>
						<ul>
							{content.objectives.map((n) => (
								<li key={n}>· {n}</li>
							))}
						</ul>
						<span className='text-lg font-semibold'>성과</span>
						<ul>
							{content.accomplishments.map((n) => (
								<li key={n}>· {n}</li>
							))}
						</ul>
						<span className='text-lg font-semibold'>기여</span>
						<ul>
							{content.contribution.map((n) => (
								<li key={n}>· {n}</li>
							))}
						</ul>
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
