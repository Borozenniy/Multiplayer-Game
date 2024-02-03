import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
     // Устанавливаем соединение с сервером
    const socket = io('https://multiplayer-game-production-7342.up.railway.app/');
    
    // Обработчик события
    socket.on('message', () => {
      console.log('Connected to server(client side')
    });

    //Отправляем сообщение на сервер 
    socket.emit('client-message', 'Hello from client');

    // Обработчик события от сервера
    socket.on('serverMessage', (data): void => {
      console.log('Message from server: ', data)
    });

    return () => {
      socket.disconnect();
    }
  }, [])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
