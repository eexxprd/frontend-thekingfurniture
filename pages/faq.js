import { Col, Row, Container, Form } from 'react-bootstrap'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Wishlist.module.scss'
import faq from '../styles/Faq.module.scss'
import Image from 'next/image'
import { FaShoppingCart, FaWallet } from 'react-icons/fa';
import { BsBookmarkDashFill } from 'react-icons/bs';
import Button from "../components/Button";

const FAQ = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>The King | FAQ</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={`${styles.profiles} mb-5`}>
          <div className="d-flex flex-column justify-content-center">
            <h1 className={`${styles.content} text-center mb-1 mt-5`}>FAQ</h1>
            <h5 className={`${styles.content} text-center mb-5`}>Frequently Asked Questions</h5>
          </div>
        </div>
        <Container>
          <Row className='d-flex flex-row justify-content-center align-items-center'>
            <Col xl={12} className={`${faq.logo} fs-3 ps-3 py-1 pe-1 mb-3`}>
              <FaShoppingCart />
            </Col>
          </Row>
          <Row>
            <Col xl={4} className='text-center'>
              <Row className='d-flex flex-row justify-content-center align-items-center'>
                <Col xl={6} className='border-bottom mt-3 mb-5 fw-bold d-none d-lg-flex'>
                </Col>
              </Row>
            </Col>
            <Col xl={4} className='text-center'>
              <h3>Shopping Questions</h3>
            </Col>
            <Col xl={4} className='text-center'>
              <Row className='d-flex flex-row justify-content-center align-items-center'>
                <Col xl={6} className='border-bottom mt-3 mb-5 fw-bold d-none d-lg-flex'>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Row className='mb-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>Do you ship worldwide?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>Do you offer gift-vouchers?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row className='mb-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>How can I use a coupon code?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>How can I request a refund?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='d-flex flex-row justify-content-center align-items-center mt-5'>
            <Col xl={12} className={`${faq.logo} fs-3 ps-3 py-1 pe-2 mb-3`}>
              <FaWallet />
            </Col>
          </Row>
          <Row>
            <Col xl={4} className='text-center'>
              <Row className='d-flex flex-row justify-content-center align-items-center'>
                <Col xl={6} className='border-bottom mt-3 mb-5 fw-bold d-none d-lg-flex'>
                </Col>
              </Row>
            </Col>
            <Col xl={4} className='text-center'>
              <h3>Payment Questions</h3>
            </Col>
            <Col xl={4} className='text-center'>
              <Row className='d-flex flex-row justify-content-center align-items-center'>
                <Col xl={6} className='border-bottom mt-3 mb-5 fw-bold d-none d-lg-flex'>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Row className='mb-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>Do you ship worldwide?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>Do you offer gift-vouchers?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row className='mb-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>How can I use a coupon code?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>How can I request a refund?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='d-flex flex-row justify-content-center align-items-center mt-5'>
            <Col xl={12} className={`${faq.logo} fs-3 ps-3 py-1 pe-3 mb-3`}>
              <BsBookmarkDashFill />
            </Col>
          </Row>
          <Row>
            <Col xl={4} className='text-center'>
              <Row className='d-flex flex-row justify-content-center align-items-center'>
                <Col xl={6} className='border-bottom mt-3 mb-5 fw-bold d-none d-lg-flex'>
                </Col>
              </Row>
            </Col>
            <Col xl={4} className='text-center'>
              <h3>Miscellaneous Questions</h3>
            </Col>
            <Col xl={4} className='text-center'>
              <Row className='d-flex flex-row justify-content-center align-items-center'>
                <Col xl={6} className='border-bottom mt-3 mb-5 fw-bold d-none d-lg-flex'>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Row className='mb-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>Do you ship worldwide?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>Do you offer gift-vouchers?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row className='mb-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>How can I use a coupon code?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col xl={12}>
                  <h4 className='mb-4'>How can I request a refund?</h4>
                  <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={12} className='mt-5 mb-5 text-center'>
              <h3>You Still Need Help?</h3>
              <Button className={`${styles.button} mt-3 mb-5 px-5 py-2`} color='danger'>Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default FAQ