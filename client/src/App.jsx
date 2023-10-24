import Display from "./components/display"
import { io } from 'socket.io-client';
const socket = io("http://localhost:3002")
function App() {

  return (
    <div className="App">
      <Display socket={socket} />
    </div>
  )
}

export default App
