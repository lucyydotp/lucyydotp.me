import React from "react";
import {createRoot} from "react-dom/client.js";
import '@fontsource/lexend/variable.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faBriefcase} from "@fortawesome/free-solid-svg-icons";

const imageUrl = new URL(
    `assets/profile.png?as=webp&width=512`,
    import.meta.url
).toString();

function Page() {
    return <div className='mainPage'>
        <img className='mainImage' src={imageUrl} alt='cute profile picture drawing'/>
        <div>
            <section className='header'>
                <h1>lucyy.p</h1>
                <h3>Lucy Poulton</h3>
            </section>
            <table className='links'>
                <tbody>
                <tr>
                    <td><FontAwesomeIcon icon={faBriefcase}/></td>
                    <td>tools engineer at <a href='https://noxcrew.com'>Noxcrew</a></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon icon={faDiscord}/></td>
                    <td><a href='https://discordapp.com/channels/@me/199036109760495616/'>lucyy.p#0001</a></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon icon={faEnvelope}/></td>
                    <td>lucy@lucypoulton.net</td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon icon={faGithub}/></td>
                    <td><a href='https://github.com/lucypoulton'>lucypoulton</a></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon icon={faTwitter}/></td>
                    <td><a href='https://twitter.com/lucyydotp'>@lucyydotp</a></td>
                </tr>
                </tbody>
            </table>
            <p>
                Hey! I'm Lucy.
                I try not to take myself too seriously, but I
                thoroughly enjoy spending time making my work the best it can be.
            </p>
        </div>
    </div>
}

createRoot(document.getElementById('root')!).render(<Page/>)
