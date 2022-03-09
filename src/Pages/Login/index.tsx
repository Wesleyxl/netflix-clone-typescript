import React, { useState } from "react";

import { auth } from "../../Api";
import Logo from "../../Assets/Home/netflix_logo.png";
import { login } from "../../Services/auth";
import { Container, Header, Content, Form } from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const hanlderSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const response = await auth.login(email, password);

    if (response.errors) {
      setLoading(false);
      console.log(response);
    } else if (response.error) {
      setLoading(false);
      console.log(response);
    } else {
      const { access_token } = response;
      login(access_token);
    }
  };

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Netflix Clone" />
      </Header>

      <Content>
        <Form onSubmit={(e) => hanlderSubmit}>
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

              <button type="submit">Entrar</button>

              <div className="remember">
                <div className="check">
                  <input type="checkbox" name="remember" id="remember" />

                  <label htmlFor="remember">Lembre-se de mim</label>
                </div>

                <a href="/#">Precisa de ajuda?</a>
              </div>

              <div className="register">
                <div className="top">
                  <p>
                    Novo por aqui? <a href="/registrar">Assine Aqui</a>
                  </p>
                </div>
                <div className="bottom">
                  <p>
                    Esta página é protegida pelo Google reCAPTCHA para garantir
                    que você não é um robô. <a href="/#">Saiba mais.</a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
