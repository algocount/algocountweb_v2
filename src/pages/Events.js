import Layout from "../components/Layout/Layout";
import { CardsContainer, EventCard } from "../components/EventsComponents";
import eventsList from "../events.json";
import {
  Header,
  Intro,
} from "../components/typeComponents";

const Events = () => {
  return (
    <Layout>
      <Header>RECENT ACTIVITIES</Header>
      <Intro>
        The research team disseminates their findings through a variety of
        outputs directed to the general public. These are the most recent
        workshops, meetings, and events organized by the team.
      </Intro>
      <CardsContainer>
        {eventsList.map((item) => (
          <EventCard {...item} />
        ))}
      </CardsContainer>
    </Layout>
  );
};

export default Events;
