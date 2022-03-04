import React, { useState } from "react";

import Logo from "../../Assets/Home/netflix_logo.png";
import { Container, Header, Center, Intro } from "./styles";

const Home: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Intro>
        <Header>
          <img src={Logo} alt="Netflix Clone" />

          <div className="btn-area">
            <select name="language" id="language">
              <option value="pt-br">Portiguês</option>
              <option value="en">English</option>
            </select>

            <a href="/login">Entrar</a>
          </div>
        </Header>

        <Center>
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assita onde quiser. Cancele quando quiser</h2>
          <h3>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura
          </h3>

          <div className="input-area">
            <label id="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <button type="button">Vamos lá {">"} </button>
          </div>
        </Center>
      </Intro>
    </Container>
  );
};

export default Home;
