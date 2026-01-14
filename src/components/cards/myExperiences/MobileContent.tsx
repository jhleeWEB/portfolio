// import DetailInfoModal from '../../modals/DetailInfoModal';
import { Accordion, AccordionItem } from '@heroui/react';
import rows from './rowData';
import DetailInfoModal from '@src/components/modals/DetailInfoModal';

const MobileContent = () => {
	return (
		<Accordion variant='splitted' className='p-0'>
			{rows.map((row) => (
				<AccordionItem
					key='1'
					aria-label={row.experience.company}
					title={row.experience.company}
					subtitle={row.link}
				>
					<h1 className='font-semibold'>업무</h1>
					<ul>
						{row.assignments.map((n) => (
							<li key={n} className='flex'>
								· {n}
							</li>
						))}
					</ul>
					<section className='flex justify-end'>
						<DetailInfoModal
							title={row.experience.company}
							content={row.contributionModalContent}
						/>
						<DetailInfoModal
							title={row.experience.company}
							content={row.services}
						/>
					</section>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default MobileContent;
