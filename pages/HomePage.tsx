import Head from 'next/head'
import Header from '../components/HomePage/Header';
import Hero from '../components/HomePage/Hero';

const Home = () => {
    return (
        <div>
            <Head>
                <title>RegisterKaro</title>
                <meta name="description" content="RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Hero />
        </div>
    )
}
export default Home;