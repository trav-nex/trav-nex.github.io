import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from '../css/index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLogo}>
            <img 
              src="/img/logo.svg" 
              alt="Wiil Logo" 
              className={styles.logo}
            />
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Wiil Documentation
          </Heading>
          <p className={styles.heroSubtitle}>
            Build intelligent AI assistants for voice and chat conversations.
            <br />
            Complete guides, API reference, and integration documentation.
          </p>
          <div className={styles.heroActions}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryButton)}
              to="/docs/quick-guides/overview">
              Get Started
            </Link>
            <div className={styles.buttonWrapper}>
              <Link
                className={clsx('button button--secondary button--outline button--lg', styles.secondaryButton, styles.disabledButton)}
                to="#"
                onClick={(e) => e.preventDefault()}>
                API Reference
              </Link>
              <span className={styles.comingSoonBadge}>Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickNavigation() {
  return (
    <section className={styles.quickNav}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.navCard}>
              <h3>Quick Start</h3>
              <p>New to Wiil? Start here to create your first AI assistant in minutes.</p>
              <Link to="/docs/category/quick-guides" className={styles.navLink}>
                View Guides →
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={clsx(styles.navCard, styles.comingSoonCard)}>
              <div className={styles.cardHeader}>
                <h3>API Integration</h3>
                <span className={styles.comingSoonLabel}>Coming Soon</span>
              </div>
              <p>Integrate Wiil into your applications with our REST API and SDKs.</p>
              <span className={styles.navLinkDisabled}>
                Browse API →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularTopics() {
  const topics = [
    { title: "Creating Your First Assistant", link: "/docs/quick-guides/create-assistant" },
    { title: "Assistant Roles & Configuration", link: "/docs/quick-guides/create-roles" },
    { title: "Channel Deployment", link: "/docs/quick-guides/assign-roles" },
    { title: "Authentication", link: "#", disabled: true },
    { title: "Agents API", link: "#", disabled: true },
    { title: "Voice Integration", link: "#", disabled: true },
  ];

  return (
    <section className={styles.popularTopics}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2" className={styles.sectionTitle}>Popular Topics</Heading>
        </div>
        <div className="row">
          {topics.map((topic, idx) => (
            <div key={idx} className="col col--4 margin-bottom--md">
              {topic.disabled ? (
                <div className={clsx(styles.topicLink, styles.topicDisabled)}>
                  {topic.title}
                  <span className={styles.topicComingSoon}>Coming Soon</span>
                </div>
              ) : (
                <Link to={topic.link} className={styles.topicLink}>
                  {topic.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Build intelligent AI assistants for voice and chat conversations. Complete guides, API reference, and integration documentation.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickNavigation />
        <PopularTopics />
      </main>
    </Layout>
  );
}