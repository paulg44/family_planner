import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { loginAuthAccount } from "../../services/auth.service";

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const authResult = await loginAuthAccount(username, password);
    console.log("Login result:", authResult);
  };
  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Family Planner</h1>
      </header>

      <Form name="basic" layout="vertical">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username" }]}
        >
          <Input onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" onClick={handleLogin}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Header;
