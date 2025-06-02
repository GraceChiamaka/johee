"use client";
import { Contracts, Hero, MobileHero } from "./components";

export default function Home() {
    return (
        <div className="pt-3">
            <Hero />
            <MobileHero />
            <Contracts />
        </div>
    );
}
