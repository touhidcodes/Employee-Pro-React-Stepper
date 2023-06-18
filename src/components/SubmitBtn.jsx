import React from 'react';

const SubmitBtn = ({handleSubmit}) => {
    return (
			<div>
				<button className='btn btn-outline btn-primary btn-sm mt-24 mx-auto' onClick={handleSubmit}>
					Submit
				</button>
			</div>
		);
};

export default SubmitBtn;