import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/Input";
import { Calendar } from "@/components/ui/calendar";
// import { ChromePicker } from "react-color";

type ThemeProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  onCreateTheme?: (theme: { name: string; dates: Date[]; color: string }) => void;
  editTheme?: { id: string; name: string; dates: Date[]; color: string } | null;
};

export default function ThemeModal({
  showModal,
  setShowModal,
  onCreateTheme,
  editTheme = null,
}: ThemeProps) {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [name, setName] = React.useState("");
  const [color, setColor] = React.useState("#F7A400");
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  React.useEffect(() => {
    // If editing a theme, populate the form with theme data
    if (editTheme) {
      setName(editTheme.name);
      setSelectedDates(editTheme.dates);
      setColor(editTheme.color);
    } else {
      // Reset form when creating a new theme
      setName("");
      setSelectedDates([]);
      setColor("#F7A400");
    }
  }, [editTheme, showModal]);

  const handleSubmit = () => {
    if (name.trim() === "" || selectedDates.length === 0) {
      return; // Don't submit if required fields are empty
    }

    if (onCreateTheme) {
      onCreateTheme({
        name,
        dates: selectedDates,
        color,
      });
    }

    setShowModal(false);
  };

  return (
    <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
      <DialogContent className="sm:max-w-[450px] rounded-2xl px-6 py-4">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {editTheme ? "Edit Theme" : "Create a Theme"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Theme Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Name of theme
            </label>
            <Input
              placeholder="Enter the name of theme"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Theme Color */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Theme Color
            </label>
            <div className="flex items-center space-x-2">
              <div
                className="w-10 h-10 rounded-md cursor-pointer border border-gray-200"
                style={{ backgroundColor: color }}
                onClick={() => setShowColorPicker(!showColorPicker)}
              />
              <span className="text-sm text-gray-500">{color}</span>
            </div>
            
            {showColorPicker && (
              <div className="absolute z-10 mt-2">
                <div 
                  className="fixed inset-0" 
                  onClick={() => setShowColorPicker(false)}
                />
                {/* <ChromePicker
                  color={color}
                  onChange={(color) => setColor(color.hex)}
                /> */}
              </div>
            )}
          </div>

          {/* Calendar */}
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium text-gray-700">
              Select dates
            </label>
            <Calendar
              mode="multiple"
              selected={selectedDates}
              onSelect={(dates) => dates && setSelectedDates(Array.isArray(dates) ? dates : [dates])}
              className="rounded-4xl mx-auto flex justify-center w-full border"
              numberOfMonths={1}
            />
            
            <div className="mt-1  text-gray-500">
              {selectedDates.length > 0 && (
                <p>
                  Selected: {selectedDates.length} day(s) from{" "}
                  {selectedDates
                    .sort((a, b) => a.getTime() - b.getTime())[0]
                    .toLocaleDateString()}{" "}
                  to{" "}
                  {selectedDates
                    .sort((a, b) => a.getTime() - b.getTime())
                    [selectedDates.length - 1].toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button 
            className="w-full rounded-4xl shadow-xl text-white hover:opacity-90"
            style={{ backgroundColor: color }}
            onClick={handleSubmit}
          >
            {editTheme ? "Update Theme" : "Create Theme"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
