import React from 'react';
import { useStore } from '@store/store';

const RightSidebar = () => {
  const { showRightSidebar, rightSidebarWidth, setRightSidebarWidth } = useStore();
  const [isResizing, setIsResizing] = React.useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    document.body.style.cursor = 'col-resize';
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const newWidth = window.innerWidth - e.clientX;
      setRightSidebarWidth(Math.min(Math.max(200, newWidth), 500));
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = '';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  if (!showRightSidebar) return null;

  return (
    <div 
      className="h-full bg-gray-50 border-l border-gray-200 flex flex-col relative"
      style={{ width: `${rightSidebarWidth}px` }}
    >
      {/* Resize Handle */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-300 active:bg-blue-500"
        onMouseDown={handleMouseDown}
      />
      
      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-lg font-semibold mb-4">Tools & Settings</h2>
        <div className="space-y-4">
          <div className="p-3 bg-white rounded-lg shadow">
            <h3 className="font-medium mb-2">Model Parameters</h3>
            <select className="select select-bordered w-full">
              <option>GPT-3.5</option>
              <option>GPT-4</option>
            </select>
          </div>
          
          <div className="p-3 bg-white rounded-lg shadow">
            <h3 className="font-medium mb-2">Quick Actions</h3>
            <button className="btn btn-sm w-full mb-2">Save Chat</button>
            <button className="btn btn-sm w-full">Export Markdown</button>
          </div>
          
          <div className="p-3 bg-white rounded-lg shadow">
            <h3 className="font-medium mb-2">Token Count</h3>
            <div className="text-sm">Current: 1,024/4,096</div>
            <progress 
              className="progress progress-primary w-full mt-2" 
              value="25" 
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
