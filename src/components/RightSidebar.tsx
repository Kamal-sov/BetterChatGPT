import React from 'react';
import { useStore } from '@store/store';

const RightSidebar = () => {
  const { showRightSidebar, rightSidebarWidth } = useStore();

  if (!showRightSidebar) return null;

  return (
    <div 
      className="h-full bg-gray-50 border-l border-gray-200 flex flex-col"
      style={{ width: `${rightSidebarWidth}px` }}
    >
      <div className="p-4 border-b">
        <h2 className="font-semibold">Tools</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Your custom content here */}
      </div>
    </div>
  );
};

export default RightSidebar;
