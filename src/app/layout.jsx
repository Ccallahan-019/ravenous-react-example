import '../styles/global.css'
import '../styles/variables.css';

export const metadata = {
  title: 'Ravenous',
  description: 'Web site created using Next.js.'
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }