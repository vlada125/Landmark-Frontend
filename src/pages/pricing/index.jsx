import React from 'react'

import { MainLayout } from '@/components/layout/MainLayout'
import { GetStart } from '@/components/pages/pricing/GetStart'
import { Pricing } from '@/components/pages/pricing/Pricing'
import { FormatingExample } from '@/components/pages/pricing/FormatingExample'
import { Try } from '@/components/pages/pricing/Try'

export default function About() {
    return (
        <>
            <MainLayout title="Audio Rates | Landmark" footer={true}>
                <GetStart />
                <Pricing />
                <FormatingExample />
                <Try />
            </MainLayout>
        </>
    )
}
