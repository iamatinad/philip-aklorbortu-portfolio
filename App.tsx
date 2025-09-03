import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, LEADERSHIP_DATA, AWARDS_DATA, SKILLS_DATA, ICONS } from './constants';

const sections = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'awards', name: 'Awards' },
    { id: 'projects', name: 'Projects' },
];

const ArrowUpRightIcon = ICONS['arrow-up-right'];
const ArrowUpIcon = ICONS['arrow-up'];

const Nav: React.FC<{ activeSection: string }> = ({ activeSection }) => (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-16 w-max">
            {sections.map(section => (
                <li key={section.id}>
                    <a className="group flex items-center py-3" href={`#${section.id}`}>
                        <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none ${activeSection === section.id ? 'w-16 bg-slate-200' : ''}`}></span>
                        <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 ${activeSection === section.id ? 'text-slate-200' : ''}`}>
                            {section.name}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-block bg-sky-400/10 text-sky-300 text-xs font-medium px-3 py-1 rounded-full">
        {skill}
    </span>
);

const PortfolioCard: React.FC<{
  date: string;
  title: string;
  subtitle: string;
  details: (string | React.ReactNode)[];
  isVolunteer?: boolean;
}> = ({ date, title, subtitle, details, isVolunteer }) => (
  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-8">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={date}>
      {date}
    </header>
    <div className="z-10 sm:col-span-6">
      <h3 className="font-medium leading-snug text-slate-200">
          <span className="inline-block font-bold group-hover:text-sky-400 transition-colors duration-200">
            {title}
          </span>
          {isVolunteer && <span className="text-sm font-normal text-slate-500 ml-2">(Volunteer)</span>}
          <span className="text-slate-500"> · {subtitle}</span>
      </h3>
      <div className="mt-2 text-sm leading-normal text-slate-400 space-y-2">
        {details.map((point, index) => <p key={index}>{point}</p>)}
      </div>
    </div>
  </div>
);

const BackToTopButton: React.FC<{ isVisible: boolean, scrollToTop: () => void }> = ({ isVisible, scrollToTop }) => (
    <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-slate-800/50 text-slate-200 hover:bg-slate-700/70 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Go to top of page"
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
        <ArrowUpIcon className="h-6 w-6" />
    </button>
);


const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [showBackToTop, setShowBackToTop] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    const scrollToTop = (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(e) e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find(entry => entry.isIntersecting)?.target.id;
            if (visibleSection) {
                setActiveSection(visibleSection);
            }
        }, { rootMargin: '-20% 0px -80% 0px' });

        const elements = document.querySelectorAll('section[id]');
        elements.forEach(el => observer.current?.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            elements.forEach(el => observer.current?.unobserve(el));
        };
    }, []);

    return (
        <>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                                <a href="/" onClick={scrollToTop}>{PERSONAL_INFO.name}</a>
                            </h1>
                            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                                {PERSONAL_INFO.tagline}
                            </h2>
                            <p className="mt-4 max-w-xs leading-normal">{PERSONAL_INFO.about}</p>
                            <Nav activeSection={activeSection} />
                        </div>
                        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                            <li className="mr-5 shrink-0">
                                <a className="block hover:text-slate-200" href={PERSONAL_INFO.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                                    <ICONS.github className="h-6 w-6" />
                                </a>
                            </li>
                            <li className="mr-5 shrink-0">
                                <a className="block hover:text-slate-200" href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                                    <ICONS.linkedin className="h-6 w-6" />
                                </a>
                            </li>
                             <li className="mr-5 shrink-0">
                                <a className="block hover:text-slate-200" href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email">
                                    <ICONS.email className="h-6 w-6" />
                                </a>
                            </li>
                        </ul>
                    </header>

                    <main className="pt-24 lg:w-1/2 lg:py-24">
                        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About">
                             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                            </div>
                            <div>
                                <p className="mb-4">{PERSONAL_INFO.about}</p>
                                 <div className="mt-6">
                                    <h3 className="text-lg font-semibold text-slate-300 mb-3">Interests</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {PERSONAL_INFO.interests.map(interest => <SkillBadge key={interest} skill={interest} />)}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                            </div>
                            <div className="group/list">
                                 <h3 className="text-lg font-bold text-slate-200 mb-4">Industrial</h3>
                                {EXPERIENCE_DATA.industrial.map((item, i) => (
                                    <PortfolioCard key={i} date={item.date} title={item.role} subtitle={item.company} details={item.points} isVolunteer={item.isVolunteer} />
                                ))}
                                 <h3 className="text-lg font-bold text-slate-200 mb-4 mt-12">Research</h3>
                                 {EXPERIENCE_DATA.research.map((item, i) => (
                                    <PortfolioCard key={i} date={item.date} title={item.role} subtitle={item.company} details={item.points} />
                                ))}
                                 <h3 className="text-lg font-bold text-slate-200 mb-4 mt-12">Leadership</h3>
                                 {LEADERSHIP_DATA.map((item, i) => (
                                    <PortfolioCard key={i} date={item.date} title={item.role} subtitle={item.company} details={item.points} />
                                ))}
                            </div>
                        </section>

                         <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
                            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
                            </div>
                             <div className="space-y-8">
                                {SKILLS_DATA.map(category => (
                                    <div key={category.title}>
                                        <h3 className="text-md font-bold text-slate-300 mb-3">{category.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map(skill => <SkillBadge key={skill} skill={skill} />)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
                             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
                            </div>
                            <div className="group/list">
                                {EDUCATION_DATA.map((item, i) => (
                                    <PortfolioCard key={i} date={item.date} title={item.degree} subtitle={item.institution} details={item.description} />
                                ))}
                            </div>
                        </section>

                        <section id="awards" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Awards">
                             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Awards</h2>
                            </div>
                            <div className="group/list">
                                {AWARDS_DATA.map((item, i) => (
                                    <PortfolioCard key={i} date={item.date} title={item.title} subtitle={item.issuer} details={[item.description]} />
                                ))}
                            </div>
                        </section>

                        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projects">
                            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                            </div>
                            <div className="group/list">
                                 <PortfolioCard
                                    date="Personal"
                                    title="GitHub Profile"
                                    subtitle="Code & Contributions"
                                    details={[
                                        <a
                                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-400 focus-visible:text-sky-400 font-semibold group/link text-base"
                                            href={PERSONAL_INFO.github}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label="GitHub Profile (opens in a new tab)"
                                        >
                                            <span className="inline-block">
                                                Explore my projects on GitHub
                                                <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                            </span>
                                        </a>,
                                        "This is where I host my personal projects, experiments, and contributions to the open-source community."
                                    ]}
                                />
                            </div>
                        </section>

                        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                            <p>
                               &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
                            </p>
                        </footer>
                    </main>
                </div>
            </div>
            <BackToTopButton isVisible={showBackToTop} scrollToTop={() => scrollToTop()} />
        </>
    );
};

export default App;