<script setup>
defineProps(['title', 'bg', 'icon', 'current', 'previous', 'previousLabel'])
</script>

<template>
  <li
    :style="{
      backgroundColor: bg,
      backgroundImage: `url(${icon})`
    }"
  >
    <article>
      <div class="header">
        <h2>{{ title }}</h2>
        <button>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="inherit"
            />
          </svg>
        </button>
      </div>
      <div class="content">
        <p>{{ `${current}hrs` }}</p>
        <p>{{ previousLabel }} - {{ `${previous}hrs` }}</p>
      </div>
    </article>
  </li>
</template>

<style scoped>
li {
  padding-top: 10%;
  border-radius: 14px;
  background-repeat: no-repeat;
  background-position: right 3% top -5%;
}

article {
  height: 100%;
  background-color: var(--dark-blue);
  padding: 2rem;
  cursor: pointer;
  transition: all 0.25s ease;
  border-radius: 12px;
}

article:hover {
  background-color: hsl(235, 36%, 30%);
}

.header {
  display: flex;
  justify-content: space-between;
}

.header h2 {
  font-size: 18px;
  font-weight: 400;
  color: white;
}

.header button {
  background: none;
  border: none;
}

.content {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content > p:first-child {
  font-size: 2rem;
  color: white;
  font-weight: 300;
}

.content > p:last-child {
  color: var(--desaturated-blue);
}

@media (min-width: 640px) {
  li {
    padding-top: 15%;
    /* background-position: right 3% top 0; */
    background-size: 3.5rem;
  }

  .header {
    margin-bottom: 2rem;
  }

  .content {
    flex-direction: column;
    align-items: start;
  }

  .content > p:first-child {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }
}
</style>
