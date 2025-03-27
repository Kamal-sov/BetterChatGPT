import React from 'react';
import Chat from './Chat'; // Reuse your existing Chat component

const RightSidebar = () => {
  return (
    <div className="w-80 h-full bg-gray-50 border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Secondary Chat</h2>
      </div>
      <div className="flex-1 overflow-auto">
        <Chat isRightSidebar /> {/* We'll modify Chat component to accept this prop */}
      </div>
    </div>
  );
};

export default RightSidebar;
