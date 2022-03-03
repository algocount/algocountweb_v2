import Layout from "../components/layout/Layout";
import materialsList from "../materials.json";
import { CardsContainer, MaterialCard } from "../components/MaterialsComponents";
import { Header } from "../components/typeComponents";


const Materials = () => {
  return (
    <Layout>
      <Header className="intro header">Materials</Header>
      <CardsContainer>
        {materialsList.map((item) => (
          <MaterialCard pageName="materials" {...item} />
        ))}
      </CardsContainer>
    </Layout>
  );
};

export default Materials;
