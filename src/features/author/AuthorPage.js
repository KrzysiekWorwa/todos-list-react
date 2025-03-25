import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />

    <Section
      title="Krzysztof Worwa"
      body={<>
          <strong> Jest to moja pierwsza strona internetowa.</strong> Postaram
          się w niej przećwiczyć <em>jak najwięcej</em> aspektów, które pomogą mi
          tworzyc <em>profesjonalne</em> strony internetowe. <br /> Dodatkowo zajmuję się <b>Grafiką 3d</b>,
          <b>tworzeniem wizualizacji</b> oraz <b>grafik reklamowych</b>
      </>}
    />
  </Container>
);

export default AuthorPage;