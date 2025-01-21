import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 40px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 212px;
    }
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="logo-space_app" />
        <CampoTexto />

    </HeaderEstilizado>
}

export default Cabecera;