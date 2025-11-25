import { Code, Play, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function CodeExamples() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const examples = [
        {
            title: 'Browser Agents',
            description: '自主推理、规划并完成复杂的浏览器任务',
            language: 'kotlin',
            code: `val agent = AgenticContexts.getOrCreateAgent()

val task = """
    1. go to amazon.com
    2. search for pens to draw on whiteboards
    3. compare the first 4 ones
    4. write the result to a markdown file
    """

agent.run(task)`,
            color: 'sky'
        },
        {
            title: 'Workflow Automation',
            description: '精确的元素交互与快速数据提取',
            language: 'kotlin',
            code: `val session = AgenticContexts.getOrCreateSession()
val driver = session.getOrCreateBoundDriver()

// 打开并解析页面
var page = session.open(url)
var document = session.parse(page)

// 与页面交互
var result = agent.act("scroll to the comment section")
var content = driver.selectFirstTextOrNull("#comments")

// 复杂的agent任务
var history = agent.run(
    "Search for 'smart phone', read the first four products"
)`,
            color: 'emerald'
        },
        {
            title: 'LLM + X-SQL',
            description: '结合LLM智能和精确选择器的高效数据提取',
            language: 'kotlin',
            code: `val sql = """
select
  llm_extract(dom, 'product name, price, ratings') as llm_data,
  dom_first_text(dom, '#productTitle') as title,
  dom_first_text(dom, '#bylineInfo') as brand,
  str_first_float(dom_first_text(dom,
    '#reviewsMedley .AverageCustomerReviews span'
  ), 0.0) as score
from load_and_select(
    'https://www.amazon.com/dp/B08PP5MSVB', 'body'
);
"""

val rs = context.executeQuery(sql)
println(ResultSetFormatter(rs, withHeader = true))`,
            color: 'violet'
        },
        {
            title: 'High-Speed Parallel Processing',
            description: '单机每天处理10万+页面的并行浏览器控制',
            language: 'kotlin',
            code: `val args = "-refresh -dropContent -interactLevel fastest"
val blockingUrls = listOf("*.png", "*.jpg")

val links = LinkExtractors.fromResource("urls.txt")
    .map { ListenableHyperlink(it, "", args = args) }
    .onEach {
        it.eventHandlers.browseEventHandlers
          .onWillNavigate.addLast { page, driver ->
            driver.addBlockedURLs(blockingUrls)
        }
    }

session.submitAll(links)`,
            color: 'amber'
        }
    ];

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section className="relative py-24 bg-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_50%)]" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
                        <Code className="w-4 h-4 text-sky-400" />
                        <span className="text-sky-400 text-sm font-medium">代码示例</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        开发者友好的API
                    </h2>
                    <p className="text-xl text-slate-400">
                        简洁优雅的代码示例，快速上手Browser4
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {examples.map((example, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative p-6 border-b border-slate-800">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {example.title}
                                </h3>
                                <p className="text-slate-400">
                                    {example.description}
                                </p>
                            </div>

                            <div className="relative p-6">
                                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-500">
                    {example.language}
                  </span>
                                    <button
                                        onClick={() => handleCopy(example.code, index)}
                                        className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                                        title="复制代码"
                                    >
                                        {copiedIndex === index ? (
                                            <Check className="w-4 h-4 text-green-400" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-slate-400 hover:text-sky-400" />
                                        )}
                                    </button>
                                </div>

                                <pre className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm font-mono text-slate-300 leading-relaxed">
                    {example.code}
                  </code>
                </pre>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        实时演示
                    </h2>
                    <p className="text-xl text-slate-400 mb-12">
                        观看Browser4在实际场景中的表现
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all duration-300">
                        <div className="aspect-video bg-slate-950 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <a
                                    href="https://www.youtube.com/watch?v=_BcryqWzVMI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-full h-full group/video"
                                >
                                    <img
                                        src="https://img.youtube.com/vi/_BcryqWzVMI/0.jpg"
                                        alt="YouTube Demo"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center transform group-hover/video:scale-110 transition-transform">
                                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                                YouTube 演示
                            </h3>
                            <p className="text-slate-400 text-sm mb-4">
                                Watch Browser4 AI Agents in action on YouTube
                            </p>
                            <a
                                href="https://www.youtube.com/watch?v=_BcryqWzVMI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                            >
                                <span>查看完整视频</span>
                                <Play className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="group relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all duration-300">
                        <div className="aspect-video bg-slate-950 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <a
                                    href="https://www.bilibili.com/video/BV1kM2rYrEFC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-full h-full group/video"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center mx-auto mb-4 transform group-hover/video:scale-110 transition-transform">
                                                <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                            </div>
                                            <p className="text-white font-medium">哔哩哔哩 演示视频</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Bilibili 演示
                            </h3>
                            <p className="text-slate-400 text-sm mb-4">
                                在哔哩哔哩观看Browser4智能体完整演示
                            </p>
                            <a
                                href="https://www.bilibili.com/video/BV1kM2rYrEFC"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                            >
                                <span>去哔哩哔哩观看</span>
                                <Play className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 p-8 bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-emerald-500/10 border border-sky-500/20 rounded-2xl">
                    <div className="flex items-start gap-4">
                        <Code className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                快速开始
                            </h3>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                Browser4需要Java 17+和Maven 3.6+。克隆仓库后，配置LLM API密钥，然后构建并运行示例代码。
                            </p>
                            <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                                <div>git clone https://github.com/platonai/browser4.git</div>
                                <div className="mt-2">cd browser4 && ./mvnw -q -DskipTests</div>
                            </div>
                            <a
                                href="https://github.com/platonai/browser4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-6 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium transition-all"
                            >
                                访问GitHub仓库
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
