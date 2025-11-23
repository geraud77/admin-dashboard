"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";
function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <Calendar1Icon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto ">
        <div className="flex flex-col gap-4">
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="Todo1" />
              <Label htmlFor="Todo1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="Todo1" />
              <Label htmlFor="Todo1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="Todo1" />
              <Label htmlFor="Todo1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="Todo1" />
              <Label htmlFor="Todo1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="Todo1" />
              <Label htmlFor="Todo1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="Todo1" />
              <Label htmlFor="Todo1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="Todo1" />
              <Label htmlFor="Todo1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="Todo1" />
              <Label htmlFor="Todo1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}

export default TodoList;
