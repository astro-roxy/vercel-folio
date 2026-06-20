// Single source of truth for all copy, links and data on the site.
// Pulled from Rashmi "Astro Roxy" Sheoran's portfolio (sites.google.com/view/astro-roxy).

export const profile = {
  name: 'Rashmi Sheoran',
  alias: 'Astro Roxy',
  role: 'Astronomer & Science Communicator',
  location: 'Nuremberg, Germany',
  email: 'rashmisheoran@gmail.com',
  headline: 'Bring the cosmos down to Earth.',
  intro:
    'I create science stories for kids and curious adults, with a special focus on astronomy and space science. I work across video, articles, events, interviews and podcasts.',
  // Recognisable institutions shown in the hero as instant proof.
  trustedBy: ['ISRO', 'Google India', 'LIGO–India', 'U.S. Consulate'],
  // Headline honours: the instant-credibility line shown in the hero.
  honors: [
    'Guinness World Record holder',
    'Discovered 2 main-belt asteroids',
    'Interviewed Nobel laureate Reinhard Genzel',
  ],
  languages: [
    { label: 'Hindi', native: 'हिन्दी' },
    { label: 'English', native: 'English' },
    { label: 'German', native: 'Deutsch' },
  ],
  socials: [
    { label: 'Instagram', handle: '@astro_roxy', url: 'https://www.instagram.com/astro_roxy/' },
    { label: 'YouTube', handle: 'AstroRoxy', url: 'https://www.youtube.com/c/AstroRoxy' },
    { label: 'LinkedIn', handle: 'astro-roxy', url: 'https://www.linkedin.com/in/astro-roxy/' },
  ],
}

export const stats = [
  { value: 47000, suffix: '+', label: 'Followers reached' },
  { value: 500, suffix: '+', label: 'Posts, films & articles' },
  { value: 350000, suffix: '+', label: 'Views on “3030 Eklavya”' },
  { value: 170, suffix: '+', label: 'Schools engaged' },
]

export const brands = [
  'U.S. Consulate',
  'Google India',
  'LIGO–India',
  'Colors TV',
  'Microsoft India',
  'Nerolac',
  'The Planetary Society',
  'ISRO',
]

export const work = [
  {
    company: 'Kainaat Studios',
    role: 'Host & Writer',
    period: '05/2024–Present',
    location: 'Remote',
    points: [
      'Hosts bilingual (Hindi/Urdu & English) astronomy videos for a YouTube channel reaching South Asian children.',
      'Works with an international team while meeting tight production deadlines.',
    ],
  },
  {
    company: 'Astro Roxy',
    role: 'Independent Creator & Science Communicator',
    period: '08/2018–Present',
    location: 'Independent platform',
    points: [
      'Built an independent platform to 47,000+ Instagram followers.',
      'Created 500+ posts, articles and videos about space and astronomy.',
      'Published science journalism in The India Forum on light pollution.',
      'Partnered with the U.S. Consulate, LIGO–India, Google India, Colors TV and Microsoft India.',
    ],
  },
  {
    company: 'Centre for Creative Learning, IIT Gandhinagar',
    role: 'Project Associate',
    period: '04/2023–03/2025',
    location: 'Gandhinagar, India',
    points: [
      'Researched content for the “3030 Eklavya” science show (350,000+ views).',
      'Scripted and hosted videos; built a 6-inch telescope used in 20+ stargazing sessions.',
      'Ran physics workshops for in-service teachers and weekly sessions reaching 170+ schools.',
    ],
  },
  {
    company: 'Kalam Labs',
    role: 'Science Educator',
    period: '06/2021–10/2022',
    location: 'Remote',
    points: [
      'Hosted a gamified science show six days a week.',
      'Designed interactive workshops and science kits.',
      "Produced a documentary on India's Dark Sky Reserve in Hanle, Ladakh.",
    ],
  },
  {
    company: 'Spaceonova',
    role: 'Chief Astronomical Officer',
    period: '05/2020–03/2021',
    location: 'Remote',
    points: [
      'Mentored seven interns in science communication.',
      'Built asteroid-search tutorials and led masterclasses in space science.',
    ],
  },
  {
    company: 'SciComm India',
    role: 'Travel Educator',
    period: '09/2018–04/2019',
    location: 'India',
    points: [
      "Designed India's first Astrocamp, in Haryana.",
      'Ran astronomy camps across multiple Indian locations.',
    ],
  },
]

