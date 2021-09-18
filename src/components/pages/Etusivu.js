import { ImageWithCard, Button, Card } from 'hds-react';
import sittingGuy from '../../images/IMG_7674.jpg'

function Etusivu() {
    return (
        <>
            <ImageWithCard cardLayout="hover" fullWidth src={sittingGuy} cardAlignment="right">
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
        </>
    )
}

export default Etusivu;