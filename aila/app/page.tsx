import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-1 flex-grow h-full pt-4">
			<div className="flex-1 w-full h-auto grid grid-cols-12 gap-4">
				<div className="p-4 row-span-5 col-span-5 bg-gray-50 rounded-2xl w-full flex items-end">
					<h2 className="text-3xl font-bold mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.
					</h2>
				</div>

				<div className="p-4 row-span-5 col-span-3 bg-gray-50 rounded-2xl w-full flex-grow">
					<h2 className="text-3xl font-bold mb-4">
						2
					</h2>
				</div>

				<div className="p-4 row-span-7 col-span-4 bg-gray-50 rounded-2xl w-full">
					<div className="flex flex-row items-center w-full space-x-4">
						<div className="bg-neutral-300 h-12 w-12 rounded-full"/>
						<div className="flex flex-col items-start justify-center">
							<h2 className="text-3xl font-bold mb-0">Title here</h2>
							<span className="">Lorem ipsum dolor explanation here</span>
						</div>
					</div>

					<div className="flex flex-row items-center w-full space-x-4">
						<div className="bg-neutral-300 h-12 w-12 rounded-full"/>
						<div className="flex flex-col items-start justify-center">
							<h2 className="text-3xl font-bold mb-0">Title here</h2>
							<span className="">Lorem ipsum dolor explanation here</span>
						</div>
					</div>

					<div className="flex flex-row items-center w-full space-x-4">
						<div className="bg-neutral-300 h-12 w-12 rounded-full"/>
						<div className="flex flex-col items-start justify-center">
							<h2 className="text-3xl font-bold mb-0">Title here</h2>
							<span className="">Lorem ipsum dolor explanation here</span>
						</div>
					</div>
				</div>

				<div className="p-4 row-span-3 col-span-4 bg-gray-50 rounded-2xl w-full flex items-end">
					<span className="text-lg mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.
					</span>
				</div>

				<Link href="/contact" className="p-4 row-span-3 col-span-4 bg-gray-50 rounded-2xl w-full flex flex-col justify-between group">
					<div className="flex flex-row items-center justify-between">
						<span className="font-light">We would love to hear from you</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-10 transition-transform ease-in-out duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
							<path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
						</svg>
					</div>
					<h2 className="text-5xl font-bold mb-4">
						Contact Us
					</h2>
				</Link>
				
				<div className="p-4 row-span-1 col-span-4 bg-gray-50 rounded-2xl w-full flex items-center justify-center gap-10">
					<span className="uppercase font-light">Facebook</span>
					<span className="uppercase font-light">Instagram</span>
					<span className="uppercase font-light">Phone</span>
				</div>
			</div>
		</main>
	);
}
