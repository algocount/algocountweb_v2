import Layout from "../components/Layout/Layout";
import materialsList from "../materials.json";
import { CardsContainer, MaterialCard } from "../components/MaterialsComponents";


const Materials = () => {
  return (
    <Layout>
      <h1 className="intro header">Materials</h1>
      <CardsContainer>
      
        {materialsList.map((item) => (
          <MaterialCard {...item} />
        ))}
      </CardsContainer>
    </Layout>
  );
};

export default Materials;
