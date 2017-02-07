import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';

import {setStdTitlebar} from '../../header/actions';


const Legal = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    this.props.setTitlebar(this.props.title);
  },
  componentWillUpdate : function (nextProps) {
    this.props.setTitlebar(nextProps.title);
  },
  render : () => (
    <main id="main-container">
      <div id="main-content" className="full-size">
        <div id="legal-main">
          <h3>Presentation</h3>
          <p>This entire site is covered by French and international legislation regarding copyright and intellectual property. All reproduction rights are reserved, including downloadable documents and iconographic and photographic representations.</p>

          <p>The WikiCreation website is protected by intellectual property, both regarding its form (choice, layout, &nbsp;organisation of sections, methods of access to data, data organisation, ergonomics, arborescence, graphic design, structure, architecture, etc.) and regarding each element of its content (texts, images, photos, illustrations, logos, pictograms, maps, plans, etc.). You are not allowed to reproduce the HTML code of the pages on this server for the purpose of public distribution.</p>

          <p>Reproduction of all or part of this website through any media whatsoever is strictly prohibited. Any reproduction, representation or distribution, in whole or in part, of the content of this website, by any process or medium whatsoever, is prohibited without the express permission of the Project Director. Failure to comply with this prohibition constitutes an infringement that may result in civil and criminal penalties.</p>

          <p>Note: Violation of any copyright is an offense punishable, under Article L.335-2 of the Code of Intellectual Property, 2 years imprisonment and €150,000 fine.</p>

          <p>Wikicreation shall in no event be liable for any damages, direct or indirect, of any nature whatsoever, resulting from the use of information provided on this website.</p>

          <p>The implementation of hyperlinks by third parties to pages or documents published on the WikiCreation website is permitted provided that these links are not contrary to the interests of Wikicreation, and that they give the User the possibility to identify the origin and author of the document concerned.&nbsp;</p>
          <h3>Hosting</h3>
          <p>
            OVH <br/>
            CNRS – Centre national de la recherche scientifique<br/>
            3, rue Michel-Ange<br/>
            75794 Paris cedex 16 – France<br/>
            Tel : 01 44 96 40 00
          </p>
          <h3>Copyright</h3>

          <p>The presence of any material, whether text or graphics, in the pages of the WikiCreation website does not imply that this material is in the public domain. WikiCreation intends to preserve the moral rights of the authors concerned. Any reproduction for academic or study purposes by educational institutions or students in good faith is subject to an authorisation request.
          Any use, in whole or in part, and through any media whatsoever, for commercial purposes is strictly prohibited.</p>

          <h3>General Terms &amp; Conditions regarding the us of WikiCreation RSS feeds</h3>

          <p>Any downloading of Wikicreation RSS feeds implies express acceptance of all provisions of these Terms &amp; Conditions.</p>

          <h3>Introduction</h3>

          <p>The present General Terms &amp; Conditions govern the provision of Wikicreation RSS feeds, which are offered free for non-commercial use.
          By downloading, using and viewing a WikiCreation RSS feed, the User expressly acknowledges acceptance of all provisions of these General Terms &amp; Conditions.</p>

          <p>WikiCreation reserves the right to modify these General Terms &amp; Conditions at any time and at its sole discretion. The continued use of the Service following a change of these Terms &amp; Conditions constitutes a tacit acceptance of the new Terms &amp; Conditions.&nbsp;</p>

          <p>1 - Definition:</p>

          <p>“RSS Feed’: regular update of website content including links to the full version of that content. When the User signs up for the RSS feed of a website through a feed reader, a brief overview is sent to the User whenever the content of the website is updated. ’Service’: any downloading and/or use of Wikicreation RSS feeds. ‘User’: any individual who has downloaded and/or used WikiCreation RSS feeds.</p>

          <p>2 - Object:</p>

          <p>In accordance with these General Terms &amp; Conditions, WikiCreation grants the User the revocable, non-transferable, non-assignable, free and non-exclusive license to display on his/her website (‘Website’) or on his/her personal computer, the titles, lead paragraphs and/or active links and other information, including any promotional link, that the User has chosen to receive from WikiCreation through the Service, provided that no data from this Service is modified, corrected, expanded or deleted and that it is not used for commercial purposes. WikiCreation reserves the right, on a discretionary basis, to restrict, suspend or terminate the access of a User to all or part of the Service at any time and without being considered liable as a result. WikiCreation reserves the right to modify the Service at any time without the User being able to oppose this.</p>


          <p>3- Copyright ownership:</p>

          <p>The Service is protected by French laws and international conventions on copyright. All WikiCreation RSS feeds and intellectual property rights relating to the Service remain the property of WikiCreation. In addition, any additional programme or technology provided by WikiCreation in connection with the provision of the Service or other services remains the sole property of WikiCreation and no part thereof shall be regarded as having been transferred or licensed to the User. WikiCreation retains all the rights in relation to the Service that have not been expressly granted to the User under Article 2 of these General Terms and Conditions.</p>


          <p>4 - Obligations of the User:</p>

          <p>The User certifies to be over 18 years of age and to have the legal authority to use the Service in accordance with these General Terms &amp; Conditions. To use the Service, the User must comply with the following rules: - display the Service on his/her personal computer or Website in the exact form downloaded without any modification, correction, deletion or addition of any kind, without the prior written permission of Wikicreation.</p>

          <p>- ensure that the content of the Service may not be amended, corrected, expanded or deleted.</p>

          <p>- comply with all applicable laws and all limitations and restrictions (if any) imposed by Wikicreation on the use, display or distribution of the Service.</p>

          <p>- not to store any part of the Service so users can access it after the withdrawal of the Service from the website <a href="http://www.institut-acte.cnrs.fr/">www.institut-acte.cnrs.fr</a>.</p>

          <p>- allow at any time the display of the hyperlinks included in the content of the Service and allow for the successful redirection of these links to the corresponding pages on <a href="http://www.institut-acte.cnrs.fr">www.institut-acte.cnrs.fr</a>.</p>

          <p>- clearly mention on his/her Website that the Service is provided by WikiCreation, is protected by copyright and belongs to Wikicreation. Unless otherwise authorized by WikiCreation, the User is not allowed, directly or indirectly, to:</p>

          <p>- modify, expand, translate, reproduce, publish, transmit, distribute or otherwise disseminate all or part of the Service, or delete or fail to display any promotional link included in the Service</p>

          <p>- insert new clickable hyperlinks, whatever their nature, in the content of the Service - sell, lease or transfer the Service and its contents in any way whatsoever - display on his/her Website the name, logo, trademark, or any other identifying information giving visitors the impression that this individual is the publisher, distributor or owner of the Service.</p>

          <p>- delete, conceal or obliterate from the Service any mention of rights of property, credit or date, including, without any limitation whatsoever, the size, colour, location or style of the brands owned by WikiCreation.</p>

          <p>- use the Service on any Website displaying any false, offensive, defamatory, racist and pornographic content, or content contrary to public order and morality, or on a Website promoting or providing products or services that are illegal or likely to cause damage or harm to third parties.</p>

          <p>The User declares and guarantees WikiCreation that his/her brand(s) and/or the content of his/her Website, other than the Service, do not and will not infringe any trade or service marks, copyrights or other intellectual property rights owned by a third party, do not constitute misleading, deceptive or unfair advertising or disparagement under applicable laws, or do not fail to comply with the applicable legislation (including, for example, licensing requirements and administrative or professional rules).</p>

          <p>Violation of these provisions subjects the User and all individuals responsible to the applicable criminal and civil penalties provided for by French law.</p>

          <p>5- Responsibility of the User: The User assumes full responsibility for the selection and use of the Service, as well as the access to its content.</p>

          <p>WikiCreation assumes no liability for the User’s activity in connection with the Service. Any fraudulent, misleading or otherwise illegal activity constitutes a breach of these General Terms &amp; Conditions and grounds for termination of the Service. The User shall not conceal his/her identity, interfere or attempt to interfere with the proper operation of the Service. In case of use of the Service beyond the scope of the license granted in these General Terms &amp; Conditions, attempted tampering, hacking, theft, use of robots or scripts, reproduction, distribution, modification, expanding any portion of the Service or inserting new clickable hyperlinks, WikiCreation may bring any action against the User in order to stop the infringement and obtain compensation for the damage caused. The User agrees to fully indemnify Wikicreation (including attorneys fees), to defend and exonerate WikiCreation of any liability for damage suffered by WikiCreation or by a third party, of any kind whatsoever, due to: - non-compliance by the User to one or more of the provisions in these General Terms &amp; Conditions.</p>

          <p>- any fraudulent use of the Service through the User's account by a third party, whether it has been authorized by the User or not.</p>

          <p>- the operation and content of the User’s Website.</p>

          <p>6- WikiC&nbsp;reation disclaimer: Wikicreation strives, through an obligation of means, to ensure the reliability of the Service and the accuracy and updating of the information provided.</p>

          <p>WikiCreation reserves the right to modify at any time and without notice, the content on the www.wikicreation.fr&nbsp;website. The information provided on the website www.wikicreation.com is general in nature and are not necessarily exhaustive. They are not contractual and do not constitute legal advice. WikiCreation cannot be held responsible for the interpretation of this information, or the consequences of its use. WikiCreation disclaims any responsibility for the availability of the Service.</p>

          <p>WikiCreation does not guarantee uninterrupted operation of the Service. WikiCreation or any of its partners cannot be held responsible for direct or indirect damage that may result from errors, omissions or delays in the transmission of information. WikiCreation disclaims any liability for the fraudulent use of WikiCreation RSS feeds that could be made by third parties.</p>

          <p>The User therefore acknowledges using the Service at his/her own risk.</p>

          <p>7- Duration:</p>

          <p>The acceptance of these General Terms &amp; Conditions by the User takes effect when the User installs WikiCreation RSS feeds. The User may terminate the license granted by destroying or removing from all hard drives, networks, servers and other storage media all copies of the Service.</p>

          <p>WikiCreation reserves the right to restrict and suspend the Service, temporarily or permanently, at any time, without first informing the User and without being held liable in any way whatsoever.</p>


          <p>8 - Miscellaneous information:</p>

          <p>These General Terms &amp; Conditions are exclusively subject to French Legislation and Jurisdiction. Any action relating to these General Terms &amp; Conditions will always be brought before the court of the competent jurisdiction of Paris.</p>

          <p>WikiCreation is not responsible for the financial costs of establishing a connection (by any means whatsoever) to the website www.institut-acte.cnrs.fr, to the Service or another online service, or more generally, to the internet. All Parties mentioned in the General Terms &amp; Conditions are independent contractors, and the provisions of these Terms &amp; Conditions do not constitute a supplier contract, a joint venture, an agency, a franchise, sales representation or an employer/employee relationship between WikiCreation and the User. Nothing in these General Terms &amp; Conditions shall have the effect of limiting or restricting the ability of WikiCreation to form a contract with any other individual providing identical services to those offered by the Website of the User or to provide similar services itself.</p>
        </div>
      </div>
    </main>
  )
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.legal.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Legal);
