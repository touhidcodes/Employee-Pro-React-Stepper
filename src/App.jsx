import "./App.css";
import Stepper from "./components/Stepper";
import StepperTop from "./components/StepperTop";
import StepperEnd from "./components/StepperEnd";

function App() {
	return (
		<>
			<div className='w-10/12 mx-auto py-40'>
				<div className='grid grid-cols-8 gap-0 justify-center relative'>
					<Stepper index='1' title='Application' />
					<StepperTop index='2' title='Basic test' />
					<Stepper index='3' title='Skill test' />
					<StepperTop index='4' title='Creativity test' />
					<Stepper index='5' title='Language & Culture test' />
					<StepperTop index='6' title='Live test' />
					<Stepper index='7' title='Project submission' />
					<StepperEnd />
				</div>
			</div>
		</>
	);
}

export default App;
