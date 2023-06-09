import { Col, Row, Typography, Input, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    priorityFilterChange,
    searchFilerChange,
    statusFilterChange,
} from './filterSlice';

const { Search } = Input;

const Filter = () => {
    const filters = useSelector((state) => state.filters);
    const { search, status, priorities } = filters;
    const [searchText, setSearchText] = useState(search);
    const [filterStatus, setFilterStatus] = useState(status);
    const [filterPriority, setFilterPriority] = useState(priorities);
    const dispatch = useDispatch();

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        dispatch(searchFilerChange(e.target.value));
    };
    const handleStatusChange = (e) => {
        setFilterStatus(e.target.value);
        dispatch(statusFilterChange(e.target.value));
    };
    const handlePriorityChange = (value) => {
        setFilterPriority(value);
        dispatch(priorityFilterChange(value));
    };

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder='text search'
                    value={searchText}
                    onChange={handleSearchTextChange}
                />
            </Col>
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter by Priority
                </Typography.Paragraph>
                <Radio.Group value={filterStatus} onChange={handleStatusChange}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter by Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='please select'
                    style={{ width: '100%' }}
                    value={filterPriority}
                    onChange={handlePriorityChange}
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
};

export default Filter;
