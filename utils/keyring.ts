import { Keyring } from '@polkadot/keyring'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { PHALA_SS58_FORMAT } from './constants'

const createKeyring = async (): Promise<Keyring> => {
  await cryptoWaitReady()
  return new Keyring({
    type: 'sr25519',
    ss58Format: PHALA_SS58_FORMAT,
  })
}

export default createKeyring
