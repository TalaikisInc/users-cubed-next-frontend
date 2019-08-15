import React, { Component } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

import Loader from 'components/elements/loader'
import { DESCRIPTIONS, COMPANY, URL, DPM_EMAIL } from '../../config'
import { t } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Par from 'components/elements/par'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class PrivacyPolicy extends Component {
  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    return { }
  }

  render () {
    const { locale } = this.props
    const url = locale !== 'en' ? `${URL}/privacy-policy/${locale}` : `${URL}/privacy-policy`

    return (
      <Page title={t('privacy')} description={DESCRIPTIONS.privacyPolicy} path={url} locale={locale}>
        <Par>This Policy applies as between you, the User of this Web Site and { COMPANY } the owner and provider of this Web Site. This Policy applies to our use of any and all Data collected by us in relation to your use of the Web Site and any Services or Systems therein.</Par>

        <ol>
          <li><Par><strong>Important information</strong></Par></li>

          <ol>
            <li><Par>Our website is not intended for children and we do not knowingly collect data relating to children.</Par></li>
            <li><Par>This Privacy Policy supplements the other policies (including our terms of use (Terms)) and is not intended to override them. </Par></li>
            <li><Par>{ COMPANY } is the controller and responsible for your personal data (we, us or our).</Par></li>
            <li><Par>To assist you further in understanding this Privacy Policy, we have set out in Part 5 of Schedule 1 a glossary of terms used, examples of types of personal data we collect, how we use it, the lawful basis for processing such data and further details of your rights.</Par></li>
            <li><Par>We have appointed a data privacy manager (DPM). If you have any questions about this Privacy Policy, including any requests to exercise your legal rights, please contact our DPM in writing, either:</Par></li>
            <li><Par>By email to: { DPM_EMAIL }</Par></li>
            <li><Par>You have the right to make a complaint at any time to the ICO (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.</Par></li>
            <li><Par>It is important that the data we hold about you is accurate and current, therefore please keep us informed of any changes to your personal data.</Par></li>
            <li><Par>Our website may include links to third-party websites, plug-ins and applications. By clicking on these links or enabling connections you may be allowing third parties to collect or share your personal data. We have no control these third-party websites, plug in or applications and are not responsible for their privacy policies, therefore you should also read their privacy policy to understand what personal data they collect about you and how they use it.</Par></li>
          </ol>

          <li><Par><strong>The data we collect about you</strong></Par></li>

          <ol>
            <li><Par>We may collect, use, store and transfer the types of personal data about you listed in Part 1 of Schedule 1.</Par></li>
            <li><Par>We also collect, use and share aggregated data. However, if we combine aggregated data with your personal data so that it can directly or indirectly identify you, we treat this as your personal data.</Par></li>
            <li><Par>We do not collect any special categories of personal data or any information about criminal convictions and offences.</Par></li>
            <li><Par>If we are required by law, or under the terms of a contract we have with you, to collect your personal data and you fail to provide it, we may not be able to enter into perform the contract with you and, we may have to cancel a product or service. We will notify you of this at the relevant time.</Par></li>
          </ol>

          <li><Par><strong>How personal data is collected</strong>. We collect personal data in the following ways:</Par></li>

          <ul>
            <li><Par> direct interactions - you may provide personal data when you complete online forms, request products/services, subscribe to our services, create a user account, join our mailing list, or otherwise or correspond with us (by post, phone or email)</Par></li>
            <li><Par>automated technology - we automatically collect personal data (technical and usage) when you browse or interact with our website, by using cookies, server logs and other similar technologies. We may also receive technical data about you if you visit other websites which use our cookies.</Par></li>
            <li><Par>publicly available sources we may collect personal data from publicly availably sources such as Companies House and the Electoral Register and credit reference agencies, based inside the EU.</Par></li>
            <li><Par>third parties - we may receive personal data from: (a) analytics providers based outside the EU (such as Google); (b) advertising networks based inside OR outside the EU]; and (c) search information providers based inside OR outside the EU; (d) our suppliers such as payment providers, delivery services, website support and maintenance providers.</Par></li>
          </ul>

          <li><Par><strong>How we use your personal data</strong></Par></li>

          <ol>
            <li><Par>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data:</Par></li>
            <li><Par>To perform the contract, we are to enter into or have entered into with you;</Par></li>
            <li><Par>To comply with a legal obligation; and</Par></li>
            <li><Par>Where it is necessary to carry out our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</Par></li>
            <li><Par>Part 2 of Schedule 1 sets out the lawful basis we will rely on to process your personal data.</Par></li>
            <li><Par>We do generally only rely on consent as a legal basis for processing your personal data to send email and SMS marketing communications and you have the right to withdraw your consent at any time by contacting us. Please note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your information.</Par></li>
            <li><Par>We may analyse your personal data to form a view on what products and or services we think may be of interest to you. You will only receive marketing communications from us, if you have requested information from us or purchased services from us, if you consent to marketing at the time we collect your personal data and you have not subsequently opted out or withdrawn your consent or if we have another basis to send you the marketing communications.</Par></li>
            <li><Par>We will get your express opt-in consent before we share your personal data with any third party for marketing purposes. We will not share your personal data with third parties for their marketing purposes.</Par></li>
            <li><Par>You can opt out of email marketing by clicking the unsubscribe button within the marketing email. You can also withdraw your consent to marketing at any time by contacting our DPM.</Par></li>
            <li><Par>Even if you opt out of receiving marketing, we may still use your personal data for other purposes provided we have a lawful basis to do so.</Par></li>
            <li><Par>We will only use your personal data for the purpose that we originally collected it for, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose.</Par></li>
            <li><Par>If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to use your personal data in this manner.</Par></li>
            <li><Par>We may process your personal data (without your knowledge or consent) where this is required or permitted by law.</Par></li>
          </ol>

          <li><Par><strong>Disclosure of your personal data</strong></Par></li>

          <ol>
            <li><Par>We may have to share your personal data with third parties further details of which are set out in Part 4 of Schedule 1. We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes. They can only process your personal data for specified purposes and in accordance with our instructions.</Par></li>
          </ol>

          <li><Par><strong>International transfers</strong></Par></li>

          <ol>
            <li><Par>We do not transfer your personal data outside the European Economic Area (EEA).</Par></li>
            <li><Par>OR We share your personal data within the { COMPANY } Group. This will involve transferring your data outside the European Economic Area (EEA).</Par></li>
            <li><Par>Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</Par></li>
            <li><Par>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission.</Par></li>
            <li><Par>We use specific contracts approved by the European Commission which give personal data the same protection it has in Europe with our services providers;</Par></li>
            <li><Par>We may transfer data to US based service providers under the Privacy Shield which requires them to provide similar protection to personal data shared between the EU and the US.</Par></li>
            <li><Par>Please contact us if you want further information on the specific mechanism used by us when transferring your personal data.</Par></li>
          </ol>

          <li><Par><strong>Data security</strong></Par></li>

          <ol>
            <li><Par>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We also limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know and they can only process your personal data on our instructions and will be subject to a duty of confidentiality.</Par></li>
            <li><Par>We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</Par></li>
          </ol>

          <li><Par><strong>Data retention</strong></Par></li>

          <ol>
            <li><Par>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</Par></li>
            <li><Par>Details of retention periods for different aspects of your personal data are available in our retention policy which you can request from us. However, we are legally required to keep basic information about our customers (including contact, identity, financial and transaction data) for six years after they cease being customers, for tax purposes.</Par></li>
            <li><Par>We may also anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes. We can use anonymised information indefinitely without further notice to you.</Par></li>
          </ol>

          <li><Par><strong>Your legal rights</strong></Par></li>

          <ol>
            <li><Par>You have certain rights in certain circumstances under data protection law. These are set out in full in Part 3 of Schedule 1. If you wish to exercise any of your rights, please contact our DPM.</Par></li>
            <li><Par>You will not have to pay a fee to exercise any of your rights. However, if your request is clearly unfounded, repetitive or excessive, we may charge a reasonable fee for this information or refuse to comply with your request.</Par></li>
            <li><Par>We may request specific information from you to help us confirm your identity when you contact us and ensure. This is a security measure to ensure that personal data is not disclosed to any person who does not have the right to receive it.</Par></li>
            <li><Par>We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</Par></li>
          </ol>

          <li><Par><strong>Changes to this Policy</strong></Par></li>

          <ol>
            <li><Par>{ COMPANY } reserves the right to change this Privacy Policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Web Site and you are deemed to have accepted the terms of the Policy on your first use of the Web Site following the alterations.</Par></li>
          </ol>

          <li><Par><strong>Cookies</strong></Par></li>

          <ol>
            <li><Par>{ COMPANY } may set and access Cookies on your computer. First-party Cookies that may be placed on your computer are detailed in Schedule 2 and third-party Cookies that may be placed on your computer are detailed in Schedule 2. All Cookies used by the Web Site are used in accordance with the provisions of the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011.] { COMPANY } has carefully chosen these Cookies and uses them to facilitate certain functions and features of the Web Site. We also use Cookies for analytics purposes. These Cookies track your movements and activities on the Web Site and are designed to give us a better understanding of our users, thus enabling us to improve the Web Site and our services.</Par></li>
            <li><Par>Before the Web Site sets Cookies on your computer, you will be presented with a notification requesting your consent to set those Cookies. None of the Cookies set by the Web Site jeopardise your privacy in any way and no personal data is collected. By giving your consent to the setting of our Cookies you are enabling us to provide the best possible experience and service to you through our Web Site. If you wish to deny your consent to the placing of Cookies, certain features of the Web Site may not function fully or as intended.</Par></li>
            <li><Par>Certain features of the Web Site depend upon Cookies to function and are deemed, within the law, to be strictly necessary. These Cookies are detailed in Schedule 2A. You will not be asked for your consent to place these Cookies however you may still disable cookies via your web browser’s settings, as set out in sub-Clause 11.4.</Par></li>
            <li><Par>You can choose to enable or disable Cookies in your web browser. By default, your browser will accept Cookies, however this can be altered. For further details please consult the help menu in your browser. Disabling Cookies may prevent you from using the full range of Services available on the Web Site.</Par></li>
            <li><Par>You may delete Cookies at any time however you may lose any information that enables you to access the Web Site more quickly.</Par></li>
            <li><Par>The Web Site uses the third-party Cookies detailed in Schedule 3 for the purposes described therein. These Cookies are not integral to the services provided by the Web Site to you and may be blocked at your choosing via your internet browser’s privacy settings or via your response to the request for consent detailed in sub-Clause 11.2.</Par></li>
            <li><Par>It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your browser if you are unsure as to how to adjust your privacy settings.</Par></li>
          </ol>
        </ol>

        <h3>Schedule 1: Personal Data</h3>

        <h4>Part 1: Types of personal data</h4>

        <ul className="lead">
          <li><Par>contact data - billing address, delivery address, email address and telephone number</Par></li>
          <li><Par>financial data - bank account and payment card details</Par></li>
          <li><Par>identity data - first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender</Par></li>
          <li><Par>marketing and communication data - your preferences in receiving marketing from us and our third parties and your communication preferences</Par></li>
          <li><Par>profile data - your username and password, purchase or orders made by you, preferences, feedback and survey responses</Par></li>
          <li><Par>technical data - internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access our website</Par></li>
          <li><Par>transaction data - details about payments to and from you and other details of products and services you have purchased from us</Par></li>
        </ul>

        <h4>Part 2: Lawful basis for processing and processing activities</h4>

        <Par>The lawful basis upon which we may rely on to process your personal data are:</Par>

        <ul className="lead">
          <li><Par>Consent you have given your express consent for us to process your personal data for a specific purpose</Par></li>
          <li><Par>Contract the processing is necessary for us to perform our contractual obligations with you under our contract, or because you have asked us to take specific steps before entering into a contract with you</Par></li>
          <li><Par>legal obligation the processing is necessary for us to comply with legal or regulatory obligation.</Par></li>
          <li><Par>legitimate interests the processing is necessary for our or a third party’s legitimate interest e.g. in order for us to provide the best service to you via our website. Before we process your personal data on this basis we make sure we consider and balance any potential impact on you, and we will not use your personal data on this basis where such impact outweighs our interest</Par></li>
        </ul>

        <Par>Set out below are specific details of the processing activities we undertake with your personal data and the lawful basis for doing this.</Par>

        <ul className="lead">
          <li><Par>to register you as a new customer identity & contact to perform our contract with you</Par></li>
          <li><Par>to process and deliver your order, manage payments, fees and charges and debt recovery identity, contact, financial, transaction and marketing & communications (i) to perform our contract with you;</Par></li>
          <ul>
            <li><Par>as necessary for our legitimate interest in recovering debts due to us.</Par></li>
          </ul>
          <li><Par>to manage our relationship with you, notifying you about changes to our Terms or Privacy Policy and ask you to leave a review or take a survey, identity, contact, profile & marketing & communications (i) to perform our contract with you </Par></li>
          <ul>
            <li><Par>as necessary to comply with a legal obligation</Par></li>
            <li><Par>as necessary for our legitimate interests in keeping our records updated and analysing how customers use our products/services.</Par></li>
          </ul>
          <li><Par>to administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data) identity, contact & technical (i) as necessary for our legitimate interests in running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise</Par></li>
          <ul>
            <li><Par>as necessary to comply with any legal obligations</Par></li>
          </ul>
          <li><Par>to deliver relevant website content/advertisements to you and measure or understand the effectiveness of our advertising identity, contact, profile, usage, marketing & communications & technical as necessary for our legitimate interests in studying how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy</Par></li>
          <li><Par>to use data analytics to improve our website, products/services, marketing, customer relationships and experiences technical & usage as necessary for our legitimate interests to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy</Par></li>
          <li><Par>to make suggestions and recommendations to you about goods or services that may be of interest to you, including promotional offers identity, contact, technical, usage & profile as necessary for our legitimate interests to develop our products/services and grow our business</Par></li>
        </ul>

        <h4>Part 3: Your legal rights</h4>

        <Par>You have the following legal rights in relation to your personal data:</Par>

        <ul>
          <li><Par>access your data you can ask for access to and a copy of your personal data and can check we are lawfully processing it</Par></li>
          <li><Par>correction you can ask us to correct any incomplete or inaccurate personal data we hold about you</Par></li>
          <li><Par>erasure you can ask us to delete or remove your personal data where:</Par></li>
          <ul>
            <li><Par>there is no good reason for us continuing to process it;</Par></li>
            <li><Par>you have successfully exercised your right to object (see below);</Par></li>
            <li><Par>we may have processed your information unlawfully; or</Par></li>
            <li><Par>we are required to erase your personal data to comply with local law.</Par></li>
            <li><Par>We may not always be able to comply with your request for specific legal reasons, which will be notified to you at the time of your request</Par></li>
          </ul>
          <li><Par>object you can object to the processing of your personal data where:</Par></li>
          <ul>
            <li><Par>where we are relying on our legitimate interest (or those of a third party) as the basis for processing your personal data, if you feel it impacts on your fundamental rights and freedoms;</Par></li>
            <li><Par>where we are processing your personal data for direct marketing purposes.</Par></li>
            <li><Par>in some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms, and, in such circumstances, we can continue to process your persona data for such purposes</Par></li>
          </ul>
          <li><Par>restrict processing you can ask us to us to suspend or restrict the processing of your personal data, if:</Par></li>
          <ul>
            <li><Par>you want us to establish the accuracy of your personal data;</Par></li>
            <li><Par>our use of your personal data is unlawful, but you do not want us to erase it;</Par></li>
            <li><Par>you need us to hold your personal data (where we no longer require it) as you need it to establish, exercise or defend legal claims; or</Par></li>
            <li><Par>you have objected to our use of your personal data, but we need to verify whether we have overriding legitimate grounds to use it</Par></li>
          </ul>
          <li><Par>request a transfer you can request a transfer of your personal data which is held in an automated manner and which you provided your consent for us to process such personal data or which we need to process to perform our contact with you, to you or a third party. We will provide your personal data in a structured, commonly used, machine-readable format</Par></li>
          <li><Par>withdraw your consent you can withdraw your consent at any time (where we are relying on consent to process your personal data). This does not affect the lawfulness of any processing carried out before you withdraw your consent</Par></li>
        </ul>

        <h4>Part 4: Third Parties</h4>

        <ul className="lead">
          <li><Par>service providers acting as processors or controllers based in the EEA but also around the world who provide services and IT and system administration services.</Par></li>
          <li><Par>professional advisors acting as processors or joint controllers including lawyers, bankers, auditors and insurers based in the United Kingdom who provide consultancy, banking, legal, insurance and accounting services</Par></li>
          <li><Par>HM Revenue & Customs, regulators and other authorities acting as processors or joint controllers based in the EEA who require reporting of processing activities in certain circumstances</Par></li>
          <li><Par>third parties whom we may choose to sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this Privacy Policy</Par></li>
        </ul>

        <h4>Part 5: Glossary</h4>

        <ul className="lead">
          <li><Par>aggregated data - information such as statistical or demographic data which may be derived from personal data, but which cannot by itself identify a data subject
          controller a body that determines the purposes and means of processing personal data</Par></li>
          <li><Par>data subject - an individual living person identified by personal data (which will generally be you)</Par></li>
          <li><Par>personal data - information identifying a data subject from that data alone or with other data we may hold but it does not include anonymised or aggregated data
          processor a body that is responsible for processing personal data on behalf of a controller</Par></li>
          <li><Par>special categories of personal data - information about race, ethnicity political opinions, religious or philosophical beliefs, trade union membership, health, genetic, biometric data, sex life, sexual orientation.</Par></li>
          <li><Par>ICO - Information Commissioner’s Office, the UK’s supervisory authority for data protection issues</Par></li>
        </ul>

        <h3>Schedule 2: First-Party Cookies</h3>

        <ul className="lead">
          <li><Par>None.</Par></li>
        </ul>

        <h3>Schedule 2A: Strictly Necessary Cookies</h3>

        <ul className="lead">
          <li><Par>{ URL } auth cookie, for authentication purposes</Par></li>
        </ul>

        <h3>Schedule 3: Third-Party Cookies</h3>

        <ul className="lead">
          <li><Par>Google Analytics, for analytics purposes</Par></li>
        </ul>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: state.utils.locale
})

export default connect(mapStateToProps, null)(PrivacyPolicy)