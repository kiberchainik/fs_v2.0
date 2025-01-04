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
                <Heading>{titleCarousel}</Heading>
            </div>
            <div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full flex items-centerc min-h-48"
                >
                    <CarouselContent className="">
                        {children}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}