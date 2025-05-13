import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"

export function DateFilter() {
  const date = new Date(2025, 11, 16) // December 16, 2025 (month is 0-indexed)

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Filter by date:</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className="w- justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {format(date, "d MMMM yyyy")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={() => {}}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}