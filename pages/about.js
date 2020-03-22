import Page from '../components/Page'
import Link from 'next/link'

export default () => (
    <Page>
      <Link href="/">
        <a>Home Page</a>
      </Link>{' '}
      <br/>This is a reference website for COVID-19 related information and some attempts to tackle misinformation.
    </Page>
)
