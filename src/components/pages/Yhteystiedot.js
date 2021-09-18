import { ImageWithCard, Link } from 'hds-react';
import sittingGuy from '../../images/IMG_7674.jpg';

function Yhteystiedot() {
    return (
        <>
            <ImageWithCard cardLayout="hover" src={sittingGuy}>
                <h1>Contact</h1>
                Useful information and links.<br />
                <br />
                <Link external
                    openInExternalDomainAriaLabel="Opens a different website" href="https://digirasti.fi/" size="M">
                    Digirasti
                </Link>
                <br />
            </ImageWithCard>
        </>
    )
}

export default Yhteystiedot;