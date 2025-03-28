import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@heroui/react';
import { DocumentTextIcon } from '../Icons';

type Props = {
	title?: string;
	src?: string;
	content: {
		title: string;
		list: string[];
	}[];
};

export default function DetailInfoModal({
	title = 'Modal Title',
	src,
	content,
}: Props) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button className='bg-background' onPress={onOpen} isIconOnly>
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
						{src && (
							<iframe
								className='rounded-large'
								src={src}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
								title='video'
								height='225'
							/>
						)}
						{content.map((n) => (
							<>
								<span className='text-lg font-semibold'>{n.title}</span>
								<ul>
									{n.list.map((n) => (
										<li key={n}>· {n}</li>
									))}
								</ul>
							</>
						))}
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
