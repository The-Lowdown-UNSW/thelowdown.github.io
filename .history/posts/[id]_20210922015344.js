import { google } from 'googleapis';

//Back-end
export async function getServerSideProps() {

    //Authentication
    constant autho = await google.auth.getClient();

    return {
        props: {
            title,
            publishingDate,
            countryCode,
            region,
            image,
            imageCredit,
            content,
            authorName,
            authorProfilePicture,
            correspondentForRegion
        }
    }
}

//Front-end
export default function Post({title, publishingDate, countryCode, region, image, 
imageCredit, content, authorName, authorProfilePicture,correspondentForRegion}) {
    return <article>
        <h1>{title}</h1>

    </article>
}