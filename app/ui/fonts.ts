import {
	Titillium_Web,
	Montserrat,
	Source_Code_Pro,
	Source_Sans_3,
} from "next/font/google";
const titilliumWeb = Titillium_Web({
	subsets: ["latin"],
	weight: ["200", "300", "400", "600", "700", "900"],
	variable: "--font-titillium",
});
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
});

const sourceCodePro = Source_Code_Pro({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-source-code-pro",
});

const sourceSansPro = Source_Sans_3({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-source-sans-pro",
});
const fontConfig = [titilliumWeb, montserrat, sourceCodePro, sourceSansPro];

export default fontConfig.map((font) => font.variable).join(" ");
