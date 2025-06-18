import Image from 'next/image';
import React from 'react';

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50">
			<section className="grid min-h-dvh place-content-center bg-gradient-to-br from-green-50 via-white to-emerald-50">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						{/* <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
							All The MTB Races In The UK
						</h1> */}
						<div className="mb-4 grid w-full place-content-center">
							<Image
								src={'/switchback-text.svg'}
								alt="switchback logo"
								width={500}
								height={40}
							/>
						</div>
						<p className="mx-auto mb-8 max-w-3xl leading-relaxed text-gray-600 md:text-xl">
							Signing onto MTB races is a pain in the arse.
							Switchback brings together all UK mountain bike
							races in one simple, free calendar.
						</p>
						<a
							href="#"
							className="inline-block transform rounded-lg bg-green-400 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-xl">
							View Race Calendar
						</a>
					</div>
				</div>
			</section>

			<footer className="bg-gray-800 py-16 text-gray-300">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="mb-8 grid gap-8 md:grid-cols-3">
						<div>
							<h3 className="mb-4 font-semibold text-white">
								About Switchback
							</h3>
							<p className="mb-4 leading-relaxed">
								SwitchBack is a free service created by riders
								for the riders. If there's a race series
								missing, then please get in touch.
							</p>
						</div>

						<div>
							<h3 className="mb-4 font-semibold text-white">
								Quick Links
							</h3>
							<div className="space-y-2">
								<p>
									<a
										href="#"
										className="transition-colors hover:text-green-400">
										Race Calendar
									</a>
								</p>
								<p>
									<a
										href="#"
										className="transition-colors hover:text-green-400">
										Add Your Race
									</a>
								</p>
								<p>
									<a
										href="#"
										className="transition-colors hover:text-green-400">
										Contact Us
									</a>
								</p>
							</div>
						</div>

						<div>
							<h3 className="mb-4 font-semibold text-white">
								Get in Touch
							</h3>
							<p className="mb-4 leading-relaxed">
								Questions? Suggestions? We'd love to hear from
								you.
							</p>
							<p>
								<a
									href="mailto:hello@switchback-races.co.uk"
									className="transition-colors hover:text-green-400">
									hello@switchback-races.co.uk
								</a>
							</p>
						</div>
					</div>

					<div className="border-t border-gray-700 pt-8 text-center text-gray-400">
						<p>&copy; 2025 Switchback.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
