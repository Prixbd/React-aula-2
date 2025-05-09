import { useState } from 'react';
import './App.css';

function App() {
  // Hook - função que permite adicionar estado a um componente. 
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState(['Estudar React', 'Fazer exercícios', 'Ler livro'])

  const adicionarTarefa = () => {
    if(tarefas.includes(tarefa)) {
      alert('Esta tarefa já está na lista');
      return;
    }
    // Adicionando nova tarefa na lista.
    setTarefas([...tarefas, tarefa]);
    // Limpar o campo de entrada.
    setTarefa('')
  }

  const limparLista = () => {
    setTarefas([]);
  }

  return (
   <div className='App'>
    <h1>Lista de Tarefas</h1>
    <hr/>
    <h2>Adicionar Tarefa</h2>
    <input
      type='text'
      placeholder='Digite sua tarefa'
      value={tarefa}
      onChange={(e) => setTarefa(e.target.value)}
    />

    <button onClick={adicionarTarefa}>Adicionar</button>
    <hr/>
    <h2>Minhas Tarefas</h2>
     
    <ol>
      {tarefas.map((tarefa, index) => (<li key={index}>{tarefa}</li>))}
    </ol>
    
    {tarefas.length > 0 && (
      <button onClick={limparLista} className="limpar-btn">Limpar Lista</button>
    )}
   </div>
  );
}

export default App;