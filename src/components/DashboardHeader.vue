<template>
  <header>
    <div>
      <img src="/image-jeremy.png" alt="Jeremy Robson" />
      <h1>
        Report for <br />
        <span>Jeremy Robson</span>
      </h1>
    </div>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'daily' }">Daily</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'weekly' }">Weekly</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'monthly' }">Monthly</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--dark-blue);
  color: var(--desaturated-blue);
  border-radius: 14px;
  overflow: hidden;
}

header > div:first-child {
  background-color: var(--blue);
  border-radius: 14px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--pale-blue);
}

h1 {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

h1 > span {
  font-size: 1.5rem;
  color: white;
}

img {
  width: 4rem;
  height: 4rem;
  border: 2px solid white;
  border-radius: 50%;
}

ul {
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 2rem;
}

a {
  cursor: pointer;
  color: var(--desaturated-blue);
  text-decoration: none;
}

a.router-link-active {
  color: white;
}

@media (min-width: 640px) {
  header > div:first-child {
    max-width: 300px;
    flex-direction: column;
    gap: 2rem;
    align-items: start;
    padding: 3rem;
    padding-bottom: 4.5rem;
  }

  h1 > span {
    font-size: 2.5rem;
  }

  ul {
    padding-top: 1.5rem;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
