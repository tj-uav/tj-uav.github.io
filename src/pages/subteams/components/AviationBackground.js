"use client"

import { useEffect, useRef } from "react"
import styled from "styled-components"

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
`

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
`

const AviationBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles array
    const particlesArray = []
    const particleCount = 100

    // Create connection points array (for radar effect)
    const connectionPoints = []
    const connectionPointCount = 5

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = "#64ffda"
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Connection Point class (for radar effect)
    class ConnectionPoint {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.angle = 0
        this.radius = Math.random() * 150 + 100
        this.rotationSpeed = Math.random() * 0.002 + 0.001
        this.color = "#64ffda"
      }

      update() {
        this.angle += this.rotationSpeed
        if (this.angle > Math.PI * 2) this.angle = 0
      }

      draw() {
        // Draw radar line
        const endX = this.x + Math.cos(this.angle) * this.radius
        const endY = this.y + Math.sin(this.angle) * this.radius

        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY)
        gradient.addColorStop(0, "rgba(100, 255, 218, 0.5)")
        gradient.addColorStop(1, "rgba(100, 255, 218, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Draw radar sweep
        const sweepGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        sweepGradient.addColorStop(0, "rgba(100, 255, 218, 0.1)")
        sweepGradient.addColorStop(1, "rgba(100, 255, 218, 0)")

        ctx.fillStyle = sweepGradient
        ctx.globalAlpha = 0.3
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.arc(this.x, this.y, this.radius, this.angle - 0.2, this.angle, false)
        ctx.closePath()
        ctx.fill()
      }
    }

    // Flight Path class
    class FlightPath {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height * 0.8 + canvas.height * 0.1
        this.size = Math.random() * 2 + 1
        this.color = "#64ffda"
        this.trailLength = Math.random() * 100 + 50
        this.opacity = Math.random() * 0.3 + 0.2
      }

      reset() {
        this.x = -this.trailLength
        this.speed = Math.random() * 2 + 1
      }

      update() {
        this.x += this.speed

        if (this.x > canvas.width + this.trailLength) {
          this.reset()
          this.y = Math.random() * canvas.height * 0.8 + canvas.height * 0.1
        }
      }

      draw() {
        // Draw flight path
        const gradient = ctx.createLinearGradient(this.x - this.trailLength, this.y, this.x, this.y)
        gradient.addColorStop(0, "rgba(100, 255, 218, 0)")
        gradient.addColorStop(1, `rgba(100, 255, 218, ${this.opacity})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = this.size
        ctx.beginPath()
        ctx.moveTo(this.x - this.trailLength, this.y)
        ctx.lineTo(this.x, this.y)
        ctx.stroke()

        // Draw airplane dot
        ctx.fillStyle = this.color
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle())
    }

    // Initialize connection points
    for (let i = 0; i < connectionPointCount; i++) {
      connectionPoints.push(new ConnectionPoint())
    }

    // Initialize flight paths
    const flightPaths = Array.from({ length: 8 }, () => new FlightPath())

    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 150

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = "#64ffda"
            ctx.globalAlpha = opacity * 0.15
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles
      connectParticles()

      // Update and draw connection points
      for (let i = 0; i < connectionPoints.length; i++) {
        connectionPoints[i].update()
        connectionPoints[i].draw()
      }

      // Update and draw flight paths
      for (let i = 0; i < flightPaths.length; i++) {
        flightPaths[i].update()
        flightPaths[i].draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <BackgroundContainer>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <GridOverlay />
    </BackgroundContainer>
  )
}

export default AviationBackground

