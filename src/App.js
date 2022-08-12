import React, { useState } from "react";

import LoginForm from "./components/LoginForm";

function App() {
  const programUser = {
    email: "july8560@naver.com",
    password: "july8560",
  };

  // 로그인했을 때 사용자 정보 얻을 수 있음
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  //로그인 방법 확인
  const Login = (details) => {
    console.log(details);
    //programUser의 정보와 일치할 때 로그인 됨
    if (
      details.email == programUser.email &&
      details.password == programUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("details do not match!");

      setError("아이디와 비밀번호를 다시 확인하십시오.");
    }
  };

  //로그아웃 정보 전달
  const Logout = () => {
    console.log("Logout");

    setUser({ name: "", email: "" });
  };

  return (
    <>
      <div className="App">
        {/* 이메일이 빈칸이 아닐 때 */}
        {user.email != "" ? (
          // 로그인 됐을 경우
          <div className="welcome">
            <h2>
              welcome <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          // 로그인 안됐을 경우
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </>
  );
}

export default App;
