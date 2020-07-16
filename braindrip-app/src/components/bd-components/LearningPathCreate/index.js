

import React, { useState } from 'react'

import LearningPathShell from './LearningPathShell'
import LearningPathResources from './LearningPathResources'
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

function LearningPathCreate({ modal=false, modalForm=null }) {
    const [learningPath, updateLearningPath] = useState({})

    // const onChange = current => {
    //     console.log('onChange:', current);
    //     updateStep(current)
    // };

    // const next = () => {
    //     const current = step + 1;
    //     updateStep(current)
    // }
    
    // const prev = () => {
    //     const current = step - 1;
    //     updateStep(current)
    // }

    const shellCreateCallback = (values) => {
        
        // const current = step + 1;
        updateLearningPath(values)
        // updateStep(current)

        console.log(values)
    }

    return (
        <>
        <LearningPathShell modal={modal} modalForm={modalForm} callback={shellCreateCallback} />
        {/* <LearningPathResources modal={modal} modalForm={modalForm} learningPath={learningPath} /> */}
        {/* <Steps
          current={step}
        //   onChange={onChange}
        >
            {steps.map(s => <Step title={s.title} />)}
        </Steps>
        {(() => {
            switch (step) {
              case 0:
                return <LearningPathShell modal={modal} modalForm={modalForm} callback={shellCreateCallback} />;
              case 1:
                return <LearningPathResources modal={modal} modalForm={modalForm} learningPath={learningPath} />;
              case 2:
                return <LearningPathShell modal={modal} modalForm={modalForm} />;
              default:
                return null;
            }
          })()} */}
          {/* <div className="steps-action">
          {step > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {step < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {step === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          </div> */}
          </>
    )
}

export default LearningPathCreate
