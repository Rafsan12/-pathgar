import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Moment from 'react-moment';
import { io } from "socket.io-client"; 
import { MdSend } from 'react-icons/md';

const Chat = () => {

  const location = useLocation();
  const msgBoxRef = useRef();

  const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [allMessages, setMessages] = useState([]);
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io("http://localhost:5000")
    setSocket(socket)

    socket.on("connect", () => {
      console.log("socket Connected")
      socket.emit("joinRoom", location.state.room)
    })
  }, [])

  useEffect(() => {
    if (socket) {
      socket.on("getLatestMessage", (newMessage) => {
        console.log(allMessages)
        console.log(newMessage)
        setMessages([...allMessages, newMessage])
        msgBoxRef.current.scrollIntoView({ behavior: "smooth" })
        setMsg("")
        setLoading(false)
      })
    }
  }, [socket, allMessages])

  useEffect(() => {
    setData(location.state)
  }, [location])

  const handleChange = e => setMsg(e.target.value)
  const handleEnter = e => e.keyCode === 13 ? onSubmit() : ""
  const onSubmit = () => {
    if (msg) {
      setLoading(true)
      const newMessage = { time: new Date(), msg, name: data.name }
      socket.emit("newMessage", { newMessage, room: data.room })
    }
  }



  return (
    <div className="m-20 w-xl shadow-xl main border rounded-xl " >
      <div>
        <div className="text-center ">
          <h1 className="text-2xl py-8 font-bold"><span className="text-red-500 text-3xl mr-4">{data?.room}</span> Chat Room</h1>
        </div>
      </div>
      <div>
        <div className=" border rounded p-3 mb-4" style={{ height: "400px", overflowY: "scroll" }}>
          {
            allMessages.map(msg => {
              return data.name === msg.name
                ?
                <div className="flex justify-end pl-5 ">
                  <div className="mt-1 shadow p-4 bg-gradient-to-r from-violet-300 to-fuchsia-300 border rounded-3xl w-auto">
                    <div className="">
                      <strong className="text-xl">{msg.name}</strong>
                      <sup className="ml-1"><Moment fromNow>{msg.time}</Moment></sup>
                    </div>
                    <h4 className="">{msg.msg}</h4>
                  </div>
                </div>
                :
                <div className="flex pl-5 ">
                  <div className=" mt-1 shadow p-4 bg-gray-200 border rounded-3xl w-auto">
                    <div>
                      <strong className="text-xl">{msg.name}</strong>
                      <sup className="ml-1"><Moment fromNow>{msg.time}</Moment></sup>
                    </div>
                    <h4 className="">{msg.msg}</h4>
                  </div>
                </div>
            })
          }
          <div ref={msgBoxRef} ></div>
        </div>
      </div>
      <div className="py-6">
        <div className="form-control px-10">
          <div className="input-group">
            <input type="text" onKeyDown={handleEnter} onChange={handleChange} value={msg} name="message" placeholder="Type your message...." className="input w-full input-bordered" />
            <button disabled={loading} onClick={onSubmit} className="btn btn-square">
              {
                loading
                  ?
                  <div class="spinner-border spinner-border-sm text-primary"></div>
                  :
                  <MdSend className="text-white"></MdSend>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;