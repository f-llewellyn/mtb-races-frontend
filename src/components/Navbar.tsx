import Image from 'next/image';

export function Navbar() {
	return (
		<header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-center py-4 md:justify-between">
					<Image
						src={'/switchback-text.svg'}
						alt="switchback logo"
						width={230}
						height={40}
					/>

					{/* <nav className="hidden items-center space-x-8 md:flex">
						<a
							href="#features"
							className="text-gray-600 transition-colors hover:text-green-600">
							Features
						</a>
						<a
							href="#how-it-works"
							className="text-gray-600 transition-colors hover:text-green-600">
							How It Works
						</a>
						<a
							href="#contact"
							className="text-gray-600 transition-colors hover:text-green-600">
							Contact
						</a>
					</nav> */}
				</div>
			</div>
		</header>
	);
}