// ---- Education --------------------------------------------------------------
export const education = {
  degrees: [
    {
      period: '2025–Present',
      degree: 'MSc, Science Communication',
      place: 'Ansbach University of Applied Sciences, Germany',
      blurb:
        'The hands-on craft of making complex science feel close and human, across press, radio, film and data storytelling.',
    },
    {
      period: '2017–2020',
      degree: 'BSc (Hons.), Physics',
      place: 'University of Delhi, India',
      blurb:
        'Radio-astronomy research: designed a broadband dual-polarisation antenna for the SWAN Design Challenge, and joined the RAD@Home citizen-science project.',
    },
  ],
  // Selected coursework: `primary` shows by default; `more` is behind the toggle.
  courseworkPrimary: [
    { title: 'Press release for the Center for Astrophysics', tag: 'PDF' },
    { title: 'Feature: the challenges facing mega-telescopes in Chile', tag: 'PDF' },
    { title: 'Interview on uncertainty in a researcher’s field', tag: 'PDF' },
    { title: 'Radio news bulletin on a 9-day seismic mystery signal', tag: 'Audio' },
    { title: 'Visual materials for the Globe at Night campaign', tag: 'Deck' },
    { title: 'Visual branding for Energy Campus Nuremberg', tag: 'Deck' },
  ],
  courseworkMore: [
    { title: 'Media freedom & the SciComm landscape in Tunisia', tag: 'Deck' },
    { title: 'Short documentary on a local Nuremberg story', tag: 'Film' },
    { title: 'Data-viz scrollytelling from a 2026 Nature light-pollution paper', tag: 'Data' },
    { title: 'Panel on psychological challenges of international students', tag: 'Talk' },
  ],
  training: [
    'University of Ottawa: SciComm School (certified)',
    'Indian Science Communication Society: Science Journalism',
    'Vikram A. Sarabhai Community Science Centre: SciComm & Outreach',
    'Science Media Centre, IISER Pune: science-news writing',
    'Story Collider: storytelling + Science Story Slam',
    'LIGO–India: Gravitational-Wave SciComm Program',
    'IAU: 1st Asian Regional Shaw-IAU Workshop, Astronomy for Education 2024',
    'NUCLIO: Galileo Teacher Training Program',
  ],
}

// ---- Community & volunteering (full list, with one-line context) ------------
export const volunteer = [
  { name: 'Silbersalz Science & Media Festival', desc: 'Judge for science videos & documentaries, 2026 edition.' },
  { name: 'NASA Space Apps', desc: 'Mentor for Nirma University (2024) across 10 student teams; speaker at the Surat edition (2025).' },
  { name: 'LIGO–India', desc: 'Built digital media translating gravitational-wave science for public outreach campaigns.' },
  { name: 'ISRO Space Tutor', desc: 'Posts & videos on ISRO missions and competitions.' },
  { name: 'Haryana Astro Club', desc: 'Organised free public stargazing events in Ambala & Charkhi Dadri.' },
  { name: 'National Science Centre, Delhi', desc: "Public outreach for India's mega-science Square Kilometre Array exhibition." },
  { name: 'IAAC', desc: 'Ambassador for space-science education; mentored students for a global astrophysics competition.' },
  { name: 'USAAAO', desc: 'Designed academic content & analysed astrophysical data for US olympiad training.' },
  { name: 'Planet Divoc-91', desc: 'Young editorial focus group, multimedia storytelling for public-health science.' },
  { name: 'DBT/Wellcome Trust India Alliance', desc: 'Produced a vox-pop video and interviewed the PSA, Govt. of India.' },
  { name: 'Nehru Planetarium, Delhi', desc: 'Volunteered across events incl. Chandrayaan-2; gave interviews on news channels.' },
  { name: 'Microsoft India', desc: 'Delivered a crash course on Astronomy for their Summer Camp 2023.' },
]

// ---- Gallery ("In the field") ----------------------------------------------
// Drop real photos into /public/assets/gallery and set `src`. Until then the
// tile shows its caption as a placeholder. `span` = grid column span (1 or 2).
export const gallery = [
  { src: '', caption: 'Astrocamp · hill stations', span: 2, rows: 2 },
  { src: '', caption: 'Live science show · Kalam Labs', span: 2, rows: 1 },
  { src: '', caption: 'KGBV classroom', span: 1, rows: 1 },
  { src: '', caption: 'Stargazing night', span: 1, rows: 1 },
  { src: '', caption: 'Studio / streaming', span: 2, rows: 1 },
  { src: '', caption: 'Observatory · Hanle, Ladakh', span: 2, rows: 1 },
]

