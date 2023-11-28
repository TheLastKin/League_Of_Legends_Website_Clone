import React from 'react';
import styles from '../css/get_started.module.css'

type GetStartedProps = {
    marginTop: number
}

const GetStarted = ({ marginTop = 0 }: GetStartedProps) => {
    return (
        <div style={{ marginTop: marginTop }} className={styles.get_started}>
            <input type="email" className={styles.email_input} placeholder='Email address' />
            <div className={styles.button_sign_up}>
                <div>
                    <span>Sign up for GitHub</span>
                </div>
                <div className={styles.button_glow}>
                    <div></div>
                </div>
            </div>
            <div className={styles.verticle_divider}></div>
            <a href="" className={styles.button_free_trial}>
                <span>Start a free enterprise trial</span>
                <div className={styles.chevron}>
                    <div className={styles.chevron_line}></div>
                    <div className={styles.chevron_arrow}></div>
                </div>
            </a>
        </div>
    );
};

export default GetStarted;