import '../../styles/globals.scss'
import Header from './layout/header'

export function generateMetadata() {}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
