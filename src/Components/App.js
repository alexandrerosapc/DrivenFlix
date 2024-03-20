import Conteudo from "./Conteudo"
import Menu from "./Menu"
import Topo from "./Topo"

export default function App() {
    return (
        <div>
            <Topo/>
            <div class="row">
                <Menu/>
                <Conteudo/>
            </div>
        </div>
    )
}