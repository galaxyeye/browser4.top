import { Search, Sparkles, Users, Workflow, TestTube } from 'lucide-react';

export default function UseCases() {
    const cases = [
        {
            icon: Search,
            number: '01',
            title: '自动化研究与大规模数据收集',
            description: 'Agent 可跨平台自动搜索信息、获取价格、监控变化。Browser4 单机每天可访问十万页面，并通过内置 ML 自动结构化网页数据，使研究效率提升数千倍',
            example: '某电商客户每天采集数十万商品信息，自动生成分析报告，指导选品策略',
            color: 'sky'
        },
        {
            icon: Sparkles,
            number: '02',
            title: 'AI 驱动的互动体验',
            description: '将 LLM 与浏览器 Agent 结合，可阅读、总结并基于内容采取行动。Agent 能跨页面推理、对比、产生洞察，就像一名 24/7 的 AI 实习生',
            example: '许多社交媒体的热门演示视频，都源自此类场景，展示 AI Agent 如何自主完成复杂的网页交互和信息整合任务',
            color: 'violet'
        },
        {
            icon: Users,
            number: '03',
            title: '潜在客户发现与数据丰富化',
            description: '自动爬取目录、活动名单、企业官网等，构建或丰富 CRM 数据库，快速识别潜在客户',
            example: '某客户每天利用 Browser4 从 Google 检索3万客户线索，自动整合多国网站信息，大幅提升销售效率',
            color: 'emerald'
        },
        {
            icon: Workflow,
            number: '04',
            title: '工作流程自动化 (WFA)',
            description: '自动登录、下载发票、提交表单、上传数据、系统之间同步等"设定后忘记"的自动化任务',
            example: '某企业使用 Browser4 自动化处理银行对账流程，每月节省数十小时人工操作，错误率降至零',
            color: 'amber'
        },
        {
            icon: TestTube,
            number: '05',
            title: '质量保证与测试 (QA)',
            description: '在类生产环境中进行 E2E 测试、模拟不同地域用户、24/7监控关键流程',
            example: '自动化测试支付流程、登录认证、跨境购物等关键用户路径，确保产品质量和用户体验',
            color: 'pink'
        }
    ];

    const colorClasses = {
        sky: 'from-sky-500/10 to-blue-500/10 border-sky-500/20 text-sky-400',
        violet: 'from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-400',
        emerald: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400',
        amber: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-400',
        pink: 'from-pink-500/10 to-rose-500/10 border-pink-500/20 text-pink-400'
    };

    return (
        <section className="relative py-24 bg-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.05),transparent_50%)]" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        应用场景
                    </h2>
                    <p className="text-xl text-slate-400">
                        浏览器AI Agent的典型应用场景
                    </p>
                </div>

                <div className="space-y-8">
                    {cases.map((useCase, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[useCase.color as keyof typeof colorClasses]} border flex items-center justify-center`}>
                                        <useCase.icon className="w-8 h-8" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex items-start gap-4 mb-4">
                    <span className={`text-5xl font-bold ${colorClasses[useCase.color as keyof typeof colorClasses].split(' ')[3]}`}>
                      {useCase.number}
                    </span>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                {useCase.title}
                                            </h3>
                                            <p className="text-slate-400 leading-relaxed mb-4">
                                                {useCase.description}
                                            </p>
                                            <div className={`p-4 bg-gradient-to-br ${colorClasses[useCase.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')} border ${colorClasses[useCase.color as keyof typeof colorClasses].split(' ')[2]} rounded-xl`}>
                                                <p className="text-sm font-medium mb-1 text-slate-300">案例</p>
                                                <p className="text-sm text-slate-400 leading-relaxed">
                                                    {useCase.example}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
