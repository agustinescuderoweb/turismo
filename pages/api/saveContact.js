// pages/api/saveContact.js
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { nombre, apellido, correo, mensaje } = req.body;

  try {
    await addDoc(collection(db, "contactos"), {
      nombre,
      apellido,
      correo,
      mensaje,
      timestamp: new Date(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error guardando contacto:", error);
    return res.status(500).json({ error: "Error al guardar contacto" });
  }
}
