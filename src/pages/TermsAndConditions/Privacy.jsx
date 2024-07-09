import React from "react";
import styles from "../TermsAndConditions/TermsAndConditions.module.css";
import useIsMobile from "../useIsMobile";
const Privacy = ({}) => {
  // const privacyRef = React.useRef();
  const isMobile = useIsMobile();
  return (
    <>
      <div className={styles.privacyPolicy} id="privacyPolicyPage">
        <h1 className={styles.privacyPolicyHeading}>Privacy Policy</h1>
        {isMobile ? (
          <div className={styles.privacyPolicyContent}>
            <h2>1. Information Collection:</h2>
            <li>
              We may collect personal identification information from Users in a
              variety of ways, including, but not limited to, when Users visit
              our site, register on the site, place an order, subscribe to the
              newsletter, respond to a survey, fill out a form, and in
              connection with other activities, services, features, or resources
              we make available on our Website.
            </li>
            <li>
              Users may be asked for, as appropriate, name, email address,
              mailing address, phone number, credit card information. Users may,
              however, visit our Website anonymously. We will collect personal
              identification information from Users only if they voluntarily
              submit such information to us. Users can always refuse to supply
              personally identification information, except that it may prevent
              them from engaging in certain Website-related activities.
            </li>

            <h2>2. Information Usage:</h2>
            <li>
              We may collect and use Users personal information for the
              following purposes:
              <ul>
                <li>To improve customer service</li>
                <li>To personalize user experience</li>
                <li>To process payments</li>
                <li>To send periodic emails</li>
              </ul>
            </li>
            <li>
              We may use the email address to send User information and updates
              pertaining to their order. It may also be used to respond to their
              inquiries, questions, and/or other requests. If User decides to
              opt-in to our mailing list, they will receive emails that may
              include company news, updates, related product or service
              information, etc. If at any time the User would like to
              unsubscribe from receiving future emails, we include detailed
              unsubscribe instructions at the bottom of each email.
            </li>

            <h2>3. Information Protection:</h2>
            <li>
              We adopt appropriate data collection, storage, and processing
              practices and security measures to protect against unauthorized
              access, alteration, disclosure, or destruction of your personal
              information, username, password, transaction information, and data
              stored on our Website.
            </li>

            <h2>4.Changes to Privacy Policy:</h2>
            <li>
              Buddy App has the discretion to update this privacy policy at any
              time. When we do, we will revise the updated date at the bottom of
              this page. We encourage Users to frequently check this page for
              any changes to stay informed about how we are helping to protect
              the personal information we collect. You acknowledge and agree
              that it is your responsibility to review this privacy policy
              periodically and become aware of modifications.
            </li>

            <h2>5. Acceptance of Terms:</h2>
            <li>
              By using this Website, you signify your acceptance of this policy.
              If you do not agree to this policy, please do not use our Website.
              Your continued use of the Website following the posting of changes
              to this policy will be deemed your acceptance of those changes.
            </li>
            <p>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please contact us
              at [Contact Information].
            </p>
          </div>
        ) : (
          <div className={styles.privacyPolicyContent}>
            <h2>1. Information Collection:</h2>
            <li>
              We may collect personal identification information from Users in a
              variety of ways,
              <br /> including, but not limited to, when Users visit our site,
              register on the site, place an
              <br /> order, subscribe to the newsletter, respond to a survey,
              fill out a form, and in
              <br />
              connection with other activities, services, features, or resources
              we make available on
              <br /> our Website.
            </li>
            <li>
              Users may be asked for, as appropriate, name, email address,
              mailing address, phone
              <br /> number, credit card information. Users may, however, visit
              our Website anonymously.
              <br />
              We will collect personal identification information from Users
              only if they voluntarily
              <br /> submit such information to us. Users can always refuse to
              supply personally
              <br />
              identification information, except that it may prevent them from
              engaging in certain
              <br /> Website-related activities.
            </li>

            <h2>2. Information Usage:</h2>
            <li>
              We may collect and use Users personal information for the
              following purposes:
              <ul>
                <li>To improve customer service</li>
                <li>To personalize user experience</li>
                <li>To process payments</li>
                <li>To send periodic emails</li>
              </ul>
            </li>
            <li>
              We may use the email address to send User information and updates
              pertaining to
              <br /> their order. It may also be used to respond to their
              inquiries, questions, and/or other
              <br /> requests. If User decides to opt-in to our mailing list,
              they will receive emails that may
              <br />
              include company news, updates, related product or service
              information, etc.
              <br /> If at any time the User would like to unsubscribe from
              receiving future emails, we include
              <br /> detailed unsubscribe instructions at the bottom of each
              email.
            </li>

            <h2>3. Information Protection:</h2>
            <li>
              We adopt appropriate data collection, storage, and processing
              practices and security
              <br /> measures to protect against unauthorized access,
              alteration, disclosure, or
              <br /> destruction of your personal information, username,
              password, transaction
              <br /> information, and data stored on our Website.
            </li>

            <h2>4.Changes to Privacy Policy:</h2>
            <li>
              Buddy App has the discretion to update this privacy policy at any
              time. When
              <br /> we do, we will revise the updated date at the bottom of
              this page. We encourage
              <br /> Users to frequently check this page for any changes to stay
              informed about how we
              <br /> are helping to protect the personal information we collect.
              You acknowledge and
              <br />
              agree that it is your responsibility to review this privacy policy
              periodically and
              <br /> become aware of modifications.
            </li>

            <h2>5. Acceptance of Terms:</h2>
            <li>
              By using this Website, you signify your acceptance of this policy.
              If you do not agree
              <br /> to this policy, please do not use our Website. Your
              continued use of the Website
              <br /> following the posting of changes to this policy will be
              deemed your acceptance of
              <br /> those changes.
            </li>
            <p>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings
              <br /> with this site, please contact us at [Contact Information].
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Privacy;
