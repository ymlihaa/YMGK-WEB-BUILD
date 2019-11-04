import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Form, Icon, Input, Button } from "antd";
const axios = require("axios");

class NormalLoginForm extends React.Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (_err, values) => {
      // if (err) {
      //   console.log("Received values of form: ", values);
      // }
      // console.log();

      try {
        const response = await axios.post(
          "ymk-api-1.us-east-2.elasticbeanstalk.com/login/user",
          {
            username: values.username,
            password: values.password
          }
        );

        if (response.date.token) {
          localStorage.setItem("LoginToken", response.data.token);
        }
        if (this.username === "admin" && this.password === "test") {
          return this.props.history.push("/result-page");
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  // Validate = async values => {
  //   console.log("bunu ben yazdım :" + values);
  //   try {
  //     const response = await axios.post(
  //       "ymk-api-1.us-east-2.elasticbeanstalk.com/login/user",
  //       {
  //         username: this.username,
  //         password: this.password
  //       }
  //     );

  //     if (response.date.token) {
  //       localStorage.setItem("LoginToken", response.data.token);
  //     }
  //     if (this.username === "admin" && this.password === "test") {
  //       return this.props.history.push("/result-page");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item className="input">
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item className="input">
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>

          <Form.Item className="button">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button input"
              onClick={this.validate}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);
export default WrappedNormalLoginForm;
