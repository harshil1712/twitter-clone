import Head from 'next/head';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Glitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-row justify-around pt-4 divide-x">
        <div className="flex-none w-3/12">
          <div className="flex justify-end mr-52">
            <img
              src="https://upload.wikimedia.org/wikipedia/de/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
              className="h-8"
            />
          </div>
        </div>
        <div className="flex-grow w-3/6 pl-4">
          <div>HOME</div>
        </div>
        <div className="w-3/12">🔍 Search</div>
      </header>
      <main className="flex flex-row justify-around pt-16 divide-x">
        <div className="flex-none w-3/12">
          <div className="flex justify-center">
            <ul className="text-2xl font-semibold">
              <li className="pb-4">🏠 Home</li>
              <li className="pb-4">🔍 Explore</li>
              <li className="pb-4">🔔 Notifications</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow w-3/6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-3/12 pl-4">recommendations</div>
      </main>
    </div>
  );
}
