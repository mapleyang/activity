import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Radio, Steps, DatePicker, Checkbox, Table, Modal} from 'antd'
import Highcharts from 'highcharts'
import './index.scss'
import Footer from '../footer/index';
import HighchartsMore from 'highcharts-more'
import Tasks from './tasks';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Step = Steps.Step;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const quitOptions = [
  { label: '健康', value: 'health' },
  { label: '省钱', value: 'monkey' },
  { label: '家庭', value: 'family' },
  { label: '爱人', value: 'lover' },
];

const dataSource = [{
  key: '1',
  task: '自我提示',
  edit: '编辑'
}, {
  key: '2',
  task: '心理暗示',
  edit: '编辑'
}];

const columns = [{
  title: '任务',
  dataIndex: 'task',
  key: 'task',
}, {
  title: '操作',
  dataIndex: 'edit',
  key: 'edit',
}];

class MyPlan extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      visible: false
    }
  }

  componentDidMount () {
    this.getPlan();
  }

  getPlan () {
    let array = [];
    if(array.length === 0) {
      Modal.info({
        title: '你还有没有创建计划！！！请前往创建',
        content: "",
        okText: "前往",
        onOk() {
          location.hash = "/analysis";
        },
      });
    }
  }

  getBasicItem () {
    let item;
    let array = [];
    if(array.length === 0) {
      item = <div className="myplan-item-none">还没有创建戒烟任务</div>
    }
    else {
      item = array.map(el => {
        return <li><span className="myplan-basic-li">●</span><span>{el.label}</span></li>
      })
    }
    return item;
  }

  handleOk () {
    this.setState({
      visible: false
    })
  }

  handleCancel () {
    this.setState({
      visible: false
    })
  }

  tasksEdit () {
    this.setState({
      visible: true
    })
  }

  quitStyle () {
    let item;
    let array = [];
    if(array.length === 0) {
      item = <div className="myplan-item-none">还没有选择戒烟方法</div>
    }
    else {
      let liList = array.map(el => {
        return <li><span className="myplan-basic-li">●</span><span>{el.label}</span></li>
      })
      item = <ul>{liList}</ul>
    }
    return item;
  }
  commonwealStyle () {
    let item;
    let array = [];
    if(array.length === 0) {
      item = <div className="myplan-item-none">还没有参与任何公益</div>
    }
    else {
      let liList = array.map(el => {
        return <li><span className="myplan-basic-li">●</span><span>{el.label}</span></li>
      })
      item = <ul>{liList}</ul>
    }
    return item;
  }

  shareStyle () {
    let item;
    let array = [];
    if(array.length === 0) {
      item = <div className="myplan-item-none">还没准备好分享哦~</div>
    }
    else {
      let liList = array.map(el => {
        return <li><span className="myplan-basic-li">●</span><span>{el.label}</span></li>
      })
      item = <ul>{liList}</ul>
    }
    return item;
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="myplan">
        <div className="plan-title">
          <div className="plan-title-name">我的戒烟计划</div>
          <div className="plan-title-desc">boosts your chances of success. Build a quit plan to get ready and find out what to expect along the way. Complete 7 easy steps to get your personalized quit plan.</div>
        </div>
        <div className="myplan-list">
          <div className="myplan-item myplan-basic">
            <div className="myplan-name myplan-name-basic" onClick={this.tasksEdit.bind(this)}>
              <span>基础任务</span><Icon type="edit" />
            </div>
            <div className="myplan-item-basic">
              <ul>
                {this.getBasicItem()}
              </ul>
            </div>
          </div>
          <div className="myplan-item myplan-medicine">
            <div className="myplan-name myplan-name-medicine">
              <span>戒烟方法</span><Icon type="edit" />
            </div>
            <div className="myplan-item-medicine myplan-item-area">
              {this.quitStyle()}
            </div>
          </div>
          <div className="myplan-item myplan-commonweal">
            <div className="myplan-name myplan-name-commonweal">
              <span>公益任务</span><Icon type="edit" />
            </div>
            <div className="myplan-item-commonweal myplan-item-area">
              {this.commonwealStyle()}
            </div>
          </div>
          <div className="myplan-item myplan-share">
            <div className="myplan-name myplan-name-share">
              <span>分享任务</span><Icon type="edit" />
            </div>
            <div className="myplan-item-share myplan-item-area">
              {this.shareStyle()}
            </div>
          </div>
        </div>
        <Modal title="Basic Modal" visible={this.state.visible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
        > 
          <Button className="modle-add-task" type="primary" ghost>新增任务</Button>
          <Table bordered dataSource={dataSource} columns={columns}></Table>
        </Modal>
      </div>
    );
  }
}

export default MyPlan = Form.create({
})(MyPlan);