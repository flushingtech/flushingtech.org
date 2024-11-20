import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faBrand from "@fortawesome/free-brands-svg-icons";
import { FaBrand } from "@/types/faBrand";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function Main({ icon }: { icon: FaBrand }) {
	return <FontAwesomeIcon icon={faBrand[icon] as IconDefinition} />;
}
