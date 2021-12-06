import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

// import { getHomePageArticles } from '../lib/devto'

interface IProps {
    // homePageArticles: IHomePageArticles
}

const title = 'О нас'
const subtitle = 'И не только'

const AboutUsPage =
    ({}: // homePageArticles: { latestBlog, latestPortfolio, featuredBlog, featuredPortfolio },
    IProps): JSX.Element => {
        // const projects = featuredPortfolio || [latestPortfolio]
        return (
            <Layout title={title} description={`${title} - ${subtitle}`}>
                <PageTitle title={title} subtitle={subtitle} />
            </Layout>
        )
    }

// export const getStaticProps: GetStaticProps = async () => {
//     const homePageArticles = await getHomePageArticles()
//     return { props: { homePageArticles } }
// }

export default AboutUsPage
