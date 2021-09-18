import { ImageWithCard, Button, Card, Koros, Section } from 'hds-react';
import sittingGuy from '../../images/IMG_7674.jpg'
import '../../App.css'

function Etusivu() {
    return (
        <>
            <ImageWithCard cardLayout="split" fullWidth src={sittingGuy} cardAlignment="right">
                <Koros className="rotatekoros" style={{ fill: 'var(--color-white)' }} />
                <Card
                    heading="Test your skills"
                    text="The City of Helsinki's employment services use a new way to test a job seeker's digital skills. The test gives you feedback,
                    that helps you developing your skills. You will get a certificate that can improve your chances in job market."
                >
                    <Button
                        theme="white"
                        variant="primary"
                    >
                        Click here for the tests
                    </Button>
                </Card>
            </ImageWithCard>

            <Section color="plain" korosType="none">
                <h1 style={{ fontSize: 'var(--fontsize-heading-xl)' }}>Some great title</h1>
                Some great content without using Lorem Ipsum.
            </Section>
        </>
    )
}

export default Etusivu;