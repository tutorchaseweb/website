import { Layout } from '~/components/Layout'

export const Reviews = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <h1>Reviews</h1>
          <div className="content">
            <iframe
              src="https://widget.reviews.co.uk/compound/widget?elementId=reviews-widget-summon-compound&amp;version=2&amp;&amp;store=admissionstutors&amp;primaryClr=%23f47e27&amp;neutralClr=%23333333&amp;reviewTextClr=%23333333&amp;layout=fullWidth&amp;numReviews=40&amp;version=13b&amp;contentMode=company%3Bthird-party"
              frameBorder="0"
              width="100%"
              title="Reviews Compound Widget"
              height="6530"
              className="hide-me show-me"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Reviews
