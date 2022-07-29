import React from "react";
import { Card } from "react-bootstrap";

export const CodeEX = () => {
  return (
   
      <Card
        bg="dark"
        key="dark"
        text="white"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>Example</Card.Header>
        <Card.Body>
          <Card.Text>
            <code>
              {`    <!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html> `}
            </code>
          </Card.Text>
        </Card.Body>
      </Card>
  );
};
