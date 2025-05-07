
import React from 'react';

// Define types for our table
export interface Column<T> {
  key: string;
  header: React.ReactNode;
  render?: (item: T, key: string) => React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  isLoading?: boolean;
  emptyState?: React.ReactNode;
  onRowClick?: (item: T) => void;
  rowKey?: (item: T) => string;
}

export function Table<T>({
  data,
  columns,
  className = '',
  isLoading = false,
  emptyState,
  onRowClick,
  rowKey = (item: any) => item.id,
}: TableProps<T>) {
  if (isLoading) {
    return (
      <div className="w-full p-8 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full p-8 flex justify-center items-center">
        {emptyState || <p>No data available</p>}
      </div>
    );
  }

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`py-4 border-t border-gray-200 font-medium text-gray-700 ${
                  column.align ? `text-${column.align}` : 'text-left'
                }`}
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={rowKey(item)}
              className={`border-t border-gray-200 hover:bg-gray-50 text-gray-500${
                onRowClick ? 'cursor-pointer' : ''
              }`}
              onClick={() => onRowClick && onRowClick(item)}
            >
              {columns.map((column) => (
                <td
                  key={`${rowKey(item)}-${column.key}`}
                  className={`py-4 text-sm text-gray-500${
                    column.align ? `text-${column.align}` : 'text-left'
                  }`}
                >
                  {column.render
                    ? column.render(item, column.key)
                    : (item as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}