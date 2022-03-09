import React, { useState } from "react";

import Logo from "../../Assets/Home/netflix_logo.png";
import { Container, Header, Content, Form } from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Netflix Clone" />
      </Header>

      <Content>
        <Form>
          <div className="title">
            <h1>Entrar</h1>
          </div>

          <form>
            <div className="form">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button type="button">Entrar</button>

              <div className="remember">
                <div className="check">
                  <input type="checkbox" name="remember" id="remember" />

                  <label htmlFor="remember">Lembre-se de mim</label>
                </div>

                <a href="/#">Precisa de ajuda?</a>
              </div>
            </div>
          </form>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
