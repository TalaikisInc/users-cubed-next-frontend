import React from 'react'
import dynamic from 'next/dynamic'

import { COMPANY, DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
import { t } from 'translations'
import { Text } from 'components/primitives'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Disclaimer = () => {
  const url = `${FRONTEND_URL}/disclaimer`

  return (
    <Page title={t('disclaimer')} description={DESCRIPTIONS.disclaimer} path={url}>
      <ol>
        <ol>
          <li><Text>{ COMPANY } makes no warranty or representation that this website will meet your requirements, that it will be of satisfactory quality, that it will be fit for a particular purpose, that it will not infringe the rights of third parties, that it will be compatible with all systems, that it will be secure and that all information provided will be accurate. We make no guarantee of any specific results from the use of this website.</Text></li>
          <li><Text>No part of this website is intended to constitute advice and the content of this website should not be relied upon when making any decisions or taking any action of any kind.</Text></li>
          <li><Text>No part of this website is intended to constitute a contractual offer capable of acceptance. No goods and / or services are sold through this website and product and / or service details are provided for information purposes only.</Text></li>
          <li><Text>Whilst every effort has been made to ensure that all graphical representations of products and / or descriptions of services available from { COMPANY } correspond to the actual products and / or services, { COMPANY } is not responsible for any variations from these descriptions.</Text></li>
          <li><Text>{ COMPANY } does not represent or warrant that such products and / or services will be available from us or our premises. For this reason, please contact us prior to visiting if you wish to enquire as to the availability of any products and / or services. Any such enquiry does not give rise to any express or implied warranty that the products and / or services forming the subject matter of your enquiry will be available upon your arrival at our premises.</Text></li>
        </ol>
      </ol>
    </Page>
  )
}

export default Disclaimer
