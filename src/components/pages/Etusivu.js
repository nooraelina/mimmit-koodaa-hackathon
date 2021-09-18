import { ImageWithCard, Button, Card, Koros, Section } from 'hds-react';
import sittingGuy from '../../images/IMG_7674.jpg'
import '../../App.css'

function Etusivu() {
    return (
        <>
            <ImageWithCard cardLayout="split" fullWidth src={sittingGuy} cardAlignment="right">
                <Koros className="rotatekoros" style={{ fill: 'var(--color-white)' }} />
                <Card
                    heading="Did you know that"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                >
                    <Button
                        theme="white"
                        variant="secondary"
                    >
                        Read more
                    </Button>
                </Card>
            </ImageWithCard>

            <Section color="secondary">
                <h1 style={{ fontSize: 'var(--fontsize-heading-xl)' }}>Some great title</h1>
                Some great content without using Lorem Ipsum.
            </Section>
        </>
    )
}

export default Etusivu;