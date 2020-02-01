import { assert } from 'chai'

import { encoder, decoder } from '../proto/protoFunctions'
require('chai')
  .use(require('chai-as-promised'))
  .should()

describe('Unit tests', () => {
  describe('Proto encoders', () => {
    it('Should encode same way as an API', (done) => {
      const expected = 'ChoKBWVtYWlsEhFpbmZvQHRhbGFpa2lzLmNvbQoYCghwYXNzd29yZBIMMTIzNDU2Nzg5MTIzChEKDHRvc0FncmVlbWVudBIBMQoMCgZsb2NhbGUSAmVuEhUKBkFjdGlvbhILVVNFUl9DUkVBVEUSEQoNQXV0aG9yaXphdGlvbhIA'
      const payload = {
        body: {
          email: 'info@talaikis.com',
          password: '123456789123',
          tosAgreement: '1',
          locale: 'en'
        },
        headers: {
          Action: 'USER_CREATE',
          Authorization: ''
        }
      }

      encoder('res', payload, 'Body', (err, data) => {
        if (err) done(err)
        data.should.be.equal(expected)
        done()
      })
    })

    it('Should decode same way as an API', (done) => {
      const payload = 'ChoKBWVtYWlsEhFpbmZvQHRhbGFpa2lzLmNvbQoYCghwYXNzd29yZBIMMTIzNDU2Nzg5MTIzChEKDHRvc0FncmVlbWVudBIBMQoMCgZsb2NhbGUSAmVuEhUKBkFjdGlvbhILVVNFUl9DUkVBVEUSEQoNQXV0aG9yaXphdGlvbhIA'
      const expected = {
        body: {
          email: 'info@talaikis.com',
          password: '123456789123',
          tosAgreement: '1',
          locale: 'en'
        },
        headers: {
          Action: 'USER_CREATE',
          Authorization: ''
        }
      }

      decoder('req', payload, 'Body', (err, data) => {
        if (err) done(err)
        data.should.be.deep.equal(expected)
        done()
      })
    })
  })
})
