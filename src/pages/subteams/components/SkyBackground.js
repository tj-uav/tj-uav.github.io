"use client"

import { useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"

const float = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
`

const floatVertical = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
`

const Cloud = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size * 0.6}px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, ${(props) => props.opacity});
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  filter: blur(${(props) => props.blur}px);
  animation: ${float} ${(props) => props.duration}s ease-in-out infinite;
  z-index: ${(props) => props.zIndex || 1};
`

const FlightPath = styled.div`
  position: absolute;
  width: ${(props) => props.width}px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: rotate(${(props) => props.rotate}deg);
  z-index: 1;
`

const AirplaneTrail = styled.div`
  position: absolute;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), transparent);
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: rotate(${(props) => props.rotate}deg);
  animation: ${floatVertical} ${(props) => props.duration}s ease-in-out infinite;
  z-index: 2;
`

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
`

const SkyBackground = () => {
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

    // Create airplane class
    class Airplane {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height * 0.7 + canvas.height * 0.15
        this.size = Math.random() * 3 + 2
        this.color = "#ffffff"
      }

      reset() {
        this.x = -20
        this.speed = Math.random() * 2 + 1
      }

      update() {
        this.x += this.speed

        if (this.x > canvas.width + 20) {
          this.reset()
          this.y = Math.random() * canvas.height * 0.7 + canvas.height * 0.15
        }
      }

      draw() {
        // Draw airplane
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw trail
        const gradient = ctx.createLinearGradient(this.x - 50, this.y, this.x, this.y)
        gradient.addColorStop(0, "transparent")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.5)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = this.size / 2
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - 50, this.y)
        ctx.stroke()
      }
    }

    // Create airplanes
    const airplanes = Array.from({ length: 5 }, () => new Airplane())

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      airplanes.forEach((airplane) => {
        airplane.update()
        airplane.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Generate random clouds
  const clouds = Array.from({ length: 15 }, (_, i) => ({
    id: `cloud-${i}`,
    size: Math.random() * 150 + 50,
    opacity: Math.random() * 0.2 + 0.1,
    top: Math.random() * 70,
    left: Math.random() * 100,
    blur: Math.random() * 20 + 10,
    duration: Math.random() * 60 + 60,
    zIndex: Math.floor(Math.random() * 3) + 1,
  }))

  // Generate flight paths
  const flightPaths = Array.from({ length: 8 }, (_, i) => ({
    id: `path-${i}`,
    width: Math.random() * 200 + 100,
    top: Math.random() * 80 + 10,
    left: Math.random() * 80,
    rotate: Math.random() * 60 - 30,
  }))

  // Generate airplane trails
  const airplaneTrails = Array.from({ length: 3 }, (_, i) => ({
    id: `trail-${i}`,
    top: Math.random() * 60 + 20,
    left: Math.random() * 60 + 20,
    rotate: Math.random() * 60 - 30,
    duration: Math.random() * 10 + 10,
  }))

  return (
    <BackgroundContainer>
      <GridPattern />

      {clouds.map((cloud) => (
        <Cloud
          key={cloud.id}
          size={cloud.size}
          opacity={cloud.opacity}
          top={cloud.top}
          left={cloud.left}
          blur={cloud.blur}
          duration={cloud.duration}
          zIndex={cloud.zIndex}
        />
      ))}

      {flightPaths.map((path) => (
        <FlightPath key={path.id} width={path.width} top={path.top} left={path.left} rotate={path.rotate} />
      ))}

      {airplaneTrails.map((trail) => (
        <AirplaneTrail
          key={trail.id}
          top={trail.top}
          left={trail.left}
          rotate={trail.rotate}
          duration={trail.duration}
        />
      ))}

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 3,
        }}
      />
    </BackgroundContainer>
  )
}

export default SkyBackground

