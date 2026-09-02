import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editPriority, setEditPriority] = useState('Medium');

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error('Failed to load tasks', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const res = await axios.post(API_URL, { title, priority });
      setTasks([res.data, ...tasks]);
      setTitle('');
    } catch (err) {
      console.error('Failed to add task', err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}`, { status });
      setTasks(tasks.map(t => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error('Failed to update task', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error('Failed to delete task', err);
    }
  };
  const handleSaveEdit = async (id) => {
    try {
      const taskToUpdate = tasks.find(t => t._id === id);
      const res = await axios.put(`${API_URL}/${id}`, {
        title: editTitle,
        priority: editPriority,
        status: taskToUpdate.status
      });
      setTasks(tasks.map(t => (t._id === id ? res.data : t)));
      setEditingId(null);
    } catch (err) {
      console.error('Failed to update task', err);
    }
  };
  const startEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
    setEditPriority(task.priority);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="app-container">
      <h2 className="app-header">
        MERN <span>Task Board</span>
      </h2>

      {/* Input Form */}
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="select-field"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>

      {/* Task List */}
      <div className="task-list">
        {tasks.map(task => (
          <div key={task._id} className="task-card">
            {editingId === task._id ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="input-field"
                />
                <select
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                  className="select-field"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <button
                  onClick={() => handleSaveEdit(task._id)}
                  className="btn btn-save"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="btn btn-cancel"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div>
                  <div className={`task-title ${task.status === 'Completed' ? 'completed' : ''}`}>
                    {task.title}
                  </div>
                  <div className="task-meta">
                    Priority: <span className={`badge badge-${task.priority.toLowerCase()}`}>{task.priority}</span>
                    | Status: <span className={`badge badge-${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span>
                  </div>
                </div>

                <div className="task-actions">
                  <button
                    onClick={() => startEdit(task)}
                    className="btn btn-edit"
                  >
                    Edit
                  </button>
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(task._id, e.target.value)}
                    className="select-field"
                    style={{ padding: '6px 10px', fontSize: '13px' }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}