import { Button, Col, Input, Row, Select, Space, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { todoRemainingSelector } from '../../redux/selector';
import Todo from '../Todo';
import { addTodo } from './todoSlice';

const TodoList = () => {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const dispatch = useDispatch();

    const handleInputOnchange = (e) => {
        setTodoName(e.target.value);
    };
    const handlePriorityChange = (value) => {
        setPriority(value);
    };
    const handleAddTodo = () => {
        dispatch(
            addTodo({
                id: uuidv4(),
                name: todoName,
                completed: false,
                priority: priority,
            }),
        );
        setTodoName('');
        setPriority('Medium');
    };

    const handleEnterKeypress = (e) => {
        if (e.target.value.trim() && e.key === 'Enter') {
            handleAddTodo();
        }
    };

    const todoList = useSelector(todoRemainingSelector);

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col
                span={24}
                style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}
            >
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }}>
                    <Input
                        value={todoName}
                        onChange={handleInputOnchange}
                        onKeyDown={handleEnterKeypress}
                    />
                    <Select
                        defaultValue='Medium'
                        value={priority}
                        onChange={handlePriorityChange}
                    >
                        <Select.Option value='High' labe='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' labe='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' labe='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddTodo}>
                        Add
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    );
};

export default TodoList;
