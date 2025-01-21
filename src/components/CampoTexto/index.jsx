import { styled } from "styled-components"
import { CiSearch } from "react-icons/ci";


const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: solid 2px #817ae6;
    border-radius: 10px;
    width: 500px;
    height: 56px;
    padding: 0 1rem;
`;

const InputBuscador = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 20px;
    line-height: 20px;
`;

const SearchIcon = styled(CiSearch)`
    color: #887be7;
    cursor: pointer;
    font-size: 28px;
`;

const CampoTexto = () => {
    return <InputContainer>
        <InputBuscador placeholder="¿Qué estás buscando?"/>
        <SearchIcon/>
    </InputContainer>
}

export default CampoTexto;