import { useState } from 'react'
import Card from './components/Card.jsx'


function App() {
  const carDescriptions = {
    sedans: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    suvs: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vactaion and off-road adventures.",
    luxury: "Cruise in the best car brands without bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  }

  return (
    <div className="rounded-lg border-solid m-5  flex lg:flex-row">
      <Card 
        image="/icon-sedans.svg"
        carType="SEDANS"
        carDescription={carDescriptions.sedans}
        bgColor={"bg-brightOrange"}
        btnTextColor={"text-brightOrange"}

      />
      <Card 
        image="icon-suvs.svg"
        carType="SUVS"
        carDescription={carDescriptions.suvs}
        bgColor={"bg-darkCyan"}
        btnTextColor={"text-darkCyan"}
      />
      <Card 
        image="/icon-luxury.svg"
        carType="LUXURY"
        carDescription={carDescriptions.luxury}
        bgColor={"bg-veryDarkCyan"}
        btnTextColor={"text-veryDarkCyan"}
      />
    </div>
  )
}

export default App
