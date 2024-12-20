import { Marquee } from "./marquee";
import Image from "next/image";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        image: "/images/taksim.webp",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        image: "/images/taksim.webp",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        image: "/images/taksim.webp",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        image: "/images/taksim.webp",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        image: "/images/taksim.webp",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        image: "/images/taksim.webp",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const MarqueeCard = ({
    image,
    name,
    username,
    body,
}: {
    image: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className="relative w-64 h-32 cursor-pointer overflow-hidden rounded-xl bg-element border border-elementBorder p-4"
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full h-8 w-8" width="32" height="32" alt="" src={image} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-primary">
                        {name}
                    </figcaption>
                    <p className="text-xs font-normal text-subtitle">{username}</p>
                </div>
            </div>
            <blockquote className="mt-4 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeList() {
    return (
        <div className="relative w-full h-full">
            <div className="absolute h-full left-1/2 -translate-x-1/2 overflow-hidden py-2">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <MarqueeCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <MarqueeCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Gradient on both left and right sides for fade effect */}
                {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bento"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bento"></div> */}
            </div>
        </div>
    );
}
