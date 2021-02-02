import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please Add A Task');
      return;
    }

    addTask({ text, date, reminder });

    setText('');
    setDate('');
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit} className="add-form">
      <div className="form-control ">
        <label>Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="text"
          placeholder="Add Day & Time"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          onChange={(e) => setReminder(e.currentTarget.checked)}
          value={reminder}
          checked={reminder}
          type="checkbox"
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
