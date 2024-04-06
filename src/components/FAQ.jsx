// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       Login
//     </div>
//   )
// }

// export default Login

import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function FAQ() {
  return (
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="What should I do immediately after a disaster strikes?">
        Ensure your safety first.<br/>
          If needed, evacuate to a safe location.<br/>
          Check for injuries and administer first aid where possible.<br/>
          Follow local emergency instructions for further actions does limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="How can I find shelter if I've been displaced by a disaster?">
        Contact local authorities or emergency services for shelter locations.<br/>
Seek out community centers, schools, or designated relief shelters.<br/>
Use disaster relief apps or websites for updated shelter information.<br/>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="What should I pack in a disaster emergency kit?">
        Non-perishable food and water for several days.<br/>
Medications and a first aid kit.<br/>
Flashlight, batteries, and portable phone charger.<br/>
Important documents (ID, insurance papers, etc.) and cash.<br/>
Clothing, blankets, and personal hygiene items.<br/>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="What health risks should I be aware of after a disaster?">
        Contaminated water and foodborne illnesses.<br/>
Vector-borne diseases due to standing water.<br/>
Mental health challenges like stress and anxiety.<br/>
          Seek medical attention promptly for any health concerns.<br />
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="Where can I get information about rebuilding and recovery?">
        Attend community meetings or town halls for updates.<br/>
Utilize resources from disaster recovery agencies.<br/>
Connect with local rebuilding initiatives and support networks.<br />
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
};
