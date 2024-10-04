import { useState } from 'react';
import {
    Button,
    Container,
    CssBaseline,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography,
} from '@mui/material';

const App = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <Container maxWidth='sm'>
            <CssBaseline />
            <Typography variant='h4' component='h1' gutterBottom>
                Electron Task Tracker
            </Typography>

            <TextField
                fullWidth
                label='New Task'
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                margin='normal'
            />

            <Button variant='contained' color='primary' onClick={handleAddTask}>
                Add Task
            </Button>

            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={task} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default App;
