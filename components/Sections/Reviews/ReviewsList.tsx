const reviews = [
  {
    picture: '/staff/yuri.png',
    name: 'yuri',
    message: "ClickCrystals is an outstanding mod with fantastic modules! It completely resolved many client-side crystal delay issues I had, significantly improving my crystal speed. I highly recommend giving it a try!",
    rating: 5
  },
  {
    picture: '/staff/improperissues.png',
    name: 'Improperissues',
    url: "https://github.com/Improperissues",
    message: "I highly recommend ClickCrystals to everyone. It's not about cheating; every action requires a click or key press. Vanilla Minecraft has noticeable delays that can affect your performance. Those who use ClickCrystals to eliminate these delays are true legends. Give it a try!",
    rating: 5
  },
  {
    picture: '/staff/inoam.png',
    name: 'I-No-oNe',
    url: "https://github.com/I-No-oNe",
    message: "ClickCrystals is amazing mod with a lot of utilities modules, created to help players and improve there gameplay, ClickCrystals has an amazing community that you totally should check out!",
    rating: 5
  },
  {
    picture: '/staff/ayaantutla.png',
    name: 'Ayaan Tutla',
    url: '',
    message: "Honestly amazing, if I had to pick one Minecraft Mod, I'd select ClickCrystals.If you aren't using it, you haven't heard of it.Don't even get me started on CC Scripting.",
    rating: 5
  },
  {
    picture: '/reviews/practice.png',
    name: 'Practice',
    url: 'https://discordapp.com/users/1250828225161068674',
    message: "Before discovering ClickCrystals, Crystal PvP felt either too intimidating or too simplistic to me. But ClickCrystal changed everything, sparking a passion and transforming my skills. In just a few weeks, I advanced from a novice to a high-tier legend, dominating the battlefield. ClickCrystals is incredible and highly recommended!",
    rating: 5,
  },
]

import Review from "./Review";

export default function ReviewsList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  )
}