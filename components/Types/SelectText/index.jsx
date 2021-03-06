import React from 'react'

import styled from 'styled-components'
import Option from './Option'
import { isEmpty } from 'ramda'

const SelectText = ({title, typeTxt, onClick, index, idQuestion, answerPainted}) => {
  return(
    <Content id={`${index + 1}`}>
      <Title>{title}</Title>
      <WrapperOptions>
      {
        !isEmpty(typeTxt) &&
        typeTxt?.map((item, i) => {
          return(
            <>
              <Option
                answerPainted={answerPainted}
                idReponse={item?.idReponse}
                key={i}
                onClick={() => onClick(index, item, title, idQuestion)}
                nameBtn={item?.text}
              />
            </>
          )
        })
      }
      </WrapperOptions>
    </Content>
  )
}

export default SelectText

const Content = styled.div`
  width: 90%;
  min-height: 200px;
  height: auto;
  /* background-color: blue; */
  margin: 20px auto;
`
const WrapperOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
`
const Title = styled.h1`
  width: 70%;
  font-size: 25px;
  text-align: center;
  margin: 0 auto;
  letter-spacing: -0.2px;
  font-family: 'Roboto', sans-serif;
  &::after {
    display: block;
    content: "";
    height: 4px;
    width: 110px;
    background-color: #DB2237;
    margin: 5px auto 10px;
  }
`