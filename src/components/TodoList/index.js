import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from "uuid"
import { todosRemainingSelector } from "../../redux/selectors"

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const dispatch = useDispatch()
  const todoList = useSelector(todosRemainingSelector)
  console.log(todoList)

  // const searchText = useSelector(searchTextSelector)
  // console.log({ searchText })



  // Handle Button Click
  const handleButtonClick = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))

    setTodoName('')
    setPriority('Medium')
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
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}

        {todoList.map((todoItem, index) => {
          return <Todo
            key={index}
            // id={todoItem.id}
            name={todoItem.name}
            prioriry={todoItem.priority}
            completed={todoItem.completed}
          />
        })}

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
