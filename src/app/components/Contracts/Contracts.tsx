"use client";
import Image from "next/image";
import ArrowLeft from "/public/arrow_left.svg";
import ArrowRight from "/public/arrow_right.svg";
import { Text, Card, ContractProps } from "@components/core";
import { useState, useEffect } from "react";

const details: ContractProps = {
    title: "Looking for Math Teacher",
    paymentType: "fixed",
    description:
        "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
    startDate: "Jan 15, 2025.",
    endDate: "Not estimated",
    status: "Ongoing",
    budget: "$2000",
    clientDetails: {
        name: "Edward Smith",
        description: "Founder of MathTech",
        pictureUrl: "https://res.cloudinary.com/dguzwntwa/image/upload/v1748815994/jobwhee/client_wscfao.png",
        rating: "5.0",
    },
    talentDetails: {
        name: "Edward Smith",
        description: "Math Teacher",
        pictureUrl: "https://res.cloudinary.com/dguzwntwa/image/upload/v1748815994/jobwhee/talent_stxjyw.png",
        rating: "5.0",
    },
};

export const Contracts = () => {
    const [isTabletSize, setIsTabletSize] = useState(false);
    const [isMobileSize, setIsMobileSize] = useState(false);

    useEffect(() => {
        setIsTabletSize(window.screen.width >= 768 && window.screen.width < 1440);
        setIsMobileSize(window.screen.width >= 320 && window.screen.width < 640);
    }, []);
    return (
        <div className="144xl:mt-[140px] 86xl:mt-[100px] mt-[180px] ">
            <div className="heading flex justify-center ">
                <div className="after:content-'' before:content-'' before:h-2.5 before:w-2.5 before:bg-accent-100 before:rounded-full before:absolute before:-left-3.5 before:bottom-[40%] relative after:h-1 after:w-[184px] after:bg-accent-100 after:absolute after:bottom-0 after:right-0">
                    <Text
                        variant={"subtitle"}
                        weight={"bold"}
                        fontSize={"text-xl 86xl:text-[26px] 144xl:text-3xl 92xl:text-3xl"}
                        styles=""
                    >
                        SUCCESSFUL CONTRACTS
                    </Text>
                </div>
            </div>
            {/* contracts listing */}
            <div className="card-container max-86xl:mt-[34px] 86xl:mt-[34px] flex justify-between items-center w-full gap-3.5 flex-wrap">
                {new Array(3)
                    .fill(0)
                    .slice(0, isMobileSize ? 1 : isTabletSize ? 2 : 3)
                    .map((index) => (
                        <Card key={`id-${index}`} {...details} />
                    ))}
            </div>
            {/* navigation */}
            <div className="flex justify-center gap-5 mt-5">
                <button className="bg-white rounded-full flex items-center justify-center cursor-pointer w-[47px] h-[47px]">
                    <Image src={ArrowLeft} width={20} height={20} alt={"scroll left icon"} />
                </button>
                <button className="bg-white rounded-full flex items-center justify-center cursor-pointer  w-[47px] h-[47px]">
                    <Image src={ArrowRight} width={20} height={20} alt={"scroll right icon"} />
                </button>
            </div>
        </div>
    );
};
