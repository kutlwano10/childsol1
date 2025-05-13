"use client";
import Button from "@/components/ui/ButtonUi";
import { useState } from "react";

type Items = {
  name: string;
  quantity: number;
  cost: number;
  tax: number;
};

const InvoiceForm = () => {
  const [items, setItems] = useState<Items[]>([
    { name: "", quantity: 1, cost: 0, tax: 0 },
  ]);
  const [recipient, setRecipient] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [reference, setReference] = useState("");

  const handleItemChange = (
    index: number,
    field: keyof Items,
    value: string
  ) => {
    const updatedItems = [...items];
    if (field === "name") {
      updatedItems[index][field] = value as Items[typeof field];
    } else {
      updatedItems[index][field] = parseFloat(value) as Items[typeof field];
    }
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", quantity: 1, cost: 0, tax: 0 }]);
  };

  const removeItem = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const calculateAmount = (item: Items): string =>
    (item.quantity * item.cost * (1 + item.tax / 100)).toFixed(2);

  const total = items.reduce(
    (sum: number, item: Items) =>
      sum + item.quantity * item.cost * (1 + item.tax / 100),
    0
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 ">
      {/* Left - Form */}
      <div className="bg-white rounded-4xl p-6 flex-1">
        <h2 className="text-lg font-semibold mb-4">Create Invoice</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter the event name"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Enter the event name"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 text-left">
                <th>Items</th>
                <th>QTY</th>
                <th>Cost</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td>
                    <input
                      type="text"
                      placeholder="Enter the item name"
                      value={item.name}
                      onChange={(e) =>
                        handleItemChange(idx, "name", e.target.value)
                      }
                      className="border rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(idx, "quantity", e.target.value)
                      }
                      className="border rounded px-2 py-1 w-16"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.cost}
                      onChange={(e) =>
                        handleItemChange(idx, "cost", e.target.value)
                      }
                      className="border rounded px-2 py-1 w-24"
                    />
                  </td>
                  <td className="flex items-center justify-between">
                    <span>R {calculateAmount(item)}</span>
                    <button
                      className="text-red-500 ml-2"
                      onClick={() => removeItem(idx)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4} className="pt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Tax</span>
                    <input
                      type="number"
                      placeholder="Enter percentage"
                      value={items[0]?.tax || ""}
                      onChange={(e) =>
                        handleItemChange(0, "tax", e.target.value)
                      }
                      className="border rounded px-2 py-1 w-32"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={addItem}
            className="text-sm text-yellow-500 mt-3 hover:underline"
          >
            + Add Item
          </button>
        </div>

        {/* Total */}
        <div className="text-right font-semibold">
          Total: R {total.toFixed(2)}
        </div>
      </div>

      {/* Right - Send To */}
      <div className="bg-white shadow-md rounded-4xl p-6 w-full lg:w-1/3">
        <h2 className="text-lg font-semibold mb-4">Send to</h2>

        <select
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4"
        >
          <option value="">Select</option>
          <option value="Parents">Parents</option>
          <option value="Staff">Staff</option>
          <option value="Individual Parent">Individual Parent</option>
          <option value="Individual Staff">Individual Staff</option>
        </select>

        <Button className="w-full shadow">Send Invoice</Button>
      </div>
    </div>
  );
};

export default InvoiceForm;
