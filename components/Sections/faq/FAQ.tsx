import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Why is ClickCrystals banned on Modrinth?",
    answer: (
      <>
        The ClickCrystals project is <b>withheld, not banned</b> on Modrinth due to concerns regarding potential unfair advantages it may provide. This is not a ban, but a precautionary measure.
        <Image src={"/img/banned.png"} width={900} height={300} alt="ClickCrystals withheld on Modrinth" className="w-auto h-auto my-4 rounded" />
      </>
    )
  },
  {
    question: "Why is my game crashing?",
    answer: (
      <>
        Crashes may occur due to <b>incompatibility issues</b>. Previous versions of ClickCrystals included a feature called Discord RPC, which displayed your activities on Discord. This feature, however, was only supported on Linux and Windows, leading to incompatibility with macOS and PojavLauncher
        <br /><br />To fix this, either get the new version of ClickCrystals, where we removed Discord RPC or get off Mac/PojavLauncher and get a real PC.
      </>
    )
  },
  {
    question: "Is ClickCrystals safe? Is it a virus?",
    answer: (
      <>
        In May 2023, a counterfeit version of ClickCrystals was created and distributed by an individual using the alias <b>L0rax</b> (also known as Niksa_). This version contained malicious code designed to steal your Microsoft account details, Skyblock information, and IP address via a Discord webhook. After a concerted effort of months, the malicious version was removed, the webhook was destroyed and the issue was resolved.
        <br /><br />Only download ClickCrystals from official links provided on our website. Avoid downloading files from untrusted sources or accepting files from unknown individuals.
      </>
    )
  },
  {
    question: "What is CCS, and how do I use it?",
    answer: (
      <>
        CCS (ClickCrystals Script, aka ClickScript) is an in-game tool that allows you to create custom modules. It functions similarly to creating datapacks, enabling a high level of customization within the game.
        <br /><br />
        Additional official links related to CCS:{" "}
        <Link href="https://bit.ly/ccs-wiki" target="_blank" className="text-blue-600">CCS Docs</Link>,{" "}
        <Link href="/editor" className="text-blue-600">CCS Editor</Link>,{" "}
        <Link href="/scripts" className="text-blue-600">CCS Scripts Archive</Link>{" "}
      </>
    )
  },
  {
    question: "Is using ClickCrystals considered cheating?",
    answer: (
      <>
        Short answer: No.
        <br /><br />
        Long answer: ClickCrystals is not a cheat, it does not automate any task; every action requires direct player input. The mod itself does not provide any inherent unfair advantages unless the user creates a macro using the ClickCrystals script.
      </>
    )
  },
  {
    question: "Could I be banned for using ClickCrystals?",
    answer: (
      <>
        While ClickCrystals is designed to avoid providing unfair gameplay advantages, some servers may still ban players for using it.<br /><br />
        To minimize the risk:<br />
        - The mod is designed not to trigger anti-cheat systems.<br />
        - It appears as normal gameplay in third-person view.<br />
        - It maintains its logs separately from the vanilla logs (except error traces), which can be deleted if necessary.<br /><br />
        Important: Ensure you are using the latest version of ClickCrystals, as older versions included a command (!cc -users) that could be exploited to ban players.
      </>
    )
  },
  {
    question: "How do I access the ClickCrystals menu?",
    answer: (
      <>
        By pressing the apostrophe key. If you don&apos;t know what it is, you&apos;re a third grader that shouldn&apos;t be play games and should be studying instead.
        <Image src={"/img/key.png"} width={900} height={300} alt="Apostrophe key" className="w-auto h-auto my-4 rounded" />
      </>
    )
  },
];

export default function FAQ() {
  const leftColumnFAQs = faqs.filter((_, i) => i % 2 === 0);
  const rightColumnFAQs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <Accordion type="single">
      <div className="flex flex-col lg:flex-row lg:justify-between mx-0 lg:mx-4">
        <div className="w-full lg:w-1/2 lg:mx-4">
          {leftColumnFAQs.map((faq, i) => (
            <AccordionItem value={`item-${i * 2}`} key={i * 2}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
        <div className="w-full lg:w-1/2 lg:mx-4">
          {rightColumnFAQs.map((faq, i) => (
            <AccordionItem value={`item-${i * 2 + 1}`} key={i * 2 + 1}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </div>
    </Accordion>
  );
}
