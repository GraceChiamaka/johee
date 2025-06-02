import GreyBGLeft from "/public/grey_left.png";
import GreyBGRight from "/public/grey_right.png";
import Play from "/public/play.svg";
import Image from "next/image";
import { InputGroup, Text } from "@components/core";

export const MobileHero = () => {
    return (
        <div className="min-sm:hidden mt-8 px-5">
            <div
                className="w-full h-[107px] rounded-3xl bg-cover bg-no-repeat text-center uppercase pt-3"
                style={{ backgroundImage: `url(${GreyBGRight.src})` }}
            >
                <Text variant={"heading"} weight="semibold" color="text-white">
                    Find the <b className="text-accent-900">talent</b> sign up <br /> & get The{" "}
                    <b className="text-accent-900">job</b> done
                </Text>
            </div>
            <div
                className="w-full h-[107px] bg-cover rounded-2xl bg-no-repeat mt-4 pt-3 text-center uppercase relative"
                style={{ backgroundImage: `url(${GreyBGLeft.src})` }}
            >
                <Text variant={"heading"} weight="semibold" color="text-white">
                    We`ll <b className="text-accent-900">handle</b> that
                </Text>
                <div className="flex justify-center gap-2.5 absolute -bottom-3.5 left-0 right-0">
                    <button className="bg-accent-100 rounded-3xl px-6 py-2.5 text-accent-300 cursor-pointer">
                        Sign Up for Contract
                    </button>
                    <button className="w-10 h-10 rounded-full bg-neutral-grey-800 flex items-center justify-center cursor-pointer">
                        <Image src={Play} width={14} height={14} alt="play icon" />
                    </button>
                </div>
            </div>
            <div className="mt-12">
                <InputGroup />
            </div>
        </div>
    );
};
