import styles from './page.module.css'

export default function Root() {

    return (
        <div className={styles.content_container}>
            <h1 className={styles.title}>The Front Page Of Everything</h1>
            <div className={styles.redirects}>
                <a className={styles.redirect} href='/league'>
                    <img src="/image/main/league_of_legends.png" alt="" />
                    <p>League Of Legends Home Page</p>
                    <p>- From Riot Games</p>
                </a>
                <a className={styles.redirect} href="/apple">
                    <img src="/image/main/macbook_air_showcase.png" alt="" />
                    <p>Macbook Air Showcase</p>
                    <p>- From Apple</p>
                </a>
            </div>
        </div>
    )
}
