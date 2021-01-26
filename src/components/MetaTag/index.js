import Head from 'next/head'
import db from "../../../db.json"

export function Meta(){
    return(
        <Head>
            

            <title key ="title" name = "og: title">{db.title}</title>

            <meta key="description"
                name = "description"
                content = {db.description}
            />

            <meta key="og: image"
                name = "og:image"
                content = {db.bg}
            />

            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,600&display=swap" rel="stylesheet"/>
            <link rel="shortcut icon" href={db.favicon}/>
        </Head>
    );
}

export default Meta