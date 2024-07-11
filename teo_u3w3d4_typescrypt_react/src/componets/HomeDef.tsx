import { useEffect, useState } from "react";
import { Article } from "../interfaces/IArticle";
import { Card, Col, Container, Row } from "react-bootstrap";
import SingleArtile from "./SingleArticle";

const HomeDef = () => {
  const [articles, setarticles] = useState<Article[]>([]);

  const fetcharticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const respArticles = await resp.json();
        setarticles(respArticles.results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcharticles();
  }, []);
  return (
    <Container>
      <Row>
        {articles.map((article) => (
          <Col key={article.id} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={article.image_url} />
              <Card.Body className="cardT">
                <Card.Title>{article.title}</Card.Title>
                <Card.Text className="line-truncate-3">{article.summary}</Card.Text>
                <Card.Link href={article.url} target="_blank">
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <SingleArtile />
      </Row>
    </Container>
  );
};
export default HomeDef;
