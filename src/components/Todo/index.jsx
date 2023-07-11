import {
    Button,
    Checkbox,
    Col,
    Input,
    Modal,
    Row,
    Select,
    Space,
    Tag,
    Typography,
} from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo, toggleTodoStatus } from '../TodoList/todoSlice';

const priorityColors = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

const Todo = ({ name, priority, completed, id }) => {
    const dispatch = useDispatch();
    const [editName, setEditName] = useState(name);
    const [editPriority, setEditPriority] = useState(priority);
    const [checked, setChecked] = useState(completed);
    const [isRemoveModal, setIsRemoveModal] = useState(false);
    const toggleCheckbox = () => {
        setChecked(!checked);
        dispatch(toggleTodoStatus(id));
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsRemoveModal(false);
        setIsModalOpen(true);
    };

    const showRemoveModal = () => {
        setIsRemoveModal(true);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        if (!isRemoveModal) {
            const data = {
                id,
                name: editName,
                completed,
                priority: editPriority,
            };
            dispatch(editTodo({ id, data }));
        } else {
            dispatch(removeTodo(id));
        }
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleInputOnchange = (e) => {
        setEditName(e.target.value);
    };

    const handlePriorityChange = (value) => {
        setEditPriority(value);
    };

    return (
        <Row justify='space-between' style={{ marginBottom: '8px' }}>
            <Col span={20}>
                <Row
                    justify='space-between'
                    style={
                        completed && {
                            opacity: 0.5,
                            textDecoration: 'line-through',
                        }
                    }
                >
                    <Col span={16}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <input
                                type='checkbox'
                                id={id}
                                checked={checked}
                                onChange={toggleCheckbox}
                                style={{
                                    display: 'block',
                                    height: '14px',
                                    margin: 0,
                                    cursor: 'pointer',
                                }}
                            />
                            <label
                                htmlFor={id}
                                style={{
                                    margin: '0 0 0 8px',
                                    overflowX: 'auto',
                                    cursor: 'pointer',
                                }}
                            >
                                {name}
                            </label>
                        </div>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: 'flex',
                            justifyContent: 'end',
                            paddingRight: '8px',
                        }}
                    >
                        <Space size='small' justify='end'>
                            <Tag
                                color={priorityColors[priority]}
                                style={{ margin: 0 }}
                            >
                                {priority}
                            </Tag>
                            <Button
                                type='primary'
                                style={{
                                    padding: '2px 10px',
                                    fontSize: '12px',
                                    height: 'unset',
                                    ...(completed
                                        ? { pointerEvents: 'none' }
                                        : {}),
                                }}
                                onClick={showModal}
                            >
                                Edit
                            </Button>

                            <Modal
                                title={`${
                                    isRemoveModal
                                        ? (!completed
                                              ? 'Todo uncompleted. '
                                              : '') + 'Delete Todo?'
                                        : 'Edit'
                                }`}
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                            >
                                <Row style={{ padding: '20px' }}>
                                    <Col span={24}>
                                        <Space.Compact
                                            style={{ display: 'flex' }}
                                        >
                                            <Input
                                                value={editName}
                                                onChange={handleInputOnchange}
                                                disabled={isRemoveModal}
                                            />
                                            <Select
                                                defaultValue='Medium'
                                                value={editPriority}
                                                onChange={handlePriorityChange}
                                                disabled={isRemoveModal}
                                            >
                                                <Select.Option
                                                    value='High'
                                                    labe='High'
                                                >
                                                    <Tag color='red'>High</Tag>
                                                </Select.Option>
                                                <Select.Option
                                                    value='Medium'
                                                    labe='Medium'
                                                >
                                                    <Tag color='blue'>
                                                        Medium
                                                    </Tag>
                                                </Select.Option>
                                                <Select.Option
                                                    value='Low'
                                                    labe='Low'
                                                >
                                                    <Tag color='gray'>Low</Tag>
                                                </Select.Option>
                                            </Select>
                                        </Space.Compact>
                                    </Col>
                                </Row>
                            </Modal>
                        </Space>
                    </Col>
                </Row>
            </Col>

            <Col
                span={4}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Button
                    type='primary'
                    danger
                    size='small'
                    onClick={showRemoveModal}
                >
                    Remove
                </Button>
            </Col>
        </Row>
    );
};

Todo.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
};

export default Todo;
