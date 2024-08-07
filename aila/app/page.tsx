export default function Home() {
	return (
		<main className="flex flex-1 flex-grow h-full pt-4">
			<div className="flex-1 w-full h-auto grid grid-cols-12 gap-4">
				<div className="p-4 row-span-5 col-span-5 bg-slate-100 rounded-2xl w-full">
					<h2 className="text-3xl font-bold mb-4">
						1
					</h2>
				</div>

				<div className="p-4 row-span-5 col-span-3 bg-slate-100 rounded-2xl w-full flex-grow">
					<h2 className="text-3xl font-bold mb-4">
						2
					</h2>
				</div>

				<div className="p-4 row-span-7 col-span-4 bg-slate-100 rounded-2xl w-full">
					<h2 className="text-3xl font-bold mb-4">
						3
					</h2>
				</div>

				<div className="p-4 row-span-3 col-span-4 bg-slate-100 rounded-2xl w-full">
					<h2 className="text-3xl font-bold mb-4">
						4
					</h2>
				</div>

				<div className="p-4 row-span-3 col-span-4 bg-slate-100 rounded-2xl w-full flex flex-col justify-between">
					<div className="flex flex-row items-center justify-between">
						<span className="font-light">We would love to hear from you</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-10">
							<path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
						</svg>
					</div>
					<h2 className="text-5xl font-bold mb-4">
						Contact Us
					</h2>
				</div>
				
				<div className="p-4 row-span-1 col-span-4 bg-slate-100 rounded-2xl w-full flex items-center justify-center gap-10">
					<span className="uppercase font-light">Facebook</span>
					<span className="uppercase font-light">Instagram</span>
					<span className="uppercase font-light">Phone</span>
				</div>
			</div>
		</main>
	);
}
