/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useState } from "react";
import Logo from "../components/elements/branding/Logo";
import Dialogue from "../components/elements/dialoguebox/Dialogue";
import Footer from "../components/elements/branding/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {

    const [ isPromptViewOpen, setIsPromptViewOpen ] = useState(false);
    console.log('loading');

    return (
        <div className={styles.container}>
            <Head>
                <title>CandidResponse</title>
                <meta
                    name="CandidResponse is an AI prompt-completion client"
                    content="CandidResponse, a GPT-3 Prompt-Completion client built with Next.js and OpenAI"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@zaidmukddam" />
                <meta name="twitter:title" content="CandidResponse, a GPT-3 Prompt-Completion client" />
                <meta name="twitter:description" content="a GPT-3 Prompt-Completion client built with Next.js and OpenAI" />
                <meta name="twitter:image" content="/candidresponse.png" />
                <link rel="icon" href="/ico.svg" />
            </Head>

            <main className={styles.main}>
                <Logo />
                {/* {!isPromptViewOpen && <LandingContent isPromptViewOpen={isPromptViewOpen} setIsPromptViewOpen={setIsPromptViewOpen}/>}
                {isPromptViewOpen && <Dialogue />} */}
                <Dialogue />
            </main>
            <Footer />
        </div>
    );
}
