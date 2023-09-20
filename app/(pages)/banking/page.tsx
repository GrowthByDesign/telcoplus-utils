import Promo from "./Promo";

const BankingPage = () => {
  return (
    <div>
      <div>Banking Page</div>
      <Promo
        imgSrc="https://www.telcoplus.org/wp-content/uploads/2023/09/Grow-CD-website.jpg"
        imgAlt="promotion"
        disclaimer="*Offer to end when each CD term reaches 2 million or Sept. 29, 2023!  The CD can only be opened at the new branch at 1010 S SE Loop 323, Tyler, TX 75701 in person!  **APY=Annual Percentage Yield. CD=Share Certificate. Available to businesses as well as individuals. Minimum $500; Maximum $25,000. NEW MONEY ONLY!  Choice of 12-month or 14-month term; both convert into a regular 12-month CD at then current rate. Only one CD per primary member. Must retain dividends.  180-day Early Withdrawal Penalty.   Membership qualifications apply, easy to join. Federally Insured by the NCUA."
      />
    </div>
  );
};

export default BankingPage;
