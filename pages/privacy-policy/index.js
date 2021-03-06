import React from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, COMPANY, FRONTEND_URL, DPM_EMAIL } from 'config'
import Loader from 'components/extensions/loader'
import { t } from 'translations'
import { Text } from 'components/primitives'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const PrivacyPolicy = ({ locale }) => {
  const url = `${FRONTEND_URL}/privacy-policy`

  return (
    <Page title={t('privacy')} description={DESCRIPTIONS.privacyPolicy} path={url}>
      <Text>This Policy applies as between you, the User of this Web Site and { COMPANY } the owner and provider of this Web Site. This Policy applies to our use of any and all Data collected by us in relation to your use of the Web Site and any Services or Systems therein.</Text>

      <ol>
        <li><Text><strong>Important information</strong></Text></li>

        <ol>
          <li><Text>Our website is not intended for children and we do not knowingly collect data relating to children.</Text></li>
          <li><Text>This Privacy Policy supplements the other policies (including our terms of use (Terms)) and is not intended to override them. </Text></li>
          <li><Text>{ COMPANY } is the controller and responsible for your personal data (we, us or our).</Text></li>
          <li><Text>To assist you further in understanding this Privacy Policy, we have set out in Part 5 of Schedule 1 a glossary of terms used, examples of types of personal data we collect, how we use it, the lawful basis for processing such data and further details of your rights.</Text></li>
          <li><Text>We have appointed a data privacy manager (DPM). If you have any questions about this Privacy Policy, including any requests to exercise your legal rights, please contact our DPM in writing, either:</Text></li>
          <li><Text>By email to: { DPM_EMAIL }</Text></li>
          <li><Text>You have the right to make a complaint at any time to the ICO (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.</Text></li>
          <li><Text>It is important that the data we hold about you is accurate and current, therefore please keep us informed of any changes to your personal data.</Text></li>
          <li><Text>Our website may include links to third-party websites, plug-ins and applications. By clicking on these links or enabling connections you may be allowing third parties to collect or share your personal data. We have no control these third-party websites, plug in or applications and are not responsible for their privacy policies, therefore you should also read their privacy policy to understand what personal data they collect about you and how they use it.</Text></li>
        </ol>

        <li><Text><strong>The data we collect about you</strong></Text></li>

        <ol>
          <li><Text>We may collect, use, store and transfer the types of personal data about you listed in Part 1 of Schedule 1.</Text></li>
          <li><Text>We also collect, use and share aggregated data. However, if we combine aggregated data with your personal data so that it can directly or indirectly identify you, we treat this as your personal data.</Text></li>
          <li><Text>We do not collect any special categories of personal data or any information about criminal convictions and offences.</Text></li>
          <li><Text>If we are required by law, or under the terms of a contract we have with you, to collect your personal data and you fail to provide it, we may not be able to enter into perform the contract with you and, we may have to cancel a product or service. We will notify you of this at the relevant time.</Text></li>
        </ol>

        <li><Text><strong>How personal data is collected</strong>. We collect personal data in the following ways:</Text></li>

        <ul>
          <li><Text> direct interactions - you may provide personal data when you complete online forms, request products/services, subscribe to our services, create a user account, join our mailing list, or otherwise or correspond with us (by post, phone or email)</Text></li>
          <li><Text>automated technology - we automatically collect personal data (technical and usage) when you browse or interact with our website, by using cookies, server logs and other similar technologies. We may also receive technical data about you if you visit other websites which use our cookies.</Text></li>
          <li><Text>publicly available sources we may collect personal data from publicly availably sources such as Companies House and the Electoral Register and credit reference agencies, based inside the EU.</Text></li>
          <li><Text>third parties - we may receive personal data from: (a) analytics providers based outside the EU (such as Google); (b) advertising networks based inside OR outside the EU]; and (c) search information providers based inside OR outside the EU; (d) our suppliers such as payment providers, delivery services, website support and maintenance providers.</Text></li>
        </ul>

        <li><Text><strong>How we use your personal data</strong></Text></li>

        <ol>
          <li><Text>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data:</Text></li>
          <li><Text>To perform the contract, we are to enter into or have entered into with you;</Text></li>
          <li><Text>To comply with a legal obligation; and</Text></li>
          <li><Text>Where it is necessary to carry out our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</Text></li>
          <li><Text>Part 2 of Schedule 1 sets out the lawful basis we will rely on to process your personal data.</Text></li>
          <li><Text>We do generally only rely on consent as a legal basis for processing your personal data to send email and SMS marketing communications and you have the right to withdraw your consent at any time by contacting us. Please note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your information.</Text></li>
          <li><Text>We may analyse your personal data to form a view on what products and or services we think may be of interest to you. You will only receive marketing communications from us, if you have requested information from us or purchased services from us, if you consent to marketing at the time we collect your personal data and you have not subsequently opted out or withdrawn your consent or if we have another basis to send you the marketing communications.</Text></li>
          <li><Text>We will get your express opt-in consent before we share your personal data with any third party for marketing purposes. We will not share your personal data with third parties for their marketing purposes.</Text></li>
          <li><Text>You can opt out of email marketing by clicking the unsubscribe button within the marketing email. You can also withdraw your consent to marketing at any time by contacting our DPM.</Text></li>
          <li><Text>Even if you opt out of receiving marketing, we may still use your personal data for other purposes provided we have a lawful basis to do so.</Text></li>
          <li><Text>We will only use your personal data for the purpose that we originally collected it for, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose.</Text></li>
          <li><Text>If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to use your personal data in this manner.</Text></li>
          <li><Text>We may process your personal data (without your knowledge or consent) where this is required or permitted by law.</Text></li>
        </ol>

        <li><Text><strong>Disclosure of your personal data</strong></Text></li>

        <ol>
          <li><Text>We may have to share your personal data with third parties further details of which are set out in Part 4 of Schedule 1. We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes. They can only process your personal data for specified purposes and in accordance with our instructions.</Text></li>
        </ol>

        <li><Text><strong>International transfers</strong></Text></li>

        <ol>
          <li><Text>We do not transfer your personal data outside the European Economic Area (EEA).</Text></li>
          <li><Text>OR We share your personal data within the { COMPANY } Group. This will involve transferring your data outside the European Economic Area (EEA).</Text></li>
          <li><Text>Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</Text></li>
          <li><Text>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission.</Text></li>
          <li><Text>We use specific contracts approved by the European Commission which give personal data the same protection it has in Europe with our services providers;</Text></li>
          <li><Text>We may transfer data to US based service providers under the Privacy Shield which requires them to provide similar protection to personal data shared between the EU and the US.</Text></li>
          <li><Text>Please contact us if you want further information on the specific mechanism used by us when transferring your personal data.</Text></li>
        </ol>

        <li><Text><strong>Data security</strong></Text></li>

        <ol>
          <li><Text>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We also limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know and they can only process your personal data on our instructions and will be subject to a duty of confidentiality.</Text></li>
          <li><Text>We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</Text></li>
        </ol>

        <li><Text><strong>Data retention</strong></Text></li>

        <ol>
          <li><Text>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</Text></li>
          <li><Text>Details of retention periods for different aspects of your personal data are available in our retention policy which you can request from us. However, we are legally required to keep basic information about our customers (including contact, identity, financial and transaction data) for six years after they cease being customers, for tax purposes.</Text></li>
          <li><Text>We may also anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes. We can use anonymised information indefinitely without further notice to you.</Text></li>
        </ol>

        <li><Text><strong>Your legal rights</strong></Text></li>

        <ol>
          <li><Text>You have certain rights in certain circumstances under data protection law. These are set out in full in Part 3 of Schedule 1. If you wish to exercise any of your rights, please contact our DPM.</Text></li>
          <li><Text>You will not have to pay a fee to exercise any of your rights. However, if your request is clearly unfounded, repetitive or excessive, we may charge a reasonable fee for this information or refuse to comply with your request.</Text></li>
          <li><Text>We may request specific information from you to help us confirm your identity when you contact us and ensure. This is a security measure to ensure that personal data is not disclosed to any person who does not have the right to receive it.</Text></li>
          <li><Text>We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</Text></li>
        </ol>

        <li><Text><strong>Changes to this Policy</strong></Text></li>

        <ol>
          <li><Text>{ COMPANY } reserves the right to change this Privacy Policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Web Site and you are deemed to have accepted the terms of the Policy on your first use of the Web Site following the alterations.</Text></li>
        </ol>

        <li><Text><strong>Cookies</strong></Text></li>

        <ol>
          <li><Text>{ COMPANY } may set and access Cookies on your computer. First-party Cookies that may be placed on your computer are detailed in Schedule 2 and third-party Cookies that may be placed on your computer are detailed in Schedule 2. All Cookies used by the Web Site are used in accordance with the provisions of the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011.] { COMPANY } has carefully chosen these Cookies and uses them to facilitate certain functions and features of the Web Site. We also use Cookies for analytics purposes. These Cookies track your movements and activities on the Web Site and are designed to give us a better understanding of our users, thus enabling us to improve the Web Site and our services.</Text></li>
          <li><Text>Before the Web Site sets Cookies on your computer, you will be presented with a notification requesting your consent to set those Cookies. None of the Cookies set by the Web Site jeopardise your privacy in any way and no personal data is collected. By giving your consent to the setting of our Cookies you are enabling us to provide the best possible experience and service to you through our Web Site. If you wish to deny your consent to the placing of Cookies, certain features of the Web Site may not function fully or as intended.</Text></li>
          <li><Text>Certain features of the Web Site depend upon Cookies to function and are deemed, within the law, to be strictly necessary. These Cookies are detailed in Schedule 2A. You will not be asked for your consent to place these Cookies however you may still disable cookies via your web browser’s settings, as set out in sub-Clause 11.4.</Text></li>
          <li><Text>You can choose to enable or disable Cookies in your web browser. By default, your browser will accept Cookies, however this can be altered. For further details please consult the help menu in your browser. Disabling Cookies may prevent you from using the full range of Services available on the Web Site.</Text></li>
          <li><Text>You may delete Cookies at any time however you may lose any information that enables you to access the Web Site more quickly.</Text></li>
          <li><Text>The Web Site uses the third-party Cookies detailed in Schedule 3 for the purposes described therein. These Cookies are not integral to the services provided by the Web Site to you and may be blocked at your choosing via your internet browser’s privacy settings or via your response to the request for consent detailed in sub-Clause 11.2.</Text></li>
          <li><Text>It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your browser if you are unsure as to how to adjust your privacy settings.</Text></li>
        </ol>
      </ol>

      <h3>Schedule 1: Personal Data</h3>

      <h4>Part 1: Types of personal data</h4>

      <ul>
        <li><Text>contact data - billing address, delivery address, email address and telephone number</Text></li>
        <li><Text>financial data - bank account and payment card details</Text></li>
        <li><Text>identity data - first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender</Text></li>
        <li><Text>marketing and communication data - your preferences in receiving marketing from us and our third parties and your communication preferences</Text></li>
        <li><Text>profile data - your username and password, purchase or orders made by you, preferences, feedback and survey responses</Text></li>
        <li><Text>technical data - internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access our website</Text></li>
        <li><Text>transaction data - details about payments to and from you and other details of products and services you have purchased from us</Text></li>
      </ul>

      <h4>Part 2: Lawful basis for processing and processing activities</h4>

      <Text>The lawful basis upon which we may rely on to process your personal data are:</Text>

      <ul>
        <li><Text>Consent you have given your express consent for us to process your personal data for a specific purpose</Text></li>
        <li><Text>Contract the processing is necessary for us to perform our contractual obligations with you under our contract, or because you have asked us to take specific steps before entering into a contract with you</Text></li>
        <li><Text>legal obligation the processing is necessary for us to comply with legal or regulatory obligation.</Text></li>
        <li><Text>legitimate interests the processing is necessary for our or a third party’s legitimate interest e.g. in order for us to provide the best service to you via our website. Before we process your personal data on this basis we make sure we consider and balance any potential impact on you, and we will not use your personal data on this basis where such impact outweighs our interest</Text></li>
      </ul>

      <Text>Set out below are specific details of the processing activities we undertake with your personal data and the lawful basis for doing this.</Text>

      <ul>
        <li><Text>to register you as a new customer identity & contact to perform our contract with you</Text></li>
        <li><Text>to process and deliver your order, manage payments, fees and charges and debt recovery identity, contact, financial, transaction and marketing & communications (i) to perform our contract with you;</Text></li>
        <ul>
          <li><Text>as necessary for our legitimate interest in recovering debts due to us.</Text></li>
        </ul>
        <li><Text>to manage our relationship with you, notifying you about changes to our Terms or Privacy Policy and ask you to leave a review or take a survey, identity, contact, profile & marketing & communications (i) to perform our contract with you </Text></li>
        <ul>
          <li><Text>as necessary to comply with a legal obligation</Text></li>
          <li><Text>as necessary for our legitimate interests in keeping our records updated and analysing how customers use our products/services.</Text></li>
        </ul>
        <li><Text>to administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data) identity, contact & technical (i) as necessary for our legitimate interests in running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise</Text></li>
        <ul>
          <li><Text>as necessary to comply with any legal obligations</Text></li>
        </ul>
        <li><Text>to deliver relevant website content/advertisements to you and measure or understand the effectiveness of our advertising identity, contact, profile, usage, marketing & communications & technical as necessary for our legitimate interests in studying how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy</Text></li>
        <li><Text>to use data analytics to improve our website, products/services, marketing, customer relationships and experiences technical & usage as necessary for our legitimate interests to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy</Text></li>
        <li><Text>to make suggestions and recommendations to you about goods or services that may be of interest to you, including promotional offers identity, contact, technical, usage & profile as necessary for our legitimate interests to develop our products/services and grow our business</Text></li>
      </ul>

      <h4>Part 3: Your legal rights</h4>

      <Text>You have the following legal rights in relation to your personal data:</Text>

      <ul>
        <li><Text>access your data you can ask for access to and a copy of your personal data and can check we are lawfully processing it</Text></li>
        <li><Text>correction you can ask us to correct any incomplete or inaccurate personal data we hold about you</Text></li>
        <li><Text>erasure you can ask us to delete or remove your personal data where:</Text></li>
        <ul>
          <li><Text>there is no good reason for us continuing to process it;</Text></li>
          <li><Text>you have successfully exercised your right to object (see below);</Text></li>
          <li><Text>we may have processed your information unlawfully; or</Text></li>
          <li><Text>we are required to erase your personal data to comply with local law.</Text></li>
          <li><Text>We may not always be able to comply with your request for specific legal reasons, which will be notified to you at the time of your request</Text></li>
        </ul>
        <li><Text>object you can object to the processing of your personal data where:</Text></li>
        <ul>
          <li><Text>where we are relying on our legitimate interest (or those of a third party) as the basis for processing your personal data, if you feel it impacts on your fundamental rights and freedoms;</Text></li>
          <li><Text>where we are processing your personal data for direct marketing purposes.</Text></li>
          <li><Text>in some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms, and, in such circumstances, we can continue to process your persona data for such purposes</Text></li>
        </ul>
        <li><Text>restrict processing you can ask us to us to suspend or restrict the processing of your personal data, if:</Text></li>
        <ul>
          <li><Text>you want us to establish the accuracy of your personal data;</Text></li>
          <li><Text>our use of your personal data is unlawful, but you do not want us to erase it;</Text></li>
          <li><Text>you need us to hold your personal data (where we no longer require it) as you need it to establish, exercise or defend legal claims; or</Text></li>
          <li><Text>you have objected to our use of your personal data, but we need to verify whether we have overriding legitimate grounds to use it</Text></li>
        </ul>
        <li><Text>request a transfer you can request a transfer of your personal data which is held in an automated manner and which you provided your consent for us to process such personal data or which we need to process to perform our contact with you, to you or a third party. We will provide your personal data in a structured, commonly used, machine-readable format</Text></li>
        <li><Text>withdraw your consent you can withdraw your consent at any time (where we are relying on consent to process your personal data). This does not affect the lawfulness of any processing carried out before you withdraw your consent</Text></li>
      </ul>

      <h4>Part 4: Third Parties</h4>

      <ul>
        <li><Text>service providers acting as processors or controllers based in the EEA but also around the world who provide services and IT and system administration services.</Text></li>
        <li><Text>professional advisors acting as processors or joint controllers including lawyers, bankers, auditors and insurers based in the United Kingdom who provide consultancy, banking, legal, insurance and accounting services</Text></li>
        <li><Text>HM Revenue & Customs, regulators and other authorities acting as processors or joint controllers based in the EEA who require reporting of processing activities in certain circumstances</Text></li>
        <li><Text>third parties whom we may choose to sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this Privacy Policy</Text></li>
      </ul>

      <h4>Part 5: Glossary</h4>

      <ul>
        <li><Text>aggregated data - information such as statistical or demographic data which may be derived from personal data, but which cannot by itself identify a data subject
        controller a body that determines the purposes and means of processing personal data</Text></li>
        <li><Text>data subject - an individual living person identified by personal data (which will generally be you)</Text></li>
        <li><Text>personal data - information identifying a data subject from that data alone or with other data we may hold but it does not include anonymised or aggregated data
        processor a body that is responsible for processing personal data on behalf of a controller</Text></li>
        <li><Text>special categories of personal data - information about race, ethnicity political opinions, religious or philosophical beliefs, trade union membership, health, genetic, biometric data, sex life, sexual orientation.</Text></li>
        <li><Text>ICO - Information Commissioner’s Office, the UK’s supervisory authority for data protection issues</Text></li>
      </ul>

      <h3>Schedule 2: First-Party Cookies</h3>

      <ul>
        <li><Text>None.</Text></li>
      </ul>

      <h3>Schedule 2A: Strictly Necessary Cookies</h3>

      <ul>
        <li><Text>{ URL } auth cookie, for authentication purposes</Text></li>
      </ul>

      <h3>Schedule 3: Third-Party Cookies</h3>

      <ul>
        <li><Text>Google Analytics, for analytics purposes</Text></li>
      </ul>
    </Page>
  )
}

export default PrivacyPolicy
