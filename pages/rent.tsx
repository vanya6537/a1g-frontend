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

const title = "Купить недвижимость для сдачи в аренду с доходностью в 3-6%/8-12% годовых"
const subtitle = "Интересно? Листай дальше"

const RentPage = ({
    // homePageArticles: { latestBlog, latestPortfolio, featuredBlog, featuredPortfolio },
}: IProps): JSX.Element => {
    // const projects = featuredPortfolio || [latestPortfolio]
    return (
        <Layout title="Для сдачи в аренду" description={`${title} - ${subtitle}`}>
            <PageTitle title={title} subtitle={subtitle} />

            <Section linebreak>
                <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">Доходности недвижимости при сдаче в аренду:</h2>
                <p className="my-2">
                    Лорем ипсум долор сит амет, усу еа доцтус перицулис цонституто. Уллум маиестатис иус еи, цу усу яуидам ассентиор аргументум. Ид про ерат диспутандо, яуи хинц юсто неморе ат. Ин усу латине либерависсе, еи индоцтум сигниферумяуе сед.
                  </p>
                <p className="my-2">
                    Второй абзац ипсум долор сит амет, усу еа доцтус перицулис цонституто. Уллум маиестатис иус еи, цу усу яуидам ассентиор аргументум. Ид про ерат диспутандо, яуи хинц юсто неморе ат. Ин усу латине либерависсе, еи индоцтум сигниферумяуе сед.
                </p>
            </Section>

        </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//     const homePageArticles = await getHomePageArticles()
//     return { props: { homePageArticles } }
// }

export default RentPage
