import Head from "next/head";
import Typewriter from 'typewriter-effect';
import Link from 'next/link'

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Code-aire | Portfolio</title>
            </Head>
            <main>
                <div className="titlebox">
                    <h1 className="title">Portfolio</h1>
                </div>
                <div className="projects-container">
                    <section className="codeaire-projects">
                        <h1 className='title'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Code-aire Projects')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(2500)
                                        .start();
                                }}
                            /></h1>
                        <section className="proj-container">
                            <div className="codeaire-card">
                                <h1 className="card-title">Coming Soon...</h1>
                            </div>
                        </section>
                    </section>
                    <section className="exercise-projects">
                        <h1 className='title'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Exercise Projects')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(2500)
                                        .start();
                                }}
                            /></h1>
                        <section className="proj-container">
                            <div className="exercise-card">
                                <h1 className="card-title"><Link href={'https://replit.com/@IsraelDail/password-generator-start#main.py'}><a target={'_blank'}>Python Password Generator</a></Link></h1>
                            </div>
                            <div className="exercise-card">
                                <h1 className="card-title"><Link href={'https://replit.com/@IsraelDail/rock-paper-scissors-start#main.py'}><a target={'_blank'}>Python Rock Paper Scissors Game</a></Link></h1>
                            </div>
                        </section>
                    </section>
                </div>

            </main>
        </>
    )
}

export default Portfolio