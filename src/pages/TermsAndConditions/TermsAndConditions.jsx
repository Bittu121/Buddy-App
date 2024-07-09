import React from "react";
import styles from "./TermsAndConditions.module.css";
import Privacy from "../TermsAndConditions/Privacy";
import useIsMobile from "../useIsMobile";
const TermsAndConditions = ({}) => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className={styles.termsAndConditions} id="termAndCondionSection">
        <h1 className={styles.termsAndcConditionsHeading}>
          Terms and Conditions
        </h1>
        {isMobile ? (
          <div className={styles.termsAndConditionsContent}>
            <p>
              These Terms and Conditions ("Terms") govern your use of Buddy, By
              accessing or using the Website, you agree to be bound by these
              Terms. If you disagree with any part of the Terms, you may not
              access the Website.
            </p>
            <h2>1. Use of the Website:</h2>
            <li>You must be at least 18 years old to use the Website.</li>
            <li>
              You agree to provide accurate and complete information when using
              the Website.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account and password.
            </li>

            <h2>2. Intellectual Property:</h2>
            <li>
              All content on the Website, including text, graphics, logos,
              images, and software, is the property of Buddy App or its
              licensors and is protected by copyright laws.
            </li>
            <li>
              You may not use, reproduce, distribute, or modify any content from
              the Website without prior written consent.
            </li>

            <h2>3. Third-Party Links:</h2>
            <li>
              The Website may contain links to third-party websites or services
              that are not owned or controlled by Buddy App.
            </li>
            <li>
              Buddy App has no control over, and assumes no responsibility for,
              the content, privacy policies, or practices of any third-party
              websites or services.
            </li>

            <h2>4. Limitation of Liability:</h2>
            <li>
              Buddy App shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or
              related to your use of the Website.
            </li>
            <li>
              Buddy App makes no warranties or representations about the
              accuracy or completeness of the content on the Website.
            </li>

            <h2>5. Indemnification:</h2>
            <li>
              You agree to indemnify and hold harmless Buddy App and its
              affiliates, officers, directors, employees, and agents from any
              and all claims, liabilities, damages, and expenses arising out of
              or related to your use of the Website.
            </li>

            <h2>6. Changes to Terms:</h2>
            <li>
              Buddy App reserves the right to modify or replace these Terms at
              any time. Changes will be effective immediately upon posting on
              the Website.
            </li>
            <li>
              It is your responsibility to review these Terms periodically for
              changes.
            </li>

            <h2>7. Governing Law: </h2>
            <li>
              These Terms shall be governed by and construed in accordance with
              the laws of local courts, without regard to its conflict of law
              provisions.
            </li>
            <li>
              Any dispute arising out of or related to these Terms shall be
              subject to the exclusive jurisdiction of the courts of local
              courts.
            </li>
            <p>
              By continuing to access or use the Website after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Website.
            </p>
          </div>
        ) : (
          <div className={styles.termsAndConditionsContent}>
            <p>
              These Terms and Conditions ("Terms") govern your use of Buddy, By
              accessing or using the
              <br /> Website, you agree to be bound by these Terms. If you
              disagree with any part of the Terms,
              <br /> you may not access the Website.
            </p>
            <h2>1. Use of the Website:</h2>
            <li>You must be at least 18 years old to use the Website.</li>
            <li>
              You agree to provide accurate and complete information when using
              the Website.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account and password.
            </li>

            <h2>2. Intellectual Property:</h2>
            <li>
              All content on the Website, including text, graphics, logos,
              images, and software, is
              <br /> the property of Buddy App or its licensors and is protected
              by copyright laws.
            </li>
            <li>
              You may not use, reproduce, distribute, or modify any content from
              the Website
              <br /> without prior written consent.
            </li>

            <h2>3. Third-Party Links:</h2>
            <li>
              The Website may contain links to third-party websites or services
              that are not owned
              <br /> or controlled by Buddy App.
            </li>
            <li>
              Buddy App has no control over, and assumes no responsibility for,
              the content,
              <br /> privacy policies, or practices of any third-party websites
              or services.
            </li>

            <h2>4. Limitation of Liability:</h2>
            <li>
              Buddy App shall not be liable for any indirect, incidental,
              special,
              <br /> consequential, or punitive damages arising out of or
              related to your use of
              <br /> the Website.
            </li>
            <li>
              Buddy App makes no warranties or representations about the
              accuracy or
              <br /> completeness of the content on the Website.
            </li>

            <h2>5. Indemnification:</h2>
            <li>
              You agree to indemnify and hold harmless Buddy App and its
              affiliates, officers,
              <br /> directors, employees, and agents from any and all claims,
              liabilities, damages, and
              <br /> expenses arising out of or related to your use of the
              Website.
            </li>

            <h2>6. Changes to Terms:</h2>
            <li>
              Buddy App reserves the right to modify or replace these Terms at
              any time.
              <br /> Changes will be effective immediately upon posting on the
              Website.
            </li>
            <li>
              It is your responsibility to review these Terms periodically for
              changes.
            </li>

            <h2>7. Governing Law: </h2>
            <li>
              These Terms shall be governed by and construed in accordance with
              the laws of
              <br /> local courts, without regard to its conflict of law
              provisions.
            </li>
            <li>
              Any dispute arising out of or related to these Terms shall be
              subject to the exclusive
              <br /> jurisdiction of the courts of local courts.
            </li>
            <p>
              By continuing to access or use the Website after any revisions
              become effective, you agree
              <br /> to be bound by the revised terms. If you do not agree to
              the new terms, please stop using
              <br /> the Website.
            </p>
          </div>
        )}
      </div>
      <section id="privacyAndPolicySection"><Privacy /></section>
    </>
  );
};

export default TermsAndConditions;
