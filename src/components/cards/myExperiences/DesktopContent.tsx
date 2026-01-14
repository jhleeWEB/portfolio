import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Link,
} from '@heroui/react';
import CustomChip from '../../chips/Chip';
import DetailInfoModal from '../../modals/DetailInfoModal';
import rows from './rowData';

const DesktopContent = () => {
	return (
		<Table removeWrapper aria-label='Example static collection table'>
			<TableHeader>
				<TableColumn>회사</TableColumn>
				<TableColumn>업무</TableColumn>
				<TableColumn>기여</TableColumn>
				<TableColumn>서비스</TableColumn>
			</TableHeader>
			<TableBody>
				{rows.map((row) => (
					<TableRow key={row.key}>
						<TableCell>
							<h1 className='text-xl font-semibold mb-[-6px]'>
								{row.experience.company}
							</h1>
							<Link size='sm' href={row.link} showAnchorIcon>
								<i>{row.link}</i>
							</Link>
							<div className='flex gap-2 mt-1'>
								{row.experience.role.map((n, i) => (
									<CustomChip key={n + i} content={n} />
								))}
							</div>
							<small>{row.duration}</small>
						</TableCell>
						<TableCell>
							<ul>
								{row.assignments.map((n) => (
									<li key={n} className='flex'>
										· {n}
									</li>
								))}
							</ul>
						</TableCell>
						<TableCell>
							<DetailInfoModal
								title={row.experience.company}
								content={row.contributionModalContent}
							/>
						</TableCell>
						<TableCell>
							<DetailInfoModal
								title={row.experience.company}
								content={row.services}
							/>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default DesktopContent;
