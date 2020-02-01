import { promisify } from 'es6-promisify'

import { encoder, decoder } from 'proto/protoFunctions'
import { Body } from 'proto/requests/body'

const _encodeRequest = (output, done) => {
  encoder(Body, output, done)
}

const _decodeResponse = (handler, base64Buffer, done) => {
  decoder(handler, base64Buffer, done)
}

export const encodeRequest = promisify(_encodeRequest)
export const decodeResponse = promisify(_decodeResponse)
