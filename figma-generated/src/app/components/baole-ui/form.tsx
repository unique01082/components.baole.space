import * as React from "react";
import { cn } from "./utils";
import { Label } from "./label";

type FormContextValue = {
  errors: Record<string, string>;
  touched: Record<string, boolean>;
};

const FormContext = React.createContext<FormContextValue>({
  errors: {},
  touched: {},
});

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, onSubmit, errors = {}, touched = {}, ...props }, ref) => {
    return (
      <FormContext.Provider value={{ errors, touched }}>
        <form
          ref={ref}
          onSubmit={onSubmit}
          className={cn("space-y-6", className)}
          {...props}
        />
      </FormContext.Provider>
    );
  }
);
Form.displayName = "Form";

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  name?: string;
  required?: boolean;
  description?: string;
}

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, label, name, required, description, children, ...props }, ref) => {
    const { errors, touched } = React.useContext(FormContext);
    const error = name && touched[name] ? errors[name] : undefined;

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <Label htmlFor={name}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}
        {children}
        {description && !error && (
          <p className="text-xs text-[var(--color-text-muted)]">{description}</p>
        )}
        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
FormItem.displayName = "FormItem";

export interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {(title || description) && (
          <div className="space-y-1">
            {title && (
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-[var(--color-text-muted)]">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="space-y-4">{children}</div>
      </div>
    );
  }
);
FormSection.displayName = "FormSection";

const FormActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 pt-4", className)}
    {...props}
  />
));
FormActions.displayName = "FormActions";

export { Form, FormItem, FormSection, FormActions };
