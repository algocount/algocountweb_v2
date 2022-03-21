import Layout from "../components/Layout/Layout";
import {
  CardsContainer,
  MaterialCard,
} from "../components/MaterialsComponents";
import eventsList from "../events.json";
import { Body, Header, Intro } from "../components/typeComponents";

const Events = () => {
  return (
    <Layout>
      <Header>EVENTS</Header>
      <Intro>
        The research team disseminates their findings through a variety of outputs directed to the general public.
      </Intro>
      <Body>
        These are the most recent workshops, meetings, and events organized by the team.
      </Body>
      <CardsContainer>
        {eventsList.map((item) => (
          <MaterialCard pageName="events" {...item} />
        ))}
      </CardsContainer>
    </Layout>
  );
};

export default Events;
