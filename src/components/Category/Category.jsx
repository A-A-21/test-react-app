import React from 'react';
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";

const Category = ({ url, id }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Details
    </Tooltip>
  );
  return (
    <div>

      <OverlayTrigger
        placement="bottom"
        delay={{ show: 50, hide: 100 }}
        overlay={renderTooltip}
      >
        <Card className="card" style={{ width: '10rem', margin: "10%" }}>
          <Card.Img variant="top" style={{}} src={url}/>
          {/*<Card.Body>*/}
          {/*  /!*<Card.Text>*!/*/}
          {/*  /!*  {title}*!/*/}
          {/*  /!*</Card.Text>*!/*/}
          {/*</Card.Body>*/}
        </Card>
      </OverlayTrigger>
    </div>
  );
};

export default Category;
