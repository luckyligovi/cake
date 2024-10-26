import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import the icons


export default function SocialMediaIcons() {
  return (
    <div className="social-media-icons">
    <a
      href="https://www.facebook.com/Juliescakehouse?mibextid=LQQJ4d"
      target="_blank"
      rel="noopener noreferrer"
      className="icon facebook"
    >
      <FaFacebook size={30} />
    </a>
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="icon instagram"
    >
      <FaInstagram size={30} />
    </a>
    <a
      href="https://wa.me/+254798645012"
      target="_blank"
      rel="noopener noreferrer"
      className="icon whatsapp"
    >
      <FaWhatsapp size={30} />
    </a>
  </div>
  )
}
