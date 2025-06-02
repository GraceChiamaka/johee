import CardBackdrop from "/public/card_bg.svg";
import BagIcon from "/public/bag.svg";
import FileIcon from "/public/file-white.svg";
import StarRating from "/public/star.svg";
import Image from "next/image";
import { Tag, Text } from "@components/core";

export type ContractProps = {
    title: string;
    paymentType: "fixed" | "flexible";
    description: string;
    startDate: string;
    endDate: string;
    status: "Not Started" | "Ongoing";
    budget: string;
    clientDetails: {
        name: string;
        description: string;
        pictureUrl: string;
        rating: string;
    };
    talentDetails: {
        name: string;
        description: string;
        pictureUrl: string;
        rating: string;
    };
};

export const Card = ({
    budget,
    endDate,
    title,
    description,
    clientDetails,
    talentDetails,
    paymentType,
    startDate,
    status,
}: ContractProps) => {
    return (
        <div
            className="w-full max-sm:w-full max-86xl:w-[49%] 86xl:w-[49%] 144xl:w-[32%] bg-transparent px-2.5 pt-2.5 h-auto bg-no-repeat bg-cover relative "
            style={{ backgroundImage: `url(${CardBackdrop.src})` }}
        >
            <div className="heading flex justify-between items-baseline">
                <Text variant={"body1"} fontSize="text-sm 86xl:text-lg 192xl:text-xl" weight={"black"}>
                    CONTRACT
                </Text>
                <div className="heading-text text-right ">
                    <Text variant={"body"} weight={"semibold"} styles="text-xs 86xl:text-sm 192xl:text-base">
                        {title}
                    </Text>
                    <div className="flex items-center gap-1">
                        <Text variant={"caption"} weight={"semibold"} styles="text-[10px] 86xl:text-xs 192xl:text-sm">
                            Payment Type:
                        </Text>
                        <Text variant="caption" styles="text-[10px] 86xl:text-xs 192xl:text-sm">
                            Fixed Price
                        </Text>
                    </div>
                </div>
            </div>
            {/* client & Talent info */}
            <div className="flex xs:gap-2 gap-[44px] mt-1.5">
                <div className="w-1/2 bg-neutral-grey-100 p-1.5 rounded-xl">
                    <div className="flex gap-1.5 justify-between">
                        <div
                            className="w-[37.5px] h-[37.5px] rounded-full border border-accent-400 bg-cover bg-center"
                            style={{ backgroundImage: `url(${clientDetails.pictureUrl})` }}
                        ></div>
                        <div>
                            <Tag label={"Client"} variant={"primary"} />
                            <div className="flex gap-1 justify-end">
                                <Image src={StarRating} width={14} height={14} alt={"rating"} />
                                <Text variant={"body"} weight={"bold"}>
                                    {clientDetails.rating}
                                </Text>
                            </div>
                        </div>
                    </div>
                    <Text variant="body1" weight={"bold"} styles="xs:text-xs 86xl:text-base ">
                        {clientDetails.name}
                    </Text>
                    <Text variant="body" color="text-neutral-grey-400" styles="xs:text-xs 86xl:text-sm ">
                        {clientDetails.description}
                    </Text>
                </div>
                <div className="w-1/2 bg-neutral-grey-100 p-1.5 rounded-xl">
                    <div className="flex gap-1.5 justify-between">
                        <div
                            className="w-[37.5px] h-[37.5px] rounded-full border border-accent-400 bg-no-repeat bg-contain bg-"
                            style={{ backgroundImage: `url(${talentDetails.pictureUrl})` }}
                        ></div>
                        <div>
                            <Tag label={"Talent"} variant={"success"} />
                            <div className="flex gap-1 justify-end">
                                <Image src={StarRating} width={14} height={14} alt={"rating"} />
                                <Text variant={"body"} weight={"bold"}>
                                    {talentDetails.rating}
                                </Text>
                            </div>
                        </div>
                    </div>
                    <Text variant={"body1"} weight={"semibold"} styles="xs:text-xs 86xl:text-base ">
                        {talentDetails.name}
                    </Text>
                    <Text variant={"body"} color="text-neutral-grey-400" styles="xs:text-xs 86xl:text-sm">
                        {talentDetails.description}
                    </Text>
                </div>
            </div>
            {/* description */}
            <div className="mt-4 flex gap-1">
                <span className="bg-black-200 w-5 h-5 rounded-full flex items-center justify-center">
                    <Image src={FileIcon} width={7} height={9} alt="job description icon" />
                </span>
                <Text variant={"body1"} weight={"semibold"} styles="xs:text-sm 86xl:text-base">
                    Description
                </Text>
            </div>
            <Text variant="body" styles="xs:text-xs 86xl:text-sm">
                {description}
            </Text>
            {/* Job Details */}
            <div className="mt-4 flex gap-1">
                <span className="bg-black-200 w-5 h-5 rounded-full flex items-center justify-center">
                    <Image src={BagIcon} width={10} height={10} alt="job details icon" />
                </span>
                <Text variant={"body1"} weight={"semibold"} styles="xs:text-sm 86xl:text-base">
                    Job Details
                </Text>
            </div>
            <div className="flex flex-1/2 justify-between">
                <div className="w-1/2">
                    <div className="flex gap-2 justify-between">
                        <Text variant={"body"} weight="semibold" styles="xs:text-xs 86xl:text-sm ">
                            Start date:
                        </Text>
                        <Text variant={"body"} color={"text-neutral-grey-600"} styles="xs:text-xs 86xl:text-sm">
                            {startDate}
                        </Text>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <Text variant={"body"} weight="semibold" styles="xs:text-xs 86xl:text-sm">
                            End date:
                        </Text>
                        <Text variant={"body"} color={"text-neutral-grey-600"} styles="xs:text-xs 86xl:text-sm ">
                            {endDate}
                        </Text>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex gap-2 justify-between">
                        <Text variant={"body"} weight="semibold" styles="xs:text-xs 86xl:text-sm ">
                            Status:
                        </Text>
                        <Text variant={"body"} color={"text-neutral-grey-600"} styles="xs:text-xs 86xl:text-sm ">
                            {status}
                        </Text>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <Text variant={"body"} weight="semibold" styles="xs:text-xs 86xl:text-sm">
                            Budget:
                        </Text>
                        <Text variant={"body"} color={"text-neutral-grey-600"} styles="xs:text-xs 86xl:text-sm ">
                            {budget}
                        </Text>
                    </div>
                </div>
            </div>
            {/* fixed price notice */}
            {paymentType === "fixed" && (
                <div className="bg-black-200 mt-4 px-3.5 mb-4 w-full text-md rounded-2xl py-1">
                    <Text variant="body" color="text-white" styles="xs:text-xs  86xl:text-sm">
                        Fixed-priced contract under the protection of payment system.
                    </Text>
                </div>
            )}
        </div>
    );
};
