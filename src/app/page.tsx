import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-700 overflow-hidden">
			<section className="relative min-h-screen flex items-center justify-center bg-white">
				{/* Animated background shapes */}
				<div
					className="absolute inset-0 overflow-hidden"
					aria-hidden="true"
				>
					<div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-900/5 rounded-full animate-pulse"></div>
					<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-900/5 rounded-full animate-pulse delay-1000"></div>
				</div>

				<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
					<h1 className="text-6xl md:text-8xl font-black mb-6">
						<span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
							Trail
						</span>
						<span className="relative inline-block bg-gradient-to-r from-orange-500 via-red-500 to-red-600 bg-clip-text text-transparent">
							Blaze
							<span className="absolute -top-2 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-75"></span>
							<span className="absolute -top-4 left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping delay-300 opacity-60"></span>
							<span className="absolute -top-3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-700 opacity-80"></span>
							<span className="absolute -top-6 right-1/3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-ping delay-1000 opacity-50"></span>
							<span className="absolute -top-5 left-1/3 w-0.5 h-0.5 bg-red-300 rounded-full animate-ping delay-1500 opacity-70"></span>
							<span className="absolute -top-7 right-1/6 w-0.5 h-0.5 bg-yellow-500 rounded-full animate-bounce delay-1000 opacity-40"></span>
						</span>
					</h1>
					<p className="text-xl md:text-2xl mb-8 ">
						See all the MTB races all at once.
					</p>
					<Link
						className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300"
						aria-label="Scroll to features section"
						href="/races"
					>
						Browse Races
					</Link>
				</div>

				<style>{`
					@keyframes ember-float {
						0%,
						100% {
							transform: translateY(0px) translateX(0px);
							opacity: 0.8;
						}
						25% {
							transform: translateY(-8px) translateX(2px);
							opacity: 1;
						}
						50% {
							transform: translateY(-12px) translateX(-1px);
							opacity: 0.6;
						}
						75% {
							transform: translateY(-6px) translateX(3px);
							opacity: 0.9;
						}
					}

					.ember-float {
						animation: ember-float 3s ease-in-out infinite;
					}

				`}</style>
			</section>
		</div>
	);
}