// `items` render as image cards (each has a real thumbnail). `links` render as
// text links for media without an original cover image.
const T = '/assets/thumbs/'

export const videoGroups = [
  {
    title: 'Collaborations',
    blurb: 'Made with fellow communicators and scientists around the world.',
    items: [
      { title: 'Playing a science board game', with: 'w/ planetary scientist Alissa Pott', url: 'https://www.instagram.com/astro_roxy/reel/DYrlAoasM21/', thumb: T + 'board-game.jpg' },
      { title: 'India lands on the Moon!', with: "w/ The Planetary Society's Ambre Rosario", url: 'https://www.instagram.com/reel/CwT3t3itYRU/', thumb: T + 'moon-landing.jpg' },
      { title: 'How do satellites find your location?', with: 'w/ Noemi Marsico', url: 'https://www.instagram.com/reel/Ch2UDLNjvHY/', thumb: T + 'satellites.jpg' },
    ],
  },
  {
    title: 'Brand collaborations',
    blurb: 'Space storytelling for brands and institutions.',
    items: [
      { title: 'Axiom-4: U.S.–India beyond Earth', with: 'U.S. Consulate General', url: 'https://www.instagram.com/reel/DMplzF7g2dS/', thumb: T + 'axiom4.jpg' },
    ],
    links: [
      { title: 'Apollena', with: 'Colors TV India', url: 'https://www.instagram.com/reel/DC_tBxANfOx/' },
      { title: "Bose's Doodle", with: 'Google India', url: 'https://www.instagram.com/p/CeXlCFuJLXo/' },
      { title: 'Test in Space', with: 'Nerolac Paints', url: 'https://www.instagram.com/astro_roxy/reel/DZfGqLNsB9-/' },
    ],
  },
  {
    title: 'Shorts & explainers',
    blurb: 'Bite-sized wonder.',
    items: [
      { title: 'If You Put Saturn in Water, It Would Float', with: 'Short', url: 'https://www.instagram.com/reel/CZt1uAVpxww/', thumb: T + 'saturn.jpg' },
      { title: 'Why Do Stars Twinkle?', with: 'Short', url: 'https://www.instagram.com/reel/Cw8KXypMl7N/', thumb: T + 'stars-twinkle.jpg' },
      { title: 'Astronomy & Raksha Bandhan', with: 'Short', url: 'https://www.instagram.com/reel/DNIt0imMqCv/', thumb: T + 'raksha-bandhan.jpg' },
      { title: 'How to Become an Astronomer', with: 'Short', url: 'https://www.instagram.com/astro_roxy/reel/Cs37MfUMrAd/', thumb: T + 'become-astronomer.jpg' },
      { title: 'You Have to See This Experiment', with: 'Short', url: 'https://www.instagram.com/astro_roxy/', thumb: T + 'experiment.jpg' },
      { title: "India's First Female Astronaut", with: 'Short', url: 'https://www.instagram.com/astro_roxy/', thumb: T + 'female-astronaut.jpg' },
    ],
  },
  {
    title: 'Films & guides',
    blurb: 'Documentaries, DIY science and monthly stargazing guides, on YouTube.',
    links: [
      { title: 'Interview with Nobel laureate Reinhard Genzel', with: 'Gravitational-wave & black-hole science', url: 'https://www.youtube.com/c/AstroRoxy' },
      { title: 'The Indian Astronomical Observatory, Hanle', with: 'Kalam Labs · documentary', url: 'https://www.youtube.com/c/AstroRoxy' },
      { title: 'Aap Ka Asmaan: your sky this month', with: 'Kainaat Studios', url: 'https://www.youtube.com/c/AstroRoxy' },
      { title: 'The pinhole camera & the size of the Sun', with: 'DIY science', url: 'https://www.youtube.com/c/AstroRoxy' },
      { title: 'Make a lava lamp', with: 'IIT Gandhinagar', url: 'https://www.youtube.com/c/AstroRoxy' },
    ],
  },
]

