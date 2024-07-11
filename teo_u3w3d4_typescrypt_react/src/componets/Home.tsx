// import { Component } from "react";
// import { Article } from "../interfaces/IArticle";
// import { Col, Container, Row, Card } from "react-bootstrap";

// interface HomeState {
//   articoli: Article[];
// }

// class Home extends Component<object, HomeState> {
//   state = {
//     articoli: [],
//   };

//   getData = () => {
//     fetch("https://api.spaceflightnewsapi.net/v4/articles")
//       .then((response) => response.json())
//       .then((data) => this.setState({ articoli: data.results }))
//       .catch((err) => console.log("Request Failed", err));
//   };

//   componentDidMount(): void {
//     this.getData();
//   }

//   render() {
//     return (
//       <Container>
//         <Row>
//           {this.state.articoli.map((article) => (
//             <Col key={article.id} md={4} className="mb-3">
//               <Card>
//                 <Card.Img variant="top" src={article.imageUrl} />
//                 <Card.Body>
//                   <Card.Title>{article.title}</Card.Title>
//                   <Card.Text>{article.summary}</Card.Text>
//                   <Card.Link href={article.url} target="_blank">
//                     Read more
//                   </Card.Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Home;
