import Image from 'next/image'
import { Socials } from '../components/Socials'

export default function About() {
  return (
    <>
      <div className="bg-zinc-100 dark:bg-slate-800">
        <div className="mx-auto max-w-5xl py-16">
          <div className="w-3/5 pr-12">
            <h1 className="text-4xl font-bold leading-loose tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight">
              I’m{' '}
              <span
                style={{
                  'background-image': '-webkit-linear-gradient(45deg, #EA4798, #CA8A04)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent'
                }}>
                Robert-Jan
              </span>
              , a passionate developer living in the Netherlands.
            </h1>
          </div>
          <div className="w-2/5" /* Placeholder for avatar overlap */ />
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl">
        <div className="w-3/5 pr-12">
          <p className="pt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            I’ve loved making things for as long as I can remember, and wrote my first program when
            I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC
            550 that I taught myself to type on.
          </p>
          <p className="pt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            The only thing I loved more than computers as a kid was space. When I was 8, I climbed
            the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle
            helmet, counted down from three, and jumped — hoping the tree was tall enough that with
            just a bit of momentum I’d be able to get to orbit.
          </p>
          <p className="pt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            I spent the next few summers indoors working on a rocket design, while I recovered from
            the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but
            when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo
            back down to our family computer from space.
          </p>
          <p className="pt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Today, I’m the founder of Planetaria, where we’re working on civilian space suits and
            manned shuttle kits you can assemble at home so that the next generation of kids really
            can make it to orbit — from the comfort of their own backyards.
          </p>
        </div>
        <div className="w-2/5">
          <div className="relative -mt-64 h-96 w-full overflow-hidden rounded-lg drop-shadow-xl">
            <Image
              src="/images/avatar.avif"
              alt="Picture of Robert-Jan"
              className="object-cover"
              fill
            />
          </div>
          <Socials />
        </div>
      </div>
    </>
  )
}
