import { Col, Image, Row } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import PeopleCoordinatorBox from "../components/PeopleComponents/PeopleCoordinatorBox";
import PeopleHeader from "../components/PeopleComponents/PeopleHeader";
import PeopleResearchersBox from "../components/PeopleComponents/PeopleResearchersBox";

const ResUnimi = [
  {key:1, name: "Pippo Panino", role: "Salumiere", src:"./gandi.jpg"},
  {key:2, name: "Paola Papera", role: "Astronauta", src:"./gandi.jpg"}
]

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

      <PeopleResearchersBox researchers={ResUnimi}/>
      
    </Layout>
  );
};

export default People;
