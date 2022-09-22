import React, { Component } from "react";
import "../Styles/Form.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

class Formularz extends Component {
  state = {
    username: "",
    tel: "",
    email: "",
    pass: "",
    accept: false,
    message: "",

    errors: {
      username: false,
      tel: false,
      email: false,
      pass: false,
      accept: false,
    },
  };

  messages = {
    username_incorrect: "Nazwa dłuższa niż 8 znaków bez spacji",
    tel_incorrect: "niepoprawna wartość",
    email_incorrect: "Brak @ w emailu",
    password_incorrect: "Musisz przepisać text",
    accept_incorrect: "Nie potwierdzona zgoda",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (
      type === "text" ||
      type === "tel" ||
      type === "password" ||
      type === "email"
    ) {
      const value = e.target.value;
      // const checked = e.target.checked;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();
    // console.log(validation)

    if (validation.correct) {
      this.setState({
        username: "",
        tel: "",
        email: "",
        pass: "",
        accept: false,
        message: "Formularz został wysłany",

        errors: {
          username: false,
          tel: false,
          email: false,
          pass: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          tel: !validation.tel,
          email: !validation.email,
          pass: !validation.password,
          accept: !validation.accept,
        },
      });
    }
  };

  formValidation() {
    // true - ok
    // false - zle
    let username = false;
    let tel = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;
    if (
      this.state.username.length >= 8 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (
      this.state.tel.length === 9 &&
      this.state.tel.indexOf(
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ":",
        ";",
        "<",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        "?",
        "/",
        ">",
        " ",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "+"
      ) === -1
    ) {
      tel = true;
    }
    if (this.state.email.length >= 3 && this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.pass === "darmowy") {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && tel && password && email && accept) {
      correct = true;
    }
    return {
      correct,
      username,
      tel,
      email,
      password,
      accept,
    };
  }

  componentDidUpdate() {
    console.log("update");
    if (this.state.message !== "") {
      setTimeout(
        () =>
          this.setState({
            message: "",
          }),
        3000
      );
    }
  }

  render() {
    return (
      <>
        <div className="box">
          <div className="form">
            <form onSubmit={this.handleSubmit} noValidate>
              {this.state.message && (
                <div>
                  <Alert
                    severity="success"
                    style={{ vertical: "top", horizontal: "center" }}
                  >
                    <AlertTitle>Success</AlertTitle>
                    <strong> {this.state.message}</strong>
                  </Alert>
                </div>
              )}

              <h2>Chcesz darmowy kubek</h2>
              <label htmlFor="user">
                Twoje imie:
                <input
                  required
                  pattern="[a-zA-Z]"
                  style={{ width: "100%" }}
                  type="text"
                  id="user"
                  name="username"
                  // placeholder="8 znaków bez spacji "
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                {this.state.errors.username && (
                  <span>{this.messages.username_incorrect}</span>
                )}
              </label>
              <label htmlFor="tel">
                Twój telefon:
                <input
                  style={{ width: "100%" }}
                  // inputMode="tel"
                  type="tel"
                  id="tel"
                  name="tel"
                  // placeholder="np.790336233 "
                  required
                  pattern="[7-9]{1}[0-9]{9}"
                  value={this.state.tel}
                  onChange={this.handleChange}
                />
                {this.state.errors.tel && (
                  <span>{this.messages.tel_incorrect}</span>
                )}
              </label>

              <label htmlFor="email">
                Twój email:
                <input
                  style={{ width: "100%" }}
                  type="email"
                  id="email"
                  name="email"
                  // placeholder="nie zapomnij o @ "
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {this.state.errors.email && (
                  <span>{this.messages.email_incorrect}</span>
                )}
              </label>

              <label htmlFor="password">
                Przepisz ten text: "darmowy"
                <input
                  style={{ width: "100%" }}
                  type="password"
                  id="password"
                  name="pass"
                  // placeholder="darmowy   "
                  value={this.state.pass}
                  onChange={this.handleChange}
                />
                {this.state.errors.pass && (
                  <span>{this.messages.password_incorrect}</span>
                )}
              </label>
              <label>
                {" "}
                Wybierz model kubka:
                <select
                  style={{
                    display: "block",
                    margin: "10px 0px",
                    width: "70%",
                    padding: "3px",
                  }}
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                >
                  <option value="1">Zwykły biały</option>
                  <option value="2">Magiczny czarny</option>
                  <option value="3">Latte duży</option>
                  <option value="4">Z łyżeczką niebieski</option>
                </select>
              </label>

              {/* <label style={{ display: "flex" }} htmlFor="accept">

                <input

                  type="checkbox"
                  id="accept"
                  name="accept"
                  checked={this.state.accept}
                  onChange={this.handleChange}
                />
                Wyrażam zgodę
                {this.state.errors.accept && (
                  <span>{this.messages.accept_incorrect}</span>
                )}
              </label> */}

              <button className="btn" style={{ marginLeft: "10px", width: "150px", padding: "5px", marginTop: "1rem", border: "none" }}>Zapisz się</button>
            </form>
          </div>
          <div className="imager">Kubek</div>
        </div>
      </>
    );

  }
}

export default Formularz;
