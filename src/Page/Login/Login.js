import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Modal from "../../components/Modal/Modal";
export const Login = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const submitHandeler = (e) => {
    e.preventDefault();

    fetch(`http://localhost:1111/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // body:JSON.stringify({
      //   password: "1111"
      // })
      body: JSON.stringify({ password: pass }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/main");
        } else if (res.status === 401) {
          setIsWrong(true);
          setTimeout(() => {
            setIsWrong(false);
          }, 2000);
        } else if (res.status === 400) {
          // alert("please enter the password");
          setIsEmpty(true);
          setTimeout(() => {
            setIsEmpty(false);
          }, 2000);
        }

        return res.json();
      })
      .then((result) => {
        console.log(result);

        localStorage.setItem("Authorization", result.token);
      })
      .catch((err) => console.log(err));

    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //       password: "1111",
    //     });

    //     var requestOptions = {
    //       method: "POST",
    //       headers: myHeaders,
    //       body:raw,
    //     };

    //     fetch("http://localhost:1111/login", requestOptions)
    //       .then((response) => response.text())
    //       .then((result) => console.log(result))
    //       .catch((error) => console.log("error", error));
  };

  return (
    <>
      {isWrong ? (
        <>
          <Modal text="the password is wrong" />
          <div class="login-box">
            <h1>Login</h1>
            <form onSubmit={submitHandeler}>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
                id="login-input"
              />
              <button type="submit" id="login-button">
                Login
              </button>
            </form>
          </div>
        </>
      ) : isEmpty ? (
        <>
        <Modal text="please enter your password"/>
        <div class="login-box">
          <h1>Login</h1>
          <form onSubmit={submitHandeler}>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              id="login-input"
            />
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
        </div>
        </>
      ):(
        <div class="login-box">
          <h1>Login</h1>
          <form onSubmit={submitHandeler}>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              id="login-input"
            />
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};
