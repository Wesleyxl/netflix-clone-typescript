import styled from "styled-components";

import Background from "../../Assets/Home/netflix_bg.jpg";

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const Intro = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  img {
    max-width: 160px;
  }

  select {
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
    background: none;
    padding: 7px 7px;
  }
  select option {
    background: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    padding: 2px 0;
  }

  a {
    background: #e50914;
    color: #ffffff;
    padding: 7px 17px;
    font-size: 1rem;
    border-radius: 4px;
    margin-left: 30px;
  }

  @media (max-width: 500px) {
    height: 60px;
    padding: 0 15px;

    img {
      max-width: 100px;
    }

    select {
      padding: 3px;
    }

    a {
      padding: 3px 10px;
      margin-left: 10px;
    }
  }
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;

  h1 {
    font-size: 48px;
    max-width: 600px;
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
  }

  h2 {
    font-weight: normal;
    font-size: 25px;
    margin-bottom: 15px;
  }

  h3 {
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .input-area {
    width: 100%;
    max-width: 630px;
    height: 60px;
    position: relative;
    background: #ffffff;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;

    label {
      position: absolute;
      font-size: 12px;
      top: 5px;
      left: 15px;
      color: #8c8c8c;
      transition: 0.5s ease;
    }

    input {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 450px;
      height: 100%;
      border: none;
      background: none;
      font-size: 20px;
      padding-left: 15px;
    }

    button {
      background: #e50914;
      color: #ffffff;
      width: 100%;
      max-width: 180px;
      height: 100%;
      border: none;
      font-size: 20px;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 16px;
      text-align: center;
    }
    h3 {
      font-size: 16px;
      text-align: center;
    }

    .input-area {
      flex-wrap: wrap;
      justify-content: center;

      button {
        margin-top: 20px;
        width: 130px;
        height: 40px;
        font-size: 16px;
        border-radius: 2px;
      }
    }
  }
`;
