import styles from './page.module.css'

export default function Root() {

    return (
        <div className={styles.content_container}>
            <h1 className={styles.title}>The Front Page Of Everything</h1>
            <div className={styles.redirects}>
                <a className={styles.redirect} href='/league'>
                    <img src="/image/main/league_of_legends.png" alt="" />
                    <div>
                        <span className={styles.page}>League Of Legends Home Page</span>
                        <span className={styles.status_i}>(Mostly identical)</span>
                    </div> 
                    <div className={styles.from}>- From Riot Games</div>
                </a>
                <a className={styles.redirect} href="/apple">
                    <img src="/image/main/macbook_air_showcase.png" alt="" />
                    <div>
                        <span className={styles.page}>Macbook Air Showcase </span>
                        <span className={styles.status_i}>(Mostly identical)</span>
                    </div>
                    <div className={styles.from}>- From Apple</div>
                </a>
                <a className={styles.redirect} href='/github'>
                    <img src="/image/main/github.png" alt="" />
                    <div>
                        <span className={styles.page}>Github Home Page </span>
                        <span className={styles.status_i_p}>(In progress)</span>
                    </div>
                    
                    <div className={styles.from}>- From Microsoft</div>
                </a>
            </div>
        </div>
    )
}
