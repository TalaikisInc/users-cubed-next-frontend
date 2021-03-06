import React from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, COMPANY, COMPANY_ADDRESS, FRONTEND_URL, COMPANY_EMAIL, API_URL } from 'config'
import Loader from 'components/extensions/loader'
import { t } from 'translations'
import { Text } from 'components/primitives'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const ToS = () => {
  const url = `${FRONTEND_URL}/terms-and-conditions`

  return (
    <Page title={t('tac')} description={DESCRIPTIONS.ToS} path={url}>
      <Text>This agreement applies as between you, the User of this Web Site and { COMPANY }, the owner(s) of this Web Site. Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Web Site. If you do not agree to be bound by these terms and conditions, you should stop using the Web Site immediately.</Text>
      <ol>
        <li><Text><strong>Definitions and Interpretation</strong>. In this Agreement the following terms shall have the following meanings:</Text></li>
        <ul>
          <li><Text>"Content" means any text, graphics, images, audio, video, software, data compilations and any other form of information capable of being stored in a computer that appears on or forms part of this Web Site;</Text></li>
          <li><Text>"{ COMPANY }" means { COMPANY } { COMPANY_ADDRESS };</Text></li>
          <li><Text>"Service" means collectively any online facilities, tools, services or information that { COMPANY } makes available through the Web Site either now or in the future;</Text></li>
          <li><Text>"System" means any online communications infrastructure that { COMPANY } makes available through the Web Site either now or in the future. This includes, but is not limited to, web-based email, message boards, live chat facilities and email links;</Text></li>
          <li><Text>"User" / "Users" means any third party that accesses the Web Site and is not employed by { COMPANY } and acting in the course of their employment; and</Text></li>
          <li><Text>"Web Site" means the website that you are currently using ({ URL }) and any sub-domains of this site (e.g. { API_URL }) unless expressly excluded by their own terms and conditions.</Text></li>
        </ul>

        <li><Text><strong>Intellectual Property</strong></Text></li>

        <ol>
          <li><Text>All Content included on the Web Site, unless uploaded by Users, including, but not limited to, text, graphics, logos, icons, images, sound clips, video clips, data compilations, page layout, underlying code and software is the property of { COMPANY }, our affiliates or other relevant third parties. By continuing to use the Web Site you acknowledge that such material is protected by applicable United Kingdom and International intellectual property and other relevant laws.</Text></li>
          <li><Text>Subject to sub-clause 2.3 you may not reproduce, copy, distribute, store or in any other fashion re-use material from the Web Site unless otherwise indicated on the Web Site or unless given express written permission to do so by { COMPANY }.</Text></li>
          <li><Text>Material from the Web Site may be re-used without written permission where any of the exceptions detailed in Chapter III of the Copyright Designs and Patents Act 1988 apply.</Text></li>
        </ol>

        <li><Text><strong>Links to Other Web Sites</strong>. This Web Site may contain links to other sites. Unless expressly stated, these sites are not under the control of { COMPANY } or that of our affiliates. We assume no responsibility for the content of such web sites and disclaim liability for any and all forms of loss or damage arising out of the use of them. The inclusion of a link to another site on this Web Site does not imply any endorsement of the sites themselves or of those in control of them.</Text></li>

        <li><Text><strong>Links to this Web Site</strong>. Those wishing to place a link to this Web Site on other sites may do so to the home page of the site or any links within the site ({ URL }) without prior permission.</Text></li>

        <li><Text><strong>Privacy</strong></Text></li>

        <ol>
          <li><Text>For the purposes of applicable data protection legislation, the { COMPANY } will process any personal data you have provided to it in accordance Privacy Policy available on the { COMPANY } website or on request from { COMPANY }.</Text></li>
          <li><Text>You agree that, if you have provided { COMPANY } with personal data relating to a third party (1) you have in place all necessary appropriate consents and notices to enable lawful transfer such personal data to { COMPANY } and (2) that you have brought to the attention of any such third party the Privacy Notice available on the { COMPANY }’s website or otherwise provided a copy of it to the third party. You agree to indemnify { COMPANY } in relation to all and any liabilities, penalties, fines, awards or costs arising from your non-compliance with these requirements.</Text></li>
        </ol>

        <li><Text><strong>Disclaimers</strong></Text></li>

        <ol>
          <li><Text>{ COMPANY } makes no warranty or representation that the Web Site will meet your requirements, that it will be of satisfactory quality, that it will be fit for a particular purpose, that it will not infringe the rights of third parties, that it will be compatible with all systems, that it will be secure and that all information provided will be accurate. We make no guarantee of any specific results from the use of our Service.</Text></li>
          <li><Text>No part of this Web Site is intended to constitute advice and the Content of this Web Site should not be relied upon when making any decisions or taking any action of any kind.</Text></li>
        </ol>

        <li><Text><strong>Availability of the Web Site</strong>. The Service is provided "as is" and on an "as available" basis. We give no warranty that the Service will be free of defects and / or faults. To the maximum extent permitted by the law we provide no warranties (express or implied) of fitness for a particular purpose, accuracy of information, compatibility and satisfactory quality. { COMPANY } accepts no liability for any disruption or non-availability of the Web Site resulting from external causes including, but not limited to, ISP equipment failure, host equipment failure, communications network failure, power failure, natural events, acts of war or legal restrictions and censorship.</Text></li>

        <li><Text><strong>Limitation of Liability</strong></Text></li>

        <ol>
          <li><Text>To the maximum extent permitted by law, { COMPANY } accepts no liability for any direct or indirect loss or damage, foreseeable or otherwise, including any indirect, consequential, special or exemplary damages arising from the use of the Web Site or any information contained therein. Users should be aware that they use the Web Site and its Content at their own risk.</Text></li>
          <li><Text>Nothing in these terms and conditions excludes or restricts { COMPANY }’s liability for death or personal injury resulting from any negligence or fraud on the part of { COMPANY }.</Text></li>
          <li><Text>Every effort has been made to ensure that these terms and conditions adhere strictly with the relevant provisions of the Unfair Contract Terms Act 1977. However, in the event that any of these terms are found to be unlawful, invalid or otherwise unenforceable, that term is to be deemed severed from these terms and conditions and shall not affect the validity and enforceability of the remaining terms and conditions. This term shall apply only within jurisdictions where a particular term is illegal.</Text></li>
        </ol>

        <li><Text><strong>No Waiver</strong>. In the event that any party to these Terms and Conditions fails to exercise any right or remedy contained herein, this shall not be construed as a waiver of that right or remedy.</Text></li>

        <li><Text><strong>Previous Terms and Conditions</strong>. In the event of any conflict between these Terms and Conditions and any prior versions thereof, the provisions of these Terms and Conditions shall prevail unless it is expressly stated otherwise.</Text></li>

        <li><Text><strong>Notices</strong>. All notices / communications shall be given to us either by post to our Premises (see address above) or by email to { COMPANY_EMAIL }. Such notice will be deemed received 3 days after posting if sent by first class post, the day of sending if the email is received in full on a business day and on the next business day if the email is sent on a weekend or public holiday.</Text></li>

        <li><Text><strong>Law and Jurisdiction</strong>. These terms and conditions and the relationship between you and { COMPANY } shall be governed by and construed in accordance with the Law of England and Wales and { COMPANY } and you agree to submit to the exclusive jurisdiction of the Courts of England and Wales.</Text></li>
      </ol>
    </Page>
  )
}

export default ToS
