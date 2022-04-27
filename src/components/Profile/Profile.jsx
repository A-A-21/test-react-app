import React, { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";

const Profile = () => {

  const [status, setStatus] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStatus(true);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {status ? (<div>
        <div>
          <h1 style={{ margin: "10%" }}>About me</h1>
          <div style={{ width: "70vw", height: "70vw" }}>Добрый день!
            Меня зовут Алмамбет. Я JavaScript разработчик на React. Был рад выполнить ваше интересное тестовое задание.
            С моим портфолио и навыками вы можете более подробнее ознакомиться в прикреплённом резюме.
            Меня очень заинтересовала ваша вакансия общим стеком используемых технологий и интересными задачи. Очень
            хотел бы пообщаться с вами на собеседовании.
            Буду рад ответить на ваши вопросы и пообщаться лично.
          </div>
        </div>
      </div>) : <Spinner animation="border" style={{ width: "15rem", height: "15rem" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
    </>
  );
};

export default Profile;
