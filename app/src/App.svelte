<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'

  let apiStatus, appName

  fetch('/api/health')
  .then(res => res.text())
  .then(status => apiStatus = status)

  fetch('/api/info')
  .then(res => res.json())
  .then(infos => appName = infos.find(info =>  info.type === 'app_name').value)
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>API Status: {apiStatus}</h1>

  <div class="card">
    <Counter />
  </div>

  <p>This is a starting svelte app for your</p>
  <h2><strong>{appName}</strong></h2>

  <p class="read-the-docs">
    Click on the Svelte logo to find some documentation
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
