import { ReactNode } from "react";

export const Button = ({
    children,
    className = "",
    variant,
}: {
    children: ReactNode;
    className?: string;
    variant: "primary" | "secondary";
}) => {
    const secondaryButtonCSS =
        " bg-black-200 text-white border border-solid border-neutral-grey-300 hover:bg-white hover:text-black-200";
    const primaryButtonCSS =
        "bg-white text-black-200 hover:bg-black-200 hover:text-white border hover:border-solid hover:border-neutral-grey-300";
    const bgColor = variant === "primary" ? primaryButtonCSS : secondaryButtonCSS;
    return (
        <button
            type={"button"}
            className={`transition-all h-12 rounded-full px-8 flex items-center cursor-pointer max-sm:px-5 sm:px-6 86xl:px-6 86xl:text-xs max-86xl:h-[40px] ${bgColor} ${className}`}
        >
            {children}
        </button>
    );
};
