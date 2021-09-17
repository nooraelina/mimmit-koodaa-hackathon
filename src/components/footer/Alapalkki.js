import React from 'react';
import { Footer } from 'hds-react'
function Alapalkki () {
    return (
        <Footer
        korosType="basic"
        logoLanguage="fi"
        theme={{
            '--footer-background': 'var(--color-black-80)',
            '--footer-color': 'var(--color-black-10)',
            '--footer-divider-color': 'var(--color-black-20)',
            '--footer-focus-outline-color': 'var(--color-black-20)'
        }}
        title="Helsinki Design System">
            <Footer.Navigation navigationAriaLabel="Footer navigation items">
                <Footer.Item
                href="https://google.com"
                label="Etusivu"
                onClick={function noRefCheck(){}}
                />
                <Footer.Item
                href="https://google.com"
                label="Nav item"
                onClick={function noRefCheck(){}}
                />
                <Footer.Item
                href="https://google.com"
                label="Nav item"
                onClick={function noRefCheck(){}}
                />
                <Footer.Item
                href="https://google.com"
                label="Nav item"
                onClick={function noRefCheck(){}}
                />
                <Footer.Item
                href="https://google.com"
                label="Nav item"
                onClick={function noRefCheck(){}}
                />
                <Footer.Item
                href="https://google.com"
                label="Nav item"
                onClick={function noRefCheck(){}}
                />
                <Footer.Item
                href="https://google.com"
                label="Nav item"
                onClick={function noRefCheck(){}}
                />
                <Footer.Item
                href="https://google.com"
                label="Nav item"
                onClick={function noRefCheck(){}}
                />
            </Footer.Navigation>
            
        </Footer>
    );
}

export default Alapalkki;