import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
const Chat = ({ socket, info }) => {
    const [currMsg, setCurrMsg] = useState("")
    const [recieveMsg, setRecieveMsg] = useState([])
    const sendMsg = async () => {
        const messageData = {
            ...info,
            message: currMsg,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        }
        await socket.emit("send-message", messageData)
        setRecieveMsg((prvList) => [...prvList, messageData])
        setCurrMsg("")
    }
    useEffect(() => {
        const messageHandler = (data) => {
            setRecieveMsg(prvList => [...prvList, data]);
        }

        socket.on('recieve-message', messageHandler);

        // Cleanup function
        return () => {
            socket.off('recieve-message', messageHandler);
        };
    }, [socket]);
    return (<div className='chat-window'>
        <div className="chat-header">
            <p>Live Chat {info.room}</p>
        </div>
        <div className="chat-body">
            <ScrollToBottom className='message-container'>
                {recieveMsg && recieveMsg.map((e, i) => {
                    return (<div key={i} className="message" id={info.username === e.username ? "you" : "other"}>
                        <div>
                            <div className="message-content">
                                <p>{e.message}</p>
                            </div>
                            <div className="message-meta">
                                <p id="time">{e.time}</p>
                                <p id="author">{e.username}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </ScrollToBottom>

        </div>
        <div className="chat-footer">
            <input
                type="text"
                name="room"
                placeholder='say hi...'
                value={currMsg}
                onChange={e => setCurrMsg(e.target.value)}
            />
            <button onClick={sendMsg}>send</button>
        </div>


    </div>);
}
Chat.propTypes = {
    socket: PropTypes.object,
    info: PropTypes.object,
}
export default Chat;