import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import MobileView from './Mobile/MobileView';
import TabletView from './Tablet/TabletView';
import DesktopView from './Desktop/DesktopView';
import Layout from '../layout/Layout';
import RegistrierungsFormular from '../components/RegistrierungsFormular';

export default function ResponsiveComponent() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    let ViewComponent;
    if (isMobile) ViewComponent = MobileView;
    else if (isTablet) ViewComponent = TabletView;
    else if (isDesktop) ViewComponent = DesktopView;

    return (
        <Layout>
            {/* Content je nach Device */}
            {ViewComponent ? <ViewComponent>
                <RegistrierungsFormular />
            </ViewComponent> : null}
        </Layout>
    );
}
