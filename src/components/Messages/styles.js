import styled, { css } from 'styled-components'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeaderProfile = styled.div`
  display: flex;
  padding: 15px 20px;
  border-bottom: 1px solid #EEEEEE;

  div {
     p {
       margin-left: 10px;
       ${props => props.theme?.rtl && css`
         margin-right: 10px;
         margin-left: 0px;
      `}
      }
     strong {
      p{
        margin-block-end: 0.1em;
      }
    }
    p {
      margin-block-start: 0.1em;
      font-size: 0.7em
    }
  }
`
export const HeaderName = styled.p`
  font-size: 1.1em;
  margin-block-end: 0.1em;
  margin-block-start: 0.1em;

`

export const Status = styled.p`
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-size: 0.7em;
`

export const Image = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme?.colors?.primary};
  border-radius: 1000px;
  padding: 5px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    border-radius: 1000px;
    object-fit: cover;
    border: 1px solid #F5F5F5;
  }

  img[name]{
    border: 1px solid #D81212;
    border-radius: 50%;
  }

  svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 6px;
  }
`

export const HeaderOnline = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  margin-left: 10px;

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
    text-align: right;
  `}
  h1,
  span {
    margin: 0px;
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  span {
    font-size: 13px;
    font-weight: 300;
  }
`

export const Chat = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  height: 55vh;
  flex-direction: column;
<<<<<<< HEAD
  padding: 20px;

  @media only screen and (max-width: 480px) {
    height: 66vh;
=======
  padding: 0 20px;
  > :first-child{
    margin-top: 10px;
  }
  @media (max-width: 768px){
    height: 70vh;
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  }
`

export const MessageConsole = styled.div`
  display: inline-flex;
  justify-content: start;
  font-size: 0.8em;
  border-radius: 40px 40px 40px 0px; 
`

export const MessageBusiness = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8em;
  word-spacing: 0.30em; 
`

export const MessageCustomer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 0.8em;
  word-spacing: 0.30em; 
`

export const BubbleConsole = styled.div`
<<<<<<< HEAD
  border-radius: 40px 40px 40px 0px;
  padding: 15px;
  max-width: 55%;
  margin-bottom: 10px;
=======
  border-radius: 5px;
  padding: 5px 15px;
  max-width: 30%;
  margin-bottom: 15px;
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  background: #EFEFEF;
  text-align: left;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
<<<<<<< HEAD
  word-spacing: 0.30em; 
`

export const BubbleBusines = styled.div`
  border-radius: 40px 40px 40px 0px;
  padding: 10px 25px 15px 25px;
  max-width: 55%;
=======
  @media (max-width: 1024px){
    max-width: 40%
  }
`

export const BubbleBusines = styled.div`
  border-radius: 97px 97px 97px 0px;
  padding: 10px 25px 10px 25px;
  max-width: 40%;
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  min-width: 80px;
  margin-bottom: 10px;
  background: #EFEFEF;
  overflow: hidden;
  overflow-wrap: break-word;
  &[name=image]{
<<<<<<< HEAD
    border-radius: 15px 15px 15px 0;
    padding: 10px 30px 15px 30px;
=======
    border-radius: 40px 40px 40px 0px;
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 0px 97px;
      &[name=image]{
      border-radius: 40px 40px 0px 40px;
     }
  `}

  @media (max-width: 1024px){
    max-width: 60%;
  }
  @media (max-width: 480px){
    border-radius: 40px 40px 40px 0px;

    ${props => props.theme?.rtl && css`
      border-radius: 40px 40px 0px 40px;
    `}
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  }
`

export const BubbleCustomer = styled.div`
<<<<<<< HEAD
  border-radius: 40px 40px 0px 40px;
  padding: 10px 25px 15px 25px;
  max-width: 55%;
=======
  border-radius: 97px 97px 0px 97px;
  padding: 10px 25px 10px 25px;
  max-width: 40%;
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  min-width: 80px;
  height: auto;
  margin-bottom: 10px;
  background: #D81212;
  color: white;
  overflow-wrap: break-word;
  overflow: hidden;
