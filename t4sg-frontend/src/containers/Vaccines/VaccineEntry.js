import React from 'react'
import {
  OddEntryDiv, EvenEntryDiv, TopEntryDiv,
} from '../styles'

const VaccineEntry = ({
  rank, name, state,
}) => (
  <>
    {rank
      ? (
        rank % 2 ? (
          <OddEntryDiv>
            <p>{name}</p>
            <p>{state}</p>
          </OddEntryDiv>
        )
          : (
            <EvenEntryDiv>
              <p>{name}</p>
              <p>{state}</p>
            </EvenEntryDiv>
          )
      )
      : (
        <TopEntryDiv>
          <p>{name}</p>
          <p>{state}</p>
        </TopEntryDiv>
      )}
  </>
)

export default VaccineEntry
