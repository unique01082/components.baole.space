import * as React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "../utils";
import { Checkbox } from "./checkbox";

export interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TreeProps {
  treeData: TreeNode[];
  checkable?: boolean;
  checkedKeys?: string[];
  expandedKeys?: string[];
  selectedKeys?: string[];
  onCheck?: (checkedKeys: string[]) => void;
  onExpand?: (expandedKeys: string[]) => void;
  onSelect?: (selectedKeys: string[]) => void;
  className?: string;
}

const Tree = React.forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      treeData,
      checkable = false,
      checkedKeys: controlledCheckedKeys,
      expandedKeys: controlledExpandedKeys,
      selectedKeys: controlledSelectedKeys,
      onCheck,
      onExpand,
      onSelect,
      className,
    },
    ref,
  ) => {
    const [internalCheckedKeys, setInternalCheckedKeys] = React.useState<
      string[]
    >([]);
    const [internalExpandedKeys, setInternalExpandedKeys] = React.useState<
      string[]
    >([]);
    const [internalSelectedKeys, setInternalSelectedKeys] = React.useState<
      string[]
    >([]);

    const checkedKeys = controlledCheckedKeys ?? internalCheckedKeys;
    const expandedKeys = controlledExpandedKeys ?? internalExpandedKeys;
    const selectedKeys = controlledSelectedKeys ?? internalSelectedKeys;

    const handleExpand = (key: string) => {
      const newExpandedKeys = expandedKeys.includes(key)
        ? expandedKeys.filter((k) => k !== key)
        : [...expandedKeys, key];
      setInternalExpandedKeys(newExpandedKeys);
      onExpand?.(newExpandedKeys);
    };

    const handleCheck = (key: string, checked: boolean) => {
      const newCheckedKeys = checked
        ? [...checkedKeys, key]
        : checkedKeys.filter((k) => k !== key);
      setInternalCheckedKeys(newCheckedKeys);
      onCheck?.(newCheckedKeys);
    };

    const handleSelect = (key: string) => {
      const newSelectedKeys = selectedKeys.includes(key) ? [] : [key];
      setInternalSelectedKeys(newSelectedKeys);
      onSelect?.(newSelectedKeys);
    };

    const renderTreeNode = (node: TreeNode, level: number = 0) => {
      const hasChildren = node.children && node.children.length > 0;
      const isExpanded = expandedKeys.includes(node.key);
      const isChecked = checkedKeys.includes(node.key);
      const isSelected = selectedKeys.includes(node.key);

      return (
        <div key={node.key} className="select-none">
          <div
            className={cn(
              "flex items-center gap-2 py-1.5 px-2 rounded-md cursor-pointer transition-colors",
              "hover:bg-[var(--color-bg-glass-hover)]",
              isSelected &&
                "bg-[var(--color-bg-glass)] text-[var(--color-primary)]",
              node.disabled && "opacity-50 cursor-not-allowed",
            )}
            style={{ paddingLeft: `${level * 20 + 8}px` }}
          >
            {hasChildren ? (
              <button
                onClick={() => handleExpand(node.key)}
                className="shrink-0 p-0.5 hover:bg-[var(--color-bg-glass)] rounded"
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

            {checkable && (
              <Checkbox
                checked={isChecked}
                onCheckedChange={(checked) =>
                  handleCheck(node.key, checked as boolean)
                }
                disabled={node.disabled}
              />
            )}

            <div
              onClick={() => !node.disabled && handleSelect(node.key)}
              className="flex items-center gap-2 flex-1"
            >
              {node.icon && <span className="shrink-0">{node.icon}</span>}
              <span className="text-sm">{node.title}</span>
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
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-[var(--color-border)] p-2",
          "bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]",
          className,
        )}
      >
        {treeData.map((node) => renderTreeNode(node))}
      </div>
    );
  },
);
Tree.displayName = "Tree";

export { Tree };
