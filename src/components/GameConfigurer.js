import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import MapPicker from '../components/MapPicker';

let map = {};

const onMapSelected = newMap => {
    map = newMap
};

const getSteps = () => {
    return [
        {
            label:'Select Map',
            onExit: () => {}}, 
        {
            label:'Choose Faction'}, 
        {
            label:'Confirm'}];
}
  
const getStepContent = (step) => {
    switch (step) {
        case 0:
            return <MapPicker onMapSelected={onMapSelected}/>;
        case 1:
            return <h1>To be implemented :)</h1>;
        case 2:
            return <h1>To be implemented :)</h1>;
        default:
            return <h1>'Unknown step'</h1>;
    }
}

const GameConfigurer = ({setMap}) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      }
    
    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
    
    function handleReset() {
        setActiveStep(0);
    }

    function handleFinish() {
        setMap(map);
    }

    return (
        <div>
        <Stepper activeStep={activeStep}>
            {steps.map(step => (
                <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <div>
            <div>
                {getStepContent(activeStep)}
                <div>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}>
                        Back
                    </Button>
                    {activeStep === steps.length - 1 ?
                        <Button variant="contained" color="primary" onClick={handleFinish}>
                            <Link className="MainMenuButton" to="/play/">Finish</Link>
                        </Button>
                        :
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            Next
                        </Button>
                    }
                </div>
            </div>
      </div>
      </div>
    );

};

export default GameConfigurer;