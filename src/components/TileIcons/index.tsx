import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faAnkh,
  faBiohazard,
  faBinoculars,
  faGolfBall,
  faBowlingBall,
  faBaseballBall,
  faFootballBall,
  faBasketballBall,
  faVolleyballBall,
  faBell,
  faBrain,
  faBurn,
  faCat,
  faCircle,
  faCog,
  faCogs,
  faDog,
  faDragon,
  faEgg,
} from "@fortawesome/free-solid-svg-icons";

export const loadIcons = () =>
  [
    faAnchor,
    faAnkh,
    faBiohazard,
    faBinoculars,
    faGolfBall,
    faBowlingBall,
    faBaseballBall,
    faFootballBall,
    faBasketballBall,
    faVolleyballBall,
    faBell,
    faBrain,
    faBurn,
    faCat,
    faCircle,
    faCog,
    faCogs,
    faDog,
    faDragon,
    faEgg,
  ].map((definition) => <FontAwesomeIcon icon={definition} />);
