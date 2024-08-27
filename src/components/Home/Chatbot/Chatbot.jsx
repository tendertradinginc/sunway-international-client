"use client"

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Chatbot = () => {
    return (
        <div>
              <FloatingWhatsApp accountName="Twin Trade International" notification  statusMessage="Typically replies within 1 hour"  chatMessage="Hello! How can we help you?" phoneNumber="+880 1771-682992" />
        </div>
    );
};

export default Chatbot;