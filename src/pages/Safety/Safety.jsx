import React from "react";
import styles from "./Safety.module.css";
const Safety = () => {
  return (
    <>
      <div className={styles.safetyContainer}>
        <h1 className={styles.safetyContainerHeading}>
          Safety is paramount, and we take it seriously at Buddy App.
        </h1>
        <div className={styles.safetyContent}>
          <h2>Communicate Solely Through Buddy App</h2>
          <p>
            Using the Buddy App for all communication helps our Trust and Safety
            team respond promptly to any issues. Meeting in person is a
            violation of our Terms of Service, as we cannot guarantee user
            safety.
          </p>
          <h2>Review Profiles and References Diligently</h2>
          <p>
            Take the time to thoroughly review profiles, particularly what they
            share about themselves and what others have said about them. Not
            everyone will be compatible with what will make your trip the best
            it can be, so if something feels off, continue your search.
          </p>
          <h2>Have a Backup Plan</h2>
          <p>
            If your Buddy’s schedule falls through or doesn't meet expectations,
            please report them to us so that we can provide a refund, and
            contact another Buddy.
          </p>
          <h2>Respect Cultural Differences</h2>
          <p>
            Your Buddy will show you their part of the world, but it’s important
            to be polite, especially regarding cultural inquiries. While gender
            expectations and roles may vary significantly, you can educate
            yourself about the culture of your destination, including religious
            customs and societal norms, via resources such as the U.S.
            Department of State’s Travel Alerts and Warnings, the United
            Kingdom’s Foreign Travel Advice, or the Government of Canada’s
            Country Travel Advice and Advisories.
          </p>
          <h2>Leave Honest Feedback</h2>
          <p>
            After your conversation, utilize the Reference System to share your
            experiences with other Buddy App users. Be truthful and clear in
            your feedback - it benefits everyone.
          </p>
          <h2>Report Concerns</h2>
          <p>
            Our Trust and Safety team is dedicated to maintaining a secure
            community. If a person, situation, or profile raises concerns for
            any reason, move on. Communicate openly with others and prioritize
            your well-being, and report any safety issues or negative
            experiences confidentially through the Buddy App.
          </p>
        </div>
        <div className={styles.needHelpContainer}>
          <h2>Need Help?</h2>
          <p>Contact Our Safety Team for assistance.</p>
        </div>
      </div>
    </>
  );
};

export default Safety;
