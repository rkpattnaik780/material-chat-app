import { Button, TextField } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';
import { Message } from "components/Message/Message";
import { ConversationHeader } from "components/ConversationHeader/ConversationHeader";
import { useState } from "react";

export const Conversation: React.FC = () => {

    const [messages, setMessages] = useState([
        { "content": "Hello there!", time: new Date()},
        {"content": "How are you?", time: new Date()},
        {"content": "Will you be available for call in few mins?", time: new Date() },
        {"content": "We can connect over meet", time: new Date() }
    ]);

    const [messageInput, setMessageInput] = useState<string>("");

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessages((messages) => [...messages, { content: messageInput, time: new Date() }]);
        setMessageInput("");
    }

    return (
        <>  
            <div style={{ border: "1px solid black", borderRadius: "5px", padding: "5px", position: "sticky"}}>
                <ConversationHeader />
                <div style={{ height: "70vh", overflowY: "scroll" }}>
                    {
                        messages.map(({content, time}) => (
                            <Message content={content} time={time} />
                        ))
                    }
                </div>
                
            </div>

            <form style={{ display: "flex", width: "95%", margin: "10px auto", justifyContent: "space-between" }}  noValidate autoComplete="off" onSubmit={sendMessage}>
                <TextField
                    id="standard-text"
                    label="Type Message"
                    className="wrap-text"
                    style={{ width: "100%", margin: "0 10px" }}
                    onChange={(e) => setMessageInput(e.target.value)}
                    value={messageInput}
                />
                <Button type="submit" variant="contained" color="primary" className="button" >
                    <SendIcon />
                </Button>
            </form>
        </>
    )

}