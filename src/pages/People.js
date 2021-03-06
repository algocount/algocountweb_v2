import Layout from "../components/Layout/Layout";
import PeopleCoordinatorBox from "../components/PeopleComponents/PeopleCoordinatorBox";
import PeopleHeader from "../components/PeopleComponents/PeopleHeader";
import PeopleResearchersBox from "../components/PeopleComponents/PeopleResearchersBox";
import {
  PeopleContainer,
  JustText,
} from "../components/PeopleComponents/PeopleResearchersBox";

const ResUniMi_Pic = [
  {
    key: 1,
    name: "Alessandro Gerosa",
    role: "Postdoctoral Research Fellow",
    src: "./place.jpg",
  },
  {
    key: 2,
    name: "Luca Giuffrè",
    role: "Research Assistant",
    src: "./giuffre.jpg",
  },
  {
    key: 3,
    name: "Diletta Huyskes",
    role: "Communications Manager, PhD Candidate",
    src: "./huyskes.jpg",
  },
  {
    key: 4,
    name: "Silvia Keeling",
    role: "Postdoctoral Research Fellow",
    src: "./keeling.jpg",
  },
  {
    key: 5,
    name: "Urbano Reviglio",
    role: "Postdoctoral Research Fellow",
    src: "./reviglio.jpg",
  },
];

const ResUniMi_NoPic = [
  {
    key: 1,
    name: "Lorenzo Mosca",
    role: "Project Coordinator",
    src: "./place2.jpg",
  },
  { key: 2, name: "Luisa Leonini", role: "Team Member", src: "./place2.jpg" },
  {
    key: 3,
    name: "Marco Orofino",
    role: "Team Member",
    src: "./placeholder.jpg",
  },
  {
    key: 4,
    name: "Alessandro Provetti",
    role: "Team Member",
    src: "./place2.jpg",
  },
  {
    key: 5,
    name: "Sergio Splendore",
    role: "Team Member",
    src: "./placeholder.jpg",
  },
];

const ResPoliMi = [
  { key: 1, name: "Elena Aversa", role: "PhD Student", src: "./aversa.jpg" },
  {
    key: 2,
    name: "Maria De Los Ángeles Briones Rojas",
    role: "Postdoctoral Research Fellow",
    src: "./briones1.jpg",
  },
  { key: 3, name: "Tommaso Elli", role: "Postdoctoral Research Fellow", src: "./elli.jpg" },
  { key: 4, name: "Beatrice Gobbo", role: "Postdoctoral Research Fellow", src: "./gobbo.jpg" },
];

const ResPoliMi_NoPic = [
  { key: 1, name: "Luca Draisci", role: "MSc Student", src: "./place2.jpg" },
  {
    key: 2,
    name: "Emanuele Ghebaur",
    role: "MSc Student",
    src: "./place2.jpg",
  },
];

const People = () => {
  return (
    <Layout>
      <PeopleHeader
        role="Beneficiary"
        uni="University of Milan"
        dep="Department of Social and Political Sciences"
      />

      <PeopleCoordinatorBox
        name="Alessandro Gandini"
        role="Scientific Coordinator"
        bio="
        Alessandro Gandini is Associate Professor of Cultural Sociology at the University of Milan, 
        Department of Social and Political Sciences. He is the Scientific Coordinator of Algocount. 
        He is also the Principal Investigator of the CRAFTWORK project (2021–2025), funded by ERC Starting Grant 2020.
        "
        src="./gandi.jpg"
      />

      <PeopleResearchersBox col={5} researchers={ResUniMi_Pic} />

      <PeopleContainer col={5}>
        {ResUniMi_NoPic.map((d,i) => (
          <JustText key={i} name={d.name} role={d.role}></JustText>
        ))}
      </PeopleContainer>

      <PeopleHeader
        role="Partner"
        uni="Politecnico di Milano"
        dep="Density Design Research Lab"
      />

      <PeopleCoordinatorBox
        name="Michele Mauri"
        role="Coordinator"
        bio="
        Michele Mauri is a researcher at Politecnico di Milano – Design Department. 
        Within the DensityDesign Lab, he coordinates research related to the visual 
        communication of data and information, with a&nbsp;focus on born-digital data and Digital Methods. 
        He is one of the authors of&nbsp;RAWGraphs, an open-source platform for the creation of&nbsp;data visualisations.
        Since 2017 he’s part of&nbsp;the Public Data Lab, an&nbsp;international group of&nbsp;researchers working on the&nbsp;development 
        of&nbsp;innovative formats for&nbsp;the creation and use of public data.
        "
        // bio="
        // Michele Mauri is an Italian data visualisation designer, known
        // for his work with the Financial Times. Mauri has designed data
        // visualisations for the FT since 2009, and has been recognised
        // for his work with a number of awards, including the Malofiej Award
        // for Best Infographic of the Year in 2013. In addition to his work
        // with the FT, Mauri is also a regular contributor to Visualoop,
        // and has taught data visualisation at the Politecnico di Milano.
        // "
        src="./mikima.jpg"
      />

      <PeopleResearchersBox col={4} researchers={ResPoliMi} />

      {/* <PeopleContainer col={2}>
        {ResPoliMi_NoPic.map((d) => (<JustText name={d.name} role={d.role}></JustText>))}
      </PeopleContainer> */}

      <PeopleHeader
        role="Collaborator"
        uni="Museo Nazionale della Scienza e&nbsp;della&nbsp;Tecnologia Leonardo da&nbsp;Vinci"
        dep="Simona Casonato, Media, ICT & Digital Culture "
        italic="Collection Curator"
      />

      <div style={{ margin: "2em 0 0 0", fontSize: "1em" }}>
        <PeopleHeader role="Sito sviluppato con il contributo di Luca Draisci, Emanuele Ghebaur e Beatrice Gobbo" />
      </div>
    </Layout>
  );
};

export default People;
