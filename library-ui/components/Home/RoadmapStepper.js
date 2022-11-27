import styles from '../../styles/roadmapStepper.module.css';

const RoadmapStepper = () => {
  return (
    <div className={styles.roadmapStepper}>
      <div className={styles.roadmapStepper__container}>
        <span className={`${styles.roadmapStepper__thumb}   ${styles.one}`}></span>
        <div className={`${styles.roadmapStepper__content__wrapper} ${styles.left}`}>
          <h2 className={styles.roadmapStepper__heading}>Milestone 1 (Oct/Mid Nov)</h2>
          <ul className={styles.roadmapStepper__item}>
            <li className={styles.roadmapStepper__content}>
              Design a landing page in Figma first, then work on workflow and prototypes.
            </li>
            <li className={styles.roadmapStepper__content}> Implementation of the landing page</li>
            <li className={styles.roadmapStepper__content}> Wallet Connection and symmetric encryption of books</li>
            <li className={styles.roadmapStepper__content}> Publishing of our Whitepaper and proper documentation</li>
            <li className={styles.roadmapStepper__content}>
              {' '}
              Social media accounts would be created, and regular content posting would commence.
            </li>
            <li className={styles.roadmapStepper__content}>
              {' '}
              Smart contract Implementation for the book covers that would be minted as NFTs
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.roadmapStepper__container}>
        <span className={`${styles.roadmapStepper__thumb} ${styles.active} `}></span>
        <div className={`${styles.roadmapStepper__content__wrapper}  ${styles.right}`}>
          <h2 className={styles.roadmapStepper__heading}>Milestone 2 (MidNov-Early Dec)</h2>
          <ul className={styles.roadmapStepper__item}>
            <li className={styles.roadmapStepper__content}>
              Frontend Development of Both the Authors and Readers Dashboard
            </li>
            <li className={styles.roadmapStepper__content}>Buy and sell smart contracts implementation.</li>
            <li className={styles.roadmapStepper__content}>Encrypted Books will be uploaded to Bundlr</li>
          </ul>
        </div>
      </div>
      <div className={styles.roadmapStepper__container}>
        <span className={styles.roadmapStepper__thumb}></span>
        <div className={`${styles.roadmapStepper__content__wrapper} ${styles.left} ${styles.lastChild}`}>
          <h2 className={styles.roadmapStepper__heading}> Milestone 3 (December) </h2>
          <ul className={styles.roadmapStepper__item}>
            <li className={styles.roadmapStepper__content}>Final Pitch Deck Design for Pitch Day.</li>
            <li className={styles.roadmapStepper__content}>
              Users can upload an NFT connected to their wallet address as their profile picture.
            </li>
            <li className={styles.roadmapStepper__content}>Writing tests for the smart contract</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadmapStepper;
