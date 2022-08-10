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
  };
  //로그아웃 정보 전달
  const Logout = () => {
    console.log("Logout");
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
            <button>Logout</button>
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
