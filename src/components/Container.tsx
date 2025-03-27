const Container: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = (
	props
) => {
	return (
		<div className='flex flex-wrap w-full min-h-[40rem]' {...props}>
			{props.children}
		</div>
	);
};

export default Container;
