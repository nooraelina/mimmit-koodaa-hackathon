import { ImageWithCard, Button, Card, Koros, Section } from 'hds-react';
import sittingGuy from '../../images/IMG_7674.jpg'
import '../../App.css'

function Etusivu() {
    return (
        <>
            <ImageWithCard cardLayout="split" fullWidth src={sittingGuy} cardAlignment="right" >
                <Koros className="rotatekoros" style={{ fill: 'var(--color-white)' }} />
                
                <Card
                    heading="Test your skills"
                    text="The City of Helsinki's employment services use a new way to test a job seeker's digital skills. The test gives you feedback,
                    that helps you developing your skills. You will get a certificate that can improve your chances in job market."
                >
                    <Button
                        href="/"
                        theme="white"
                        variant="primary"
                    >
                        Click here for the tests
                    </Button>
                </Card>
            </ImageWithCard>

            <Section color="plain" korosType="none">
                <h1 style={{ fontSize: 'var(--fontsize-heading-xl)' }}>Lorem Ipsum</h1>
                Lorem ipsum dolor sit amet. Qui recusandae debitis vel eveniet Quis 33 voluptatem quia et sequi natus a voluptates architecto aut exercitationem deleniti. Et molestiae galisum aut delectus voluptatem ea assumenda blanditiis et sapiente minima. Sit cupiditate dolorem id aliquid explicabo At incidunt eveniet. Ut libero harum et quis aperiam aut dolor consequatur est dolores quia ad deleniti assumenda sed omnis officia.
                Est dolore magnam est vitae molestiae aut reiciendis quos eum dignissimos asperiores ut placeat molestiae. Et dicta corrupti qui voluptas doloribus est voluptate illo et voluptas consectetur. Quo tempore aperiam aut blanditiis commodi est veritatis amet nam quia esse quo necessitatibus nisi qui omnis autem eos laboriosam totam.
            </Section>
        </>
    )
}

export default Etusivu;