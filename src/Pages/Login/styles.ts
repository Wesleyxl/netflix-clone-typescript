import styled from "styled-components";

import Background from "../../Assets/Home/netflix_bg.jpg";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
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

export const Header = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    max-width: 160px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  background: rgba(0, 0, 0, 0.75);
  max-width: 450px;
  height: 660px;
  padding: 60px 68px 40px;

  .title {
    h1 {
      font-size: 30px;
      margin-bottom: 25px;
    }
  }

  .form {
    input {
      width: 100%;
      height: 50px;
      border-radius: 4px;
      background: #333333;
      color: #ffffff;
      border: 0;
      margin-bottom: 20px;
      padding: 0 15px;
      font-size: 18px;
    }

    button {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      background: #e50914;
      border: none;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
    }
  }

  .remember {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;

    .check {
      color: #b3b3b3;

      input {
        width: 13px;
        height: 13px;
        margin-right: 5px;
      }
    }

    a {
      margin-top: -15px;
      color: #b3b3b3;
      :hover {
        font-weight: bold;
      }
    }
  }

  .register {
    margin-top: 35px;

    .top p {
      display: inline;
      font-size: 16px;
      color: #b3b3b3;

      a {
        color: #ffffff;
        :hover {
          font-weight: bold;
        }
      }
    }

    .bottom p {
      margin-top: 20px;
      font-size: 13px;
      color: #b3b3b3;

      a {
        color: #0071eb;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