export const writing = [
  {
    title: "ISRO's Blast off to Discovery: To Moon, Mars and beyond!",
    publication: 'a47.in',
    blurb: "India's expanding ambitions in deep-space exploration.",
    url: 'https://a47.in/blogs/blogs/isro-s-blast-off-to-discovery-to-moon-mars-and-beyond',
  },
  {
    title: 'On light pollution',
    publication: 'The India Forum',
    blurb: 'On rising light pollution over the Indian Astronomical Observatory, and the missing national dark-sky policy.',
    url: 'https://www.theindiaforum.in/',
  },
  {
    title: 'From Garba to Goals: A Journey into the Lives of KGBV Girls',
    publication: 'LinkedIn',
    blurb: 'A field story on girls’ education and aspiration.',
    url: 'https://www.linkedin.com/pulse/from-garba-goals-journey-lives-kgbv-girls-rashmi-sheoran-astro-roxy--gveaf/',
  },
  {
    title: 'The threat to Chile’s clearest skies',
    publication: 'Feature article (PDF)',
    blurb: 'How a $10-billion green-hydrogen megaproject threatens the dark skies above ESO’s Atacama telescopes.',
    url: 'https://sites.google.com/view/astro-roxy/articles',
  },
  {
    title: 'Press release: the largest protoplanetary disk',
    publication: 'CfA',
    blurb: 'On a record-breaking planet-forming disk, from astrophysicists at the Harvard & Smithsonian Center for Astrophysics.',
    url: 'https://sites.google.com/view/astro-roxy/articles',
  },
]

export const speaking = {
  podcasts: [
    {
      show: 'Nature India Podcast',
      episode: 'Episode 34 · Hindi',
      title: 'मोबाइल की दुनिया: विज्ञान शिक्षा और संचार हुआ आसान',
      url: 'https://open.spotify.com/episode/0GIT6Tnlkg27Y5mrB3MxPC',
    },
    {
      show: 'Purple Science Podcast',
      episode: 'Episode #017',
      title: 'Communicating the COSMOS ft. Astro Roxy',
      url: 'https://open.spotify.com/episode/34uC0Cf79kuCAU7TVWEEl7',
    },
    {
      show: 'SciComm Journal Club',
      episode: 'Episode 21',
      title: 'How viewers understand and evaluate science videos online',
      url: 'https://open.spotify.com/episode/64YbQgx6aLpwOa6ZoyEPHw',
    },
  ],
  talks: [
    { title: 'Engineers Day: space & astronomy', url: 'https://www.linkedin.com/posts/astro-roxy_engineersday-space-astronomy-share-7109178690307026944-mtEE/' },
    { title: 'Science education & communication', url: 'https://www.linkedin.com/posts/astro-roxy_scienceeducation-sciencecommunication-science-ugcPost-7223734989299871746-ovoE/' },
    { title: 'Science Journalists Association of India', url: 'https://www.linkedin.com/posts/science-journalists-association-of-india_scicomm-social-sciencejournalism-activity-7270022967932178432-NUjw' },
    { title: 'Zero Shadow Day, Gandhinagar', url: 'https://www.linkedin.com/posts/astro-roxy_zeroshadowday-science-gandhinagar-activity-7207052232884658177-byrp' },
    { title: 'National Space Day', url: 'https://www.linkedin.com/posts/yogesh-chandra-sharma-ba1a3815_nationalspaceday-spacescience-isro-activity-7232666968158347265-LgO2' },
    { title: 'NASA space exploration session', url: 'https://www.linkedin.com/posts/parth-lathiya-802541253_sharing-highlights-from-the-nasa-space-ugcPost-7403760689342853121-nwjE/' },
    { title: 'Uttarakhand Dark Sky Conclave', url: 'https://www.theweek.in/news/tourism/2025/03/23/uttarakhand-tourism-and-starscapes-launch-dark-sky-conclave-to-promote-astronomy-and-combat-light-pollution.html' },
  ],
}

export const about = {
  note: [
    'I grew up chasing the night sky and never quite stopped. Today I tell science stories in three languages (Hindi, English and German) so that wonder isn’t lost in translation.',
    'I’m currently pursuing a master’s in Science Communication, deepening the craft of making complex science feel close, human and a little magical.',
  ],
  trilingual: 'Storytelling across Hindi, English & German, so wonder isn’t lost in translation.',
  hobbies: ['Anime', 'Hiking', 'Cooking', 'Travelling', 'Fitness', 'Board games', 'Philosophy', 'Psychology'],
}
