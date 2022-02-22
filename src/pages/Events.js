import Layout from "../components/Layout/Layout";
import { CardsContainer, EventCard } from "../components/EventsComponents";
import eventsList from "../events.json"

const Events = () => {
  return (
    <Layout>
      <h1 className="intro header">RECENT ACTIVITIES</h1>
      <p className="intro body">
        The Algocount project consists of seven actions; of these, two concern
        the collection of primary empirical data, and one concerns the
        implementation of a Communication Plan aimed at the dissemination of
        research findings and the engagement of the general public.
      </p>
      <CardsContainer>
        {eventsList.map((item) => (
            <EventCard {...item} />
          ))}
      </CardsContainer>
    </Layout>
  );
};

export default Events;
