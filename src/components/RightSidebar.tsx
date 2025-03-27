import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-80 h-full bg-gray-50 border-l border-gray-200 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Tools & Settings</h2>
      <div className="space-y-4">
        <div className="p-3 bg-white rounded-lg shadow">
          Model Parameters
        </div>
        <div className="p-3 bg-white rounded-lg shadow">
          Chat History
        </div>
        <div className="p-3 bg-white rounded-lg shadow">
          Quick Actions
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
