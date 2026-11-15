import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClickCrystals - Scripts Archive',
};

import Scripts from '@/components/Sections/scripts/Scripts';

export default function ScriptsArchive() {
  return (
    <>
      <main className="my-12 mx-6 md:mx-24 text-[#F4F8FF]">
        <div className="py-0">
          <div className="text-left">
            <h1 className="text-[#F4F8FF] tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
              ClickCrystals{' '}
              <span className="text-[#61ADEC]">Script Archive</span>
            </h1>
            <p className="text-[#F4F8FF]/70 font-normal max-w-4xl my-3">
              Here are several ClickCrystals&apos;s working scripts that you
              might like. If you want your script to be added here, please
              contact a moderator on our Discord Guild.
            </p>
            <div className="border-l-4 border-[#276CB0] bg-[#14213A] p-4 my-4">
              <p className="md:max-w-3xl text-sm text-[#61ADEC] font-semibold mb-2">
                Did you know?
              </p>
              <p className="md:max-w-3xl text-xs my-4">
                The scripts you&apos;re currently seeing on this page are the
                same scripts as you can see in the ClickCrystals in-game Online
                Script Browser! Get ClickCrystals and instantly test these
                scripts in less than 3 clicks!
              </p>
              <p className="md:max-w-3xl text-xs">
                <b>ClickCrystals Script, aka ClickScript/CCS</b> can do a lot of
                tasks. From simple swaps and hotbar changing, through automatic
                complete farms, to blatent auto-totem, kill-aura, auto-pot,
                jump-reset, anchor-switch, obsidian-switch, etc. a lot much can
                be done!
              </p>
            </div>
          </div>
        </div>
        <Scripts />
      </main>
    </>
  );
}
