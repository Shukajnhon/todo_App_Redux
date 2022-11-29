import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Todo from '../Todo';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from "uuid"

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const dispatch = useDispatch()

  // Handle Button Click
  const handleButtonClick = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: "",
      completed: false,
    }))
  }

  // Handle Input Change
  const handleInputChange = (e) => {
    const { value } = e.target
    // console.log(value)
    setTodoName(value)
  }

  // Handle Priority Change
  const handlePriorityChange = (value) => {
    console.log(value)
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' />
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
