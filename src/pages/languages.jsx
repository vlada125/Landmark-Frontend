import React from 'react'
import Image from 'next/future/image'

import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/common/Container'

import waveBack from '@/images/backgrounds/wave-back.svg'
import talking from '@/images/icons/lai-talk.png'
import team from '@/images/backgrounds/Landmark_Team.png'
import { GetQuote } from '@/components/pages/home/GetQuote'

export default function Languages() {
    const languages = [
        {
            alpha: 'A - F',
            items: [
                'Afrikaans',
                'Albanian',
                'Amharic',
                'Arabic',
                'Armenian',
                'Assamese',
                'Asturian',
                'Azerbaijani',
                'Basque',
                'Belarusian',
                'Bengali',
                'Bosnian',
                'Bulgarian',
                'Burmese',
                'Cantonese',
                'Catalan',
                'Chechen',
                'Chinese',
                'Corsican',
                'Croatian',
                'Czech',
                'Danish',
                'Dari',
                'Dutch',
                'English',
                'Estonian',
                'Farsi',
            ],
        },
        {
            alpha: 'F - K',
            items: [
                'Finnish',
                'Flemish',
                'French',
                'Fulani',
                'Galician',
                'Georgian',
                'German',
                'Greek',
                'Guarani',
                'Gujarati',
                'Haitian Creole',
                'Hausa',
                'Hawaiian',
                'Hebrew',
                'Hindi[a]',
                'Hmong',
                'Hungarian',
                'Icelandic',
                'Igbo',
                'Indonesian',
                'Italian',
                'Japanese',
                'Javanese',
                'K’iche',
                'Kannada',
                'Karen',
                'Kashmiri',
            ],
        },
        {
            alpha: 'K - R',
            items: [
                'Kazakh',
                'Khmer',
                'Kinyarwanda',
                'Korean',
                'Kurdish',
                'Lao',
                'Latin',
                'Latvian',
                'Lithuanian',
                'Macedonian',
                'Malagasy',
                'Malay (inc. Malaysian and Indonesian)',
                'Malayalam',
                'Maltese',
                'Mandarin',
                'Marathi',
                'Mongolian',
                'Nepali',
                'Norwegian',
                'Oromo',
                'Pashto',
                'Polish',
                'Portuguese',
                'Punjabi',
                'Quechua',
                'Romanian',
                'Russian',
            ],
        },
        {
            alpha: 'S - Z',
            items: [
                'Sanskrit',
                'Serbian',
                'Slovak',
                'Slovenian',
                'Somali',
                'Sotho',
                'Spanish',
                'Swahili',
                'Swedish',
                'Tagalog',
                'Tamil',
                'Telugu',
                'Thai',
                'Tibetan',
                'Tigrinya',
                'Turkish',
                'Ukrainian',
                'Urdu',
                'Uzbek',
                'Valencian',
                'Vietnamese',
                'Welsh',
                'Wolof',
                'Wu (e.g. Shanghainese)',
                'Yiddish',
                'Yoruba',
                'Yue (incl. Cantonese)',
            ],
        },
    ]
    return (
        <>
            <MainLayout title="Clients | Landmark" footer={true}>
                <div className="relative overflow-hidden">
                    <Image
                        src={waveBack}
                        className="absolute h-[180px] w-full origin-top scale-[1.8]"
                        alt=""
                    />
                    <Container className="relative pt-24 pb-16 text-center md:text-left">
                        <Image
                            src={talking}
                            className="m-auto w-[92px]"
                            alt=""
                        />
                        <h1 className="font-poppins text-[32px] text-center font-semibold md:text-[36px]">
                        Available languages for transcription and translation
                        </h1>
                        <p className="mt-10 mb-3 text-[17px] md:px-[200px] text-center leading-7 text-mainText">
                        We transcribe and translate audios in over 25 languages including Spanish, French, Chinese, and more. However our expertise resides within <strong>English and Spanish</strong> transcriptions and translations.
                        </p>
                        <Image
                            src={team}
                            className="m-auto md:w-[50%]"
                            alt=""
                        />
                        <div className="my-10 gap-5 sm:flex ">
                            {languages.map((language, index) => (
                                <div
                                    className="d:w-1/4 mt-5 sm:w-1/2 md:mt-0"
                                    key={index}
                                >
                                    <h1 className="mb-5 border-b-[1px] border-b-mainText pb-2 text-[28px] font-semibold tracking-[-0.4px]">
                                        {language.alpha}
                                    </h1>
                                    {language.items.map((item, k) => (
                                        <p
                                            className={`text-[15px] leading-8 text-mainText`}
                                            key={k}
                                        >
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
                <GetQuote />
            </MainLayout>
        </>
    )
}
