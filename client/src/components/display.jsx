import { useState } from 'react';
import PropTypes from 'prop-types';
import Chat from './chat';

const Display = ({ socket }) => {
    const [info, setInfo] = useState({
        username: "",
        room: ""
    })
    const [show, setShow] = useState(true)
    const handleChange = (e) => {
        const { name, value } = e.target
        setInfo((prv) => {
            return {
                ...prv,
                [name]: value
            }
        })
    }
    const joinRoom = () => {
        socket.emit("join-room", info)
        setShow(false)
    }
    if (!show) {
        return <Chat socket={socket} info={info} />
    }
    return (<div className='joinChatContainer'>
        <h3>Join A Chat</h3>
        <input
            type="text"
            name="username"
            placeholder='username....'
            value={info.username}
            onChange={handleChange} />
        <input
            type="text"
            name="room"
            placeholder='room ID...'
            value={info.room}
            onChange={handleChange} />
        <button onClick={joinRoom}>go</button>


    </div>);
}
Display.propTypes = {
    socket: PropTypes.object,

}
export default Display;