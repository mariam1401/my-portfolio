


export const ProjectsData = [
    {
        id:'aregAi',
        title:'AREG AI',
        short_description:"AI Monitoring for Solar Energy",
        description:'<section class="project" id="areg-ai">\n' +
            '  <header class="project__header">\n' +
            '    <div class="project__links">\n' +
            '      <a class="project__link" href="https://my.areg.ai/" target="_blank" rel="noopener noreferrer">Website</a>\n' +
            '    </div>\n' +
            '  </header>\n' +
            '\n' +
            '  <div class="project__grid">\n' +
            '    <article class="project__card">\n' +
            '      <h3 class="project__cardTitle">Project overview</h3>\n' +
            '      <p class="project__text">\n' +
            '        Areg AI is a web platform for monitoring and optimizing utility-scale solar plants. It combines\n' +
            '        an interactive digital twin with live operational data, enabling users to explore assets on a map,\n' +
            '        track KPIs in real time, and support anomaly detection and maintenance workflows.\n' +
            '      </p>\n' +
            '\n' +
            '      <ul class="project__list">\n' +
            '        <li>Digital twin UI for plant/asset representation and interaction</li>\n' +
            '        <li>Real-time telemetry and status updates via Firestore streams</li>\n' +
            '        <li>Operational dashboards with custom D3.js charts</li>\n' +
            '        <li>Map-to-panel interactions (select assets, drill-down, filters, layers)</li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '\n' +
            '    <article class="project__card">\n' +
            '      <h3 class="project__cardTitle">My contributions</h3>\n' +
            '      <ul class="project__list">\n' +
            '        <li>\n' +
            '          Built a scalable React UI and component architecture for complex real-time workflows and\n' +
            '          digital twin interactions.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Implemented global state management with Redux Toolkit (slices, selectors, async thunks) to\n' +
            '          coordinate map state, filters, asset selection, and live telemetry.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Integrated Firestore real-time listeners to keep UI state synchronized with backend updates\n' +
            '          with low latency and consistent UX.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Developed reusable D3.js visualizations (time-series, KPIs, trends) that update dynamically\n' +
            '          based on live data and user controls.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Focused on performance and usability: memoized selectors, optimized renders, and built\n' +
            '          responsive layouts for dashboard-heavy screens.\n' +
            '        </li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '\n' +
            '    <article class="project__card project__card--full">\n' +
            '      <h3 class="project__cardTitle">Tech stack</h3>\n' +
            '      <ul class="project__list">\n' +
            '        <li class="tag">React</li>\n' +
            '        <li class="tag">Redux Toolkit</li>\n' +
            '        <li class="tag">Firestore (Realtime)</li>\n' +
            '        <li class="tag">D3.js</li>\n' +
            '        <li class="tag">Interactive Maps / Digital Twin</li>\n' +
            '        <li class="tag">Material UI</li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '  </div>\n' +
            '</section>\n',
        images: [
            { url: '/aregai1.png' },
            { url: '/aregai2.png' },
            { url: '/aregai3.png' },
            { url: '/aregai4.png' },
            { url: '/aregai5.png' },
        ]    },
    {
        id:'focalpoints',
        title:'FocalPoints',
        short_description:"AI Call Analysis & Agent Metrics",
        description:'<section class="project" id="areg-ai">\n' +
            '  <header class="project__header">\n' +
            '  </header>\n' +
            '\n' +
            '  <div class="project__grid">\n' +
            '    <article class="project__card">\n' +
            '      <h3 class="project__cardTitle">Project overview</h3>\n' +
            '      <p class="project__text"> ' +
            '       FocalPoints is an advanced call center analytics and performance management platform designed to provide real-time insights into agent activity, call quality, and operational efficiency. The system enables managers to monitor, evaluate, and optimize call center performance through detailed call analytics, quality control tools, and skill-based performance scoring.\n</p>\n' +
            '\n' +
            '      <ul class="project__list">\n' +
            '        <li>Real-time monitoring of agent activity and call status</li>\n' +
            '        <li>Call quality evaluation and scoring workflows</li>\n' +
            '        <li>Skill-based performance assessment and KPI tracking</li>\n' +
            '        <li>Claim and issue management tools</li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '\n' +
            '    <article class="project__card">\n' +
            '      <h3 class="project__cardTitle">My contributions</h3>\n' +
            '      <ul class="project__list">\n' +
            '        <li>\n' +
            '          Designed and implemented scalable UI architecture for complex real-time workflows.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Built real-time dashboards using Firestore listeners and reactive state handling.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Collaborated on integrating Amazon Connect call data and analytics pipelines.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Ensured responsive and modern UI design using Tailwind.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Focused on performance and usability: memoized selectors, optimized renders, and built\n' +
            '          responsive layouts for dashboard-heavy screens.\n' +
            '        </li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '\n' +
            '    <article class="project__card project__card--full">\n' +
            '      <h3 class="project__cardTitle">Tech stack</h3>\n' +
            '      <ul class="project__list">\n' +
            '        <li class="tag">Svelte</li>\n' +
            '        <li class="tag">Amazon Connect</li>\n' +
            '        <li class="tag">Firestore (Realtime)</li>\n' +
            '        <li class="tag">AWS</li>\n' +
            '        <li class="tag">Tailwind</li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '  </div>\n' +
            '</section>\n',
        images: [
            { url: '/focalpoints1.png' },
            { url: '/focalpoints2.png' },
            { url: '/focalpoints3.png' },
            { url: '/focalpoints4.png' },
        ]
    },
    {
        id:'booka',
        title:'Booka',
        short_description:"The Event Planning Marketplace",
        description:'<section class="project" id="areg-ai">\n' +
            '  <header class="project__header">\n' +
            '    <div class="project__links">\n' +
            '      <a class="project__link" href="https://www.booka.ie/" target="_blank" rel="noopener noreferrer">Website</a>\n' +
            '    </div>\n' +
            '  </header>\n' +
            '\n' +
            '  <div class="project__grid">\n' +
            '    <article class="project__card">\n' +
            '      <h3 class="project__cardTitle">Project overview</h3>\n' +
            '      <p class="project__text"> ' +
            '       Booka is a full-featured event planning marketplace that connects event vendors with customers (bookers) through a seamless booking and payment experience. The platform enables users to discover vendors, schedule services, manage bookings, communicate in real-time, and securely process payments.\n' +
            '\n' +
            'The system combines marketplace functionality, calendar synchronization, real-time communication, and secure payment processing into a scalable modern web application.\n</p>\n' +
            '\n' +
            '      <ul class="project__list">\n' +
            '        <li>Booking management with availability control</li>\n' +
            '        <li>Google Calendar synchronization</li>\n' +
            '        <li>Google Calendar synchronization</li>\n' +
            '        <li>Real-time messaging between vendors and bookers</li>\n' +
            '        <li>Role-based dashboards (Vendor / Booker)</li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '\n' +
            '    <article class="project__card">\n' +
            '      <h3 class="project__cardTitle">My contributions</h3>\n' +
            '      <ul class="project__list">\n' +
            '        <li>\n' +
            '         Architected and implemented the booking workflow from vendor availability to payment confirmation./n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Integrated Stripe payments and handled secure transaction lifecycle.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Built Google Calendar synchronization to automate scheduling.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Designed scalable frontend architecture using Next.js and TypeScript.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Implemented responsive UI components with Material UI.\n' +
            '        </li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '\n' +
            '    <article class="project__card project__card--full">\n' +
            '      <h3 class="project__cardTitle">Tech stack</h3>\n' +
            '      <ul class="project__list">\n' +
            '        <li class="tag">Next.js</li>\n' +
            '        <li class="tag">TypeScript</li>\n' +
            '        <li class="tag">Firestore (Realtime)</li>\n' +
            '        <li class="tag">Google Calendar API integration</li>\n' +
            '        <li class="tag">Stripe</li>\n' +
            '        <li class="tag">Material UI</li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '  </div>\n' +
            '</section>\n',
        images: [
            { url: '/booka1.png' },
            { url: '/booka2.png' },
            { url: '/booka3.png' },
        ]
    },
    {
        id:'wordpress-plugins',
        title:'WordPress Plugins',
        short_description:"All WordPress Plugins, One Place",
        description:'<section class="project" id="areg-ai">\n' +
            '  <header class="project__header">\n' +
            '  </header>\n' +
            '\n' +
            '  <div class="project__grid">\n' +
            '    <article class="project__card">\n' +
            '      <h3 class="project__cardTitle">Project overview</h3>\n' +
            '      <p class="project__text"> ' +
            '       WordPress Plugins Explorer is a modern web platform that aggregates and presents WordPress plugins in a structured, searchable, and analytics-driven interface. The platform allows users to explore plugin details, compare ratings and downloads, read reviews, and generate AI-assisted qualitative evaluations to help determine plugin reliability and quality.\n' +
            '\n' +
            'The system enhances traditional plugin browsing by combining structured metadata, review analytics, and AI-based sentiment insights into a unified discovery experience.\n</p>\n' +
            '\n' +
            '      <ul class="project__list">\n' +
            '        <li>Aggregated WordPress plugin listings</li>\n' +
            '        <li>Plugin detail pages with ratings, downloads, and metadata</li>\n' +
            '        <li>Review analysis and structured feedback display</li>\n' +
            '        <li>Advanced search and filtering</li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '\n' +
            '    <article class="project__card">\n' +
            '      <h3 class="project__cardTitle">My contributions</h3>\n' +
            '      <ul class="project__list">\n' +
            '        <li>\n' +
            '          Designed and implemented the scalable Next.js architecture.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Built dynamic plugin listing and detail pages.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Developed reusable UI components using Tailwind and Material UI.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Optimized performance for large data rendering and filtering.\n' +
            '        </li>\n' +
            '        <li>\n' +
            '          Ensured SEO-friendly structure with SSR.\n' +
            '        </li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '\n' +
            '    <article class="project__card project__card--full">\n' +
            '      <h3 class="project__cardTitle">Tech stack</h3>\n' +
            '      <ul class="project__list">\n' +
            '        <li class="tag">Next.js</li>\n' +
            '        <li class="tag">TypeScript</li>\n' +
            '        <li class="tag">Tailwind</li>\n' +
            '        <li class="tag">Material UI</li>\n' +
            '      </ul>\n' +
            '    </article>\n' +
            '  </div>\n' +
            '</section>\n',
        images: [
            { url: '/wordpress1.png' },
            { url: '/wordpress3.png' },
            { url: '/wordpress2.png' },
            { url: '/wordpress4.png' },

        ]
    },


]
