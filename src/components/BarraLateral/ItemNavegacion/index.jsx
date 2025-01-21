import styled from "styled-components";

const ItemListaEstelizado = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${props => props.$activo ? "#7B78E5" : "#d9d9d9"};
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};
`;

const ItemNavegacion = ({ children, iconoActivo, iconoInactivo, activo = false }) => {
    return <ItemListaEstelizado $activo={activo}>
        <img src={activo ? iconoActivo : iconoInactivo} alt="icono" />
        {children}
    </ItemListaEstelizado>
}

export default ItemNavegacion;