import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './style'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa'

function Resume({ income, expense, total }) {
  return (
    <C.Container>
        <ResumeItem Title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
        <ResumeItem Title="Saidas" Icon={FaRegArrowAltCircleDown} value={expense}/>
        <ResumeItem Title="Total" Icon={FaDollarSign} value={total}/>
    </C.Container>
  )
}

export default Resume