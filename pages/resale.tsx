import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'

// import { getHomePageArticles } from '../lib/devto'

interface IProps {
    // homePageArticles: IHomePageArticles
}

const title = 'Купить недвижимость для перепродажи'
const subtitle = 'Интересно? Листай дальше'

const ResalePage =
    ({}: // homePageArticles: { latestBlog, latestPortfolio, featuredBlog, featuredPortfolio },
    IProps): JSX.Element => {
        // const projects = featuredPortfolio || [latestPortfolio]
        return (
            <Layout title="Для сдачи в аренду" description={`${title} - ${subtitle}`}>
                <PageTitle title={title} subtitle={subtitle} />

                <Section linebreak>
                    <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
                        Варианты
                    </h2>
                    <p className="my-2">
                        Купить <b>новостройку</b> для перепродажи с доходностью в 10-30% годовых
                    </p>
                    <p className="my-2">
                        Купить квартиру <b>бизнес класса с дизайнерским ремонтом</b> для перепродажи
                        с доходностью в 10-30% годовых
                    </p>
                </Section>
            </Layout>
        )
    }

// export const getStaticProps: GetStaticProps = async () => {
//     const homePageArticles = await getHomePageArticles()
//     return { props: { homePageArticles } }
// }

export default ResalePage
