import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import MobileView from './MobileView';
import TabletView from './TabletView';
import DesktopView from './DesktopView';

export default function ResponsiveComponent() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div>
            {isMobile && <MobileView />}
            {isTablet && <TabletView />}
            {isDesktop && <DesktopView />}
        </div>
    );
}
