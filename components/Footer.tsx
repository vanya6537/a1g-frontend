import SocialIcons from './SocialIcons'
import Link from './NoScrollLink'

const Footer = (): JSX.Element => (
    <footer className="w-full flex flex-col items-center">
        <SocialIcons />
        <a
            className="text-sm mb-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            href="mailto:j@wallis.dev?Subject=Hello"
        >
            a1group@gmail.com
        </a>
        <Link href="/blog/rewriting-my-website-with-a-devto-cms">
            <a className="text-sm mb-8 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                © ООО «Самая крутая компания», 2021
            </a>
        </Link>
    </footer>
)

export default Footer
