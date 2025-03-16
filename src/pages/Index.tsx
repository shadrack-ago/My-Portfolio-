
import { useEffect, useState } from 'react';
import { useTodos } from '@/hooks/useTodos';
import NewTaskInput from '@/components/NewTaskInput';
import TodoItem from '@/components/TodoItem';
import EmptyState from '@/components/EmptyState';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  // Used for SSR compatibility
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddTask = (text: string) => {
    addTodo(text);
    toast({
      title: "Task added",
      description: "Your task has been successfully added.",
      duration: 3000,
    });
  };

  const handleDeleteTask = (id: string) => {
    deleteTodo(id);
    toast({
      title: "Task deleted",
      description: "Your task has been removed.",
      duration: 3000,
    });
  };

  const handleToggleTask = (id: string) => {
    toggleTodo(id);
    const task = todos.find(todo => todo.id === id);
    if (task) {
      toast({
        title: task.completed ? "Task completed" : "Task marked incomplete",
        duration: 2000,
      });
    }
  };

  if (!mounted) {
    return null; // Prevent hydration errors
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-todo-gray to-white/80 py-8">
      <div className="todo-container">
        <header className="mb-8 text-center">
          <div className="inline-block px-3 py-1 bg-todo-blue/10 rounded-full text-todo-blue text-xs font-medium mb-3 animate-fade-in">
            Simple & Intuitive
          </div>
          <h1 className="text-3xl font-semibold text-todo-text mb-2 animate-fade-in">
            My Tasks
          </h1>
          <p className="text-todo-text-secondary animate-fade-in">
            Keep track of your daily tasks and goals
          </p>
        </header>

        <NewTaskInput onAddTask={handleAddTask} />

        <div className="space-y-2">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </div>

        {todos.length > 0 && (
          <div className="mt-6 text-center text-sm text-todo-text-secondary animate-fade-in">
            {todos.filter(t => t.completed).length} of {todos.length} tasks completed
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
