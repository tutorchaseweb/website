import React from 'react'

export default {
  name: 'applyForm',
  type: 'document',
  title: 'Apply form for tutors',
  description: 'Apply form for tutors',
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'Full name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
    {
      name: 'hearAboutUs',
      type: 'string',
      title: 'How did you hear about us?',
    },
    {
      name: 'qualifications',
      type: 'text',
      title: 'Qualifications',
    },
    {
      name: 'tutoringExperience',
      type: 'text',
      title: 'Tutoring Experience',
    },
    {
      name: 'tutoringOffered',
      type: 'text',
      title: 'Tutoring Offered',
    },
    {
      name: 'linkedInUrl',
      type: 'url',
      title: 'LinkedIn Profile URL',
    },
    {
      name: 'referrer',
      type: 'string',
      title: 'Referrer',
    },
    {
      name: 'tutorCv',
      type: 'file',
      title: 'Uploaded CV',
    },
    {
      name: 'source',
      type: 'string',
      title: 'The page from which the form was submitted',
      readOnly: true,
    },
    {
      name: 'time',
      type: 'string',
      title: 'Date and time of the application (local time of the sender)',
      readOnly: true,
    },
    {
      name: 'processed',
      type: 'boolean',
      title: 'Processed',
      description: 'Set processed status for the query',
      initialValue: false,
    },
    {
      name: 'additional',
      type: 'text',
      title: 'Additional comment from admin',
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'email',
      processed: 'processed',
    },
    prepare({ title = 'No name', subtitle, processed }) {
      const done =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABmJLR0QA/wD/AP+gvaeTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI2VDA0OjA5OjQ4KzAwOjAw/nj3MgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yNlQwNDowOTo0OCswMDowMI8lT44AABAtSURBVHhe7Z0JXNTVFscPAwMjAgKyiagvNE3TXAqXp4YiLi+1Ul/Z6qt8ir70lVq9fC6fcqvMtFWrl5a5ZPbJ9l6lJi5JgFuSCiqpPVNAkGXY13d/d+7oAAMz85//f+bPwHc+CnPGhfn//vecc+8994xbDYOaGJXVlZRXfpUKKwuptKqEKmsqmbWG3N08yEujo9YePtTG05907jrDX2hCqFqQK6WZlJJ3lFLzT9JZ/Wm6UPQb5ZRdIY2bhvBwY1/d2MOUGjzYW6pmj6qaKvLT+lGn1jdQpM+N1M2vB/X0702dfCLFn1YfqhKktKqUdmd8Rz9lxdOhnAR251eRp8aTPNid765hv9zchRC1RWgIvDU8IEwVG0UYWRXVFXxE3RLQlwYHR9Pw0FEU0ipM/A3nowpBPv39I/r64g76rfAMebu3Ji0TQavR8pGgBHjLlTUVVF5dTiXM5QV4BtLY9hNoYsf7+PfOxGmCnMr/lTamv0MHr+zjPh/+HjHA2rtfTjCCytjoLKzUU1ff7jSl8zQaGhIjXnUsDhfkYNZeejNtFWWUXiZfD18+GpwhgjkMI6eSilmygJ9rapfH+ahxJA4T5HBOEr14YjHlsuzI18OPPFhMUDPVNdVUxIRBDJrV7SkaHzFJvKIsigsCAZ458jil68+Qv9afB+emBITRVxRwt7qszyt0M8vSlERRQdadXkNbz71Pbb2CuAtoyiDOXC3LpgFBQ+ilfm8Iq/woIkhWSQbFJT7EJ224s9QSI+wFl6qsupTFmGJa0fdVJs5g8Yp8yC7I9gub6Y3UlRTkFaL6OCEVuDFMUEe2u4MW9FourPIgqyDzDs+gX64eIX/PAJcZFQ2BYF9cWcQTlI+Gfi3bnEk2Qf66dzSfZHl7eAtL86CCTS71FXraOHgHRXh3EFbp2C1rfnkejdo1kM98m5sYAMkKPML9+8fSkatJwioduwTJKLlEd8XHkI+Y4DVX4K5Cde3on8lTaW/mLmGVhmRBIMbk/XewlLYtm1u4C2vzBTEzTBdOC47NpT0ZPwir7UiKIXBTGBkQQ+PWIoYpuJwZpZdo9a3vUP+gPwur9UgSBDHDR+vLl8NbqI9BlMu0afBndINPZ2G1DpsFQTaFAN6cY4Y1YK5ytTyHvos5SF7uXsJqGZtiCOYZSG1bxLAMAn0brT/PvmzBakG2n9/MJ33NMbWVCjbZyqrLaP7RJ4TFMlYJklmSQW+kreT5dgu24e3RmhKzD9DOy98KS+NYFUMmxMfyr666NmUEe+5I4esWTtgLLvGVsizaPTKZ1wc0hsURsi5tDV+1dXUxyqrK+DYBUnob8xyLYI6CvaBZSY8IS8M0Kgg2l7aef58vobsyGBnY039v0DZa1GsFZZVmcJuceLJM60xBKu3L3C0s5mnUZU1LuJ8NtUyXzqrw9jPZnOGLYXsokE10QUFFPk35aQIXpZWMSQxSYRRSfD8iQVjq0+AIOZyTSOmFZ1w+xcX27PQbZ18TA/hp29Dnw36k7m160dWyHNlcmLHAb/3ZtcJSnwZHyD37xlAVD3KuGztQNAd3vGXIF8JSH9SMvXrqBQrWhcqyMoHLnc0CfPyoo8JSG7Mj5OCVvTx+uLIYuDDYI39nwGZhMc+kjvfT1iFf8QoU1G7ZCwI8boK1aauFpTZmBXkzdRXfCXNl8ivyaPZNz/A1OUt0aN2J+/2wVuFUIEMW1srdmz65YP5GqCcIKgqxMObKaS52+Tp4d6J7Oj0oLNbx7sCtNJGNGGRhCNBSwSjRubeij89/KCzXqRdD/nVkNqUyUZCmuSJ4u8gcd8Ym8UJuKRzPPUqLjs1lN630+mOUFVWyGPbl8HhhMVDrX8PGfcKVfS6dWeVV5NLTPRZLFgOgcv6mNjfzinqpIEFAOVEKE9eUWoLs+H2bS9VR1aWczca7+HalcREThUUaX138lA5fTbL7xsVC7Y7/bRPPDNQSBP8RfJsrAleVzyZ86/pvEhZpYIll1cml5K+1f6HVU+NF8Rm19+CvCYLDMucKz7rsLmBueQ4t7LXc7tEfl/ggP0MihxfBv4El+qTsg8JiIghOLuGwjCu6K8wfevr3odh2fxEWaWxjWdGl4ouyxljsJsZn7hTPTATBMTJ7Ap1aQXqKSd1rUe8JizQw/3gr7RW+rCIncFv7s/aIZyaCJOck8OHjamBfe0nvVeKZdFA8HuQVJLsHQdpcWKHngvPn+C2rNJPnxTjV6kpgHyeq7SAaHDJMWKSBxUAIi3mHEsBtIWsDXAHkwq7mruCqkKis7PemsEgjs+QyfZD+tqJLSR5uWkrJO8a/54KkFpy0uLXYlECKi+MCL/a1/2DNzKQp/GiFkskOlqlS80/w77kg6fo0l1rZhau6PTSWbm3bX1ik8XrqSiphs2ml1/Uw1UjXn+bfc0EuFJ1z6PyjzvKZrMBV4STtkt4vC4s0zhem0ycXtjhk+xqBHeVC/Hv8xttVGL5VHFyw4qoiwwlXmYXBv4fNH9TV2svs5McoWKesqzIFIQPxSoN9YyjkiP8YYmDG/G3MAZr8pyl8Lxs2uSipKqYx4eOph38vYZHGC78u5j+XI70GNMjGwEBXHUeNDuzQLe1t2Cn7W+R0Wj/oY75RhEU/ezGk7W40v+dSYZHGybwU+u+lL/kmkiOBIHnluaRBiyNHzD8QHIeEDGdzgmhhIerq1512xSZRW10wr/SQ6sK4qyrNotdvWy8s0pl7OI6CFc6qzIHiPFSkaJCRyF2pVxfcvdhrWdrnFWGpzYZB2+nuDvdK3okrYjFpQsf7KNL3RmGRxqJj87gvx93qaHADYN6kMTT/Ug7cveh7tXZA/e1KU2Z2nUNv9f+AF1egS4+1QGwvjRfN6T5fWKSRnJ3A15TkrMOyBQwKHPPQsCsmTMqgryyghyOn8SZilugV0Jd2xyaTn0cbXi+FUdUYRrEhpL3MP/YELyV1LjWkUXJCiLqnIK9gXohmLRi6m4Z8RqNZtoSLXdOIC4PPffCGx6i9nceR5x2awYO4M1yVEdx8aE+lQY9CS3eiFHD3IsVFJiUFuKBV/d5mqWA2F7YuSNd9tX40o+uTwiKN+IyddDT3kNP7M0IBaKHBTFRqdtMYiAXzb15i15ZwVNBA2hmbyO7eVnyJ2njj8KyKTQDt3Y4Fzx9/lgKd3EUOwBP4aH1Ig+6daBgpJ8gWUJkxpv2dwiId7NGgdUV0aCxPbSEG4hKaiwWxdNkeZiZO4aNMDdsOEARH4DQYqjwtlWmUIG3FUv6a294VFnl4tufztKzParpc8ge7o9vSI53jxCvS+OaPz/jxAFsOZCpJFRsUSCr4rYFWqnLFEaRvWCjbffk7YZEPTCw/jf6BVt26TlikgbR65YnnVXVED4MiVBduEAQpKQxygCxJx4LTspR/s18LhFU+UF9rb1YV97N8lSNyAO+EGxnL/FwQNBm2pwqvLnijQboQ+ilrLz2wf7xs7lAOtl/YRH8U/y5r5Yi9YDAYGwxwQdDxWe4jXABZA5baR+yK4kXczgaTTVT2+7HgqSYwQ4cGgAuCmiVzub4c4E6Ee5j+8wO0MV3eQG8rcFUInGpxVUYwGIzNNQ0xxAcxpFIx14IZMNoXbT63nrcwcgbvp79NOeXZilWO2EM5S4L6BkTx77kg4JaAfnzoKAXuSmQ1KFcdtyean91zFFiC2XB2rSoPIWGagI5K4d7t+fNrgvw5+HabVlmlgpm7p5uW7o6PoR8zvhdWZZmR+LDilSNSQagYFDRUPDMRZHjYKCqpLBHPlAULmiG6MFpyfD7fLlUStDVHs0q1ngiDu8IqhJFrguACBXgFyjYfsYQhNQ7mB+kfOnCXsMrLhcJz/NiYIypHpICYjZtlRLsxwmIiCBjXfoIsJ02tBZMhHLrUV+ppxM4oOl1wSrwiD7OTH+XHmdXoqkAFi9n92g4QzwzUEgQHGrHHoMRyfGNg7QsBf2rCZJaJbRBW+3jpxHMsSalS9XkX1BlM7DBZPDNQSxBcFHx+hhKTREsYU+ONLD2dc2i6sEoDk9BvLn5O3g6uHLEFZFd43B46QlgM1BIETOk8nfm1QvHMsRhS40A6o0+jO/cM4515pDD3UBxzVcGqdVUAoWFCndEB6gkyNGQ4n11XOyi4mwMbUtjOHM/mK5a659Rl8S9PcTel5m6pCOYoe/p7l1nCcp16ggD8wSIW/Z0J0lRkfrjAL59YIqyNcygnkQvorMoRa0GqGxM22uxeTIPNZ0bvHsQ7Vjtz498IFgUhzoeDdwiLeUbuGsCPnKnhZ24IXO7M0gz6Jmaf2eNxDf7ks7o9zS+EGsA2K0pOY3f255/UY46nDs/kqwBqFgPg80dGtxvb4FnFBn/68RET2QjxcdhE0RJIjbH//8jBSbTt/EZhNQA3hUb4av9kT2PsWHjLCmGpT6O309I+q3mBtKPnJQ1hTI3fO/sWzWMjwshzx5+hAM/rDcjUCoozpnVpvEbNYlfSZ4/MphP5x+0q51ECTKqQImNL94w+VfVnJNEMjuXhtCP6+pl0c1gUBGBZA5NGtflnuFNMsNR+nBuXGGdhUM4U4d1RWM1j1RV+oe9r/JSV2sB8oymcrYerQsmrJTGAVYLgYxdGsswAx9BasA3sMQV7hVpd8mqVyzIyed9Ylra1NOO3FrhTlNSiot/aZRybgsK2oV+xuYneqcsqTQVj3EBbQFvW1GwSBDWwmC2jFYcNA6tZgjaCC3ut4A3TbMHmtAlVg69Frecf69Miinly2NxtSuR0fiLYVmwWBPQLjKLlfda0iGKG3LIcujNiEk3t8g9hsQ1JggBszC/rvbpFFBMwMtDP8Uk7zjvalGWZA4cl5xyOo1BdmOoX9pQClxAxA25K6sgwYrcgAH1BHk24lx84ccUmaI2B1BbZFAK4lJhRF1kEAejGcN+BcXxrEh/z0xzApA9bFO8O3MKyqW7Cah+y+Rh0wsbCGUpSscwik86qBO+tgAmB0lRM+uQSA8g2QkzZdflbWpqygH/Mj6u1LMeqLT5PCmtT9p4ANociggCUEs1KfpTOFJziy+RNPeDjMqFmDe4YPVUiWlteKJSCYoIYwW7e8l8XMt+oaZJtzHF5sO2KnT5sLj0UqexxCsUFMYLjAB/+9h8uCromqF0YXBZUh+SW59Ko8LG0qOcKdrXEiwriMEGM4JNl8GEm2IFEuY7aSj2RxiJTxIgYHjaa5vVY0GBBghI4XBAjH5/fRFvObeBVkvDL6PDsrFGDS4DCZ2wLQ5AJHSfz2jRnnGF3miBGUnKP8Y9sQP9zrZuWXwSIo3QSgAuPwzJwS/gcD3QwvbvDZIquU2vraJwuiClYhoEw+7N+5BMuL3cdbyiGc4GG8lBpIuEtYv8dR/aQ/UEElJri5BLW5EzPZzgbVQliCnw4PksRHZ/TCk7QWf1p5tvLrnV8wy+cL4GbwwOgXAnvpoaq2ddq3q4CQuB1nAPH0WOcdu0bcBuFe0fwv6M2VCtIQ6CVKrp3omEk5gVoUWjsiodRhBZHKPBDUV2gVxCF6dqp8uSteYj+DyBUTbuLWSe/AAAAAElFTkSuQmCC'
      const warning =
        'data:image/png;base64,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'
      const alert =
        'data:image/png;base64,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'

      return {
        media: <img src={processed ? done : warning} alt={title} />,
        title,
        subtitle,
      }
    },
  },
}
