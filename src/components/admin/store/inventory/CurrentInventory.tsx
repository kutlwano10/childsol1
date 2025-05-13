import React from 'react';
import { Table, Column } from '@/components/ui/table/Table'; // Adjust the import path

interface InventoryItem {
  id: string;
  productName: string;
  size2_3: number;
  size3_4: number;
  size4_5: number;
  size5_6: number;
  size6_7: number;
  total: number;
}

export const CurrentInventory = () => {
  // Sample data matching your image
  const inventoryData: InventoryItem[] = [
    {
      id: '1',
      productName: 'Green Golf T-Shirt',
      size2_3: 234,
      size3_4: 234,
      size4_5: 234,
      size5_6: 234,
      size6_7: 234,
      total: 234
    },
    {
      id: '2',
      productName: 'Shorts for Boys',
      size2_3: 234,
      size3_4: 234,
      size4_5: 234,
      size5_6: 234,
      size6_7: 234,
      total: 234
    },
    {
      id: '3',
      productName: 'Shorts for Girls',
      size2_3: 234,
      size3_4: 234,
      size4_5: 234,
      size5_6: 234,
      size6_7: 234,
      total: 234
    },
    {
      id: '4',
      productName: 'Trackout set',
      size2_3: 234,
      size3_4: 234,
      size4_5: 234,
      size5_6: 234,
      size6_7: 234,
      total: 234
    },
    {
      id: '5',
      productName: 'Yellow Golf T-Shirt',
      size2_3: 234,
      size3_4: 234,
      size4_5: 234,
      size5_6: 234,
      size6_7: 234,
      total: 234
    }
  ];

  const columns: Column<InventoryItem>[] = [
    {
      key: 'productName',
      header: 'Name of Product',
      width: '200px'
    },
    {
      key: 'size2_3',
      header: '2-3',
      align: 'center'
    },
    {
      key: 'size3_4',
      header: '3-4',
      align: 'center'
    },
    {
      key: 'size4_5',
      header: '4-5',
      align: 'center'
    },
    {
      key: 'size5_6',
      header: '5-6',
      align: 'center'
    },
    {
      key: 'size6_7',
      header: '6-7',
      align: 'center'
    },
    {
      key: 'total',
      header: 'Total',
      align: 'center'
    }
  ];

  return (
    <div className="p-6 bg-white rounded-4xl">
      <h1 className="text-2xl font-bold mb-4">Current Inventory</h1>
      <p className="text-gray-600 mb-6">Total number: 1500</p>
      
      <Table
        data={inventoryData}
        columns={columns}
        className=" border-gray-200 rounded-lg"
      />
    </div>
  );
};