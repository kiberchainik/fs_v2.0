"use client";

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, Heading } from "@/shared/components";
import { FC, PropsWithChildren, useRef } from "react"

interface CarouselProps {
    titleCarousel?: string
}

export const CarouselMain: FC<PropsWithChildren<CarouselProps>> = ({ children, titleCarousel }) => {
    return (
        <div className="w-full">
            <div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full flex flex-col items-start min-h-52"
                >
                    <div className="flex items-center justify-between w-full px-4">
                        <Heading className="mb-5">{titleCarousel}</Heading>
                        <div className="flex items-center gap-x-2">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </div>
                    <div>
                        <CarouselContent className="">
                            {children}
                        </CarouselContent>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}