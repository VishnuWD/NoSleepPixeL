export default function sitemap() {
    return [
      {
        url: 'https://www.nosleeppixel.online/',
        lastModified: new Date(),
        changeFrequency: 'daily',
      priority: 1,
      },
      {
        url: 'https://www.nosleeppixel.online/about',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: 'https://www.nosleeppixel.online/maintenance',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]
  }