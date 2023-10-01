import Footer from './components/footer'
import './globals.css'
import { Poppins } from 'next/font/google';
import { getAllMetadataData } from './lib/apiRequests';

const poppins_font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: false,
  variable: '--font--popping'
})

export async function generateMetadata() {

  let res = await getAllMetadataData();
  
  return {
    page: res[0]['page'],
    title: res[0]['title'],
    description: res[0]['description'],
    keywords: res[0]['keywords'],
    image: res[0]['image']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins_font.variable}>
      <body >
        <div className='bg-[#d7f5dc]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
