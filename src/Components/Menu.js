export default function Menu() {
    return(
        <ul class="menu">
            <MenuItem texto="Home" link="./home.html" imagem="./imgs/home-outline.svg"/>
            <MenuItem texto="Favoritos" link="./favoritos.html" imagem="./imgs/heart-outline.svg"/>
            <MenuItem texto="Contatos" link="./contatos.html" imagem="./imgs/mail-outline.svg"/>
        </ul>
    )
}

function MenuItem(props){
    return(
        <li>
            <img src={props.imagem}/>
            <a href={props.link}>{props.texto}</a>
        </li>
    )
}