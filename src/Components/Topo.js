/*let nome
let a = document.querySelector('button')
a.addEventListener('click', clicar)
function clicar(){
   nome =  prompt("Qual é o seu nome")
    
}*/
export default function Topo() {
    return (
        <div class="topo">
            <h1>DrivenFlix</h1>
            <div>
                <button >Inserir Nome</button>
                <p>Bem-vindo(a), !</p>
                <img src="#" alt=""/>
            </div>
        </div>
    )
}