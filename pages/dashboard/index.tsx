import type { FC, ReactElement } from 'react';
import SidebarLayout from '@/components/dashboard/SidebarLayout';
import { PageWithLayout } from '@/types/types';


const Dashboard: PageWithLayout = () => {
    return (
        <div className='opacity-15 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900' >
            <div className="h-96 w-full bg-[url('/graph-paper.svg')] opacity-10">
                <h1 className='text-center'>This a dashboard home page</h1>


            </div>

        </div>
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