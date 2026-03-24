import * as React from "react";
import { Check, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ScrollArea } from "./scroll-area";

export interface TreeSelectNode {
  value: string;
  label: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
}

export interface TreeSelectProps {
  treeData: TreeSelectNode[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[], selectedNodes: TreeSelectNode[]) => void;
  multiple?: boolean;
  placeholder?: string;
  disabled?: boolean;
  treeCheckable?: boolean;
  className?: string;
}

const TreeSelect = React.forwardRef<HTMLButtonElement, TreeSelectProps>(
  (
    {
      treeData,
      value: controlledValue,
      defaultValue,
      onChange,
      multiple = false,
      placeholder = "Please select",
      disabled,
      treeCheckable = false,
      className,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue ?? (multiple ? [] : "")
    );
    const [open, setOpen] = React.useState(false);
    const [expandedKeys, setExpandedKeys] = React.useState<string[]>([]);

    const value = controlledValue ?? internalValue;

    const flattenTree = (nodes: TreeSelectNode[]): TreeSelectNode[] => {
      const result: TreeSelectNode[] = [];
      const traverse = (node: TreeSelectNode) => {
        result.push(node);
        if (node.children) {
          node.children.forEach(traverse);
        }
      };
      nodes.forEach(traverse);
      return result;
    };

    const findNodeByValue = (val: string): TreeSelectNode | undefined => {
      return flattenTree(treeData).find((node) => node.value === val);
    };

    const getSelectedNodes = (): TreeSelectNode[] => {
      if (Array.isArray(value)) {
        return value.map(findNodeByValue).filter(Boolean) as TreeSelectNode[];
      }
      const node = findNodeByValue(value);
      return node ? [node] : [];
    };

    const getDisplayText = (): string => {
      const selectedNodes = getSelectedNodes();
      if (selectedNodes.length === 0) return placeholder;
      return selectedNodes.map((node) => node.label).join(", ");
    };

    const handleSelect = (node: TreeSelectNode) => {
      if (node.disabled) return;

      if (multiple) {
        const currentValues = Array.isArray(value) ? value : [];
        const newValues = currentValues.includes(node.value)
          ? currentValues.filter((v) => v !== node.value)
          : [...currentValues, node.value];
        setInternalValue(newValues);
        onChange?.(newValues, getSelectedNodes());
      } else {
        setInternalValue(node.value);
        onChange?.(node.value, [node]);
        setOpen(false);
      }
    };

    const handleExpand = (nodeValue: string) => {
      setExpandedKeys((prev) =>
        prev.includes(nodeValue)
          ? prev.filter((key) => key !== nodeValue)
          : [...prev, nodeValue]
      );
    };

    const isSelected = (nodeValue: string): boolean => {
      return Array.isArray(value) ? value.includes(nodeValue) : value === nodeValue;
    };

    const renderTreeNode = (node: TreeSelectNode, level: number = 0): React.ReactNode => {
      const hasChildren = node.children && node.children.length > 0;
      const isExpanded = expandedKeys.includes(node.value);
      const selected = isSelected(node.value);

      return (
        <div key={node.value}>
          <div
            className={cn(
              "flex items-center gap-2 py-1.5 px-2 rounded-md cursor-pointer transition-colors text-sm",
              "hover:bg-[var(--color-bg-glass-hover)]",
              selected && "bg-[var(--color-bg-glass)] text-[var(--color-primary)]",
              node.disabled && "opacity-50 cursor-not-allowed"
            )}
            style={{ paddingLeft: `${level * 20 + 8}px` }}
          >
            {hasChildren ? (
              <button
                onClick={() => handleExpand(node.value)}
                className="shrink-0 p-0.5"
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            ) : (
              <span className="w-5" />
            )}

            <div
              onClick={() => handleSelect(node)}
              className="flex items-center justify-between flex-1"
            >
              <span>{node.label}</span>
              {selected && <Check className="h-4 w-4" />}
            </div>
          </div>

          {hasChildren && isExpanded && (
            <div>
              {node.children!.map((child) => renderTreeNode(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full justify-between",
              !getSelectedNodes().length && "text-[var(--color-text-muted)]",
              className
            )}
          >
            <span className="truncate">{getDisplayText()}</span>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0" align="start">
          <ScrollArea className="h-64">
            <div className="p-2">
              {treeData.map((node) => renderTreeNode(node))}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    );
  }
);
TreeSelect.displayName = "TreeSelect";

export { TreeSelect };
