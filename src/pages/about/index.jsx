import React from 'react'

import { MainLayout } from '@/components/layout/MainLayout'
import { Introduction } from '@/components/pages/about/Introduction'
import { Collection } from '@/components/pages/about/Collection'
import { ClientSay } from '@/components/pages/about/ClientSay'
import { GetQuote } from '@/components/pages/home/GetQuote'

export default function About() {
    return (
        <>
            <MainLayout
                title="About Landmarks - 3,800 Projects-3,300 Clients"
                footer={true}
            >
                <Introduction />
                <Collection />
                <ClientSay />
                <GetQuote />
            </MainLayout>
        </>
    )
}
