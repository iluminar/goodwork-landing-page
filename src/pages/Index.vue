<template>
  <div>
    <div class="absolute z-n10">
      <div class="top-image"></div>
    </div>

    <navbar></navbar>

    <main>
      <div class="bg-indigo-900 text-center py-4 lg:px-4">
        <a href="https://goodwork.cloud" class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
          <span class="font-semibold mr-2 text-left flex-auto">Join priority list for early access to Goodwork Cloud</span>
          <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </a>
      </div>
      <section class="px-4 lg:px-0 lg:my-12 lg:max-w-4xl xl:max-w-6xl lg:mx-auto xxl:max-w-8xl flex flex-row w-full lg:items-center hero text-gray-700">
        <div class="lg:w-1/2 lg:mr-8 hidden lg:flex justify-center relative rounded shadow-2xl">
          <g-image src="./../assets/images/hero-image.png" />
        </div>
        <section class="w-full lg:pl-16 pt-8 lg:pt-0 lg:w-1/2 top flex flex-col lg:justify-center">
          <div class="pb-4 lg:pb-0 text-xl lg:text-3xl xl:text-4xl lg:font-bold">
            <div>
              Build Software Faster.
            </div>
            <div>
              No Stress Required.
            </div>
          </div>
          <div class=" lg:text-lg pt-2">
            <div class="bg-teal-200 inline-block p-2 rounded text-teal-800 font-semibold mb-4">Goodwork is not an app, it's a sensible style of work.</div>
            <div class="">
              Adopting <span class="text-indigo-600">healthier work style</span> enables your team to build
            </div>
            <div class="">
              <span class="text-indigo-600">quality software</span> without sacrificing <span class="text-indigo-600">mental health</span>.
            </div>
            <div class="">
              Why? Because your team deserves it.
            </div>
          </div>
          <div class="mt-8 mb-4 flex flex-col lg:flex-row">
            <!-- <a href="" class="flex justify-center px-6 py-3 mb-4 lg:mb-0 lg:mr-4 rounded-full border-teal-700 text-teal-700 border-2 text-lg font-semibold no-underline">Get Started</a> -->
            <a href="https://github.com/iluminar/goodwork/wiki/Installation" class="flex justify-center items-center px-6 py-3 mr-4 rounded-full text-teal-700 border-teal-700 border-2 text-lg hover:bg-teal-700 hover:text-white hover:shadow-2xl font-semibold no-underline">Install Goodwork</a>
            <a href="https://goodwork.cloud" class="flex justify-center items-center px-6 py-3 rounded-full text-indigo-700 border-indigo-700 border-2 text-lg hover:bg-indigo-700 hover:text-white hover:shadow-2xl font-semibold no-underline">Try Goodwork Cloud</a>
          </div>
          <div class="text-sm text-gray-700">
            Open source <a href="https://github.com/iluminar/goodwork/blob/master/LICENSE" class="text-gray-700 underline">MIT Licensed</a>.
          </div>
        </section>
      </section>

      <section class="mx-auto flex justify-center lg:bg-teal-500 py-16">
        <div class="flex flex-col items-center justify-center bg-white lg:rounded lg:shadow-2xl py-8 px-4 lg:px-16 lg:max-w-4xl">
          <div class="text-2xl font-bold text-gray-700">
            Why <span class="text-teal-600 ml-2 border-b-2 border-teal-600">Goodwork</span> ?
          </div>
          <div class="text-gray-700 text-base pt-6 leading-loose">
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Single source of truth. Replace the need for multiple apps.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Enable deep work by ensuring distraction free communication.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Know what's happening without asking. Forget status meeting.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Get insights on what features to build and when to ship.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Track progress of task and see who is stuck and needs help.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Know your team members current mental state & condition.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-white">
        <div class="container mx-auto px-4 lg:px-0 lg:flex flex-row items-center justify-between">
          <div class="lg:w-1/2 hidden lg:flex justify-center">
            <g-image src="~/assets/images/open-source.svg" class="w-128 h-128"/>
          </div>
          <div class="flex flex-col items-start lg:w-1/2">
            <div class="text-3xl lg:text-4xl text-gray-700 pb-4">Technology behind Goodwork</div>
            <div class="text-gray-700">
              Goodwork is built using popular robust open source technology that
              are battle tested and trusted by millions.
            </div>
            <div class="flex justify-between w-full lg:w-128 text-blue-700 lg:text-2xl pt-4">
              <div class="flex flex-col">
                <a href="https://www.laravel.com" class="no-underline">
                  Laravel
                </a>
                <a href="https://www.docker.com/" class="no-underline">
                  Docker
                </a>
              </div>
              <div class="flex flex-col">
                <a href="https://vuejs.org/" class="no-underline">
                  VueJS
                </a>
                <a href="https://socket.io/" class="no-underline">
                  Socket.io
                </a>
              </div>
              <div class="flex flex-col">
                <a href="https://tailwindcss.com/" class="no-underline">
                  TailwindCSS
                </a>
                <a href="https://www.mysql.com/" class="no-underline">
                  MySQL
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full py-16 bg-white">
        <div class="container mx-auto flex flex-row items-center justify-between">
          <div class="flex flex-col items-center lg:w-1/2">
            <div class="text-4xl text-gray-700 pb-12">Sponsors</div>
            <div class="flex flex-row flex-wrap pb-12">
              <a href="https://opencollective.com/goodwork#sponsor" class="text-5xl text-gray-600 border-2 border-blue-200 border-dashed rounded-full w-16 h-16 lg:w-32 lg:h-32 mx-4 flex items-center justify-center cursor-pointer bg-gray-100 hover:shadow-lg hover:-mt-1" title="Become a patron - add your logo here">
                <g-image src="~/assets/images/iluminar-logo.svg" class="w-32 h-32 opacity-25 hover:opacity-100"/>
              </a>
              <a href="https://opencollective.com/goodwork#sponsor" v-for="x in 2" class="no-underline text-5xl text-gray-600 border-2 border-blue-200 border-dashed rounded-full w-16 h-16 lg:w-32 lg:h-32 mx-4 flex items-center justify-center cursor-pointer bg-gray-100 hover:shadow-lg hover:-mt-1" title="Become a patron - add your logo here">
                +
              </a>
              <div></div>
            </div>
            <div class="pb-12 px-6 text-gray-700">
              <a href="https://opencollective.com/goodwork/">You can support Goodwork project to keep moving by becoming a sponsor ➜</a>
            </div>
            <div>
              <a href="https://opencollective.com/goodwork#sponsor">
                <img src="https://opencollective.com/goodwork/sponsors.svg" alt="">
              </a>
              <a href="https://opencollective.com/goodwork#backer">
                <img src="https://opencollective.com/goodwork/backers.svg" alt="">
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 hidden lg:flex justify-center">
            <g-image src="~/assets/images/make_it_rain.svg" class="w-128 h-128"/>
          </div>
        </div>
      </section>

      <contributors></contributors>

      <section class="py-16 bg-blue-100">
        <div class="container md:mx-auto px-4">
          <div class="flex justify-center pb-8 text-teal-800 text-3xl font-semibold">
            Pricing
          </div>
          <div class="flex flex-col md:flex-row justify-center">
            <div class="md:w-96 bg-white rounded-lg md:rounded-r-none shadow flex flex-col items-center justify-between py-8 lg:p-8 mb-8 md:mb-0">
              <div class="text-teal-700 uppercase font-semibold">
                Self Hosted
              </div>
              <div class="text-5xl text-gray-700">
                Free<span class="text-base">/Forever</span>
              </div>
              <div class="text-center text-gray-700 py-4 px-8">
                For teams who wants to maintain everything by themselves.
              </div>
              <div>
                <a href="https://github.com/iluminar/goodwork/wiki/Installation" class="flex justify-center items-center border-teal-700 border-2 px-6 py-3 rounded-full text-teal-700 text-lg hover:shadow-2xl font-semibold no-underline">Install Goodwork</a>
              </div>
            </div>
            <div class="md:w-96 bg-white rounded-lg md:rounded-l-none shadow flex flex-col items-center justify-between py-8 lg:p-8">
              <div class="text-indigo-600 uppercase font-semibold">
                Managed
              </div>
              <div class="text-5xl text-gray-700">
                Custom
              </div>
              <div class="text-center text-gray-700 py-4 px-8">
                Let us worry about managing infrastructure and focus on your project.
              </div>
              <div>
                <a href="https://goodwork.cloud" class="flex justify-center items-center border-indigo-600 border-2 px-6 py-3 rounded-full text-indigo-600 text-lg hover:shadow-2xl font-semibold no-underline">Try goodwork.cloud</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full py-16">
        <div class="container mx-auto flex flex-col items-center">
          <div class="text-2xl lg:text-4xl text-gray-700 pb-8">Join The Community</div>
          <div class="flex flex-col lg:flex-row">
            <a href="https://discord.gg/4DvTQsc" class="no-underline bg-white text-pink-700 shadow px-4 py-3 mb-2 lg:mb-0 mx-2 rounded-full">Join Discord Community</a>
            <a href="https://goodworkfor.life/register/invite-link/ovCPAFpnwIhrvqUrlvynarP9HVRBC5mH" class="no-underline bg-white text-pink-700 shadow px-4 py-3 mx-2 rounded-full">Join Goodwork Project</a>
          </div>
        </div>
      </section>
    </main>

  <bottom-footer></bottom-footer>
  </div>
</template>

<page-query>
query {
  allDocs {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>

<script>
import Navbar from './../components/Navbar'
import Contributors from './../components/Contributors'
import BottomFooter from './../components/BottomFooter'
export default {
  metaInfo: {
    title: 'Homepage',
    bodyAttrs: {
      class: 'font-display overflow-x-hidden'
    },
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-61716953-5',
        async: true
      },
      {
        innerHTML: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-61716953-5");'
      }
    ]
  },
  components: {Contributors, BottomFooter, Navbar},
}
</script>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('./../assets/fonts/Montserrat-Regular.ttf');
  font-weight: 100;
}

body {
  font-family: 'Montserrat';
}

.top-image {
  width: 100vw;
  height: 620px;
  /* background-image: linear-gradient(to bottom, #13547a 0%, #80d0c7 100%); */
}

.hero {
  height: 480px;
}

@media (min-width: 768px) {
  .top {
    height: 70vh;
  }

  .top-image {
    height: 880px;
  }

  .hero {
    height: 640px;
  }
}
</style>
