export function Footer() {
  return (
    <footer className="bg-gray-800 py-16 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold text-white">About Switchback</h3>
            <p className="mb-4 leading-relaxed">
              SwitchBack is a free service that aims to help riders organise and
              sign onto races in a less painful way.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <p>
                <a
                  href="/footer"
                  className="transition-colors hover:text-green-400">
                  Races List
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Get in Touch</h3>
            <p className="mb-4 leading-relaxed">
              Questions? Suggestions? We'd love to hear from you.
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
  );
}
