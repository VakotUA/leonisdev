import React from 'react'
import Stepper from '../../components/Stepper'
import Targets from '../../components/Targets'
import Technologies from '../../components/Technologies'
import Services from '../../components/Services'

const Magic: React.FC = () => {
  return (
    <>
      <Targets />
      <Stepper />
      <Technologies />
      <Services />
    </>
  )
}

export default Magic
