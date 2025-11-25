import { Bot, Zap, Database } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.1),transparent_50%)]" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-8">
                    <Bot className="w-4 h-4 text-sky-400" />
                    <span className="text-sky-400 text-sm font-medium">超高速浏览器与智能体时代的基础设施</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Browser<span className="text-sky-400">4</span>
                </h1>

                <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
                    通往"万物数字孪生"的必由之路
                </p>

                <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                    为智能体时代打造的浏览器基础设施，让AI真正具备自主决策和执行能力
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    <button className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-sky-500/30">
                        开始使用
                    </button>
                    <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700">
                        了解更多
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-sky-500/50 transition-all">
                        <Zap className="w-8 h-8 text-sky-400 mb-3 mx-auto" />
                        <h3 className="text-lg font-semibold text-white mb-2">极致性能</h3>
                        <p className="text-slate-400 text-sm">单机每天处理10万+复杂页面</p>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-sky-500/50 transition-all">
                        <Bot className="w-8 h-8 text-sky-400 mb-3 mx-auto" />
                        <h3 className="text-lg font-semibold text-white mb-2">智能体驱动</h3>
                        <p className="text-slate-400 text-sm">自主推理、规划与执行任务</p>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-sky-500/50 transition-all">
                        <Database className="w-8 h-8 text-sky-400 mb-3 mx-auto" />
                        <h3 className="text-lg font-semibold text-white mb-2">智能提取</h3>
                        <p className="text-slate-400 text-sm">一行命令完成结构化数据提取</p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800">
                    <p className="text-slate-500 text-sm mb-4">发展历程</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm">
                        <div className="hidden md:block text-slate-700">•</div>
                        <div>
                            <span className="text-sky-400 font-bold">始于2014年</span>
                            <span className="text-slate-400 ml-2">专注浏览器自动化/智能体</span>
                        </div>
                        <div className="hidden md:block text-slate-700">•</div>
                        <div>
                            <span className="text-sky-400 font-bold">至今</span>
                            <span className="text-slate-400 ml-2">服务近百家企业客户</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
