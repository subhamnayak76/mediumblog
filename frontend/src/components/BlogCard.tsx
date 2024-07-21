// 

import React from 'react';

interface Author {
  name: string;
}

interface BlogCardProps {
  id: string;
  author: Author;
  title: string;
  description: string;
  publishedDate: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  author,
  title,
  description,
  publishedDate,
}) => {
  return (
    <div className="flex flex-col border-b border-gray-200 py-8">
      <div className="flex items-center mb-2">
        <span className="text-sm font-medium mr-2">{author.name}</span>
        <span className="text-xs text-gray-500">
          {new Date(publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </span>
      </div>
      
      <div className="flex justify-between">
        <div className="flex-1 pr-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;