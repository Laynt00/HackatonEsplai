import React, { useState } from 'react';
import './Comunication.css';
import Navbar from '../../components/Navbar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Inbox() {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [activeTab, setActiveTab] = useState('nuevo');
    const [search, setSearch] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const message = {
                id: Date.now(),
                text: newMessage,
                date: new Date().toLocaleDateString('es-ES')
            };
            setMessages([...messages, message]);
            setNewMessage('');
            setSelectedMessage(message);
        }
    };

    return (
        <div className="inbox-container">
            <Navbar />
            <div className="tabs">
                <div className="tabs-left">
                    <button
                        className={`tab-btn ${activeTab === 'nuevo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('nuevo')}
                    >
                        Nuevo Usuario
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'bandeja' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bandeja')}
                    >
                        Bandeja de entrada
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'papelera' ? 'active' : ''}`}
                        onClick={() => setActiveTab('papelera')}
                    >
                        Papelera
                    </button>
                </div>
                <div className="tabs-right">
                        <SearchBar />
                </div>
            </div>

            <div className="content">
                <div className="messages-list">
                    {messages.length === 0 ? (
                        <div className="empty-state">
                            <p>No hay mensajes</p>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`message-item ${selectedMessage?.id === msg.id ? 'selected' : ''}`}
                                onClick={() => setSelectedMessage(msg)}
                            >
                                <div className="message-line"></div>
                                <div className="message-line"></div>
                                <div className="message-line"></div>
                            </div>
                        ))
                    )}
                </div>

                <div className="message-editor">
                    {selectedMessage ? (
                        <div>
                            <h3>Mensaje seleccionado</h3>
                            <p>{selectedMessage.text}</p>
                            <small>{selectedMessage.date}</small>
                        </div>
                    ) : (
                        <div className="placeholder">
                            <p>Mensaje seleccionado o caja para escribir mensaje</p>
                        </div>
                    )}

                    <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Escribe tu mensaje..."
                        className="message-input"
                    />
                    <button onClick={handleSendMessage} className="send-btn">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}