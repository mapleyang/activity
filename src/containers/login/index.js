import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Checkbox  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Login extends Component {
	constructor(props, context) {
    super(props)
    this.state = {}
  }
  // fetch("/chealth/background/ajaxBusiness/getMemberById?memberId=3")
  //       .then(response => response.json())
  //       .then(json => { 
  //         if(json.success) {
  //           json.user.forEach(el => {
  //             if(el.userName === values.userName && el.password === values.password) {
  //             }
  //           })
  //         }
  //       })
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var body = {
          userName: values.userName,
          password: values.password,
          memberId: 3
        }
        window.$.ajax({
          type: 'post',
          url: "/chealth/background/ajaxBusiness/saveMember",
          data: body,
          dataType:'html',
          success:function(msg){
            console.log('success')                     
          },
          error:function(){
            console.log("error")
          }
        });
        // fetch("/chealth/background/ajaxBusiness/saveMember", {
        //   method: "POST",
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(body),
        // })
        // .then(response => response.json())
        // .then(json => { 
        //   if(json.success) {
        //     json.user.forEach(el => {
        //       if(el.userName === values.userName && el.password === values.password) {
        //       }
        //     })
        //   }
        // })
      }
    });
  }

  registerClick () {
    location.hash = '/register';
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-content">
          <img src="./quitsmoking.png" />
          <div className="login-area">
             <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a onClick={this.registerClick.bind(this)}>register now!</a>
              </FormItem>
            </Form>
          </div>
        </div>
        <div className="footer"><Footer /></div>
      </div>
    );
  }
}

export default Login = Form.create({
})(Login);