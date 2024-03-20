let nome
function clicar(){
   nome =  prompt("Qual é o seu nome")
    
}
export default function Topo() {
    return (
        <div class="topo">
            <h1>DrivenFlix</h1>
            <div>
                <button onclick="clicar()">Inserir Nome</button>
                <p>Bem-vindo(a), {nome}!</p>
                <img src="#" alt=""/>
            </div>
        </div>
    )
}