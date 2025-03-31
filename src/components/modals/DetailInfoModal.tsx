import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Button,
	useDisclosure,
	Link,
} from '@heroui/react';
import { DocumentTextIcon } from '../Icons';

type Props = {
	title?: string;
	src?: string;
	content: {
		title: string;
		list: string[];
		links?: { homepage: string; about: string };
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
					<ModalBody className='p-6 pt-0'>
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
							<section key={n.title}>
								<span className='uppercase text-lg font-semibold mb-[-12px] underline underline-offset-2 decoration-4 decoration-blue-400'>
									{n.title}
								</span>
								<ul>
									{n.list.map((n) => (
										<li key={n}>· {n}</li>
									))}
								</ul>
								{n.links && (
									<section className='flex gap-2 items-center mb-3'>
										<Button
											color='primary'
											target='_blank'
											size='sm'
											as={Link}
											href={n.links.homepage}
										>
											홈페이지
										</Button>
										<Button
											color='default'
											target='_blank'
											size='sm'
											as={Link}
											href={n.links.about}
										>
											서비스 소개
										</Button>
									</section>
								)}
							</section>
						))}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
