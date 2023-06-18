import React, { useState } from "react";
import SubmitBtn from "./SubmitBtn";

const StepperTop = ({ index, title }) => {
	const [selected, setSelected] = useState(false);
	const handleSubmit = () => {
		setSelected(!selected);
	};
	return (
		<div>
			<div className='  flex justify-between items-center'>
				<div className='relative flex flex-col items-center'>
					<div
						className={`rounded-full transition duration-500 ease-in-out border-2  h-10 w-10 flex items-center justify-center py-3 ${
							selected
								? "bg-blue-600 border-blue-600 text-white"
								: "border-blue-600"
						} `}
					>
						{/* Number */}
						{index}
					</div>
					<div className='absolute top-0 text-center -mt-12 w-32 font-semibold'>
						{/* Description */}
						{title}
					</div>
				</div>
				<div
					className={` flex-auto border-t-2 transition duration-500 ease-in-out w-full ${
						selected && "border-blue-600"
					}`}
				>
					{/* Line */}
				</div>
			</div>
			<SubmitBtn handleSubmit={handleSubmit} />
		</div>
	);
};

export default StepperTop;
