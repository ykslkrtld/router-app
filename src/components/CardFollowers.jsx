import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CardFollowers = ({ filteredFollowers }) => {
  
  return (
      <Container>
        <Row>
          {filteredFollowers.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={item.avatar_url} />
                <Card.Body>
                  <Card.Title>{item.login}</Card.Title>
                  <a href={item.html_url} target="_blank" rel="noopener noreferrer"><Button  variant="primary">View Profile</Button></a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  );
};

export default CardFollowers;
