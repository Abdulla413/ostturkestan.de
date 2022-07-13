import Header from "./Header"
import Head from "next/head"
import Footer from "./Footer"

function Layout({ title, keywords, description, children }) {
    return (

        <div className='container mx-auto px-5 mb-4'>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="icon" href="/ostturkestan-logo-blue.png" />
            </Head>
            <Header />

            <main className="container mx-auto my-5">{children}</main>

            <Footer/>
        </div>
    )
}

Layout.defaultProps={
    title:"Willkommen auf der Website der Ostturkestanischer Jugendverein in Deutschlan .e.V",
    keywords:"Ostturkestan, Uiguren, Konzentrationslager, KZ, Völkermord, Genozid, Xinjiang, China",
    description:"Unsere Website ist eine verlässliche Informationsquelle über Ostturkestan und die Uiguren sowie ein Spiegel des Unabhängigkeitswillens der ostturkestanischen Bevölkerung."

}

export default Layout