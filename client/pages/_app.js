import TopNav from '../components/TopNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd'
import '../public/css/styles.css'

function MyApp ({Component, pageProps}) {

    return (
        <> 
            <TopNav />

            <Component {...pageProps} />   {/*   This line helps in bringing the "pages/index.js" as the Homepage, when we Run the server.  */}
        </> 
    )
}

export default MyApp;