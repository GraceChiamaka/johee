"use client";
import ArrowDown from "/public/arrow_down.svg";
import Search from "/public/search.svg";
import ClientIcon from "/public/client.svg";
import TalentIcon from "/public/talent.svg";
import Image from "next/image";
import { Text } from "@components/core";
import { useState } from "react";

export const InputGroup = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="input-group bg-white w-auto py-1  px-1 items-center justify-center gap-10 inline-flex rounded-full relative">
            <div className=" flex items-center gap-2.5">
                <button className=" w-[42px] h-[42px] flex items-center rounded-full justify-center bg-linear-to-r from-accent-600 to-accent-700 p-0.5">
                    <span className="bg-black-200 inline-flex w-full h-full items-center justify-center rounded-full">
                        <Image src={Search} width={16} height={16} alt="search icon" />
                    </span>
                </button>
                <input
                    placeholder="Find a job, talent or service"
                    className="max-w-3xs 86xl:w-[289px] outline-0 placeholder:text-neutral-grey-500 text-black-100"
                />
            </div>

            <button
                className="dropdown flex items-center gap-1 px-6 cursor-pointer bg-primary-100 rounded-full py-2.5 border border-neutral-grey-500"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <Text variant={"body"} color={"text-neutral-grey-600"} styles="192xl:text-base" weight="medium">
                    Talent
                </Text>
                <Image
                    src={ArrowDown}
                    width={12}
                    height={18}
                    className={showDropdown ? `rotate-180` : ""}
                    alt="arrow down"
                />
            </button>
            {showDropdown && (
                <div
                    className="dropdown-menu transition-all ease-in-out bg-white w-2xs  py-4 px-2 absolute z-20 right-0 top-14 rounded-xl "
                    style={{ boxShadow: "box-shadow: 0px 11px 28.3px 0px #617CAE21" }}
                >
                    <div className="flex gap-1.5 items-start">
                        <Image src={TalentIcon} alt="talent" />
                        <div className="text-left">
                            <Text variant="body" weight="medium" color="text-black-100" block>
                                Talent
                            </Text>

                            <Text variant="caption">Hire professionals effortlessly.</Text>
                        </div>
                    </div>
                    <div className="flex items-start gap-1.5 mt-2.5">
                        <Image src={ClientIcon} alt="talent" />
                        <div className="text-left">
                            <Text variant="body" color="text-black-100" weight="medium" block>
                                Client
                            </Text>
                            <Text variant="body">Apply to jobs posted by clients</Text>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
