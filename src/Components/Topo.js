import React from "react"
export default function Topo() {
    const [nome, setNome] = React.useState("")
    const [imagem, setImagem] = React.useState("https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg")

    function inserirNome() {
        setNome(prompt("Qual é o seu nome?"))
    }

    function inserirImagem() {
        setImagem(prompt("Coloque o link de uma imagem"))
    }
    return (
        <div class="topo">
            <h1>DrivenFlix</h1>
            <div>
                <button onClick={inserirNome}>Inserir Nome</button>
                <p>{!nome ? `Bem-vindo(a), !`: `Bem-vindo(a), ${nome}!`}</p>
                <img onClick={inserirImagem} src={!imagem ? "https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg": imagem} />
            </div>
        </div>
    )
}