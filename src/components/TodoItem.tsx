
import { useState } from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '@/hooks/useTodos';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDelete = () => {
    setIsRemoving(true);
    // Add a small delay to allow animation to play
    setTimeout(() => {
      onDelete(todo.id);
    }, 200);
  };

  return (
    <div 
      className={cn(
        "todo-card p-3 mb-3 flex items-center gap-3 group",
        isRemoving && "animate-slide-out",
        !isRemoving && "animate-slide-in"
      )}
    >
      <div 
        onClick={() => onToggle(todo.id)} 
        className={cn(
          "todo-checkbox",
          todo.completed ? "todo-checkbox-checked" : "todo-checkbox-unchecked"
        )}
      >
        {todo.completed && <Check size={12} className="animate-check-mark" />}
      </div>
      
      <span 
        className={cn(
          "flex-1 text-todo-text transition-all duration-200",
          todo.completed && "line-through text-todo-text-secondary"
        )}
      >
        {todo.text}
      </span>
      
      <button
        onClick={handleDelete}
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1.5 rounded-lg text-todo-text-secondary hover:bg-red-500/10 hover:text-red-500 transition-all duration-200"
        aria-label="Delete task"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default TodoItem;
