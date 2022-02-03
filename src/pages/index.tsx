import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Translate from '@docusaurus/Translate'

export default function Home() {
  return (
    <Layout
      title={`あなたのNFTショップ構築に並走します`}
      description="Mint SDKは、NFTアプリ開発に特化したJavaScriptライブラリです。Mint SDKと管理者ダッシュボードを使うことで、素早く簡単にオリジナルNFT Shopを作成し、オリジナルのNFTを販売することができます。"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('heroContainer', styles.heroContainer)}>
          <div className={clsx(styles.heroContainerLeft)}>
            <h2 className={clsx(styles.heroContainerLeftTitle)}>
              Mint helps you build
              <br />
              your own NFT shop
            </h2>
            <p className={clsx(styles.heroContainerLeftDescription)}>
              <Translate id="homepage.Catch">
                Mint SDKは、NFT
                アプリ開発に特化したJavaScriptライブラリです。MINT
                SDKと管理者ダッシュボードを使うことで、素早く簡単にオリジナルNFT
                Shopを作成し、オリジナルのNFTを販売することができます。
              </Translate>
            </p>
            <div className={clsx(styles.heroContainerLeftButtons)}>
              <Link
                className={clsx(
                  'button button--primary button--lg',
                  styles.getStarted,
                )}
                href={'https://github.com/KyuzanInc/mint-sdk-examples'}
              >
                Try Demo
              </Link>
              <Link
                className={clsx(
                  'button button--primary button--lg',
                  styles.learnMore,
                )}
                href={'http://mintnft.jp/'}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className={clsx(styles.heroContainerRight)}>
            <img src={'img/hero.svg'} alt={'about mint'} />
          </div>
        </div>
      </header>
      <main>
        <div className={clsx(styles.contentContainer)}>
          <div className={clsx(styles.contentImg)}>
            <img src={'img/content_mint_sdk.svg'} alt={'mint sdk'} />
          </div>
          <div className={clsx(styles.contentText)}>
            <h3 className={clsx(styles.contentTitle)}>Mint SDK</h3>
            <div className={clsx(styles.contentDescription)}>
              <Translate id="homepage.Description">
                Mint
                SDKは、NFTアプリ開発に特化したJavaScriptライブラリです。DEMO
                では、Mint SDKを使用して開発した NFT Shop をみることができます。
              </Translate>
            </div>
            {/* <Link
              href={'https://demo.mintnft.jp'}
              className={clsx(styles.contentLink)}
            >
              <Translate id="homepage.DemoLink">DEMOをみる</Translate>
            </Link>
            <div className={clsx(styles.contentDescription)}>
              <Translate id="homepage.OSS">
                DEMOのソースコードはオープンソースとなっています。実際の動作を確認しながらMint
                SDKの使用方法を理解することができます。
              </Translate>
            </div> */}
            <Link
              href={'https://github.com/KyuzanInc/mint-sdk-examples'}
              className={clsx(styles.contentLink)}
            >
              <Translate id="homepage.OSSLink">Example集を見る</Translate>
            </Link>
            <div className={clsx(styles.contentDescription)}>
              <Translate id="homepage.APIDescription">
                Mint
                SDKの詳細な使用方法については、APIドキュメントをご覧ください。
              </Translate>
            </div>
            <Link
              to={useBaseUrl('/docs/api')}
              className={clsx(styles.contentLink)}
            >
              <Translate id="homepage.APILink">APIドキュメントを見る</Translate>
            </Link>
          </div>
        </div>
        <div className={clsx(styles.contentContainerReverse)}>
          <div className={clsx(styles.contentImgReverse)}>
            <img src={'img/content_dashboard.svg'} alt={'dashboard'} />
          </div>
          <div className={clsx(styles.contentText)}>
            <h3 className={clsx(styles.contentTitle)}>DASHBOARD</h3>
            <div className={clsx(styles.contentDescription)}>
              <Translate id="homepage.DashboardDesc">
                ショップでの出品や商品管理はダッシュボードからおこなえます。
              </Translate>
              <br />
              <br />
              <Translate id="homepage.DashboardOtherDesc">
                NFT販売において面倒な会計・税務についても、ダッシュボードの売り上げレポートを使えば簡単に処理することができます
              </Translate>
            </div>
            <Link
              href={'https://www.mintnft.jp/#contact-form'}
              className={clsx(styles.contentLink)}
            >
              <Translate id="homepage.CallToAction">今すぐはじめる</Translate>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}
