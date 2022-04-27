import React, { useEffect, useState } from 'react';
import Category from "../Category/Category";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../redux/saga/getCardsSaga";
import { endLoading } from "../../redux/actions/loadingActions";
import { useNavigate } from 'react-router-dom';

const key = () => "" + Math.floor(Math.random() * 100000000);

const Gallery = () => {

  const [firstCat, setFirstCat] = useState([]);
  const [secondCat, setSecondCat] = useState([]);
  const [thirdCat, setThirdCat] = useState([]);
  const [fourthCat, setFourthCat] = useState([]);

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const isLoading = useSelector((state) => state.isLoading);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCards());
  }, []);

  useEffect(() => {
    if (cards.length) dispatch(endLoading());
    setFirstCat(cards.filter(el => el.albumId === 1).slice(0, 6));
    setSecondCat(cards.filter(el => el.albumId === 2).slice(0, 6));
    setThirdCat(cards.filter(el => el.albumId === 3).slice(0, 6));
    setFourthCat(cards.filter(el => el.albumId === 4).slice(0, 6));
  }, [cards]);

  const categoryContainer = {
    display: "flex",
    justifyContent: "space-around",
    width: "70rem",
    flexWrap: "wrap",
    paddingBottom: "5vw",
  };

  const navigateHandler = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      {isLoading ? <Spinner animation="border" style={{ width: "15rem", height: "15rem" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner> : (
        <div>
          <div style={{ margin: "5%" }}>FirstCategory</div>
          <div style={categoryContainer}>
            {firstCat.map(el => (
              <div onClick={() => navigateHandler(el.id)}><Category key={key()} id={el.id} title={el.title}
                                                                    url={el.url}/></div>
            ))}
          </div>
          <div style={{ margin: "5%" }}>SecondCategory</div>
          <div style={categoryContainer}>
            {secondCat.map(el => (
              <div onClick={() => navigateHandler(el.id)}><Category key={key()} id={el.id} title={el.title}
                                                                    url={el.url}/></div>
            ))}
          </div>
          <div style={{ margin: "5%" }}>ThirdCategor</div>
          <div style={categoryContainer}>
            {thirdCat.map(el => (
              <div onClick={() => navigateHandler(el.id)}><Category key={key()} id={el.id} title={el.title}
                                                                    url={el.url}/></div>
            ))}
          </div>
          <div style={{ margin: "5%" }}>FourtCategory</div>
          <div style={categoryContainer}>
            {fourthCat.map(el => (
              <div onClick={() => navigateHandler(el.id)}><Category key={key()} id={el.id} title={el.title}
                                                                    url={el.url}/></div>
            ))}
          </div>
        </div>)
      }
    </>
  );
};

export default Gallery;
