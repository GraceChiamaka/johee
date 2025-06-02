import { ReactNode } from "react";

type TextProps = {
    color?: string;
    children: ReactNode | string | number;
    variant?: "body" | "body1" | "caption" | "heading" | "subtitle";
    block?: boolean;
    fontSize?: string;
    styles?: string;
    weight?: "normal" | "medium" | "semibold" | "bold" | "black";
};
export const Text = ({
    block,
    color = "text-black-200",
    children,
    fontSize,
    styles = "",
    variant = "body1",
    weight = "normal",
}: TextProps) => {
    const defaultSizes =
        variant === "caption"
            ? "text-xs"
            : variant === "body"
            ? "text-sm"
            : variant === "body1"
            ? "text-base"
            : variant === "heading"
            ? "text-xl"
            : "text-3xl";
    const weightStyles =
        weight === "normal"
            ? "font-normal"
            : weight === "medium"
            ? "font-medium"
            : weight === "semibold"
            ? "font-semibold"
            : weight === "bold"
            ? "font-extrabold"
            : "font-black";
    return (
        <span
            className={` ${weightStyles} ${fontSize ?? defaultSizes} ${color} ${
                block ? "block" : "inline-block"
            } ${styles}`}
        >
            {children}
        </span>
    );
};
