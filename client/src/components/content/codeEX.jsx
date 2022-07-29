import React from "react";
import { Button, Card } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const CodeEX = () => {
  return (
    <Card
      bg="dark"
      key="dark"
      text="secondary"
      className="p-1 mb-2 border-secondary"
    >
      <Card.Header>Code Example</Card.Header>
      <Card.Body>
        <Card.Text className="w-50 p-3 mb-2 border border-danger text-warning">
          {`<!DOCTYPE html>
<html lang="en">

<meta charset="utf-8">
<title>Page Title</title>

<body>
   <h1>This is a Heading</h1>
   <p>This is a paragraph.</p>
   <p>This is another paragraph.</p>
</body>

</html>`}
        </Card.Text>
        <CopyToClipboard
          text={`<!DOCTYPE html>
<html lang="en">

<meta charset="utf-8">
<title>Page Title</title>

<body>
   <h1>This is a Heading</h1>
   <p>This is a paragraph.</p>
   <p>This is another paragraph.</p>
</body>

</html>`}
        >
          <Button variant="danger">Try This Code</Button>
        </CopyToClipboard>
      </Card.Body>
    </Card>
  );
};
