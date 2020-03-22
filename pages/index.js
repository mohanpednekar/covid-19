import {useQuery} from '@apollo/react-hooks'
import Page from '../components/Page'
import gql from 'graphql-tag'
import Link from 'next/link'
import Head from 'next/head'
import {withApollo} from '../apollo/client'

const ViewerQuery = gql`
    query ViewerQuery {
        viewer {
            id
            name
            status
        }
    }
`
const Index       = () => {
  const {
          data: {viewer},
        } = useQuery(ViewerQuery)
  if (viewer) {
    return (
        <Page>
          <Head>
            <title>COVID-19 Myths and facts</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          </Head>
          <Link href="/about">
            <a>About</a>
          </Link>
          <br/>
          <h1>COVID-19 Myths and facts</h1>
          <p>We will try to understand COVID-19 and debunk various myths related to the disease.</p>
        </Page>
    )
  }
  return null
}
export default withApollo(Index)
