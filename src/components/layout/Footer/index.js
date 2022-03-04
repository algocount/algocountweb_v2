import { Container, Row } from "react-bootstrap";
import cariplo from "../../../assets/cariplo.svg";
import density from "../../../assets/density.svg";
import leonardo from "../../../assets/leonardo.svg";
import polimi from "../../../assets/polimi.svg";
import unimi from "../../../assets/unimi.svg";
import {
  FooterMain, 
  ContactBox,
  IconBox,
  LogoBox,
  ContactLink,
  SocialBox,
  Mail
} from "./FooterElements";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterMain>
        <LogoBox row={"1"} col={"1"} title="Funded&nbsp;by">
          <IconBox
            src={cariplo}
            alt="Fondazione Cariplo"
            href="https://www.fondazionecariplo.it"
          />
        </LogoBox>



        <LogoBox row={"2"} col={"1 / span 2"} title="Partners">
          <IconBox
            src={unimi}
            alt="Università degli Studi di Milano Statale"
            href="https://www.unimi.it"
          />
          <IconBox
            src={polimi}
            alt="Politecnico di Milano"
            href="https://www.polimi.it"
          />
          <IconBox
            src={density}
            alt="Laboratorio di Ricerca Density Design"
            href="https://www.densitydesign.org"
          />
        </LogoBox>

        <LogoBox row={"1"} col={"2"} title="Collaborator">
          <IconBox
            src={leonardo}
            alt="Museo Nazionale Scienza e Tecnologia Leonardo Da Vinci"
            href="https://www.museoscienza.org"
          />
        </LogoBox>

        <ContactBox row={"3"} col={"1 / span 2"} title="Contacts">
          <ContactLink href="mailto:algocountproject@gmail.com">
            <FaEnvelope/>
            <Mail>algocountproject@gmail.com</Mail>
          </ContactLink>
          <SocialBox>
            <ContactLink href="https://twitter.com/algocount">
              <FaTwitter />
            </ContactLink>
            <ContactLink href="https://www.facebook.com/algocount/">
              <FaFacebook />
            </ContactLink>
            <ContactLink href="https://www.instagram.com/algocount/">
              <FaInstagram />
            </ContactLink>
            <ContactLink href="https://www.youtube.com/channel/UCl3KEIPFFlY8rtKxI0m0xlA">
              <FaYoutube />
            </ContactLink>
          </SocialBox>
        </ContactBox>
    </FooterMain>
  );
};

export default Footer;
