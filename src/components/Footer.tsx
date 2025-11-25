import { Github, Mail, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 border-t border-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Browser<span className="text-sky-400">4</span>
                        </h3>
                        <p className="text-slate-400 mb-4 leading-relaxed">
                            为智能体时代打造的浏览器基础设施，构建对所有参与方公平、可持续的智能体生态系统。
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">产品</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Browser Agents</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">自动化平台</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">数据提取</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">定价方案</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">资源</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">文档</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">API 参考</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">案例研究</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">博客</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2025 Browser4. 保留所有权利。
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">隐私政策</a>
                        <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">服务条款</a>
                        <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">联系我们</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
