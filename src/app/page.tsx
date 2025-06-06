import React from 'react'
import Navbar from '@/componets/navbar'
import Hero from '@/componets/hero'
import Activity from '@/componets/activity'
import Quienes from '@/componets/quienes'
import Contacto from '@/componets/contacto'
import Footer from '@/componets/footer'


function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Activity />
      <Quienes />
      <Contacto />
      <Footer />
    </div>
  )
}

export default page
