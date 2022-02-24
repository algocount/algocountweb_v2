import Layout from "../components/Layout/Layout";
import PeopleCoordinatorBox from "../components/PeopleComponents/PeopleCoordinatorBox";
import PeopleHeader from "../components/PeopleComponents/PeopleHeader";
import PeopleResearchersBox from "../components/PeopleComponents/PeopleResearchersBox";

const ResUniMi = [
  { key: 1,  name: "Lorenzo Mosca",       role: "Project Coordinator",  src: "./gandi.jpg" },
  { key: 2,  name: "Alessandro Gerosa",   role: "Team Member",          src: "./gandi.jpg" },
  { key: 3,  name: "Luca Giuffrè",        role: "Team Member",          src: "./gandi.jpg" },
  { key: 4,  name: "Diletta Huyskes",     role: "Team Member",          src: "./gandi.jpg" },
  { key: 5,  name: "Silvia Keeling",      role: "Team Member",          src: "./gandi.jpg" },
  { key: 6,  name: "Luisa Leonini",       role: "Team Member",          src: "./gandi.jpg" },
  { key: 7,  name: "Marco Orofino",       role: "Team Member",          src: "./gandi.jpg" },
  { key: 8,  name: "Alessandro Provetti", role: "Team Member",          src: "./gandi.jpg" },
  { key: 9,  name: "Urbano Reviglio",     role: "Team Member",          src: "./gandi.jpg" },
  { key: 10, name: "Sergio Splendore",    role: "Team Member",          src: "./gandi.jpg" }
];

const ResPoliMi = [
  { key: 1, name: "Elena Aversa",                       role: "PhD Student",   src: "./elena.jpg" },
  { key: 2, name: "Maria De Los Àngeles Briones Rojas", role: "Postdoc",       src: "./angeles.jpg" },
  { key: 3, name: "Tommaso Elli",                       role: "Unemployed",    src: "./elli.jpg" },
  { key: 4, name: "Beatrice Gobbo",                     role: "PhD Candidate", src: "./bea.jpg" }
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
        bio="Anna Dewdney was born on December 6, 1966, in Rutland, Vermont. 
             She graduated from the Rhode Island School of Design in 1988 
             with a degree in illustration. Dewdney worked as a freelance 
             illustrator before writing and illustrating her first children's 
             book, Llama Llama Mad at Mama, in 2005. The book was a success, 
             and she has since written and illustrated numerous other 
             children's books, including the Llama Llama series."
        src="./gandi.jpg"
      />

      <PeopleResearchersBox researchers={ResUniMi} />

      <PeopleHeader
        role="Partner"
        uni="Politecnico di Milano"
        dep="Density Design Research Lab"
      />

      <PeopleCoordinatorBox
        name="Michele Mauri"
        role="Coordinator"
        bio="Michele Mauri is an Italian data visualisation designer, known 
        for his work with the Financial Times. Mauri has designed data 
        visualisations for the FT since 2009, and has been recognised 
        for his work with a number of awards, including the Malofiej Award 
        for Best Infographic of the Year in 2013. In addition to his work 
        with the FT, Mauri is also a regular contributor to Visualoop, 
        and has taught data visualisation at the Politecnico di Milano."
        src="./mikima.jpg"
      />

      <PeopleResearchersBox researchers={ResPoliMi} />
    </Layout>
  );
};

export default People;
