"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Clock, Shield } from "lucide-react"

const demoContent = [
  {
    id: "stress",
    title: "Stress Management",
    icon: Brain,
    conversation: [
      {
        user: "I'm feeling really overwhelmed with my workload and can't seem to focus. Everything feels like too much right now.",
        assistant:
          "I understand that feeling overwhelmed can make it difficult to focus and manage your workload. Let's take a moment to address this together. Would you like to try a quick grounding exercise to help clear your mind, or would you prefer to talk through some strategies for breaking down your workload?",
      },
      {
        user: "I think I need the grounding exercise first. My mind is racing.",
        assistant:
          "That's a great choice. Let's do a simple 5-4-3-2-1 grounding exercise:\n\n1. Take a deep breath in through your nose for 4 counts, and out through your mouth for 6 counts.\n\n2. Now, notice and name:\n   • 5 things you can SEE around you\n   • 4 things you can FEEL (like your feet on the floor)\n   • 3 things you can HEAR\n   • 2 things you can SMELL (or like to smell)\n   • 1 thing you can TASTE (or like to taste)\n\nTake your time with each step. When you've finished, let me know how you're feeling.",
      },
      {
        user: "That helped a bit. I feel slightly calmer now. But I still don't know how to handle all my tasks.",
        assistant:
          "I'm glad the exercise helped. Now that you're feeling a bit calmer, let's work on your tasks:\n\n1. **Brain dump**: Let's get everything out of your head. Take 5 minutes to list ALL your tasks without organizing them yet.\n\n2. **Categorize**: Group them as:\n   • Urgent and important\n   • Important but not urgent\n   • Urgent but not important\n   • Neither urgent nor important\n\n3. **Chunk it down**: Break large tasks into smaller, manageable steps\n\n4. **Set boundaries**: Identify what you can realistically accomplish today\n\nWould you like to try this approach? Or would you prefer a different strategy for managing your workload?",
      },
    ],
    highlights: [
      "Evidence-based grounding techniques",
      "Personalized stress management strategies",
      "Practical workload organization methods",
      "Follow-up check-ins and adjustments",
    ],
  },
  {
    id: "emotional",
    title: "Emotional Support",
    icon: Heart,
    conversation: [
      {
        user: "I had a fight with my best friend and I feel terrible. I think I overreacted but now I don't know how to fix it.",
        assistant:
          "I'm sorry to hear about the fight with your best friend. Conflicts in close relationships can be really painful. It takes courage to recognize your part in it, and your desire to repair things shows how much you value the friendship. Would you like to talk about what happened, or would you prefer to focus on steps to reconnect with your friend?",
      },
      {
        user: "I think I need to figure out how to approach them. I'm worried they won't forgive me.",
        assistant:
          "That worry about forgiveness is completely natural. Long-standing friendships often have the resilience to overcome conflicts, even when they feel intense in the moment. Here are some thoughtful ways to approach your friend:\n\n1. **Give a sincere apology**: Acknowledge your overreaction without making excuses, express understanding of how it affected them, and share your commitment to handling things differently\n\n2. **Choose the right medium**: Consider whether text, phone call, or in-person would be most comfortable for both of you\n\n3. **Timing matters**: Reach out when you're both likely to be calm and have space to talk\n\n4. **Be patient**: Give them time to process if they need it\n\nWhat do you think might work best given your friendship dynamic?",
      },
      {
        user: "I think I should call them. But what exactly should I say? I'm nervous about making things worse.",
        assistant:
          'It\'s completely normal to feel nervous about this conversation. Here\'s a framework that might help when you call:\n\n1. **Start with care**: "I\'ve been thinking about you and our friendship has been on my mind."\n\n2. **Take responsibility**: "I wanted to apologize for overreacting during our conversation about [topic]. I wasn\'t at my best, and I didn\'t handle my feelings well."\n\n3. **Show understanding**: "I can see how my reaction might have hurt you or made you feel [how you think they felt]."\n\n4. **Express value**: "Our friendship means a lot to me, and I miss talking with you."\n\n5. **Suggest a path forward**: "I\'d love to hear your perspective when you\'re ready to talk."\n\nRemember to listen more than you speak when they respond, and be open to their feelings without becoming defensive. Would you like to practice what you might say?',
      },
    ],
    highlights: [
      "Empathetic listening and validation",
      "Relationship repair strategies",
      "Communication frameworks",
      "Emotional awareness development",
    ],
  },
  {
    id: "mindfulness",
    title: "Mindfulness",
    icon: Clock,
    conversation: [
      {
        user: "I keep getting distracted and my mind is always racing. Can mindfulness really help with that?",
        assistant:
          "Yes, mindfulness can be particularly effective for racing thoughts and distractions. It's like training a muscle - your attention muscle. When we practice mindfulness regularly, we get better at noticing when our mind has wandered and gently bringing it back to the present moment.\n\nWould you like to learn about different mindfulness approaches that might work for your specific situation, or would you prefer to try a quick practice right now to experience it firsthand?",
      },
      {
        user: "Let's try a quick practice. I've never done mindfulness before.",
        assistant:
          "Perfect! Let's start with a simple 3-minute mindfulness practice that's great for beginners:\n\n1. **Find a comfortable position** - sitting with your feet on the floor and back supported is ideal, but any comfortable position works\n\n2. **Set a timer** for 3 minutes if you'd like\n\n3. **Focus on your breath**:\n   • Notice the sensation of air entering and leaving your nostrils\n   • Or focus on the rising and falling of your chest or abdomen\n   • There's no need to change your breathing, just observe it\n\n4. **When your mind wanders** (which is completely normal and will happen many times):\n   • Gently notice that your attention has drifted\n   • Without judgment, return your focus to your breath\n   • Each time you notice and return is a success, not a failure\n\nWhen you're ready, take a few deeper breaths and let me know how that experience was for you.",
      },
      {
        user: "That was harder than I expected. My mind wandered at least 20 times!",
        assistant:
          "That's actually a wonderful observation! Many people think mindfulness is about having a perfectly clear mind, but it's really about noticing when your mind wanders and bringing it back - which you did 20 times! Each of those moments of noticing is mindfulness in action.\n\nIt's like doing 20 repetitions at the mental gym. The wandering isn't a problem; it's the expected part of the process. Even experienced meditators have wandering minds - they've just practiced the skill of noticing and returning attention.\n\nFor beginners, I recommend:\n\n1. **Start small**: 3-5 minutes daily is better than 30 minutes once a week\n\n2. **Use anchors**: Your breath, sounds around you, or physical sensations can help ground your attention\n\n3. **Try guided practices**: Apps like Headspace, Calm, or free resources like UCLA's Mindful Awareness Research Center have excellent beginner guides\n\n4. **Be kind to yourself**: Approach with curiosity rather than judgment\n\nWould you like to establish a simple daily practice, or would you prefer to explore different mindfulness techniques?",
      },
    ],
    highlights: [
      "Guided mindfulness exercises",
      "Personalized practice recommendations",
      "Progress tracking and reinforcement",
      "Integration into daily routines",
    ],
  },
  {
    id: "crisis",
    title: "Crisis Support",
    icon: Shield,
    conversation: [
      {
        user: "I've been feeling really down lately and sometimes wonder if life is worth living. I don't know what to do.",
        assistant:
          "Thank you for sharing something so personal with me. First, I want you to know that you're not alone in these feelings, and there are people who care and can help.\n\nIf you're having thoughts about harming yourself, please reach out to immediate support:\n\n• National Suicide Prevention Lifeline: 988 or 1-800-273-8255 (available 24/7)\n• Crisis Text Line: Text HOME to 741741\n• Or go to your nearest emergency room\n\nWould you like me to provide more specific resources, or would it help to talk about what you've been experiencing?",
      },
      {
        user: "I don't think I'm in immediate danger, but these thoughts keep coming up. I just feel so overwhelmed and alone.",
        assistant:
          "I'm glad you're not in immediate danger, and I appreciate you clarifying that. It takes courage to acknowledge these feelings.\n\nFeeling overwhelmed and alone can be incredibly difficult. While I'm here to support you, I also want to encourage you to connect with professional mental health support who can provide ongoing care.\n\nSome options to consider:\n\n1. **Talk to your primary care doctor** about how you're feeling\n\n2. **Explore therapy options**:\n   • Psychology Today has a therapist finder tool\n   • Many employers offer Employee Assistance Programs with free counseling\n   • Online options like BetterHelp or Talkspace can be accessible\n\n3. **Peer support groups** can reduce feelings of isolation\n\nIn the meantime, would it help to discuss some coping strategies for when these thoughts arise, or would you prefer to talk more about what's contributing to these feelings?",
      },
      {
        user: "I think some coping strategies would help. The thoughts get worse at night when I'm trying to sleep.",
        assistant:
          "Nighttime can often intensify difficult thoughts and feelings. Here are some specific strategies that might help during those challenging nighttime moments:\n\n1. **Create a wind-down routine**:\n   • Set a consistent bedtime\n   • Reduce screen time 1 hour before bed (blue light can worsen mood)\n   • Try gentle stretching or a warm shower\n\n2. **Grounding techniques when thoughts arise**:\n   • 5-4-3-2-1 method: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste\n   • Deep breathing: 4 counts in, hold for 4, out for 6\n   • Body scan meditation (I can guide you through this if helpful)\n\n3. **Comfort items**:\n   • Keep a journal by your bed to write out thoughts\n   • Weighted blanket can provide calming pressure\n   • Soft music or nature sounds\n\n4. **Have a plan**:\n   • Save crisis numbers in your phone\n   • Identify 1-2 people you can text/call, even late\n   • Know it's always okay to call a crisis line, even if just for comfort\n\nWould you like me to elaborate on any of these strategies? And remember, while these can help in the moment, connecting with professional support is still important.",
      },
    ],
    highlights: [
      "Crisis resource connections",
      "Safety planning assistance",
      "Professional referral guidance",
      "Immediate coping strategies",
    ],
  },
]

export function CounselorDemo() {
  const [activeTab, setActiveTab] = useState("stress")

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-pink-600">Interactive Demo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See the Counselor Bot in action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore how our Counselor Bot provides support for different emotional and mental wellness needs.
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="stress" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {demoContent.map((demo) => (
                <TabsTrigger key={demo.id} value={demo.id} className="flex items-center gap-2">
                  <demo.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{demo.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {demoContent.map((demo) => (
              <TabsContent key={demo.id} value={demo.id} className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                      <div className="col-span-2 space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">{demo.title}</h3>
                        <div className="space-y-4 rounded-lg border bg-gray-50 p-4">
                          {demo.conversation.map((message, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex items-start gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                                  <span className="text-sm font-medium">You</span>
                                </div>
                                <div className="rounded-lg bg-gray-200 px-4 py-2 text-sm">{message.user}</div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-white">
                                  <span className="text-sm font-medium">AI</span>
                                </div>
                                <div className="rounded-lg bg-white px-4 py-2 text-sm whitespace-pre-line">
                                  {message.assistant}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                        <ul className="mt-4 space-y-3">
                          {demo.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-4 w-4"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
