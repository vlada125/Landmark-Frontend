import React from 'react'

import { MainLayout } from '@/components/layout/MainLayout'
import { Handle } from '@/components/pages/security-and-confidentiality/Handle'
import { Confidentiality } from '@/components/pages/security-and-confidentiality/Confidentiality'
import { GetQuote } from '@/components/pages/home/GetQuote'

export default function About() {
    return (
        <>
            <MainLayout
                title="Security and Confidentiality | Landmark"
                footer={true}
            >
                <Handle />
                <Confidentiality />
                <GetQuote />
            </MainLayout>
        </>
    )
}
