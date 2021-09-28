import * as React from 'react';

import About from './about';
import Authentication from './authentication';
import RedirectFlow from './authentication/components/RedirectFlow';
import Blog from './blog';
import Home from './home';
import HowItWorks from './how-it-works';
import SingleBlog from './single-blog';
import SingleIPro from './single-ipro';
import TopiPros from './topipros';

interface Route {
    link: string;
    label: string;
    menu: boolean;
    component: React.ReactElement;
}
export const Routes: Record<string, Route> = {
    allIPros: {
        link: '/#/home',
        label: 'All iPros',
        menu: true,
        component: <Home />
    },
    about: {
        link: '/#/about',
        label: 'About',
        menu: true,
        component: <About />
    },
    howItWorks: {
        link: '/#/howItWorks',
        label: 'How it works',
        menu: true,
        component: <HowItWorks />
    },
    blog: {
        link: '/#/blog',
        label: 'Blog',
        menu: true,
        component: <Blog history={null} location={null} match={null} />
    },
    singleBlog: {
        link: '/#/singleBlog',
        label: 'SingleBlog',
        menu: false,
        component: <SingleBlog history={null} location={null} match={null} />
    },
    topipros: {
        link: '/#/topipros',
        label: 'TopIPros',
        menu: false,
        component: <TopiPros history={null} location={null} match={null} />
    },
    singleIPro: {
        link: '/#/ipro',
        label: 'SingleIPro',
        menu: false,
        component: <SingleIPro history={null} location={null} match={null} />
    },
    authentication: {
        link: '/#/authentication',
        label: 'Authentication',
        menu: false,
        component: <Authentication history={null} location={null} match={null} />
    },
    redirectFlow: {
        link: '/#/redirectFlow',
        label: '',
        menu: false,
        component: <RedirectFlow history={null} location={null} match={null} />
    }
};
export const MainRoute = Routes['allIPros'];
export const directLinks = {
    topipros: (category: string) => `${Routes.topipros.link}?category=${category}`
};
