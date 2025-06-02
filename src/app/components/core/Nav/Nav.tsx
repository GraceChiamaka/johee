import React from "react";
import Image from "next/image";
import Link from "next/link";
import Globe from "/public/en_flag.svg";
import Logo from "/public/logo.svg";
import Menu from "/public/menu.svg";

import { Button, Text } from "@components/core";

export const Nav = () => {
    return (
        <nav className="bg-black-100 py-13 px-6  rounded-full flex items-center justify-between ">
            <div>
                <Image src={Logo} width={108} height={28} alt="jobwhee logo" />
            </div>
            <div className="flex gap-9 max-sm:hidden md:gap-3.5 144xl:gap-7">
                <Link href={"/"}>
                    <Text
                        variant={"body1"}
                        color={"text-white"}
                        weight={"semibold"}
                        styles={"hover:text-neutral-grey-400 hover:underline xs:text-xs 144xl:text-sm 192xl:text-base "}
                    >
                        Post a Job
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text
                        variant={"body1"}
                        color={"text-white"}
                        weight={"semibold"}
                        styles={"hover:text-neutral-grey-400 hover:underline xs:text-xs 144xl:text-sm 192xl:text-base "}
                    >
                        Explore Jobs
                    </Text>
                </Link>
                <Link href={"/"} className="hover:text-neutral-grey-200">
                    <Text
                        variant={"body1"}
                        color={"text-white"}
                        weight={"semibold"}
                        styles={"hover:text-neutral-grey-400 hover:underline sm:text-xs 144xl:text-sm 192xl:text-base"}
                    >
                        How It Works
                    </Text>
                </Link>
            </div>
            <div className="flex items-center gap-6 xs:gap-1 144xl:gap-">
                <Button variant={"secondary"} className="max-sm:hidden xs:text-xs 86xl:text-xs 144xl:text-sm gap-1">
                    <Image src={Globe} alt={"langugage icon"} />
                    EN
                </Button>
                <Button variant={"secondary"} className="xs:hidden xs:text-xs 86xl:flex 86xl:text-xs 144xl:text-sm">
                    Sign in
                </Button>
                <Button variant={"primary"} className="xs:text-xs 86:text-xs 144xl:text-sm">
                    Sign up
                </Button>
                <button className="bg-white 86xl:hidden rounded-full w-8 h-8 flex items-center justify-center ">
                    <Image src={Menu} alt="mobile menu" />
                </button>
            </div>
        </nav>
    );
};
