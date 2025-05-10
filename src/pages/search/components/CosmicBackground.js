import styled, { keyframes } from "styled-components";
import { memo, useMemo } from "react";

// Reduced animation complexity
const pulse = keyframes`
  0% {
	opacity: 0.3;
  }
  100% {
	opacity: 0.6;
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 50%, rgba(15, 52, 96, 0.8) 100%);
  z-index: -1;
`;

const Star = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  opacity: ${(props) => props.opacity};
  animation: ${pulse} ${(props) => props.duration}s ease-in-out infinite alternate;
  box-shadow: 0 0 ${(props) => Math.min(props.size * 1.5, 5)}px ${(props) => Math.min(props.size / 2, 2)}px ${(props) => props.color};
`;

const Nebula = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background: radial-gradient(circle, ${(props) => props.color} 0%, transparent 70%);
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  opacity: ${(props) => props.opacity};
  filter: blur(${(props) => props.blur}px);
`;

// Memoizing component to prevent unnecessary re-renders
const CosmicBackground = memo(() => {
  // Generate stars and nebulae only once using useMemo
  const { stars, nebulae } = useMemo(() => {
	// Reduced number of stars
	const generatedStars = Array.from({ length: 30 }, (_, i) => ({
	  id: `star-${i}`,
	  size: Math.random() * 2 + 1,
	  color: i % 3 === 0 ? "#9d4edd" : i % 3 === 1 ? "#5e60ce" : "#5390d9",
	  top: Math.random() * 100,
	  left: Math.random() * 100,
	  opacity: Math.random() * 0.5 + 0.3,
	  duration: Math.random() * 3 + 2,
	}));
	
	// Reduced number and size of nebulae
	const generatedNebulae = Array.from({ length: 3 }, (_, i) => ({
	  id: `nebula-${i}`,
	  size: Math.random() * 200 + 150,
	  color: i % 2 === 0 ? "rgba(157, 78, 221, 0.15)" : "rgba(94, 96, 206, 0.15)",
	  top: Math.random() * 100,
	  left: Math.random() * 100,
	  opacity: Math.random() * 0.15 + 0.05,
	  blur: Math.random() * 30 + 20,
	}));
	
	return { stars: generatedStars, nebulae: generatedNebulae };
  }, []);

  return (
	<BackgroundContainer>
	  {nebulae.map((nebula) => (
		<Nebula
		  key={nebula.id}
		  size={nebula.size}
		  color={nebula.color}
		  top={nebula.top}
		  left={nebula.left}
		  opacity={nebula.opacity}
		  blur={nebula.blur}
		/>
	  ))}
	  {stars.map((star) => (
		<Star
		  key={star.id}
		  size={star.size}
		  color={star.color}
		  top={star.top}
		  left={star.left}
		  opacity={star.opacity}
		  duration={star.duration}
		/>
	  ))}
	  <GradientOverlay />
	</BackgroundContainer>
  );
});

export default CosmicBackground;