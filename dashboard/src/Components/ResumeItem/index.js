import React from 'react'
import * as C from './style'

function ResumeItem({ Title, Icon, value }) {
  return (
    <C.Container>
        <C.Header>
          <C.HeaderTitle>
            {Title}
          </C.HeaderTitle>
          <Icon/>
        </C.Header>
        <C.Total>{value}</C.Total>
    </C.Container>
  )
}

export default ResumeItem