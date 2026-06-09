import {
	Accordion,
	AccordionItem,
	Avatar,
	AvatarGroup,
	Tooltip,
} from '@heroui/react';
import CardContainer from './CardContainer';
import jsLogo from '@assets/js.svg';
import tsLogo from '@assets/ts.svg';
import htmlLogo from '@assets/html.svg';
import cssLogo from '@assets/css.svg';
import reactLogo from '@assets/react.svg';
import nextLogo from '@assets/next.svg';
import sassLogo from '@assets/sass.svg';
import tailwindcssLogo from '@assets/tailwindcss.svg';
import dockerLogo from '@assets/docker.svg';
import awsLogo from '@assets/aws.svg';
import ec2Logo from '@assets/ec2.svg';

const BodyContent = () => {
	return (
		<Accordion variant='splitted'>
			<AccordionItem
				key='1'
				aria-label='basic stack'
				title='Fundamentals'
				subtitle='4 years experience'
				startContent={
					<AvatarGroup isBordered>
						<Tooltip content='html'>
							<Avatar className='bg-background' radius='lg' src={htmlLogo.src} />
						</Tooltip>
						<Tooltip content='CSS'>
							<Avatar className='bg-background' radius='lg' src={cssLogo.src} />
						</Tooltip>
						<Tooltip content='Javascript'>
							<Avatar className='bg-background' radius='lg' src={jsLogo.src} />
						</Tooltip>
						<Tooltip content='Typescript'>
							<Avatar className='bg-background' radius='lg' src={tsLogo.src} />
						</Tooltip>
					</AvatarGroup>
				}
			>
				기본기는 방심하는 순간 뒤쳐진다고 생각하고, 꾸준히 공부하며 코드분석을
				통해 트랜드를 따라가고 있습니다.
			</AccordionItem>
			<AccordionItem
				key='2'
				aria-label='mendatory stack'
				title='Frameworks'
				subtitle='4 years experience'
				startContent={
					<AvatarGroup isBordered>
						<Tooltip content='Next.js'>
							<Avatar radius='lg' src={nextLogo.src} />
						</Tooltip>
						<Tooltip content='React.js'>
							<Avatar className='bg-background' radius='lg' src={reactLogo.src} />
						</Tooltip>
					</AvatarGroup>
				}
			>
				빠르게 급변하는 프론트엔드 생태계에서 가장 많이 쓰이는 기술 스택을
				꾸준히 사용중입니다. 빠른 급변하는것이 프론트엔드가 굉장히 매력직이고
				그것을 최대한 잘 활용하기 위해 열심히 탑색하고 공부 중 입니다.
			</AccordionItem>
			<AccordionItem
				key='3'
				aria-label='style stack'
				title='Styling'
				subtitle='4 years experience'
				startContent={
					<AvatarGroup isBordered>
						<Tooltip content='SASS/SCSS'>
							<Avatar className='bg-background' radius='lg' src={sassLogo.src} />
						</Tooltip>
						<Tooltip content='TailwindCSS'>
							<Avatar
								className='bg-background'
								radius='lg'
								src={tailwindcssLogo.src}
							/>
						</Tooltip>
					</AvatarGroup>
				}
			>
				완성도 있는 프로젝트를 효율적으로 빠르게 개발하기 위해서는 필수적이라고
				생각합니다. tailwindcss는 현재 포트폴리오에 사용하면서 찍먹 중 입니다.
			</AccordionItem>
			<AccordionItem
				key='4'
				aria-label='build stack'
				title='Deployment'
				subtitle='2 years experience'
				startContent={
					<AvatarGroup isBordered>
						<Tooltip content='AWS'>
							<Avatar className='bg-background' radius='lg' src={awsLogo.src} />
						</Tooltip>
						<Tooltip content='AWS/EC2'>
							<Avatar className='bg-background' radius='lg' src={ec2Logo.src} />
						</Tooltip>
						<Tooltip content='Docker'>
							<Avatar className='bg-background' radius='lg' src={dockerLogo.src} />
						</Tooltip>
					</AvatarGroup>
				}
			>
				미숙한 기술들이지만 필요시 기본 사용할 수 있을정도로 사용중인
				기술입니다.
			</AccordionItem>
		</Accordion>
	);
};
const MySkills = () => {
	return (
		<CardContainer
			id='skills'
			title='Stack'
			subTitle='제너럴리스트가 되고 싶은 스페셜리스트입니다. 맡은 업무에서는 스페셜리스트, 취미로는 제너럴리스트'
			bodyContent={<BodyContent />}
		/>
	);
};

export default MySkills;
