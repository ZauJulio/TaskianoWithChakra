import Head from 'next/head'

export default function HeadMain() {
  return (
    <Head>
      <title>Taskiano</title>
      <meta
        name="description"
        content="Organize your tasks, complete them and accompany your activities.Define timers and do not waste time or deadlines."
      />
      <meta
        name="google-site-verification"
        content="sgkXcZZTMacCng8hHTlU2Ffgm6EPE6zUiepuEjtdvt4"
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:url" content="https://taskiano.vercel.app" />
      <meta property="og:title" content="Taskiano" />
      <meta property="og:site_name" content="Taskiano" />
      <meta
        property="og:image"
        content="https://taskiano.vercel.app/mstile-310x150.png"
      />
      <meta
        property="og:description"
        content="Organize your tasks, complete them and accompany your activities.Define timers and do not waste time or deadlines."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fcfff5" />
      <meta name="apple-mobile-web-app-title" content="Taskiano" />
      <meta name="application-name" content="Taskiano" />
      <meta name="msapplication-TileColor" content="#fcfff5" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="theme-color" content="#21232d" />
    </Head>
  )
}
