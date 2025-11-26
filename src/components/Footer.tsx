import { Github, Mail, Globe, ArrowUpRight } from 'lucide-react';

const footerLinks = [
    {
        title: 'Product',
        links: ['Browser Agents', 'Automation Platform', 'Data Extraction', 'Pricing']
    },
    {
        title: 'Resources',
        links: ['Documentation', 'API Reference', 'Case Studies', 'Blog']
    },
    {
        title: 'Company',
        links: ['About Us', 'Partners', 'Careers', 'Media Kit']
    }
];

export default function Footer() {
    return (
        <footer className="relative bg-slate-50 text-slate-900 border-t border-slate-200 dark:bg-slate-950 dark:text-white dark:border-slate-900">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
                <div className="bg-gradient-to-r from-sky-100 via-violet-100 to-emerald-100 border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-200/40 dark:from-sky-500/10 dark:via-violet-500/10 dark:to-emerald-500/10 dark:border-slate-800 dark:shadow-none">
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em] mb-2">Ready to launch</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Build the agent era with Browser4</h3>
                        <p className="text-slate-600 dark:text-slate-300">Book a demo or request a POC to see how Browser4 plugs into your workflows.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-semibold shadow-md shadow-sky-500/30">Book a demo</button>
                        <button className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-semibold hover:border-slate-400 dark:border-slate-700 dark:text-white/80 dark:hover:border-slate-500">Download whitepaper</button>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Browser<span className="text-sky-500">4</span></h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            Browser infrastructure engineered for the agent era—building a fair, sustainable ecosystem.
                        </p>
                        <div className="flex gap-3">
                            {[Github, Mail, Globe].map((Icon) => (
                                <a
                                    key={Icon.name}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-500 hover:border-sky-400 transition dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="group/footerlink text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition flex items-center gap-2">
                                            <span>{link}</span>
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/footerlink:opacity-100 transition" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    <p>© {new Date().getFullYear()} Browser4. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-sky-600 dark:hover:text-sky-300">Privacy</a>
                        <a href="#" className="hover:text-sky-600 dark:hover:text-sky-300">Terms</a>
                        <a href="#" className="hover:text-sky-600 dark:hover:text-sky-300">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
