import React from 'react'
import { HelpLayout } from '@/components/layout/HelpLayout'
import { MainHelp } from '@/components/pages/help-center/Mainhelp'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'

export default function HelpCenter() {
    return (
        <>
            <HelpLayout title="Help Center | Landmark">
                <HelpBreadCrumb breadcrumb="How can we help?" />

                <MainHelp />
            </HelpLayout>
        </>
    )
}
