import styles from '../../styles/roadmapStepper.module.css';

const RoadmapStepper = () => {
  return (
    <div className={styles.roadmapStepper}>
      <div className={styles.roadmapStepper__container}>
        <span className={`${styles.roadmapStepper__thumb} ${styles.active}  ${styles.one}`}></span>
        <div className={`${styles.roadmapStepper__content__wrapper} ${styles.left}`}>
          <h2 className={styles.roadmapStepper__heading}>Q4 2020 - Q1 2021</h2>
          <ul className={styles.roadmapStepper__item}>
            <li className={styles.roadmapStepper__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
            </li>
            <li className={styles.roadmapStepper__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.roadmapStepper__container}>
        <span className={styles.roadmapStepper__thumb}></span>
        <div className={`${styles.roadmapStepper__content__wrapper} ${styles.right}`}>
          <h2 className={styles.roadmapStepper__heading}>Q4 2020 - Q1 2021</h2>
          <ul className={styles.roadmapStepper__item}>
            <li className={styles.roadmapStepper__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
            </li>
            <li className={styles.roadmapStepper__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.roadmapStepper__container}>
        <span className={styles.roadmapStepper__thumb}></span>
        <div className={`${styles.roadmapStepper__content__wrapper} ${styles.left}`}>
          <h2 className={styles.roadmapStepper__heading}>Q4 2020 - Q1 2021</h2>
          <ul className={styles.roadmapStepper__item}>
            <li className={styles.roadmapStepper__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
            </li>
            <li className={styles.roadmapStepper__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.roadmapStepper__container}>
        <span className={styles.roadmapStepper__thumb}></span>
        <div className={`${styles.roadmapStepper__content__wrapper} ${styles.right} ${styles.lastChild}`}>
          <h2 className={styles.roadmapStepper__heading}>Q4 2020 - Q1 2021</h2>
          <ul className={styles.roadmapStepper__item}>
            <li className={styles.roadmapStepper__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
            </li>
            <li className={styles.roadmapStepper__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadmapStepper;
