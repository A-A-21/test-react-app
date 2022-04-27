import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";

const Details = () => {

  const [status, setStatus] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const card = useSelector(state => state.cards.filter(el => el.id == id))[0];

  useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 500);
  });

  return (
    <>
      {status ? <Spinner animation="border" style={{ width: "15rem", height: "15rem" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner> :
        (<div>
          <div style={{ width: "30vw", height: "40vw" }}>
            <img style={{ width: "30vw", height: "30vw" }} src={card.url}/>
            <div style={{ width: "30vw", height: "5vw" }}>{card.title}</div>
          </div>
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => navigate(-1)} variant="secondary">Back</Button>
          </ButtonGroup></div>)}
    </>
  );
};

export default Details;
