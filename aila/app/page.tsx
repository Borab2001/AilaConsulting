export default function Home() {
	return (
		<main className="flex flex-1 flex-grow h-full pt-4">
			<div className="flex-1 w-full h-auto grid grid-cols-12 gap-4">
				<div className="row-span-5 col-span-5 bg-slate-100 rounded-2xl w-full">
					<h2 className="text-3xl font-bold mb-4">
						1
					</h2>
				</div>

				<div className="row-span-5 col-span-3 bg-slate-100 rounded-2xl w-full flex-grow">
					<h2 className="text-3xl font-bold mb-4">
						2
					</h2>
				</div>

				<div className="row-span-7 col-span-4 bg-slate-100 rounded-2xl w-full">
					<h2 className="text-3xl font-bold mb-4">
						3
					</h2>
				</div>

				<div className="row-span-3 col-span-4 bg-slate-100 rounded-2xl w-full">
					<h2 className="text-3xl font-bold mb-4">
						4
					</h2>
				</div>

				<div className="row-span-3 col-span-4 bg-slate-100 rounded-2xl w-full">
					<h2 className="text-3xl font-bold mb-4">
						5
					</h2>
				</div>
				
				<div className="row-span-1 col-span-4 bg-slate-100 rounded-2xl w-full">
					<h2 className="text-3xl font-bold mb-4">
						6
					</h2>
				</div>
			</div>
		</main>
	);
}
