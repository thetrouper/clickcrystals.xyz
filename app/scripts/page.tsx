import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ScriptsArchive() {
  return (
    <>
      <main className="my-12 mx-6 md:mx-24">
        <div className="py-0">
          <div className="text-left">
            <h1 className="text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
              ClickCrystals <span className="text-blue-600">Script Archive</span>
            </h1>
            <p className="text-gray-500 font-normal max-w-4xl my-3">
              All our working ClickScripts (ClickCrystals Scripts or CCS) are provided here. Use them on your own and do not abuse them on public servers without permission.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="w-full h-full rounded">
            <CardHeader>
              <CardTitle className="text-xl">Obsidian Switcher</CardTitle>
              <span className="text-primary">
                by Wither123go
              </span>
            </CardHeader>
            <CardContent className="flex-1">
              <p>
                Obsidian Switch by Wither123go.
              </p>
              <div className="text-sm text-muted-foreground bg-muted rounded-md">
                <pre className="overflow-x-scroll">
                  <code>{`
// @wither123go
def module obi-switcher
def desc "obi switch"

on tick {
   if playing {
      if input_active use {
         if holding #sword, #crystal {
            if targeting_block {
               if !if target_block #air, :charged_respawn_anchor {
                  wait 0.02
                  switch #obsidian
                  input right
               }
            }
         }
      }
   }
}
`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full h-full rounded">
            <CardHeader>
              <CardTitle className="text-xl">CW Crystals Legit</CardTitle>
              <span className="text-primary">
                by Wither123go
              </span>
            </CardHeader>
            <CardContent className="flex-1">
              <p>
                CW Crystals Legit-Looking
              </p>
              <div className="text-sm text-muted-foreground bg-muted rounded-md">
                <pre className="overflow-x-scroll">
                  <code>{`
// @wither123go
def module CW-CRYSTALS-LEGIT
def desc CW CRYSTALS LEGIT LOOKING

on tick if playing if holding #crystal if target_block :obsidian {
   input right
   wait 0.05 if target_entity :end_crystal {
      input left
   }
}
`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full h-full rounded">
            <CardHeader>
              <CardTitle className="text-xl">NoWeak</CardTitle>
              <span className="text-primary">
                by ItziSpyder
              </span>
            </CardHeader>
            <CardContent className="flex-1">
              <p>
                Allows crystalling even you have weakness
              </p>
              <div className="text-sm text-muted-foreground bg-muted rounded-md">
                <pre className="overflow-x-scroll">
                  <code>{`
// @itzispyder
def module no-weak
def desc "Allows crystalling even if you have weakness"

on left_click if playing {
   if target_entity #crystal if holding #crystal if hotbar_has #sword {
      if effect_duration #weak >0 {
         switch #sword
         wait 0.05 if_not targeting_entity {
            if holding #sword {
               switch back
            }
         }
      }
   }
}
`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
