import {  DivFrase, DivText, DivWelcome } from "./Styled";

const Welcome = () => {
    return (
        <DivWelcome>
            <DivText>
                <h1>Bienvenido a Henry network</h1>
                <h3>La red social para la comunidad Henry</h3>
            </DivText>
            <DivFrase>
                <h3>Es mejor intentar algo, ver que no funciona y aprender de ello, que no hacer nada</h3>
            </DivFrase>
        </DivWelcome>
    )
}

export default Welcome;