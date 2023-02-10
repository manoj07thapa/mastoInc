import type { FC, ReactElement } from 'react';
import SidebarLayout from '@/components/dashboard/SidebarLayout';
import { PageWithLayout } from '@/types/types';


const Dashboard: PageWithLayout = () => {
    return (
        <div>Dashboard General Information section</div>
    );
}

// binding the page to the sidebatlayout
Dashboard.getLayout = function (page: ReactElement) {
    return (
        <SidebarLayout >
            <main>{page}</main>
        </SidebarLayout>
    )
}
export default Dashboard;