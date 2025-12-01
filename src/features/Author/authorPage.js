import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Sandra"
      body={
        <>
          Interesuję się przede wszystkim malarstwem i sztukami włókienniczymi.
          Maluję pejzaże i drobne kompozycje, a także tworzę gobeliny i obrazy
          przy użyciu muliny oraz innych nici. Praca na drutach czy szydełku
          daje mi dużo przyjemności. Lubię łączyć różne techniki — często
          komponuję prace, w których malarstwo spotyka się z haftem, a struktury
          tkanin uzupełniają malarskie akcenty. Tworzę także niewielkie
          przedmioty użytkowe i biżuterię, na przykład subtelne broszki. Obecnie
          rozwijam swoje umiejętności w zakresie front-endu.
        </>
      }
    />
  </Container>
);
