import Layout from "../components/Layout/Layout";
import materialsList from "../materials.json";
import { CardsContainer, MaterialCard } from "../components/MaterialsComponents";
import { Header, Intro } from "../components/typeComponents";


const Materials = () => {
  return (
    <Layout>
      <Header className="intro header">Materials</Header>
      <Intro>
        Materials are a collection of outputs that have been designed during the algocount project. </Intro>
        <p>They can be tools, scientific articles, reports or videos.</p>
      <CardsContainer>
        {materialsList.map((item) => (
          <MaterialCard pageName="materials" {...item} />
        ))}
      </CardsContainer>
    </Layout>
  );
};

export default Materials;
