import { Divider, Typography } from 'antd';
import './App.css';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

const { Title } = Typography;

function App() {
    return (
        <div className='app'>
            <Title style={{ textAlign: 'center' }}>Todo App With RTK</Title>
            <Filter />
            <Divider />
            <TodoList />
        </div>
    );
}

export default App;
