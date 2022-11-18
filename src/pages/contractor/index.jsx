import React from 'react'

import { MainLayout } from '@/components/layout/MainLayout'
import { Apply } from '@/components/pages/contractor/Apply'
import { StartWorking } from '@/components/pages/contractor/Startworking'
import { Join } from '@/components/pages/contractor/Join'
import { GetQuote } from '@/components/pages/home/GetQuote'

export default function Contractor() {
    return (
        <>
            <MainLayout title="Contractor | Landmark" footer={true}>
                <Apply />
                <StartWorking />
                <Join />
                <GetQuote />
            </MainLayout>
        </>
    )
}
