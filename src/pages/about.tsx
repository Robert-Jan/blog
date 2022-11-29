import Image from 'next/image'
import { Socials } from '../components/Socials'

export default function About() {
  return (
    <>
      <div className="bg-zinc-100 dark:bg-zinc-800">
        <div className="mx-auto flex max-w-5xl py-16">
          <div className="w-3/5 pr-12">
            <h1 className="text-4xl font-bold leading-loose tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl sm:leading-tight">
              I’m{' '}
              <span
                style={{
                  backgroundImage: '-webkit-linear-gradient(45deg, #EA4798, #CA8A04)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                Robert-Jan
              </span>
              , a passionate developer living in the Netherlands.
            </h1>
          </div>
          <div className="w-2/5">
            <div className="relative -mb-64 h-96 w-full rounded-lg drop-shadow-xl">
              <Image
                src="/images/avatar.avif"
                alt="Picture of Robert-Jan"
                className="rounded-lg object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl">
        <div className="w-3/5 pr-12">
          <p className="pt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            I’ve loved making things for as long as I can remember, and wrote my first program when
            I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC
            550 that I taught myself to type on.
          </p>
          <p className="pt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            The only thing I loved more than computers as a kid was space. When I was 8, I climbed
            the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle
            helmet, counted down from three, and jumped — hoping the tree was tall enough that with
            just a bit of momentum I’d be able to get to orbit.
          </p>
          <p className="pt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            I spent the next few summers indoors working on a rocket design, while I recovered from
            the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but
            when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo
            back down to our family computer from space.
          </p>
          <p className="pt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Today, I’m the founder of Planetaria, where we’re working on civilian space suits and
            manned shuttle kits you can assemble at home so that the next generation of kids really
            can make it to orbit — from the comfort of their own backyards.
          </p>
        </div>
        <div className="w-2/5">
          <div className="h-32" /* Placeholder for avatar overlap */ />
          <Socials />
        </div>
      </div>
    </>
  )
}
