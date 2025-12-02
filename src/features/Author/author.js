import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const Author = () => (
  <Container>
    <Header title="O Autorze" />
    <Section
      title="Izabela"
      body={
        <>
          Interesuję się przede wszystkim malarstwem i sztukami włókienniczymi.
          Maluję pejzaże i drobne kompozycje, a także tworzę gobeliny i obrazy
          przy użyciu muliny oraz innych nici. Praca na drutach czy szydełku
          daje mi dużo przyjemności. Tworzę także niewielkie przedmioty użytkowe
          i biżuterię, na przykład subtelne broszki. Moim celem jest rozwijanie
          swoich umiejętności w kierunku Front Developera.
        </>
      }
    />
  </Container>
);
export default Author;
