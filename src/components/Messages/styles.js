import styled from 'styled-components'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const HeaderProfile = styled.div`
  display: flex;
  padding: 15px 20px;
  border-bottom: 1px solid #EEEEEE;

  div {
     p {
       margin-left: 10px;
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
    border: 1px solid #CCC;
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
  overflow: auto;
  height: 55vh;
  flex-direction: column;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    height: 66vh;
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
  border-radius: 40px 40px 40px 0px;
  padding: 15px;
  max-width: 55%;
  margin-bottom: 10px;
  background: #EFEFEF;
  text-align: left;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  word-spacing: 0.30em; 
`

export const BubbleBusines = styled.div`
  border-radius: 40px 40px 40px 0px;
  padding: 10px 25px 15px 25px;
  max-width: 55%;
  min-width: 80px;
  margin-bottom: 10px;
  background: #EFEFEF;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  &[name=image]{
    border-radius: 15px 15px 15px 0;
    padding: 10px 30px 15px 30px;
  }
`

export const BubbleCustomer = styled.div`
  border-radius: 40px 40px 0px 40px;
  padding: 10px 25px 15px 25px;
  max-width: 55%;
  min-width: 80px;
  margin-bottom: 10px;
  background: #D81212;
  color: white;
  overflow-wrap: break-word;
  overflow: hidden;
  
  &[name=image]{
    border-radius: 15px 15px 0px 15px;
    padding: 10px 20px 15px 20px;
  }
`

export const SkeletonBubbleCustomer = styled.div`
  span{
    border-radius: 97px 97px 0px 97px;
  }
`
export const SkeletonBubbleBusiness = styled.div`
  span{
    border-radius: 97px 97px 97px 0px;
  }
`

export const ChatImage = styled.div`
  width: 100%;
  img{
    width: 100%;
  }
`

export const PartnerName = styled.p`
  margin-block-start: 0;
  margin-block-end: 0.2em;
  font-size: 1em;
`

export const MyName = styled.p`
    margin-block-start: 0;
    margin-block-end: 0.2em;
    font-size: 1em;
    text-align: right;
`

export const TimeofSent = styled.p`
  text-align: right;
  font-size: 0.8em;
  margin-block-start: initial;
  margin-block-end: initial;
`

export const SendForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  background: #FAFAFA;
  border-top: 1px solid #EEEEEE;
`

export const Send = styled.form`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  > input {
    flex: 1;
    padding-top: 10px;
    padding-bottom: 10px;
  }

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
  input {
    display: none;
  }
  svg {
    color: #CFD0D0;
    width: 100%;
    height: 100%;
    cursor: pointer
  }  
`

export const WrapperDeleteImage = styled.div`
  padding-left: 15px;
  padding-right: 15px; 

  input[type="button"]{
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    border: none;
  }
`

export const WrapperSendMessageButton = styled.div`
  button{
    padding-top: 5px;
    padding-bottom: 5px;
    svg {
       margin-right: 10px;
       width: 1.5em;
       height: 1.5em; 
       vertical-align: middle;
       color: white
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width: 578px){
      button{
        font-size: 0;
        > svg {
          font-size: initial;
          margin-right: 0 ;
        }
      }
  }
`
