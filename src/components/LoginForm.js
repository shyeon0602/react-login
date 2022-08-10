import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  // 데이터에 에러가 있을 경우, event.preventDefault()를 호출함 -> 이러면 폼이 서버에 전송되지 않음
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    // onsubmit 이벤트를 이용하여 폼의 값을 전송하기 전 어떠한 작업을 할 수 있게 함
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>LOGIN</h2>
        {/*Error*/}

        {/* 이름 */}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        {/* 아이디(이메일) */}
        <div className="form-group">
          <label htmlFor="email">ID: </label>
          <input type="email" name="email" id="email" />
        </div>
        {/* 비밀번호 */}
        <div className="form-group">
          <label htmlFor="password">password: </label>
          <input type="password" name="password" id="password" />
        </div>
        {/* 폼 전송: input type="submit" */}
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
