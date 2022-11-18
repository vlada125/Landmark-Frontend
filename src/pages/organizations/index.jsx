import React from 'react'

import { MainLayout } from '@/components/layout/MainLayout'
import { Built } from '@/components/pages/organizations/Built'
import { OrgDescription } from '@/components/pages/organizations/OrgDescription'
import { FreQuestion } from '@/components/pages/organizations/FreQuestion'

export default function Organizations() {
    return (
        <>
            <MainLayout title="Organizations | Landmark" footer={true}>
                <Built />
                <OrgDescription />
                <FreQuestion />
            </MainLayout>
        </>
    )
}
