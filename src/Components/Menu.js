export default function Menu() {
    const menu =[
        {texto: "Home", link: "./home.html", imagem: "./imgs/home-outline.svg" },
        {texto: "Favoritos", link: "./favoritos.html", imagem: "./imgs/heart-outline.svg" },
        {texto: "Contatos", link: "./contatos.html", imagem: "./imgs/mail-outline.svg" }
    ]

    return(
        <ul className="menu">
            {menu.map((i)=> <MenuItem key={i.texto} imagem={i.imagem} link={i.link} texto={i.texto} />)}
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