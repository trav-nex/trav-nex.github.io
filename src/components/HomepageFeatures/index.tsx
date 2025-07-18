import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  details: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Interactive Guides',
    description: (
      <>
        Step-by-step tutorials with live demonstrations to get you started with Wiil's AI assistant platform.
      </>
    ),
    details: [
      'Create production-ready assistants',
      'Configure roles and behaviors', 
      'Deploy across multiple channels'
    ]
  },
  {
    title: 'Developer API',
    description: (
      <>
        Comprehensive REST API documentation with code examples for seamless integration into your applications.
      </>
    ),
    details: [
      'Complete endpoint reference',
      'Authentication & security',
      'SDKs and code examples'
    ]
  },
  {
    title: 'Platform Overview',
    description: (
      <>
        Learn about Wiil's capabilities, architecture, and best practices for building conversational AI solutions.
      </>
    ),
    details: [
      'Voice and chat capabilities',
      'Enterprise-grade features',
      'Scalability and performance'
    ]
  },
];

function Feature({title, description, details}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.feature}>
        <div className={styles.featureHeader}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        </div>
        <div className={styles.featureContent}>
          <p className={styles.featureDescription}>{description}</p>
          <ul className={styles.featureList}>
            {details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Documentation Overview
          </Heading>
          <p className={styles.featuresSubtitle}>
            Everything you need to build, deploy, and scale AI assistants with Wiil
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}