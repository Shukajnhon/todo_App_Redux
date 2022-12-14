import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { searchFilterChange, statusFilterChange, prioritiesFilterChange } from '../../redux/actions'

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriorities, setFilterPriorities] = useState([])

  const dispatch = useDispatch()

  const handleSearchTextChange = (e) => {
    const { value } = e.target
    setSearchText(value)
    dispatch(searchFilterChange(value))
  }

  const handleFilterStatusChange = (e) => {
    const { value } = e.target
    // console.log({ value })
    setFilterStatus(value)
    dispatch(statusFilterChange(value))
  }

  const handleFilterPrioritiesChange = (value) => {
    console.log(value)
    setFilterPriorities(value)
    dispatch(prioritiesFilterChange(value))
  }


  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group defaultValue="All" value={filterStatus} onChange={handleFilterStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriorities}
          onChange={handleFilterPrioritiesChange}
        >
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
      </Col>
    </Row>
  );
}
