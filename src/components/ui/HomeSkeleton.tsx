import React from 'react';

const HomeSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-white py-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Skeleton */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-16">
          <div className="w-24 h-6 bg-gray-200 rounded-full"></div>
          <div className="w-3/4 max-w-lg h-10 bg-gray-200 rounded-xl"></div>
          <div className="w-1/2 max-w-md h-4 bg-gray-100 rounded"></div>
        </div>

        {/* Grid Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-100 rounded-3xl p-6 h-64 flex flex-col justify-between border border-gray-50">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                <div className="w-3/4 h-6 bg-gray-200 rounded-md"></div>
                <div className="w-full h-16 bg-gray-200 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomeSkeleton;
