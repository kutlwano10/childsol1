import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Input from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import Button from "@/components/ui/ButtonUi";

type AddProductProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export default function AddProductModal({
  showModal,
  setShowModal,
}: AddProductProps) {
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Fill in the details of your new product.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2 py-4">
          {/* Product Name */}
          <div className="items-center gap-4">
            <Label htmlFor="name" className="">
              Product name
            </Label>
            <Input
              id="name"
              placeholder="Enter product name"
              className="col-span-3"
            />
          </div>

          {/* Price */}
          <div className="items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              placeholder="Enter price"
              className="col-span-3"
              type="number"
            />
          </div>

          {/* SKU */}
          <div className=" items-center gap-4">
            <Label htmlFor="sku" className="text-right">
              SKU
            </Label>
            <Input id="sku" placeholder="Enter sku" className="col-span-3" />
          </div>

          {/* Category */}
          <div className=" items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input id="category" className="col-span-3" />
          </div>

          {/* Image Upload */}
          <div className=" items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Upload Image
            </Label>
            <Input id="image" type="file" className="col-span-3" />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button type="submit">Add Product</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
