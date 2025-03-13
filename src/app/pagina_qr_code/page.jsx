"use client";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import QRCode from "react-qr-code"; // Usando react-qr-code

const socket = io("http://localhost:3005"); // Substitua pelo endereço do seu back-end

const QRCodePage = () => {
  const [qr, setQr] = useState("");

  useEffect(() => {
    socket.on("qr", (qrCode) => {
      setQr(qrCode);
    });

    return () => {
      socket.off("qr");
    };
  }, []);

  return (
    <div>
      <h1>Conecte-se ao WhatsApp</h1>
      {qr && <QRCode value={qr} />}
    </div>
  );
};

export default QRCodePage;
