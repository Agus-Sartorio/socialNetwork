import React, {useRef, useState} from "react";
import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import { useSpring, animated} from 'react-spring'
import { useUserAuth } from "../Context/UserContext";
import { Link } from "react-router-dom";


export default function Modal ({showModal, setShowModal}) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }

  //  const keyPress = useCallback(e => {
  //    if (e.key === 'Escape' && showModal) {
  //      setShowModal(false);
  //    }
  //  }, [setShowModal, showModal])

  //  useEffect(()=> {
  //    document.addEventListener('keydown', keyPress);
  //    return () => document.removeEventListener('keydown', keyPress)
  //  }, [keyPress])

  //reset password
  const [resetEmailPassword, setResetEmailPassword] = useState("");
  const {forgotPassword} = useUserAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')


  async function resetPassword (e) {
    e.preventDefault();
    try{
      setMessage('')
      setError('')
      setLoading(true)
      await forgotPassword(resetEmailPassword)
      setMessage('Check your inbox of the email you provided')
    }catch {
      setError('Failed to reset your password')
    }
    setLoading(false)
  }

    return(
        <>
        {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
                <ModalWrapper >
                    <Container showModal={showModal}>
                    <CloseModalButton onClick={() => setShowModal(prev => !prev)}/>
                <h1>Password Reset</h1>
                {error && <p>{error}</p>}
                <Input type="text" placeholder="Introduce your email to reset your password"
                onChange={(e)=> setResetEmailPassword(e.target.value)}/>
                </Container>
                <Button disabled={loading} onClick={resetPassword}>Reset password</Button>
                <p><Link to='/'><span>Go back</span></Link></p>
                </ModalWrapper>
                </animated.div>
        </Background>
    
    ): null }
        </>
    );
}

const Button = styled.button`
 @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  margin-top: 70px;
  height: 2.3rem;
  background-color: #000000;
  color: white;
  border-radius: 3rem;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  font-weight: 700;
  width: 19rem;
  letter-spacing: 0.05rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: 'Montserrat', sans-serif;
  &:hover {
    background-color: #d5d5d5;
    color: black;
  }
`

const Background = styled.div`
    width: 120%;
    height: 150%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`


const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 80vh;
  margin-bottom: 120px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  //   backdrop-filter: blur(8.5px);
  letter-spacing: 0.1rem;
`;

const Container = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >h1 {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      display: flex;
      justify-content: center;
      align-items: center;
     margin-top: 10px ;
      font-size: 20px;
      margin-bottom: 50px;
      font-family: 'Montserrat', sans-serif;
      
      
  }
`
const Input = styled.input`
display: flex;
justify-content: space-around;
align-items: center;
width: 250%;
height: 3rem;
`
const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: relative;
    left:  220px;
    top: -5px;
    width: 22px;
    height: 22px;
    padding: 0;

    
`
