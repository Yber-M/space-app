import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"

const ListaEstelizada = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstelizada>
                    <ItemNavegacion iconoActivo='iconos/home-activo.png' iconoInactivo='iconos/home-inactivo.png' activo>
                        Inicio
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo='iconos/mas-vistas-activo.png' iconoInactivo='iconos/mas-vistas-inactivo.png'>
                        Más visitados
                    </ItemNavegacion>
                </ListaEstelizada>
            </nav>
        </aside>
    )
}

export default BarraLateral