import React, { useState } from "react";

import Logo from "../../Assets/Home/netflix_logo.png";
import { Container, Header, Center, Intro } from "./styles";

const pt = {
  type: "pt",
  aLogin: "Entrar",
  h1: "Filmes, séries e muito mais. Sem limites.",
  h2: "Assita onde quiser. Cancele quando quiser",
  h3: "Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura",
  btn: "Vamos lá",
  placeholder: "E-mail",
};
const en = {
  type: "en",
  aLogin: "Sign In",
  h1: "Unlimited movies, TV shows, and more.",
  h2: "Watch anywhere. Cancel anytime.",
  h3: "Ready to watch? Enter your email to create or restart your membership.",
  btn: "Get started >",
  placeholder: "Email address",
};

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState(pt);

  function handlerLanguage(e: string) {
    if (e === "en") {
      setLanguage(en);
    } else {
      setLanguage(pt);
    }
  }

  return (
    <Container>
      <Intro>
        <Header>
          <img src={Logo} alt="Netflix Clone" />

          <div className="btn-area">
            <select
              name="language"
              id="language"
              onChange={(e) => handlerLanguage(e.target.value)}
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>

            <a href="/login">{language.aLogin}</a>
          </div>
        </Header>

        <Center>
          <h1>{language.h1}</h1>
          <h2>{language.h2}</h2>
          <h3>{language.h3}</h3>

          <div className="input-area">
            <label id="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={language.placeholder}
            />
            <button type="button">{language.btn} </button>
          </div>
        </Center>
      </Intro>
    </Container>
  );
};

export default Home;
