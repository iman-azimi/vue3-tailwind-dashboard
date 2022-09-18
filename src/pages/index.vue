<template>
  <div class="grid grid-cols-6 gap-4">
    <section class="col-span-4 p-6">
      <div class="flex justify-between">
        <h1 class="dark:text-white text-3xl">Overview</h1>
        <div>
          <div class="mr-6 inline-block">
            <input
              class="shadow appearance-none border border-violet-900 dark:bg-dark-900 dark:text-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search..."
            />
          </div>
          <span class="relative">
            <i
              class="icon-notification-bing text-white text-2xl bg-dark-900 p-2 align-middle rounded-full"
            />
            <span class="flex absolute h-3 w-3 -top-1 right-1 -mt-1 -mr-1">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"
              ></span>
            </span>
          </span>
        </div>
      </div>
      <div>
        <overview-box />
      </div>
    </section>
    <div class="col-span-2 bg-white dark:bg-dark-900 p-6 rounded-l-2xl">
      <div
        class="bg-gradient-to-r from-indigo-500 to-rose-100 via-pink-400 rounded-3xl p-6 text-white"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam
        placeat vitae iure optio beatae quod mollitia aliquid, debitis expedita
        blanditiis ipsam? Placeat sapiente tempore autem, ad eum quia ex?
      </div>
    </div>
  </div>
</template>
