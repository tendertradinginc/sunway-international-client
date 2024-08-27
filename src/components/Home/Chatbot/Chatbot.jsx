"use client"

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Chatbot = () => {
    return (
        <div>
              <FloatingWhatsApp avatar="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" accountName="Twin Trade International" notification  statusMessage="Typically replies within 1 hour"  chatMessage="Hello! How can we help you?" phoneNumber="+880 1771-682992" allowClickAway={true} />
        </div>
    );
};

export default Chatbot;