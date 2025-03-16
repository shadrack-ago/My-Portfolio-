
import { useState, KeyboardEvent } from 'react';
import { PlusCircle } from 'lucide-react';

interface NewTaskInputProps {
  onAddTask: (text: string) => void;
}

const NewTaskInput = ({ onAddTask }: NewTaskInputProps) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="todo-card mb-6 flex items-center py-1 px-2 subtle-shadow animate-scale-in">
      <input
        type="text"
        className="todo-input flex-1"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSubmit}
        className="p-2 rounded-xl text-todo-blue hover:bg-todo-blue/5 transition-colors duration-200"
        aria-label="Add task"
      >
        <PlusCircle size={20} />
      </button>
    </div>
  );
};

export default NewTaskInput;
