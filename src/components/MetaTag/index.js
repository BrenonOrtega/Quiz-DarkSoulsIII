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
                content = {db.image}
            />
        </Head>
    );
}

export default Meta