import * as React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Input } from "./input";

export interface TransferItem {
  key: string;
  title: string;
  description?: string;
  disabled?: boolean;
}

export interface TransferProps {
  dataSource: TransferItem[];
  targetKeys?: string[];
  selectedKeys?: string[];
  onChange?: (targetKeys: string[], direction: "left" | "right", moveKeys: string[]) => void;
  onSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void;
  titles?: [string, string];
  showSearch?: boolean;
  className?: string;
}

const Transfer = React.forwardRef<HTMLDivElement, TransferProps>(
  (
    {
      dataSource,
      targetKeys = [],
      selectedKeys = [],
      onChange,
      onSelectChange,
      titles = ["Source", "Target"],
      showSearch = false,
      className,
    },
    ref
  ) => {
    const [leftSelected, setLeftSelected] = React.useState<string[]>([]);
    const [rightSelected, setRightSelected] = React.useState<string[]>([]);
    const [leftSearch, setLeftSearch] = React.useState("");
    const [rightSearch, setRightSearch] = React.useState("");

    const leftDataSource = dataSource.filter((item) => !targetKeys.includes(item.key));
    const rightDataSource = dataSource.filter((item) => targetKeys.includes(item.key));

    const filteredLeftData = leftDataSource.filter((item) =>
      item.title.toLowerCase().includes(leftSearch.toLowerCase())
    );
    const filteredRightData = rightDataSource.filter((item) =>
      item.title.toLowerCase().includes(rightSearch.toLowerCase())
    );

    const handleLeftCheck = (key: string, checked: boolean) => {
      const newSelected = checked
        ? [...leftSelected, key]
        : leftSelected.filter((k) => k !== key);
      setLeftSelected(newSelected);
      onSelectChange?.(newSelected, rightSelected);
    };

    const handleRightCheck = (key: string, checked: boolean) => {
      const newSelected = checked
        ? [...rightSelected, key]
        : rightSelected.filter((k) => k !== key);
      setRightSelected(newSelected);
      onSelectChange?.(leftSelected, newSelected);
    };

    const handleMoveToRight = () => {
      const newTargetKeys = [...targetKeys, ...leftSelected];
      onChange?.(newTargetKeys, "right", leftSelected);
      setLeftSelected([]);
    };

    const handleMoveToLeft = () => {
      const newTargetKeys = targetKeys.filter((key) => !rightSelected.includes(key));
      onChange?.(newTargetKeys, "left", rightSelected);
      setRightSelected([]);
    };

    const renderList = (
      data: TransferItem[],
      selected: string[],
      onCheck: (key: string, checked: boolean) => void,
      search: string,
      onSearchChange: (value: string) => void,
      title: string
    ) => (
      <div className="flex flex-col w-64 h-80 border border-[var(--color-border)] rounded-lg bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]">
        <div className="p-3 border-b border-[var(--color-border)]">
          <div className="text-sm font-medium text-[var(--color-text)] mb-2">
            {title}
          </div>
          {showSearch && (
            <Input
              placeholder="Search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              size="sm"
            />
          )}
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {data.map((item) => (
            <label
              key={item.key}
              className={cn(
                "flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors",
                "hover:bg-[var(--color-bg-glass-hover)]",
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <Checkbox
                checked={selected.includes(item.key)}
                onCheckedChange={(checked) =>
                  onCheck(item.key, checked as boolean)
                }
                disabled={item.disabled}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm text-[var(--color-text)] truncate">
                  {item.title}
                </div>
                {item.description && (
                  <div className="text-xs text-[var(--color-text-muted)] truncate">
                    {item.description}
                  </div>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    );

    return (
      <div ref={ref} className={cn("flex items-center gap-4", className)}>
        {renderList(
          filteredLeftData,
          leftSelected,
          handleLeftCheck,
          leftSearch,
          setLeftSearch,
          titles[0]
        )}

        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleMoveToRight}
            disabled={leftSelected.length === 0}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleMoveToLeft}
            disabled={rightSelected.length === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {renderList(
          filteredRightData,
          rightSelected,
          handleRightCheck,
          rightSearch,
          setRightSearch,
          titles[1]
        )}
      </div>
    );
  }
);
Transfer.displayName = "Transfer";

export { Transfer };
