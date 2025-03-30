import styled from "styled-components"

const PatternContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  opacity: 0.05;
`

const AerodynamicLine = styled.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, white, transparent);
  transform-origin: left center;
  transform: ${(props) => `rotate(${props.rotate}deg) translateY(${props.offset}px)`};
  width: ${(props) => props.width}%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`

const AerodynamicPattern = () => {
  // Generate aerodynamic lines
  const lines = Array.from({ length: 20 }, (_, i) => ({
    id: `line-${i}`,
    rotate: Math.random() * 10 - 5,
    offset: Math.random() * 50 - 25,
    width: Math.random() * 50 + 50,
    top: Math.random() * 100,
    left: Math.random() * 20,
  }))

  return (
    <PatternContainer>
      {lines.map((line) => (
        <AerodynamicLine
          key={line.id}
          rotate={line.rotate}
          offset={line.offset}
          width={line.width}
          top={line.top}
          left={line.left}
        />
      ))}
    </PatternContainer>
  )
}

export default AerodynamicPattern

