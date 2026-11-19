'use client'

import AwsImage from'./assets/aws.png'
import CssImage from './assets/css.png'
import HtmlImage from './assets/html.png'
import ReactImage from './assets/react.webp'
import NextImage from './assets/nextjs.svg'
import ReduxImage from './assets/redux.svg'
import JavascriptImage from './assets/javascript.png'
import TypeScript from './assets/typescript.png'
import MaterialImage from './assets/material.png'
import TailwindImage from './assets/tailwind.png'
import SvelteImage from './assets/svelte.png'
import GitImage from './assets/github.svg'
import FigmaImage from './assets/figma.svg'
import GraphQLImage from './assets/graphql.svg'
import ClaudeImage from './assets/anthropic.svg'
import ZustandImage from './assets/zustand.svg'
import FramerImage from './assets/framer-motion.svg'
import RestApiImage from './assets/restapi.svg'
import D3Image from './assets/d3.svg'
import FirebaseImage from './assets/firebase.svg'
import StripeImage from './assets/stripe.svg'
import AmazonConnectImage from './assets/amazon-connect.svg'
import Image from "next/image";
import {useStaggerOnScroll} from "@/hooks/staggerScroll";

const categories = [
    {
        label: 'AI & Intelligent Tools',
        skills: [
            { image: ClaudeImage, title: 'Claude AI', desc: 'Building AI-powered apps with Anthropic API, prompt engineering & agent workflows' },
        ]
    },
    {
        label: 'Frontend Frameworks',
        skills: [
            { image: ReactImage, title: 'React.js', desc: 'Component architecture, hooks, state management' },
            { image: NextImage, title: 'Next.js', desc: 'SSR, SSG, API routes, App Router' },
            { image: SvelteImage, title: 'Svelte.js', desc: 'Reactive UI with minimal boilerplate' },
            { image: ReduxImage, title: 'Redux', desc: 'Global state with Redux Toolkit & async thunks' },
            { image: ZustandImage, title: 'Zustand', desc: 'Lightweight state management with minimal boilerplate' },
            { image: FramerImage, title: 'Framer Motion', desc: 'Animations, gestures, layout transitions' },
        ]
    },
    {
        label: 'Languages',
        skills: [
            { image: JavascriptImage, title: 'Javascript', desc: 'ES6+, async/await, DOM manipulation' },
            { image: TypeScript, title: 'Typescript', desc: 'Type-safe development, generics, interfaces' },
            { image: HtmlImage, title: 'HTML', desc: 'Semantic markup, accessibility, SEO' },
            { image: CssImage, title: 'CSS', desc: 'Animations, Grid, Flexbox, responsive design' },
        ]
    },
    {
        label: 'UI & Styling',
        skills: [
            { image: MaterialImage, title: 'Material UI', desc: 'Component library, theming, custom design systems' },
            { image: TailwindImage, title: 'Tailwind', desc: 'Utility-first CSS, rapid prototyping' },
            { image: D3Image, title: 'D3.js', desc: 'Data visualizations, charts, interactive graphs' },
        ]
    },
    {
        label: 'Backend & Services',
        skills: [
            { image: RestApiImage, title: 'REST APIs', desc: 'Design, integration, and consumption of RESTful services' },
            { image: FirebaseImage, title: 'Firebase', desc: 'Firestore, Auth, real-time listeners, cloud functions' },
            { image: StripeImage, title: 'Stripe', desc: 'Payment integration, subscriptions, checkout flows' },
            { image: AmazonConnectImage, title: 'Amazon Connect', desc: 'Cloud contact center, call analytics integration' },
            { image: GraphQLImage, title: 'GraphQL', desc: 'Queries, mutations, schema design' },
        ]
    },
    {
        label: 'Tools & Infrastructure',
        skills: [
            { image: AwsImage, title: 'AWS', desc: 'S3, Lambda, CloudFront, deployment' },
            { image: GitImage, title: 'Git/Github', desc: 'Version control, CI/CD, code review' },
            { image: FigmaImage, title: 'Figma', desc: 'Design-to-code, prototyping, collaboration' },
        ]
    },
];

export const Skills = ()=>{

    const ref = useStaggerOnScroll({
        delayStep: 80,
    });

    return (
        <div className='flex flex-col gap-[30px] sm:gap-[60px]' id={'skills'}>
            <h2 className={'text-white font-bold tracking-[3px] text-[36px] leading-[44px] text-center md:tracking-[4px] md:text-[80px] md:leading-[80px] lg:text-[90px] lg:leading-[110px] lg:text-left'}>
                TECHNICAL SKILLS
            </h2>
            <div ref={ref as any} className="flex flex-col gap-[28px] sm:gap-[40px]">
                {categories.map((cat, ci) => (
                    <div key={ci}>
                        <h3 className="text-[#c5ff41] text-[14px] uppercase tracking-[3px] mb-[16px] font-bold text-center md:text-left">{cat.label}</h3>
                        <ul className='grid grid-cols-2 gap-[10px] sm:gap-[16px] md:grid-cols-3'>
                            {cat.skills.map((el, index) => (
                                <li key={index} className='skill-card relative rounded-[12px] md:rounded-[16px] p-[14px_10px] sm:p-[20px_16px] flex flex-col gap-[8px] sm:gap-[12px] items-center md:items-start border border-transparent'>
                                    <Image src={el.image} alt={el.title} height={34} className="h-[28px] sm:h-[42px] w-auto"/>
                                    <h4 className={'text-white text-[14px] sm:text-[18px] font-bold text-center md:text-left'}>{el.title}</h4>
                                    <p className={'text-[#998f8f] text-[11px] sm:text-[13px] text-center md:text-left leading-[1.4]'}>{el.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
