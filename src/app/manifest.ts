import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SwitchBack',
    short_name: 'SwitchBack',
    description: 'Aggregated UK MTB races',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
