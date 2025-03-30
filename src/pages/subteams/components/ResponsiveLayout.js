import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1200px"};
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  
  @media (max-width: 768px) {
    flex-direction: ${(props) => props.mobileDirection || props.direction || "column"};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.minWidth || "250px"}, 1fr)
  );
  gap: ${(props) => props.gap || "1rem"};
`

export const Section = styled.section`
  padding: ${(props) => props.padding || "3rem 0"};
  background: ${(props) => props.background || "transparent"};
`

