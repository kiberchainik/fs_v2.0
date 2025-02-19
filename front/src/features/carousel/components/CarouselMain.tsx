"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselNext, CarouselPrevious, Heading } from "@/shared/components";
import { cn } from "@/shared/utils";
import React from "react";
import { FC, PropsWithChildren, useRef } from "react"

interface CarouselProps {
    titleCarousel?: string
    subText?: string
    btns?: boolean
}

export const CarouselMain: FC<PropsWithChildren<CarouselProps>> = ({ children, titleCarousel, subText, btns = true }) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="w-full">
            <div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full flex flex-col items-start min-h-52"
                >
                    <div className={cn("flex items-center w-full px-4", titleCarousel ? 'justify-between' : 'justify-end')}>
                        {titleCarousel && <Heading className="mb-5 text-[#1e356a] dark:text-[#fafaf9] text-4xl">{titleCarousel}</Heading>}
                        {btns && <div className="flex items-center gap-x-2 mb-2">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>}
                    </div>
                    {subText && <p className="text-lg text-[#069cd0] px-4">{subText}</p>}
                    <div>
                        <CarouselContent className="pt-10">
                            {children}
                        </CarouselContent>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}