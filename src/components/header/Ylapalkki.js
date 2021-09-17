import React from 'react';
import { Navigation } from 'hds-react';

function Ylapalkki () {
    return (
        <Navigation
            logoLanguage="fi"
            menuToggleAriaLabel="Menu"
            skipTo="#content"
            skipToContentLabel="Skip to main content"
            theme={{
                '--header-background-color': 'var(--color-white)',
                '--header-color': 'var(--color-black-90)',
                '--header-divider-color': 'var(--color-black-20)',
                '--header-focus-outline-color': 'var(--color-black)',
                '--mobile-menu-background-color': 'var(--color-white)',
                '--mobile-menu-color': 'var(--color-black-90)',
                '--navigation-row-background-color': 'var(--color-white)',
                '--navigation-row-color': 'var(--color-black-90)',
                '--navigation-row-focus-outline-color': 'var(--color-coat-of-arms)'
            }}
            title="Helsinki Digitaidot testiin"
            titleAriaLabel="Helsinki: Digitaitojen testaus"
            titleUrl="https://hel.fi"
            >
            <Navigation.Row variant='inline'>
                <Navigation.Item
                active
                href="/"
                label="Link"
                onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                href="/yhteystiedot"
                label="Link"
                onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                href="#"
                label="Link"
                onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                href="#"
                label="Link"
                onClick={function noRefCheck(){}}
                />
                <Navigation.Dropdown label="Dropdown">
                <Navigation.Item
                    href="#"
                    label="Link"
                    onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                    href="#"
                    label="Link"
                    onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                    href="#"
                    label="Link"
                    onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                    href="#"
                    label="Link"
                    onClick={function noRefCheck(){}}
                />
                </Navigation.Dropdown>
            </Navigation.Row>
            <Navigation.Actions>
                <Navigation.Search
                searchLabel="Search"
                searchPlaceholder="Search page"
                />
                <Navigation.User
                label="Sign in"
                userName="John Doe"
                >
                <Navigation.Item
                    href="#"
                    label="Link"
                    onClick={function noRefCheck(){}}
                    variant="secondary"
                />
                <Navigation.Item
                    href="#"
                    label="Sign out"
                    onClick={function noRefCheck(){}}
                    variant="supplementary"
                />
                </Navigation.User>
                <Navigation.LanguageSelector label="FI">
                <Navigation.Item
                    href="#"
                    label="Suomeksi"
                    lang="fi"
                    onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                    href="#"
                    label="På svenska"
                    lang="sv"
                    onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                    href="#"
                    label="In English"
                    lang="en"
                    onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                    href="#"
                    label="En français"
                    lang="fr"
                    onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                    href="#"
                    label="Auf deutsch"
                    lang="de"
                    onClick={function noRefCheck(){}}
                />
                <Navigation.Item
                    href="#"
                    label="По-русски"
                    lang="ru"
                    onClick={function noRefCheck(){}}
                />
                </Navigation.LanguageSelector>
            </Navigation.Actions>
        </Navigation>
    )
}

export default Ylapalkki;