<<<<<<< HEAD
  
  &[name=image]{
    border-radius: 15px 15px 0px 15px;
    padding: 10px 20px 15px 20px;
=======

  p:last-child {
    left: 10px;
  }

  &[name=image]{
    border-radius: 40px 40px 0px 40px;
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 97px 0px;

    p:last-child {
      left: initial;
      right: 10px;
    }

    &[name=image]{
      border-radius: 40px 40px 40px 0px;
     }
  `}

  @media (max-width: 1024px){
    max-width: 60%
  }

  @media (max-width: 480px){
    border-radius: 40px 40px 0px 40px;

    ${props => props.theme?.rtl && css`
      border-radius: 40px 40px 40px 0px;
    `}
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  }
`

export const SkeletonBubbleCustomer = styled.div`
  span{
    border-radius: 97px 97px 0px 97px;
    ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 97px 0px;
    `}
  }
`
export const SkeletonBubbleBusiness = styled.div`
  span{
    border-radius: 97px 97px 97px 0px;
    ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 0px 97px;
    `}
  }
`

export const ChatImage = styled.div`
  width: 100%;
  height: auto;
  img{
    width: 100%;
    height: auto;
    vertical-align: middle;
    object-fit: contain;
  }
`

export const PartnerName = styled.p`
  margin-block-start: 0;
<<<<<<< HEAD
  margin-block-end: 0.2em;
  font-size: 1em;
=======
  margin-block-end: 0.6em;
  font-size: 1.1em;
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
`

export const MyName = styled.p`
    margin-block-start: 0;
<<<<<<< HEAD
    margin-block-end: 0.2em;
    font-size: 1em;
=======
    margin-block-end: 0.6em;
    font-size: 1.1em;
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
  `}
`

export const TimeofSent = styled.p`
  position: relative;
  text-align: right;
  font-size: 0.8em;
  margin-block-start: 0.2em;
  margin-block-end: initial;

  ${props => props.theme?.rtl && css`
    text-align: left;
  `}
`

export const SendForm = styled.div`
  padding: 10px 20px;
  background: #FAFAFA;
  border-top: 1px solid #EEEEEE;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`

export const Send = styled.form`
  display: flex;
  height: auto;
<<<<<<< HEAD
  justify-content: center;
  align-items: center;
  > input {
=======

  input {
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
    flex: 1;
    padding-top: 10px;
    padding-bottom: 10px;
  }

<<<<<<< HEAD
  @media only screen and (max-width: 480px) {
  > input {
    max-width: 55%;
  }
}     
`

export const SendImage = styled.label`
  width: 45px;
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
=======
  @media (max-width: 640px){
    input{
      flex: initial;
      width: 60%;
    }
  }
`

export const SendImage = styled.label`
  width: 25px;
  height: 25px;
  margin: 0px 20px;

>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  input {
    display: none;
  }

  svg {
    color: #CFD0D0;
    width: 25px;
    height: 25px;
    cursor: pointer
  }  
`

export const WrapperDeleteImage = styled.div`
<<<<<<< HEAD
  padding-left: 15px;
  padding-right: 15px; 

  input[type="button"]{
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    border: none;
=======
  margin: 0px 17px;

  button{
    &:disabled {
    cursor: not-allowed;
    }
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  }
`

export const WrapperSendMessageButton = styled.div`
  white-space: nowrap;

  button{
    padding-top: 7px;
    padding-bottom: 7px;
    svg {
       margin-right: 10px;
       width: 1.5em;
       height: 1.5em; 
       vertical-align: middle;
       color: white;
       ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0px;
        transform: rotate(270deg)
      `}
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

<<<<<<< HEAD
  @media only screen and (max-width: 578px){
      button{
        font-size: 0;
        > svg {
          font-size: initial;
          margin-right: 0 ;
        }
      }
=======
  @media (max-width: 480px){
    button{
      svg {
        margin: 0;
      }
      span {
        display: none;
      }
    }
>>>>>>> c0b5929d248f48830e8a92ff64df7aa18fc03b88
  }
`
