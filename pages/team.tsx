import { GetStaticProps } from 'next'
import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'
import IHomePageArticles from '../interfaces/IHomePageArticles'
// import { getHomePageArticles } from '../lib/devto'

interface IProps {
    // homePageArticles: IHomePageArticles
}

const title = "О нашей команде"
const subtitle = "Чтобы показать, что нам можно доверить свои финансы"

const TeamPage = ({
    // homePageArticles: { latestBlog, latestPortfolio, featuredBlog, featuredPortfolio },
}: IProps): JSX.Element => {
    // const projects = featuredPortfolio || [latestPortfolio]
    return (
        <Layout title="Команда" description={`${title} - ${subtitle}`}>
            <PageTitle title={title} subtitle={subtitle} />
        </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//     const homePageArticles = await getHomePageArticles()
//     return { props: { homePageArticles } }
// }

export default TeamPage
