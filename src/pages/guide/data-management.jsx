import Image from 'next/future/image'
import { HelpLayout } from '@/components/layout/HelpLayout'
import { HelpBreadCrumb } from '@/components/pages/help-center/HelpBreadcrumb'
import GuideLeft from '@/components/pages/guide/guideLeft'
import { Container } from '@/components/common/Container'
import GuideBottom from '@/components/pages/guide/guidBottom'
import dataformat1 from '@/images/gifs/nvivo1.1.gif'
import dataformat2 from '@/images/gifs/ezgif-3-1131c8cb5ed0.gif'
import dataformat3 from '@/images/gifs/about-gifi.gif'
import { GetQuote } from '@/components/pages/home/GetQuote'

export default function DataManagement() {
    return (
        <HelpLayout title="Help - Data Management | Landmark">
            <HelpBreadCrumb breadcrumb="Data Management" />
            <Container>
                <div className="mb-20 md:flex md:gap-20">
                    <div className="hidden  md:block md:w-1/3">
                        <GuideLeft />
                    </div>
                    <div className="relative md:w-2/3">
                        <div className="  text-[15px] text-mainText  md:rounded-2xl md:border-[1px]  md:border-[#ddd] md:bg-white md:p-[56px]">
                            <h1 className="text-[22px] font-medium">
                                How important is Data Management for Qualitative
                                Research?
                            </h1>
                            <h2 className="mt-16 text-[19px] font-medium ">
                                Data Management
                            </h2>
                            <p className="py-10">
                                The management of research data is a service
                                area that is getting more attention from
                                libraries. Many librarians have begun to provide
                                a variety of services in this area and now
                                impart knowledge on data management to
                                researchers to improve the following things:
                            </p>
                            <div className="text-[15px] leading-[44px]">
                                <p>• Data Management Practices</p>
                                <p>• Create Data Management Subject Guides</p>
                                <p>• Assist in Supporting Funding Agency</p>
                                <p>• Publisher Data Requirements</p>
                            </div>
                            <Image
                                src={dataformat1}
                                alt=""
                                className="rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[80%]"
                            />
                            <h2 className="mt-16 text-[19px] font-medium ">
                                What is Data, and how do I understand it?
                            </h2>
                            <p className="py-10">
                                To understand, you must first understand what
                                Data Management is. To put it simply, data can
                                be defined as facts and statistics organized for
                                reference and analysis. If you look at it from
                                an Information Science perspective, data can be
                                defined more in relations to the scope of
                                research, meaning that data is:
                            </p>
                            <div className="mb-5 text-[15px] leading-[44px]">
                                <p>• Collected</p>
                                <p>• Observed</p>
                                <p>• Created</p>
                            </div>
                            <Image
                                src={dataformat2}
                                alt=""
                                className="rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[80%]"
                            />
                            <p className="py-10">
                                For the purposes of examination to produce
                                original research results. It is essential to
                                recognize that data goes beyond worksheets of
                                numbers and can take countless forms:
                                Biospecimens, video/audio recordings, pictures,
                                and procedures. It is perhaps most useful to
                                think of data as everything necessary to
                                replicate a given scientific output.
                            </p>
                            <h2 className="text-[19px] font-medium ">
                                Good Data Management
                            </h2>
                            <p className="py-4">
                                Let us dive a little deeper into understanding
                                Data and why proper data management is needed.
                                The first step is that we must recognize that
                                data is neither static nor isolated. Data is
                                processed and analyzed by combining different
                                measurements or different data types, which
                                makes a story.
                            </p>
                            <p className="py-4">
                                A simple example is a researcher gathering of
                                magnetic resonance imaging (MRI) data from many
                                patients in a clinical trial focusing on the
                                before and after treatment when using a specific
                                drug. The MRI images would then be handled in
                                some way, which could be done by measuring tumor
                                size to producing a set of numbers.
                            </p>
                            <p className="py-4">
                                The breakdown of the analysis would involve
                                linking information about the change in tumor
                                size, the dosage, and length of treatment. Then
                                this information could be used to produce a
                                figure in a published article, in which that
                                figure communicates how well the drug therapy
                                worked. If the researcher were also gathering
                                blood samples, recording vital signs, or testing
                                for biomarkers, the story would become more
                                complex. Using many subjects with multiple data
                                types in the research process creates a
                                considerable amount and range of data that needs
                                to be accounted for and organized
                            </p>
                            <h2 className="mt-16 text-[19px] font-medium ">
                                Meaning and Need for Research Data Management
                            </h2>
                            <p className="py-4">
                                To give you an idea of the purpose and need for
                                Research Data Management. Imagine the data from
                                such an experiment could be composed of:
                            </p>
                            <p className="py-4">
                                • A folder filled with MRI image files or
                                perhaps multiple folders filled with MRI images
                                for an individual study participant
                            </p>
                            <p className="py-4">
                                • Data regarding treatment timing and dosage
                                stored in spreadsheets or possibly in paper
                                forms
                            </p>
                            <p className="py-4">
                                • Spreadsheets of Processed Data
                            </p>
                            <p className="py-4">
                                • Final analyzed data used to create a figure
                                for publication.
                            </p>
                            <Image
                                src={dataformat3}
                                alt=""
                                className="rounded-md shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)] md:w-[80%]"
                            />
                            <p className="py-4">
                                Say a researcher happened to be called upon to
                                produce raw data that was used to create a
                                published figure with the information above,
                                this task would be challenging without proper
                                data management, if not impossible. By using
                                descriptive names for variables, for example,
                                Tumor Size, putting the weight in kg. That
                                communicates what they represent, descriptive
                                titles for files and folders, which makes it
                                clear what is contained therein, and a saved
                                study workflow that describes the analysis
                                methodology. All of these seemingly small
                                details are types of data management.
                            </p>
                            <p className="py-4">
                                Data management ensures that the story of a
                                researcher’s data collection process is
                                organized, understandable, and clear. The notion
                                of the data lifecycle is often used to help
                                researchers understand the scope and meaning of
                                data management. Data management needs to fall
                                within the first three stages of this lifecycle:
                                creating or collecting data, processing data
                                from its rawest form to another form for
                                examination, and analyzing the data so that the
                                results can be passed on as some form of
                                academic output, such as a journal article.
                            </p>
                            <p className="py-4">
                                All three of these stages require data
                                management to ensure that the researchers
                                document how they collected their data and how
                                they transformed raw data into analyzed data,
                                and to guarantee that the data is described in a
                                clear way. If the data is clear, it can be used
                                by other researchers to test the strength of the
                                original results or to reanalyze the original
                                data differently.
                            </p>
                            <p className="py-8 font-semibold">
                                Data management is vital to making data
                                discoverable, accessible, and understandable,
                                and making things discoverable, accessible, and
                                understandable is a key part of what researchers
                                do.
                            </p>
                            <hr />
                            <p className="py-8">
                                If you need assistance, please feel free to
                                contact us at 02 7202 0557
                            </p>
                        </div>
                        <GuideBottom getStart />
                    </div>
                </div>
            </Container>
            <GetQuote />
        </HelpLayout>
    )
}
