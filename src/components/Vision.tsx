import { Rocket, Store, List, Globe } from 'lucide-react';

export default function Vision() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        未来愿景
                    </h2>
                    <p className="text-xl text-slate-400">
                        构建对所有参与方公平、可持续的智能体生态系统
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">生态现状痛点</h3>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                <div>
                                    <p className="text-white font-medium">缺乏统一应用商店</p>
                                    <p className="text-slate-400 text-sm">没有集中的 Agent 发布和发现平台</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                <div>
                                    <p className="text-white font-medium">缺乏可搜索目录</p>
                                    <p className="text-slate-400 text-sm">用户难以找到合适的 Agent 解决方案</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                <div>
                                    <p className="text-white font-medium">缺乏标准发布渠道</p>
                                    <p className="text-slate-400 text-sm">分发和部署流程不统一</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Agent 能力现状</h3>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                                <p className="text-slate-300">大模型能实时生成代码</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                                <p className="text-slate-300">视觉网络 Agent 能像人类一样浏览网页</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                                <p className="text-slate-300">操作系统级 Agent 能接管点击等交互</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">未来三年预测</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-sky-500/10 to-transparent border border-sky-500/20 rounded-2xl p-6">
                            <Store className="w-10 h-10 text-sky-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Agent Hub</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                建立统一的 Agent 应用商店，支持分类、搜索、评分和版本管理
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-2xl p-6">
                            <List className="w-10 h-10 text-violet-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">分类市场</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                按功能分类（数据采集、自动化、分析等），建立透明的质量评分机制
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl p-6">
                            <Rocket className="w-10 h-10 text-emerald-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">预构建目录</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                可浏览的"预构建 Agent"目录（订机票、费用管理、竞品监控等）
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6">
                            <Globe className="w-10 h-10 text-amber-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">协同进化</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                网站主动适配 Agent 访问，提供更友好的数据接口和交互方式
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-emerald-500/10 border border-sky-500/30 rounded-3xl p-12 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Browser4 的使命
                    </h3>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                        智能体时代已经开启。Browser4 正在构建一个对所有参与方公平、可持续的智能体生态系统，
                        让 AI 真正具备自主决策和执行能力，推动互联网向智能体互联网的演进。
                    </p>
                    <p className="text-lg text-sky-400 mb-8">
                        我们相信，浏览器将成为智能体的最佳载体，而 Browser4 将是这个时代的基础设施。
                    </p>
                    <div className="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 rounded-xl text-white font-bold text-lg">
                        让我们一起构建未来
                    </div>
                </div>
            </div>
        </section>
    );
}
