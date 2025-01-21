import styled from "styled-components";

const ItemListaEstelizado = styled.li`

`;

const ItemNavegacion = ({ children, iconoActivo, iconoInactivo, activo = false }) => {
    return <ItemListaEstelizado>
        <img src={activo ? iconoActivo : iconoInactivo} alt="icono" />
        {children}
    </ItemListaEstelizado>
}

export default ItemNavegacion;