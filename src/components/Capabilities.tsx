import { BrainCircuit, Workflow, Database, Shield } from 'lucide-react';

export default function Capabilities() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
                            <BrainCircuit className="w-4 h-4 text-sky-400" />
                            <span className="text-sky-400 text-sm font-medium">AI & Agents</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white mb-6">
                            自主问题求解的<br />浏览器智能体
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">自主推理与规划</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        实现浏览器智能体的自主推理和任务规划，能够理解用户意图并独立制定解决方案
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">并行多Agent会话</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        支持大规模、高并发的智能体操作，多个Agent可同时独立工作，提升系统吞吐量和效率
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">LLM辅助理解</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        利用大模型辅助理解页面内容与结构化提取，结合视觉和语言能力，实现更深层的网页理解
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-sky-500/5 border border-sky-500/20 rounded-xl">
                            <p className="text-sky-400 font-medium">
                                核心价值：让AI真正具备自主决策和执行能力
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                            <Workflow className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 text-sm font-medium">Automation & RPA</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white mb-6">
                            高精度、高健壮性的<br />自动化操作
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">工作流驱动</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        基于工作流的自动化操作设计，支持复杂的业务流程编排
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">高精度控制</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        高精度协程安全控制（滚动、点击、提取），确保每一步操作的准确性和可靠性
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">灵活事件处理</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        灵活的事件处理与生命周期管理，确保任务可靠性和容错能力
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                            <p className="text-emerald-400 font-medium">
                                核心优势：快速构建自动化任务，支持长时间稳定运行
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
                            <Database className="w-4 h-4 text-violet-400" />
                            <span className="text-violet-400 text-sm font-medium">Data Extraction</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white mb-6">
                            一行命令完成<br />高鲁棒性结构化提取
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-sky-400 font-medium mb-1">极简提取</p>
                                <p className="text-slate-400 text-sm">一句话/一行命令完成数据提取</p>
                            </div>

                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-sky-400 font-medium mb-1">X-SQL</p>
                                <p className="text-slate-400 text-sm">面向 DOM / 内容的扩展查询语言，轻松管理复杂数据提取任务</p>
                            </div>

                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-sky-400 font-medium mb-1">混合提取</p>
                                <p className="text-slate-400 text-sm">结构化 + 非结构化混合提取（LLM & ML & selector）</p>
                            </div>
                        </div>

                        <div className="p-6 bg-violet-500/5 border border-violet-500/20 rounded-xl">
                            <p className="text-violet-400 font-medium mb-2">
                                核心优势
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                无需手动编写复杂的选择器和规则，Browser4 的 ML 模块自动学习页面结构，支持跨复杂页面的自动化数据提取。机器学习：零 Token，高精度，可解释
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                            <Shield className="w-4 h-4 text-amber-400" />
                            <span className="text-amber-400 text-sm font-medium">Performance & Reliability</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white mb-6">
                            规模化能力与<br />高级反检测
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-sky-400 font-medium mb-1">高效并发</p>
                                <p className="text-slate-400 text-sm">高效并发渲染，实现单机十万页/天的规模化能力</p>
                            </div>

                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-sky-400 font-medium mb-1">智能抗封锁</p>
                                <p className="text-slate-400 text-sm">智能抗封锁与自动重试机制，确保任务持续运行</p>
                            </div>

                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-sky-400 font-medium mb-1">高级反检测</p>
                                <p className="text-slate-400 text-sm">支持IP / Profile 轮换，模拟真实用户行为</p>
                            </div>

                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-sky-400 font-medium mb-1">弹性调度</p>
                                <p className="text-slate-400 text-sm">弹性调度与质量控制，确保任务稳定性和数据准确性</p>
                            </div>
                        </div>

                        <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                            <p className="text-amber-400 font-medium">
                                关键指标：单机每天可处理10万+页面，确保高可用性和低误差率
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
