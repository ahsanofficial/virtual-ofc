
import Head from 'next/head'
import Header from '../components/HomePage/Header';
import Hero from '../components/HomePage/Hero';
import { Footer } from '../components/Footer/Footer'
import { DiscoverTheUltimate } from '../components/HomePage/DiscoverTheUltimate'


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
            <DiscoverTheUltimate />
           <Footer></Footer>
        </div>
    )
}
export default Home;

