import { createGlobalStyle } from "styled-components"
import PoppinsRegular from "./Poppins-Regular.ttf"
import PoppinsLight from "./Poppins-Light.ttf"
import MontserratBold from "./Montserrat-Bold.ttf"
import MontserratRegular from "./Montserrat-Regular.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: Poppins;
        src: url(${PoppinsRegular}) format("truetype");
        font-weight: 400;
    }

    @font-face {
        font-family: Poppins;
        src: url(${PoppinsLight}) format("truetype");
        font-weight: 300;
    }

    @font-face {
        font-family: Montserrat;
        src: url(${MontserratRegular}) format("truetype");
        font-weight: 400;
    }

    @font-face {
        font-family: Montserrat;
        src: url(${MontserratBold}) format("truetype");
        font-weight: 700
    }
`