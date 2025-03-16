
import { ListChecks } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center animate-fade-in">
      <div className="w-16 h-16 rounded-full bg-todo-blue/10 flex items-center justify-center mb-4">
        <ListChecks size={24} className="text-todo-blue" />
      </div>
      <h2 className="text-xl font-medium text-todo-text mb-2">No tasks yet</h2>
      <p className="text-todo-text-secondary max-w-xs">
        Add your first task above to get started with your to-do list.
      </p>
    </div>
  );
};

export default EmptyState;
