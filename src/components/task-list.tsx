import { useContext } from 'react';
import ApplicationContext from '../context';
import Task from './task';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../lib/store';
import { useAppSelector } from '../lib/hooks';
const TaskList = () => {
  const tasks = useAppSelector(state => state.tasks.entities)
  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};


export default TaskList;
