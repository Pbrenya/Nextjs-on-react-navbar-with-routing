import { HeroHeader } from "@/components/header";
import { SparklesPreview } from "@/components/Sparklesbelow";
import { StatsGrid } from "@/components/stats1";
import { StatsCards } from "@/components/stats2";
import { FaqsGrid } from "@/components/ui/Faqgrid";
import { FaqsAccordion } from "@/components/ui/FAQs";
import { FooterComplex } from "@/components/ui/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import SocialSelector from "@/components/ui/SocialSelector";
import AppDownloadStack from "@/components/smoothui/ui/AppDownloadStack";
import AppleInvites from "@/components/smoothui/ui/AppleInvites";



export default function WhatWeDo() {



    return(
        <>

        <HeroHeader />
        <SparklesPreview />
     <AppDownloadStack />
        {/* <AppleInvites /> */}
        <StatsCards />
        <StatsGrid />
        <FooterComplex />
        <SocialSelector />
        <FaqsAccordion />
        <FaqsGrid />
       



        </>
    );
}


