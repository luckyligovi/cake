import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
    href="https://wa.me/your-phone-number" // Add your WhatsApp link here
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
  >
    <FaWhatsapp size={30} />
  </a>
  )
}
