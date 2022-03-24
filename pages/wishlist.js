import { Col, Row, Container, Form } from 'react-bootstrap'
import Head from 'next/head'
import Layout from '../components/Layout'

const Wishlist = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>The King | Wishlist</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Row>
            <Col xl={12} className='text-center mt-5 mb-5'>
              <h1 className='fs-1 text-bold'>Wishlist</h1>
              <h5>Pay and get your ordered items</h5>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default Wishlist