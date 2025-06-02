"use client";
import BackdropImage from "/public/backdrop.png";
import GlassLeft from "/public/blur_rectangle_left.png";
import GlassRight from "/public/blur_rectangle_right.png";
import PlayIcon from "/public/play.svg";
import Image from "next/image";
import { InputGroup, Text } from "@components/core";

export const Hero = () => {
    return (
        <div
            className={`hero-bg max-md:h-[285px] 192xl:h-[716px] h-[600px] rounded-3xl 144xl:rounded-[50px] w-full bg-no-repeat bg-cover bg-center relative  `}
            style={{ backgroundImage: `url(${BackdropImage.src})` }}
        >
            <div className="overlay relative h-full border-2 border-solid border-transparent 192xl:px-12 px-6">
                <div className="mt-7 xs:hidden 86xl:block">
                    <span
                        className="text-xl 86xl:w-[299px] 86xl:text-xl 144xl:w-[472px] 144xl:bg-cover 144xl:h-[159px] 192xl:w-[567px] 192xl:h-[191px] 144xl:text-3xl 192xl:text-[40px] 144xl:leading-14 144xl:rounded-2xl 192xl:py-9  font-extrabold text-white px-5 py-3 uppercase inline-block leading-10 bg-no-repeat bg-contain h-[107px]"
                        style={{ backgroundImage: `url(${GlassRight.src})` }}
                    >
                        Find the <b className="text-accent-900">talent</b> sign up <br />& get The
                        <b className="text-accent-900"> job</b> done
                    </span>
                </div>
                <div className="xs:hidden 86xl:block text-right">
                    <span
                        className="86xl:text-xl 86xl:w-[289px] 86xl:pt-4 86xl:px-8 86xl:h-[85px] 144xl:w-[413px] 144xl:h-[107px] 192xl:w-[496px] 192xl:h-[145px] 192xl:pt-9 144xl:text-3xl 192xl:text-[40px]  inline-block font-extrabold text-white rounded-2xl uppercase leading-10 bg-no-repeat bg-cover relative"
                        style={{
                            backgroundImage: `url(${GlassLeft.src})`,
                        }}
                    >
                        <span>
                            We`ll <b className="text-accent-900">handle</b> that
                        </span>

                        <br />
                        <div className="flex items-center justify-center gap-2.5 absolute 86xl:left-0 86xl:right-0 86xl:-bottom-4 ">
                            <button className="px-6 py-3 bg-accent-200 rounded-3xl text-accent-300 text-xs 192xl:text-base font-medium ">
                                Sign Up for Contract
                            </button>
                            <button className="bg-white w-10 h-10 rounded-full items-center flex justify-center cursor-pointer">
                                <Image src={PlayIcon} alt="play" />
                            </button>
                        </div>
                    </span>
                </div>
                <div className=" input-container bottom-[70px] xs:max-w-full 86xl:w-full 144xl:bottom-[80px] absolute text-center left-0 right-0">
                    <div className="xs:hidden 86xl:block">
                        <InputGroup />
                    </div>

                    <div className="nav flex gap-2 items-center justify-center mt-5">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-900 cursor-pointer"></span>
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-800 cursor-pointer"></span>
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-800 cursor-pointer"></span>
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-800 cursor-pointer"></span>
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-800 cursor-pointer"></span>
                    </div>
                </div>

                <div className="text-center bottom-0 left-0 right-0 absolute xs:-bottom-2.5 sm:bottom-5  86xl:bottom-5 144xl:bottom-2 192xl:bottom-3.5">
                    <span className="inline-flex justify-center bg-white rounded-full py-3 px-8 ">
                        <Text
                            variant={"heading"}
                            weight={"semibold"}
                            styles="xs:text-xs 86xl:text-sm 144xl:text-lg 192xl:text-xl"
                        >
                            Education and Tutoring
                        </Text>
                    </span>
                </div>
            </div>
        </div>
    );
};
