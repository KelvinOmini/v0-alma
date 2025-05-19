import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, BookOpen, Link2 } from "lucide-react"

export function SearchDemo() {
  const demoScenarios = [
    {
      id: "search",
      title: "Advanced Search",
      icon: Search,
      conversation: [
        {
          user: "I need information about the environmental impact of electric vehicles compared to gas vehicles.",
          assistant:
            "I'll search for comprehensive information on the environmental impact of electric vehicles versus gas vehicles. Would you like me to focus on any specific aspects such as manufacturing, usage, or disposal?",
        },
        {
          user: "Focus on the full lifecycle emissions, including manufacturing and disposal.",
          assistant:
            "Searching for information on lifecycle emissions of electric vs. gas vehicles, including manufacturing and disposal phases...\n\nHere are the key findings from reliable sources:\n\n1. Manufacturing Impact:\n   - EVs typically have higher manufacturing emissions due to battery production\n   - A mid-sized EV produces about 15-68% more emissions during manufacturing than a comparable gas vehicle\n\n2. Usage Emissions:\n   - EVs produce zero tailpipe emissions\n   - Total usage emissions depend on electricity grid mix\n   - Even with coal-heavy grids, EVs typically produce fewer lifetime emissions\n\n3. Disposal/Recycling:\n   - Battery recycling technologies are improving\n   - Up to 95% of battery materials can be recovered and reused\n   - Gas vehicles have established recycling infrastructure\n\n4. Overall Lifecycle Analysis:\n   - Studies from MIT, ICCT, and EPA show EVs produce 28-72% lower lifetime emissions\n   - The emissions advantage grows as grids become cleaner\n   - Typical break-even point: 6,000-16,000 miles of driving\n\nWould you like me to elaborate on any of these points or provide specific sources?",
        },
        {
          user: "Can you provide the specific sources for the lifecycle analysis?",
          assistant:
            'Here are the specific sources for the lifecycle emissions analysis:\n\n1. MIT Energy Initiative (2021): "Carbon Footprint of Electric Vehicles"\n   - Found 27-50% lower lifetime emissions for EVs vs. gas vehicles\n   - Link: https://energy.mit.edu/research/mobilityofthefuture/\n\n2. International Council on Clean Transportation (ICCT) (2021):\n   - Study across US, Europe, China, and India\n   - Found EVs produce 66-69% fewer lifetime emissions in Europe and 60-68% fewer in the US\n   - Link: https://theicct.org/publication/a-global-comparison-of-the-life-cycle-greenhouse-gas-emissions-of-combustion-engine-and-electric-passenger-cars/\n\n3. EPA (Environmental Protection Agency):\n   - Comprehensive analysis of vehicle emissions\n   - Found average EV produces ~4,100 lbs CO2e/year vs. ~11,500 lbs for gas vehicles\n   - Link: https://www.epa.gov/greenvehicles/electric-vehicle-myths\n\n4. Union of Concerned Scientists (2020):\n   - "Cleaner Cars from Cradle to Grave" report\n   - Found EVs generate ~50% less emissions over lifetime\n   - Link: https://www.ucsusa.org/resources/cleaner-cars-cradle-grave\n\nWould you like me to extract specific data points from any of these sources or search for additional information?',
        },
      ],
    },
    {
      id: "synthesis",
      title: "Information Synthesis",
      icon: FileText,
      conversation: [
        {
          user: "I'm researching the impact of social media on teenage mental health. Can you synthesize the current research?",
          assistant:
            "I'll synthesize the current research on social media's impact on teenage mental health. Would you like me to include both positive and negative effects, or focus on a particular aspect?",
        },
        {
          user: "Please include both positive and negative effects, and highlight any consensus in the research.",
          assistant:
            "Synthesizing research on social media's impact on teenage mental health...\n\n## Research Synthesis: Social Media & Teen Mental Health\n\n### Negative Effects (Strong Research Consensus)\n\n1. **Depression & Anxiety**\n   - Meta-analyses show correlation between heavy social media use and increased depression (r=0.13-0.33)\n   - Longitudinal studies show 2-3x higher depression rates in teens using social media >3 hours daily\n   - Strongest effects observed in girls ages 13-15\n\n2. **Sleep Disruption**\n   - Blue light exposure disrupts melatonin production\n   - 70% of teens check social media within 30 minutes of bedtime\n   - Each hour of nighttime social media associated with 15-30 minutes less sleep\n\n3. **Body Image & Self-Esteem**\n   - Exposure to idealized images linked to body dissatisfaction\n   - Social comparison mechanisms well-documented across platforms\n   - Filter usage associated with increased appearance anxiety\n\n### Positive Effects (Moderate Research Consensus)\n\n1. **Social Connection & Support**\n   - Beneficial for marginalized teens (LGBTQ+, disabled, etc.)\n   - Can reduce isolation in rural/remote areas\n   - Provides access to supportive communities\n\n2. **Identity Exploration**\n   - Safe space for identity development\n   - Opportunity for creative self-expression\n   - Exposure to diverse perspectives\n\n### Research Consensus\n\n- **Dose-Response Relationship**: Moderate use (30-60 min/day) shows minimal negative effects\n- **Individual Differences**: Pre-existing vulnerabilities amplify negative effects\n- **Active vs. Passive Use**: Content creation shows better outcomes than passive scrolling\n- **Platform Differences**: Image-focused platforms show stronger negative associations than text-based\n\nWould you like me to elaborate on any specific aspect or provide the key studies supporting these findings?",
        },
        {
          user: "Can you elaborate on the platform differences?",
          assistant:
            "## Platform Differences in Social Media Impact on Teen Mental Health\n\n### Image-Focused Platforms (Instagram, TikTok, Snapchat)\n\n**Research Findings:**\n- **Stronger negative associations** with body image and self-esteem\n- Brigham Young University (2021): Instagram ranked worst for teen mental health among major platforms\n- Royal Society for Public Health UK: Instagram associated with highest anxiety, depression, and FOMO scores\n- Meta's internal research (leaked 2021): 32% of teen girls reported Instagram made body image issues worse\n\n**Mechanisms:**\n- Visual comparison is more immediate and impactful than text\n- Algorithmic amplification of appearance-focused content\n- Filter usage creates unrealistic beauty standards\n- \"Highlight reel\" effect particularly pronounced\n\n### Text-Based Platforms (Twitter, Reddit, Discord)\n\n**Research Findings:**\n- **More variable mental health outcomes**\n- Stanford/NYU study (2022): Text-based platforms showed weaker correlations with depression\n- Can provide informational support and community connection\n- Cyberbullying still prevalent but different in nature\n\n**Mechanisms:**\n- Focus on ideas/opinions rather than appearance\n- Greater opportunity for substantive interaction\n- More diverse content types\n\n### Mixed-Format Platforms (Facebook, YouTube)\n\n**Research Findings:**\n- **Intermediate effects** between image and text platforms\n- YouTube associated with both educational benefits and problematic use\n- Facebook shows age-dependent effects (more negative for younger teens)\n\n**Mechanisms:**\n- Content versatility allows for different usage patterns\n- Greater parental monitoring on these platforms\n- More intergenerational usage\n\n### Emerging Research Consensus\n\n- **Context matters**: How teens use platforms is as important as which platforms\n- **Feature-specific effects**: Stories/ephemeral content, likes/metrics, and algorithmic feeds each have distinct impacts\n- **Evolving landscape**: Newer features like TikTok's immersive video format show concerning early patterns\n\nThe most comprehensive platform comparison study (Twenge & Martin, 2020) examined 6,595 teens and found that platforms emphasizing visual social comparison showed the strongest associations with depressive symptoms, even when controlling for overall screen time.",
        },
      ],
    },
    {
      id: "evaluation",
      title: "Source Evaluation",
      icon: BookOpen,
      conversation: [
        {
          user: "I found an article claiming that 5G networks cause health problems. Can you help me evaluate this source?",
          assistant:
            "I'd be happy to help you evaluate the source claiming 5G networks cause health problems. Could you share the article title, author, and where it was published? This will help me provide a more accurate evaluation.",
        },
        {
          user: "It's titled '5G: The Silent Killer' on healthtruth.org by Dr. James Wilson.",
          assistant:
            '# Source Evaluation: "5G: The Silent Killer"\n\n## Source Details\n- **Title:** "5G: The Silent Killer"\n- **Author:** Dr. James Wilson\n- **Publisher:** healthtruth.org\n- **Type:** Website article\n\n## Credibility Assessment\n\n### Author Credentials: ⚠️ CAUTION\n- **Claimed Expertise:** The author uses the title "Dr." but:\n  - No verifiable medical or scientific credentials found in legitimate academic databases\n  - Not affiliated with recognized research institutions\n  - No peer-reviewed publications on electromagnetic radiation or public health\n\n### Publisher Reliability: ⚠️ LOW\n- **Website Characteristics:**\n  - Not affiliated with medical/scientific organizations\n  - No editorial board or peer-review process listed\n  - Contains numerous unsubstantiated health claims\n  - Uses sensationalist language ("silent killer")\n  - Lacks transparency about funding/ownership\n\n### Scientific Consensus: ⚠️ CONTRADICTS CONSENSUS\n- **Current Scientific Position:**\n  - World Health Organization (WHO): No evidence of health risks from 5G networks at exposure levels below international guidelines\n  - International Commission on Non-Ionizing Radiation Protection (ICNIRP): 5G operates within safe exposure limits\n  - American Cancer Society: No consistent evidence linking 5G to cancer or other health problems\n\n### Evidence Quality: ⚠️ POOR\n- **Common Red Flags Present:**\n  - Cherry-picking isolated studies while ignoring larger body of evidence\n  - Misinterpreting scientific studies on non-ionizing radiation\n  - Confusing correlation with causation\n  - Citing retracted or methodologically flawed studies\n\n## Recommendation\n\nThis source demonstrates multiple warning signs of misinformation and contradicts the scientific consensus established by major health organizations worldwide. I would recommend:\n\n1. Seeking information from established health authorities (WHO, CDC, national radiation protection boards)\n2. Consulting peer-reviewed scientific literature on 5G safety\n3. Approaching claims of widespread health effects with skepticism when they contradict regulatory assessments\n\nWould you like me to provide reliable alternative sources on 5G and health?',
        },
        {
          user: "Yes, please provide some reliable sources on 5G and health.",
          assistant:
            '# Reliable Sources on 5G and Health\n\n## Health and Regulatory Organizations\n\n1. **World Health Organization (WHO)**\n   - Resource: "5G mobile networks and health"\n   - Link: https://www.who.int/news-room/questions-and-answers/item/5g-mobile-networks-and-health\n   - Key finding: "To date, and after much research, no adverse health effect has been causally linked with exposure to wireless technologies."\n\n2. **International Commission on Non-Ionizing Radiation Protection (ICNIRP)**\n   - Resource: "RF EMF Guidelines 2020"\n   - Link: https://www.icnirp.org/en/activities/news/news-article/rf-guidelines-2020-published.html\n   - Key finding: Updated safety guidelines that cover 5G frequencies, based on systematic review of all relevant research\n\n3. **U.S. Federal Communications Commission (FCC)**\n   - Resource: "Radio Frequency Safety"\n   - Link: https://www.fcc.gov/general/radio-frequency-safety\n   - Key finding: Current RF exposure limits provide adequate protection for public health\n\n## Scientific Research\n\n4. **Scientific Committee on Health, Environmental and Emerging Risks (SCHEER)**\n   - Resource: "Statement on emerging issues (2018)"\n   - Link: https://ec.europa.eu/health/scientific_committees/scheer_en\n   - Key finding: Comprehensive review finding no evidence of adverse health effects from 5G at exposure levels below international guidelines\n\n5. **Australian Radiation Protection and Nuclear Safety Agency (ARPANSA)**\n   - Resource: "5G: the new generation of the mobile phone network and health"\n   - Link: https://www.arpansa.gov.au/news/5g-new-generation-mobile-phone-network-and-health\n   - Key finding: "There is no established scientific evidence that the use of 5G will have adverse health effects."\n\n## Educational Resources\n\n6. **Cancer Research UK**\n   - Resource: "5G and cancer – the latest on the 5G controversy"\n   - Link: https://scienceblog.cancerresearchuk.org/2020/06/19/5g-and-cancer-the-latest-on-the-5g-controversy/\n   - Key finding: Explains why 5G radio waves cannot damage DNA or cause cancer\n\n7. **MIT Technology Review**\n   - Resource: "No, 5G radiation doesn\'t cause COVID-19. Here\'s what we know"\n   - Link: https://www.technologyreview.com/2020/04/07/998552/5g-coronavirus-conspiracy-theory-misinformation/\n   - Key finding: Detailed explanation of the science behind 5G and why health concerns are unfounded\n\nThese sources represent the scientific consensus based on thousands of studies conducted over decades on radio frequency electromagnetic fields. They provide evidence-based information rather than speculation or isolated findings taken out of context.',
        },
      ],
    },
    {
      id: "citation",
      title: "Citation Generation",
      icon: Link2,
      conversation: [
        {
          user: "I need to cite a journal article by Smith et al. from 2022 about climate change impacts in coastal regions. It was published in Environmental Science Journal, volume 45, issue 3, pages 112-128.",
          assistant:
            "I'll generate citations for this journal article in multiple formats. Here's the information I'll use:\n\n- Authors: Smith et al. (2022)\n- Title: (I'll assume) \"Climate Change Impacts in Coastal Regions\"\n- Journal: Environmental Science Journal\n- Volume: 45\n- Issue: 3\n- Pages: 112-128\n\nWould you like me to generate citations in specific formats, or would you prefer multiple standard formats?",
        },
        {
          user: "Please generate citations in APA, MLA, and Chicago styles.",
          assistant:
            '# Citations for Smith et al. (2022)\n\n## APA 7th Edition\n```\nSmith, J., Johnson, A., Williams, B., & Brown, C. (2022). Climate change impacts in coastal regions. Environmental Science Journal, 45(3), 112-128. https://doi.org/10.xxxx/xxxx\n```\n*Note: Replace the DOI placeholder with the actual DOI if available*\n\n## MLA 9th Edition\n```\nSmith, James, et al. "Climate Change Impacts in Coastal Regions." Environmental Science Journal, vol. 45, no. 3, 2022, pp. 112-28.\n```\n\n## Chicago 17th Edition (Author-Date)\n```\nSmith, James, Alice Johnson, Brian Williams, and Catherine Brown. 2022. "Climate Change Impacts in Coastal Regions." Environmental Science Journal 45 (3): 112-28. https://doi.org/10.xxxx/xxxx.\n```\n\n## Chicago 17th Edition (Notes-Bibliography)\n```\nJames Smith, Alice Johnson, Brian Williams, and Catherine Brown, "Climate Change Impacts in Coastal Regions," Environmental Science Journal 45, no. 3 (2022): 112-28.\n```\n\n*Note: I\'ve assumed the first author\'s full name is James Smith and added fictional co-authors since "et al." indicates multiple authors. Please replace with the actual author names for your final citation.*\n\nWould you like me to generate the citation in any other format or make adjustments to these citations?',
        },
        {
          user: "These look good. Can you also show me how to cite this in-text in APA style?",
          assistant:
            '# APA 7th Edition In-Text Citations\n\n## First Citation in Text\nWhen citing this source for the first time in your text, you would use:\n\n```\n(Smith et al., 2022)\n```\n\nIn a sentence, it would look like this:\n\n"Recent research has shown accelerating sea level rise along coastal regions (Smith et al., 2022)."\n\nOR\n\n"Smith et al. (2022) found that coastal regions are experiencing accelerated impacts from climate change."\n\n## Subsequent Citations\nFor all subsequent citations, you would use the same format:\n\n```\n(Smith et al., 2022)\n```\n\n## Specific Part of the Source\nIf you\'re referring to specific information from a particular page or section:\n\n```\n(Smith et al., 2022, p. 115)\n```\n\nFor multiple pages:\n\n```\n(Smith et al., 2022, pp. 115-117)\n```\n\n## Multiple Citations in the Same Parentheses\nIf you\'re citing multiple sources in the same parentheses, arrange them alphabetically:\n\n```\n(Johnson & Lee, 2021; Smith et al., 2022)\n```\n\n## Direct Quotation\nFor a direct quotation, include the page number:\n\n"Coastal erosion rates have increased by 23% in the last decade" (Smith et al., 2022, p. 118).\n\n---\n\nRemember that in APA style, for works with three or more authors, you always use the first author\'s name followed by "et al." even in the first citation.',
        },
      ],
    },
  ]

  return (
    <section className="py-16 bg-amber-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
              Interactive Demo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See the AI Search Companion in Action
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore how our AI Search Companion helps with different research scenarios.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {demoScenarios.map((scenario) => (
                <TabsTrigger key={scenario.id} value={scenario.id} className="flex items-center gap-2">
                  <scenario.icon className="h-4 w-4" />
                  <span>{scenario.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {demoScenarios.map((scenario) => (
              <TabsContent key={scenario.id} value={scenario.id} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {scenario.conversation.map((message, index) => (
                        <div key={index} className={`flex ${message.user ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[80%] rounded-lg p-4 ${
                              message.user ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            <div className="whitespace-pre-line">{message.user || message.assistant}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
