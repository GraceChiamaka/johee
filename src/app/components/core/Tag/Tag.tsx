type TagProps = {
    label: string;
    variant: "primary" | "success";
};
export const Tag = ({ label, variant = "primary" }: TagProps) => {
    return (
        <span
            className={`inline-block xs:px-5 px-8 rounded-full xs:text-xs 86xl:text-[13px] text-sm ${
                variant === "primary" ? "bg-primary-200" : "bg-accent-500"
            }`}
        >
            {label}
        </span>
    );
};
