import { HTMLAttributes } from "react";
import { Icon, IconProps } from "../Icon";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  icon: IconProps["type"];
  className?: ClassName;
}

export function Input(props: InputProps) {
  const { label, icon, id, className, ...rest } = props;

  return (
    <label className={`flex flex-col ${className}`} htmlFor={id}>
      <span>{label}</span>
      <div className="focus-within:border-amber-500 px-3 py-1 flex items-center gap-4 border-2 border-gray-950 rounded-full duration-200">
        <Icon size={24} type={icon} />
        <input
          className="w-full outline-none text-gray-950"
          id={id}
          type="text"
          {...rest}
        />
      </div>
    </label>
  );
}
