import { Listbox, ListboxItem } from '@heroui/react';
import { Pagination } from '@heroui/react';
import { DatePicker } from '@heroui/react';
import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';

type Props = {
	children: React.ReactElement;
};
export const ListboxWrapper = ({ children }: Props) => (
	<div className='w-full max-w-[180px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 animate-float'>
		{children}
	</div>
);

function Sample1() {
	const items = [
		{
			key: 'new',
			label: 'New file',
		},
		{
			key: 'copy',
			label: 'Copy link',
		},
		{
			key: 'edit',
			label: 'Edit file',
		},
		{
			key: 'delete',
			label: 'Delete file',
		},
	];

	return (
		<ListboxWrapper>
			<Listbox
				aria-label='Dynamic Actions'
				items={items}
				onAction={(key) => alert(key)}
			>
				{(item) => (
					<ListboxItem
						key={item.key}
						className={item.key === 'delete' ? 'text-danger' : ''}
						color={item.key === 'delete' ? 'danger' : 'default'}
					>
						{item.label}
					</ListboxItem>
				)}
			</Listbox>
		</ListboxWrapper>
	);
}

function Sample2() {
	return (
		<Pagination
			className='animate-float'
			size='sm'
			initialPage={1}
			total={10}
		/>
	);
}

function Sample3() {
	return (
		<div className='flex flex-wrap md:flex-nowrap gap-4 animate-float-slow'>
			<DatePicker isRequired className='max-w-[284px]' label='Birth date' />
		</div>
	);
}

function Sample4() {
	return (
		<div className='flex w-full flex-col max-w-72 animate-float'>
			<Tabs aria-label='Options'>
				<Tab key='photos' title='Photos'>
					<Card>
						<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</CardBody>
					</Card>
				</Tab>
				<Tab key='music' title='Music'>
					<Card>
						<CardBody>Ut enim ad minim veniam.</CardBody>
					</Card>
				</Tab>
				<Tab key='videos' title='Videos'>
					<Card>
						<CardBody>Excepteur sint.</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
}

function Sample5() {
	return (
		<div className='flex flex-col flex-wrap gap-4 animate-float-slow'>
			<Breadcrumbs variant='bordered'>
				<BreadcrumbItem>Next.js</BreadcrumbItem>
				<BreadcrumbItem>React</BreadcrumbItem>
				<BreadcrumbItem>4년</BreadcrumbItem>
			</Breadcrumbs>
		</div>
	);
}

export default { Sample1, Sample2, Sample3, Sample4, Sample5 };
